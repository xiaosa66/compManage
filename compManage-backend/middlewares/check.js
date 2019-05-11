async function check(ctx, next) {
        if (ctx.session && ctx.session.user) {
            await next();
        } else {
            console.log('未登录,跳转到登录');
            ctx.redirect('http://localhost:8002/#/');
        }
}
module.exports = check;
