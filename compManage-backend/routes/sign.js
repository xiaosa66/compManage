const router = require('koa-router')();
const userModel = require('../lib/mysql.js')
const md5 = require('md5')

//  登录接口
router.post('/admin/login', async (ctx, next) => {
    console.log(ctx.request.body)
    let name = ctx.request.body.name;
    let pass = ctx.request.body.password;

    await userModel.findDataByName(name)
        .then(result => {
            let res = result;
            if (res[0]['active'] && name === res[0]['name'] && pass === res[0]['pass']) {
                ctx.body = {
                    status: 1,
                    isSuper:res[0]['isSuper']
                };
                ctx.session.user = res[0]['name']
                ctx.session.id = res[0]['id']
                console.log(name, ' --> 登录成功')
            } else {
                ctx.body = {
                    status: 0,
                    message:'密码错误或者尚未激活'
                };
                console.log(name, ' --> 密码错误或者尚未激活 --> ', res[0]['pass'])
            }
        }).catch(err => {
            console.log(err)
        })
})

//  注册
router.post('/admin/signin', async (ctx, next) => {
    let user = ctx.request.body;
    let {name,password} = ctx.request.body;
    if (!name||!password) {
        ctx.body = {
            status: -1,
            message: '请输入参数'
        };
    }
    await userModel.findDataByName(name)
        .then(async (result) => {
            if (result.length) {
                // 用户存在
                ctx.body = {
                    status: -2,
                    message:'用户名已经存在'
                };

            }
            else {
                await userModel.insertData([name, password, '', moment().format('YYYY-MM-DD HH:mm:ss'),false])
                    .then(res => {
                        console.log('注册成功', res)
                        //注册成功
                        ctx.body = {
                            status: 1,
                            message: '注册成功'
                        };
                    })
            }
        })
})

//  登出
router.get('/admin/signout', async(ctx, next) => {
    ctx.session = null;
    console.log('登出成功')
    ctx.body = true
})

module.exports = router
