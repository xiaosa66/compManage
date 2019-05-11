const router = require('koa-router')();
const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const {whetherLogin} = require('../middlewares/check.js');
const moment = require('moment');
const fs = require('fs')


/**************************** 队伍相关 ****************************/
// post 创建队伍
router.post('/team', async (ctx, next) => {
    let {team_name, school_id, expert_id} = ctx.request.body;
    if (!team_name || !school_id) {
        ctx.body = {
            code: -1,
            message: '请输入正确参数',
        };
        return;
    }
    await userModel.teamExist(team_name)
        .then(async (result) => {
            if (result[0].count >= 1) {
                ctx.body = {
                    code: -1,
                    message: '已存在队伍'
                };
            } else {
                // if(!expert_id){

                // }
                await userModel.createTeam([team_name, school_id, moment().format('YYYY-MM-DD HH:mm:ss')])
                    .then(res => {
                        ctx.body = {
                            code: 1,
                            message: '注册成功'
                        };
                    })
            }
        })
})
// 获取队伍数量
router.get('/teamCount', async (ctx, next) => {
    await userModel.returnTeamCount()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})
// 获取队伍成员
router.get('/teamMember', async (ctx, next) => {
    await userModel.selectTeamMember(team_id)
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})
// post 添加队伍成员
router.post('/teamMember', async (ctx, next) => {
    let {
        team_id,
        student_school_id,
        student_name,
        student_sex
    } = ctx.request.body;
    if (!team_id || !student_school_id || !student_name || !student_sex) {
        ctx.body = {
            code: -1,
            message: '请输入正确参数',
        };
        return;
    }
    await userModel.insertTeamMember([team_id, student_school_id, student_name, student_sex])
        .then(res => {
            ctx.body = {
                code: 1,
                message: '添加队员成功'
            };
        })
})
// 获取队伍列表
router.get('/team', async (ctx, next) => {
    await userModel.returnTeamList()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})
// 删除学校
router.post('/delTeam', async (ctx, next) => {
    let delArr = ctx.request.body;
    if (!delArr) {
        ctx.body = {
            code: -1,
            message: '请输入正确参数',
        };
        return;
    }
    delArr = delArr.toString();
    await userModel.deleteTeam(delArr)
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
// 删除队伍成员
router.post('/delTeamMember', async (ctx, next) => {
    let delArr = ctx.request.body;
    if (!delArr) {
        ctx.body = {
            code: -1,
            message: '请输入正确参数',
        };
        return;
    }
    delArr = delArr.toString();
    await userModel.deleteTeamMember(delArr)
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

/**************************** 省份相关 ****************************/
// 获取省份列表
router.get('/getProvince', async (ctx, next) => {
    await userModel.returnProvinceList()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})
// 根据 province_id 获取 cityList
router.get('/getCityList', async (ctx, next) => {
    let {province_id} = ctx.query;
    if (province_id) {
        await userModel.returnCityList(province_id)
            .then(async (result) => {
                ctx.body = {
                    code: 1,
                    data: result
                };
            })
    } else {
        ctx.body = {
            code: -1,
            message: '请输入查询参数'
        };
    }
})


module.exports = router;
