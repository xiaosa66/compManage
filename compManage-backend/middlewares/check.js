module.exports = {
    // 已经登录了
    checkNotLogin: (ctx) => {
        if (ctx.session && ctx.session.user) {
            // ctx.redirect('/posts');
            console.log('already logged session=:', ctx.session.user);
            return false;
        }
        return true;
    },

    // 已经登录了
    whetherLogin: (ctx, next) => {
        if (ctx.session && ctx.session.user) {
            console.log('登陆了:', ctx.session);
            next();
        } else {
            console.log('未登录,跳转到登录');
            ctx.redirect('/signin');
        }
    },

    //没有登录
    checkLogin: (ctx) => {
        if (!ctx.session || !ctx.session.user) {
            ctx.redirect('/signin');
            return false;
        }
        return true;
    }
}
