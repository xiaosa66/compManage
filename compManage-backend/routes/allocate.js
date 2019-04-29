const router = require('koa-router')();
const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const {whetherLogin} = require('../middlewares/check.js');
const moment = require('moment');
const fs = require('fs')


/**************************** 评审管理 小组分配相关 ****************************/


// 分配专家
router.post('/allocateExpert', async (ctx) => {
    await userModel.selectTeamByRand()
        .then(async (result) => {
            console.log('result:',result);
            ctx.body = {
                code: 1,
                message: '注册成功',
                result
            };
        })

    let delArr = ctx.request.body;
    console.log('ctx.request.body:', delArr);

})
//分配小组对抗
router.post('/allocateRival', async (ctx) => {
    let delArr = ctx.request.body;
    console.log('ctx.request.body:', delArr);
})

module.exports = router;
