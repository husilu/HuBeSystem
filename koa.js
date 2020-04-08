const koa = require('koa');
// const mount = require('koa-mount');
const static = require('koa-static');
var mysql = require('mysql');
const Router = require('koa-router') // koa 路由中间件
const bodyParser = require('koa-bodyparser');
const router = new Router();

// MySQL 的连接信息
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'new_schema'
});
// 开始连接
connection.connect();

const app = new koa();
app.use(bodyParser())
app.use((ctx, next) => {
  ctx.set({
    'Access-Control-Allow-Origin': ctx.header.origin
  })
  next()
})

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h5>Index</h5>';
});

router.post('/login', async (ctx, next) => {
  ctx.status = 200;
  const username = ctx.request.body.username;
  const password = ctx.request.body.password;
  let readSql = "SELECT * FROM new_schema.user_table WHERE username  = '" + username + "'";
  connection.query(readSql, function (error1, response1) {
    if (error1) {
      throw error1;
    } else {
      if (response1 == undefined || response1.length == 0) { // 不存在用户
        // res.end("\n不存在该用户！");
        // let newRes = JSON.parse(JSON.stringify(response1));
       ctx.body = (JSON.stringify({
          code: "1",
          message: "登录失败，不存在该用户"
        }));
        console.log(ctx);
        next()
        return;
      } else { // 存在用户
        console.log("\n存在该用户！");
        let newRes = JSON.parse(JSON.stringify(response1));
        console.log(newRes);

        if (newRes[0].password == password) { // 密码正确
          // 返回数据
          ctx.body = (JSON.stringify({
            code: 0,
            message: "登录成功！",
            data: {
              id: newRes[0].id,
              userName: newRes[0].username
            }
          }));
          next()
        } else { // 密码错误
          // 返回数据
          ctx.body = (JSON.stringify({
            code: 1,
            message: "登录失败，密码错误！"
          }));
          next()
        }
        // 判断密码正确与否完毕
      }
      // 存在用户处理结束
    }
  })
})

app.use(router.routes());

app.listen(8082, () => {
  console.log('serving...')
});