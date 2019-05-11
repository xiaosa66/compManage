

const Koa=require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const checkLogin = require('./middlewares/check');
const config = require('./config/default.js');
const app = new Koa();

// 跨域操作
const cors = require('@koa/cors');
app.use(cors({
  origin: 'http://localhost:8002', // 前端站点的host
  allowedHeaders: 'Origin, x-requested-with, Content-Type, X-Token', //X-Token为自定义的头字段
  credentials: true //设置成true 请求中才会带上cookie信息，否则请求失败
}));

// session存储配置
const sessionMysqlConfig= {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

// Koa doesn't parse the request body by default, you need to add a middleware for body parsing,
app.use(bodyParser({
  formLimit: '1mb'
}))
app.use(require('./routes/sign.js').routes())

app.use(checkLogin);

app.use(require('./routes/experts.js').routes())
app.use(require('./routes/allocate.js').routes())
app.use(require('./routes/school.js').routes())
app.use(require('./routes/team.js').routes())
app.use(require('./routes/posts.js').routes())
app.use(require('./routes/admin.js').routes())
app.use(require('./routes/allocate').routes())
app.use(require('./routes/common').routes())


app.listen(3000)

console.log(`listening on port ${config.port}`)
