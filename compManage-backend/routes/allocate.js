const router = require('koa-router')();
const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const {whetherLogin} = require('../middlewares/check.js');
const moment = require('moment');
const fs = require('fs')


/**************************** 评审管理 小组分配相关 ****************************/


// 分配专家
router.post('/allocateRival', async (ctx) => {
    await userModel.selectTeamByRand()
        .then(async (result) => {
            console.log('result:',result.length);
            let compArr = [];
            let item = {};
            item.team1 = {};
            item.team2 = {};
            // for(let i=0,len = result.length;i<len;i+=2){
            //     item.team1 = result[i];
            //     item.team2 = result[i+1];
            //     compArr.push(item);
            // }
            let i = 0;
            while (result[i+1]!=null) {
                item.team1 = result[i];
                if(result[i+1]!=null){}
                item.team2 = result[i+1];
                compArr.push(item);
                i+=2;
            }

            ctx.body = {
                code: 1,
                message: '注册成功',
                data:compArr
            };
        })

    let delArr = ctx.request.body;
    console.log('ctx.request.body:', delArr);

})
//分配小组对抗
router.post('/allocateExpert', async (ctx) => {
    let delArr = ctx.request.body;
    console.log('ctx.request.body:', delArr);
})

module.exports = router;
