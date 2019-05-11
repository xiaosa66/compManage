const router = require('koa-router')();
const userModel = require('../lib/mysql.js');
const moment = require('moment');

/**************************** 新闻相关 ****************************/

//获取新闻数量
router.get('/postsCount', async (ctx, next) => {
    // await checkNotLogin(ctx)
    await userModel.returnTeamCount()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})

// 获取新闻列表
router.get('/posts', async (ctx, next) => {
    // await checkNotLogin(ctx)
    await userModel.findAllPost()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})

// 新建新闻
router.post('/posts', async (ctx) => {
    // 获得客户端的Cookie
    var Cookies = {};
    ctx.headers.cookie && ctx.headers.cookie.split(';').forEach(function (Cookie) {
        var parts = Cookie.split('=');
        Cookies[parts[0].trim()] = (parts[1] || '').trim();
    });
    if (!content) {
        ctx.body = {
            code: -1,
            message: '请输入正确参数',
        };
        return;
    }

    await userModel.insertPost([name, title, content, Cookies.USER_SID, moment().format('YYYY-MM-DD HH:mm:ss')])
        .then(res => {
            ctx.body = {
                code: 1,
                message: '添加成功'
            };
        })

})


module.exports = router;
