const router = require('koa-router')();
const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const moment = require('moment');
const fs = require('fs')


/**************************** 专家相关 ****************************/


// 新建专家
router.post('/expert', async (ctx) => {
    let { expert_name, expert_info, school_id ,identity } = ctx.request.body;
    if (!expert_name  || !expert_info || !school_id || !identity) {
        ctx.body = {
            code: -1,
            message: '请输入正确的参数'
        };
    }
    await userModel.findExpertCountByName(expert_name)
        .then(async (result) => {
            if (result[0].count >= 1) {
                // 用户存在
                ctx.body = {
                    code: -1,
                    message: '用户存在'
                };
            } else {
                await userModel.insertExpert([expert_name, expert_info, school_id, identity , moment().format('YYYY-MM-DD HH:mm:ss')])
                    .then(res => {
                        console.log('注册成功', res)
                        //注册成功
                        ctx.body = {
                            code: 1,
                            message: '注册成功'
                        };
                    })
            }
        })
})

// 获取专家数量
router.get('/expertCount', async (ctx) => {
    await userModel.returnSchoolCount()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})

// 获取专家列表
router.get('/expert', async (ctx) => {
    await userModel.returnExpertList()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})

// 删除专家
router.post('/delExpert', async (ctx, next) => {
    let delArr = ctx.request.body;
    console.log('ctx.request.body:', ctx.request.body);
    if (!delArr) {
        ctx.body = {
            code: -1,
            message: '请输入正确参数',
        };
        return;
    }
    delArr = delArr.toString();
    console.log('delArr:', delArr);
    await userModel.deleteExpert(delArr)
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


module.exports = router;
