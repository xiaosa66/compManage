const router = require('koa-router')();
const userModel = require('../lib/mysql.js');



/**************************** 评审管理 小组分配相关 ****************************/
// 获取
router.get('/autoGetRival', async (ctx) => {
    try {
        await userModel.selectAll('allocated_team')
            .then(async (result) => {
                ctx.body = {
                    code: 1,
                    data: result
                };
            })
    } catch (e) {
        console.error(e);
    }
})

router.post('/allocateRival', async (ctx) => {
    await userModel.selectTeamByRand()
        .then(async (result) => {
            let compArr = [];
            const num = 4;
            for (let i = 0, len = result.length; i < len; i += num) {
                compArr.push(result.slice(i, i + num));
            }
            try {
                let msg = await userModel.feeler('allocated_team');
                if (msg[0].a) {
                    try {
                        await userModel.truncate('allocated_team');
                    } catch (e) {
                        console.error('truncate');
                        return;
                    }
                }
            } catch (e) {
                console.error('feeler');
                return;
            }
            for (let i in compArr) {
                for (let j in compArr[i]) {
                    let team = compArr[i][j];
                    team.comp_id = i;
                        try {
                            await userModel.insertAllocate(team.comp_id,team.team_id)
                        } catch
                            (e) {
                            console.error('insertAllocate');
                            return;
                        }
                }
            }

            // data = data.flat(2);
            ctx.body = {
                code: 1,
                data: compArr
            };
        })
});

router.post('/allocateExpert', async (ctx) => {
    let randomExp = await userModel.selectExpByRand();
    let compArr = await userModel.selectAll('allocated_team');
    let SQLData = [];
    let expLen = randomExp.length;
    let expCountInComp = 4;
    let breaked = false;
    // 判断专家够不够分配
    if (breaked || expLen < compArr.length * expCountInComp) {
        ctx.body = {
            code: 0,
            msg: '专家池长度不够,无法随机指派专家'
        };
        return;
    }
    // 开始分配
    compArr.forEach(function (comp, index) {
        if (breaked) {
            console.log('breaked');
            return;
        }
        let cumpusExp = 0;
        let companyExp = 0;
        SQLData[index] = [];
        for (let i = 0; i < expLen; i++) {
            if (!randomExp[i].selected) {          // 未选择
                if (randomExp[i].identity == 1 && companyExp < 2) {// 企业专家
                    SQLData[index].push(randomExp[i]);
                    randomExp[i].selected = true;
                    companyExp++;
                } else {         // 校园专家
                    if ((randomExp[i].school_id !== compArr[index].team1_school_id) && (randomExp[i].school_id !== compArr[index].team2_school_id) && cumpusExp < 2) {
                        SQLData[index].push(randomExp[i]);
                        randomExp[i].selected = true;
                        cumpusExp++;
                    }
                }
            }
        }
        // 检查分配结果长度够不够
        if (SQLData[index].length !== expCountInComp) {
            breaked = true;
            return;
        }
    })
    if (SQLData.length !== compArr.length) {
        ctx.body = {
            code: 0,
            msg: '专家池长度不够,无法满足专家与队伍不为一个学校且专家长度为4'
        };
        return;
    }
    let a = await userModel.feeler('allocated_expert');
    if (a[0].a) {
        await userModel.truncate('allocated_expert');
    }
    SQLData.forEach(async function (item, index) {
        let comp_id = compArr[index].comp_id;
        item.forEach(async function (i) {
            await userModel.insertAlloExp(comp_id, i.expert_id);
        })
    })
    const postData = await userModel.selectAll('allocated_expert');
    ctx.body = {
        code: 1,
        data: postData
    };
});

module.exports = router;
