const router = require('koa-router')();
const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const {whetherLogin} = require('../middlewares/check.js');
const moment = require('moment');
const fs = require('fs')

/**************************** 学校相关 ****************************/


// post 创建学校
router.post('/school', async (ctx, next) => {
    let {school_name, city_id} = ctx.request.body
    await userModel.schoolExist(school_name)
        .then(async (result) => {
            if (!result) {
                ctx.body = {
                    code: -1,
                    message: '请输入参数'
                };
                return;
            }
            if (result[0].count >= 1) {
                // 用户存在
                ctx.body = {
                    code: -1,
                    message: '已存在学校'
                };
            } else {
                await userModel.createSchool([school_name, city_id, moment().format('YYYY-MM-DD HH:mm:ss')])
                    .then(res => {
                        console.log('注册成功', res)
                        ctx.body = {
                            code: 1,
                            message: '注册成功'
                        };
                    })
            }
        })
})


// 获取学校数量
router.get('/schoolCount', async (ctx, next) => {
    // await checkNotLogin(ctx)
    await userModel.returnSchoolCount()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})

// 获取省份列表
router.get('/provinceList', async (ctx, next) => {
    await userModel.returnProvinceList()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})
// 获取城市列表
router.get('/cityList', async (ctx, next) => {
    let {province_id} = ctx.request.query;
    console.log('province_id', province_id);
    await userModel.returnCityList(province_id)
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})

// 获取学校列表
router.get('/school', async (ctx, next) => {
    await whetherLogin(ctx);
    await userModel.returnSchoolList()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})
// 删除学校
router.post('/delSchool', async (ctx, next) => {
    // await checkNotLogin(ctx)
    let schoolArr = ctx.request.body;
    console.log('ctx.request.body:', ctx.request.body);
    if (!schoolArr) {
        ctx.body = {
            code: -1,
            message: '请输入正确参数',
        };
        return;
    }
    schoolArr = schoolArr.toString();
    console.log('schoolArr:', schoolArr);
    await userModel.deleteSchool(schoolArr)
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
