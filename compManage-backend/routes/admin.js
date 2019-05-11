
const router = require('koa-router')();
const userModel = require('../lib/mysql.js')
const md5 = require('md5')

//获取管理员列表接口
router.get('/admin/all', async(ctx, next) => {
    const {offset, limit} = ctx.request.query;
    await userModel.findAllAdmin()
        .then(result => {
            if (result) {
                ctx.body ={status:1,data:result};
            }else{
                ctx.body = {status:-1,message:'未找到数据'}
                console.log('错误!未找到数据')
            }
        }).catch(err => {
            console.log(err)
        })
})
//获取用户数量接口
router.get('/admin/count', async(ctx, next) => {
    await userModel.findAllAdminCount()
        .then(result => {
            if (result) {
                console.log(result);
                result = JSON.stringify(result);
                ctx.set("Content-Type", "application/json")
                ctx.body = {status:1,content:result}
            }else{
                ctx.set("Content-Type", "application/json")

                ctx.body = {status:-1,message:'no-data-found'}
                console.log('错误!未找到数据')
            }
        }).catch(err => {
            console.log(err)
        })
})
// 查看是否是超级管理员
router.post('/isSuper', async(ctx, next) => {
    const id = ctx.session.id;
    console.log(id);
    await userModel.checkIsSuper(id)
        .then(result => {
            if (result) {
                ctx.body = {status:1,data:result[0]}
            }else{
                ctx.body = {status:-1,message:'no-data-found'}
                console.log('错误!未找到数据')
            }
        }).catch(err => {
            console.log(err)
        })
})
// 激活管理员
router.post('/activeAdmin', async (ctx, next) => {
    let {opArr} = ctx.request.body;
    console.log('ctx.request.body',ctx.request.body)
    if (!opArr) {
        ctx.body = {
            code: -1,
            message: '请输入正确参数',
        };
        return;
    }
    opArr = opArr.toString();
    await userModel.toggleAdminStatus(opArr,true)
        .then(async (result) => {
            if (result.affectedRows >= 1) {
                ctx.body = {
                    code: 1,
                };
            } else {
                ctx.body = {
                    code: -1,
                    message: result
                }
            }
        })
})
// 禁用管理员
router.post('/disableAdmin', async (ctx, next) => {
    let {opArr} = ctx.request.body;
    if (!opArr) {
        ctx.body = {
            code: -1,
            message: '请输入正确参数',
        };
        return;
    }
    opArr = opArr.toString();
    console.log('opArr:', opArr);
    await userModel.toggleAdminStatus(opArr,false)
        .then(async (result) => {
            if (result.affectedRows >= 1) {
                ctx.body = {
                    code: 1,
                };
            } else {
                ctx.body = {
                    code: -1,
                    message: result
                }
            }
        })
})
// 删除管理员
router.post('/deleteAdmin', async (ctx, next) => {
    let {opArr} = ctx.request.body;
    if (!opArr) {
        ctx.body = {
            code: -1,
            message: '请输入正确参数',
        };
        return;
    }
    opArr = opArr.toString();
    console.log('opArr:', opArr);
    await userModel.delAdmin(opArr)
        .then(async (result) => {
            if (result.affectedRows >= 1) {
                ctx.body = {
                    code: 1,
                };
            } else {
                ctx.body = {
                    code: -1,
                    message: result
                }
            }
        })
})

module.exports=router
