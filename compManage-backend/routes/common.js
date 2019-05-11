
const router = require('koa-router')();
const userModel = require('../lib/mysql.js')
const md5 = require('md5')
router.post('/delItem', async (ctx) => {
    let {delArr} = ctx.request.body;

});


module.exports=router
