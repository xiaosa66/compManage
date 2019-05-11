const router = require('koa-router')();
const userModel = require('../lib/mysql.js')
const md5 = require('md5')

//登录接口
router.post('/admin/login', async (ctx, next) => {
    console.log(ctx.request.body)
    let name = ctx.request.body.name;
    let pass = ctx.request.body.password;

    await userModel.findDataByName(name)
        .then(result => {
            let res = result;
            if (name === res[0]['name'] && pass === res[0]['pass']) {
                ctx.set("Content-Type", "application/json")
                let post = { status: 1 };
                ctx.body = JSON.stringify(post);
                ctx.session.user = res[0]['name']
                ctx.session.id = res[0]['id']
                console.log(name,' --> 登录成功')
            } else {
                ctx.body = false
                console.log(name,' --> 密码错误 --> ',res[0]['pass'])
            }
        }).catch(err => {
            console.log(err)
        })
})
module.exports = router
