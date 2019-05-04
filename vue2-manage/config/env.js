/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl = '';

console.log('process.env.NODE_ENV:',process.env.NODE_ENV);

if (process.env.NODE_ENV == 'development') {
    baseUrl = 'http://localhost:3000';
    imgBaseUrl = '/img/';

}else if(process.env.NODE_ENV == 'production'){
    baseUrl = '192.144.186.149:3000';
    imgBaseUrl = '/img/';
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl,
}
