const router = require('koa-router')();
const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const {whetherLogin} = require('../middlewares/check.js');
const moment = require('moment');
const fs = require('fs')


/**************************** 评审管理 小组分配相关 ****************************/
// 获取学校数量
router.get('/autoGetRival', async (ctx) => {
    // await checkNotLogin(ctx)
    await userModel.returnSchoolCount()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})

router.post('/allocateRival', async (ctx) => {
    await userModel.selectTeamByRand()
        .then(async (result) => {
            let compArr = [];
            let i = 0;
            while (result[i + 1] != null) {
                let item = {};
                item.team1 = result[i];
                item.team2 = result[i + 1];
                compArr.push(item);
                i += 2;
            }
            if (result.length % 2 !== 0) {
                let item = {};
                item.team1 = result[result.length - 1];
                compArr.push(item);
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
                compArr.forEach(async function (item, index) {
                    try {
                        await userModel.insertAllocate(item, index)
                    } catch
                        (e) {
                        console.error('insertAllocate');
                        return;
                    }
                })
            } catch (e) {
                console.error('feeler');
                return;
            }
            let postData = compArr.map(function (item,index) {
                let tempObj = {};
                tempObj.team1_id = item.team1.team_id;
                tempObj.team2_id = item.team2.team_id;
                tempObj.team1_name = item.team1.team_name;
                tempObj.team2_name = item.team2.team_name;
                tempObj.team1_expert_id = item.team1.expert_id;
                tempObj.team2_expert_id = item.team2.expert_id;
                tempObj.team1_moment = item.team1.moment;
                tempObj.team2_moment = item.team2.moment;
                tempObj.team1_school_id = item.team1.school_id;
                tempObj.team2_school_id = item.team2.school_id;
                return tempObj;
            })

            ctx.body = {
                code: 1,
                data: postData
            };
        })
})

router.post('/allocateExpert', async (ctx) => {
    let randomExp = await userModel.selectExpByRand();

    let compArr = await userModel.selectAllocated_team();
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
        if(breaked){
            console.log('breaked');
            return;
        }
        let cumpusExp = 0;
        let companyExp = 0;
        SQLData[index] = [];
        for (let i = 0; cumpusExp < 2 && companyExp < 2 && i < expLen; i++) {
            if (!randomExp[i].selected) {          // 未选择
                if (randomExp[i].identity == 1) {// 企业专家
                    SQLData[index].push(randomExp[i]);
                    randomExp[i].selected = true;
                    companyExp++;
                } else {         // 校园专家
                    if ((randomExp[i].school_id !== compArr[index].team1_school_id) && (randomExp[i].school_id !== compArr[index].team2_school_id)) {
                        SQLData[index].push(randomExp[i]);
                        randomExp[i].selected = true;
                        cumpusExp++;
                    }else {
                        console.log('',randomExp[i].school_id,compArr[index].team1_id,compArr[index].team2_id)
                    }
                }
            }
        }
            console.log('SQLData[index].length',SQLData[index].length);

        // 检查分配结果长度够不够
        if (SQLData[index].length !== expCountInComp) {
            console.log('SQLData[index].length',SQLData[index].length);
            breaked = true;
            return;
        }
    })
    if(SQLData.length!==compArr.length){
        ctx.body = {
            code: 0,
            msg: '专家池长度不够,无法满足专家与队伍不为一个学校且专家长度为4'
        };
        return;
    }
    let a = await userModel.feeler('allocated_expert');
    if (a[0].a){
        await userModel.truncate('allocated_expert');
    }
    SQLData.forEach(async function (item, index) {
        let comp_id = compArr[index].comp_id;
        item.forEach(async function (i) {
            await userModel.insertAlloExp(comp_id, i.expert_id);
            console.log('comp_id, i.expert_id',comp_id, i.expert_id);
        })
    })
    console.log('==================');
    ctx.body = {
        code: 1,
        SQLData
    };
});

module.exports = router;
