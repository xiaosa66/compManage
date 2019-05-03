const router = require('koa-router')();
const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const {whetherLogin} = require('../middlewares/check.js');
const moment = require('moment');
const fs = require('fs')


/**************************** 队伍相关 ****************************/
// post 创建队伍
router.post('/team', async (ctx, next) => {
    let { team_name, school_id, expert_id } = ctx.request.body;
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
    // await checkNotLogin(ctx)
    await userModel.returnTeamCount()
        .then(async (result) => {
            ctx.body = {
                code: 1,
                data: result
            };
        })
})
// 获取队伍列表
router.get('/team', async (ctx, next) => {
    // await checkNotLogin(ctx)
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
    // await checkNotLogin(ctx)
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

/**************************** 省份相关 ****************************/
// 获取省份列表
router.get('/getProvince', async (ctx, next) => {
    // await checkNotLogin(ctx)
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
    // await checkNotLogin(ctx)
    let { province_id } = ctx.query;
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

/**************************** 新闻相关 ****************************/
// 新建新闻
router.post('/posts', async (ctx) => {
    const { content,name,title } = ctx.request.body;
    // 获得客户端的Cookie
    var Cookies = {};
    ctx.headers.cookie && ctx.headers.cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=');
        Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
    console.log('Cookies:',Cookies)
    if (!content) {
        ctx.body = {
            code: -1,
            message: '请输入正确参数',
        };
        return;
    }

    await userModel.insertPost([name,title,content,Cookies.USER_SID, moment().format('YYYY-MM-DD HH:mm:ss')])
        .then(res => {
            ctx.body = {
                code: 1,
                message: '注册成功'
            };
        })

})

// 获取队伍数量
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
// 获取队伍列表
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

module.exports = router;
