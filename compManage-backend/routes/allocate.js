const router = require('koa-router')();
const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const {whetherLogin} = require('../middlewares/check.js');
const moment = require('moment');
const fs = require('fs')


/**************************** 评审管理 小组分配相关 ****************************/

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
                    } catch (e) {console.error('truncate');return;}
                }
                compArr.forEach(async function (item, index) {
                    try {
                        await userModel.insertAllocate(item, index)
                    } catch
                        (e) {console.error('insertAllocate');return;}
                })
            } catch (e) {console.error('feeler');return;}
            ctx.body = {
                code: 1,
                message: '注册成功',
                data: compArr
            };
        })
})

router.post('/allocateExpert', async (ctx) => {
    const randomExp = await userModel.selectExpByRand();
    const team = await userModel.selectTeamByRand();

    // .then(async (result) => {
    //     // console.log('result:',result);
    //     // let compArr = [];
    //     // let i = 0;
    //     // while (result[i+1]!=null) {
    //     //     let item = {};
    //     //     item.team1 = result[i];
    //     //     item.team2 = result[i+1];
    //     //     compArr.push(item);
    //     //     i+=2;
    //     // }
    //     // if(result.length%2!==0){
    //     //     let item = {};
    //     //     item.team1 = result[result.length-1];
    //     //     compArr.push(item);
    //     // }

    // })
    ctx.body = {
        code: 1,
    };
})

module.exports = router;
