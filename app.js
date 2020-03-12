// 连接 MySQL：先安装 npm i mysql -D
var mysql = require('mysql');

// MySQL 的连接信息
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'new_schema'
});
// 开始连接
connection.connect();

// 引入 http 模块：http 是提供 Web 服务的基础
const http = require("http");

// 引入 url 模块：url 是对用户提交的路径进行解析
const url = require("url");

// 引入 qs 模块：qs 是对路径进行 json 化或者将 json 转换为 string 路径
const qs = require("querystring");

// 用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {

  // 设置 cors 跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 设置 header 类型
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // 跨域允许的请求方式
  res.setHeader('Content-Type', 'application/json');

  // console.log(res)
  console.log(req.method)
  if (req.method == "POST") { // 接口 POST 形式

    console.log("\n【POST 形式】");

    // 获取前端发来的路由地址
    let pathName = req.url;

    console.log("\n接口为：" + pathName);

    // 接收发送过来的参数
    let tempResult = "";

    // 数据接入中
    req.addListener("data", function (chunk) {
      tempResult += chunk;
    });

    // 数据接收完成
    req.addListener("end", function () {

      var result = JSON.stringify(qs.parse(tempResult));

      if (pathName == "/add_nrgl") { // 新增

        result = JSON.parse(result);
        let name = result.name; //
        let sex = result.sex; //
        let age = result.age; //
        let address = result.address; //
        let url = result.url;
        let addSql = 'INSERT INTO nrgl_table(name,sex,age,address,url) VALUES(?,?,?,?,?)';
        let addSqlParams = [name, sex, age, address, url];
        connection.query(addSql, addSqlParams, function (error1, response1) {
          if (error1) {
            throw error1;
          } else {
            res.write(JSON.stringify({
              code: "0",
              message: "success"
            }));
            res.end();
          }
        });
      } else if (pathName == "/login") { // 登录

        console.log("\n【API - 登录】");
        result = JSON.parse(result);
        let username = result.username; // 用户名
        let password = result.password; // 密码
        let readSql = "SELECT * FROM new_schema.user_table WHERE username  = '" + username + "'";
        connection.query(readSql, function (error1, response1) {
          if (error1) {
            throw error1;
          } else {
            if (response1 == undefined || response1.length == 0) { // 不存在用户
              // res.end("\n不存在该用户！");
              // let newRes = JSON.parse(JSON.stringify(response1));
              res.write(JSON.stringify({
                code: "1",
                message: "登录失败，不存在该用户"
              }));
              res.end();
              return;
            } else { // 存在用户
              console.log("\n存在该用户！");

              let newRes = JSON.parse(JSON.stringify(response1));
              console.log(newRes);

              if (newRes[0].password == password) { // 密码正确
                // 返回数据
                res.write(JSON.stringify({
                  code: 0,
                  message: "登录成功！",
                  data: {
                    id: newRes[0].id,
                    userName: newRes[0].username
                  }
                }));

                res.end();
              } else { // 密码错误
                // 返回数据
                res.write(JSON.stringify({
                  code: 1,
                  message: "登录失败，密码错误！"
                }));

                res.end();
              }
              // 判断密码正确与否完毕
            }
            // 存在用户处理结束
          }
        });
      } else if (pathName == "/edit_nrgl") { // 编辑

        console.log("\n【API - 编辑内容管理】");

        result = JSON.parse(result);
        let id = Number(result.id); // id
        let name = result.name;
        let age = result.age;
        let url = result.url;
        let address = result.address;
        let sex = result.sex;
        let modSql = 'UPDATE nrgl_table SET name = ?,sex = ?, address = ?, url = ?, age = ? WHERE id = ?'
        let modSqlParams = [name, sex, address, url, age, id];
        connection.query(modSql, modSqlParams, function (error1, response1) {
          if (error1) {
            throw error1;
          } else {
            res.write(JSON.stringify({
              code: 0,
              message: "success"
            }));
            res.end();
          }
        });
      }
      // 接口信息处理完毕
    })
    // 数据接收完毕

  } else if (req.method == "GET") { // 接口 GET 形式

    console.log("\n【GET 形式】");

    // 解析 url 接口
    let pathName = url.parse(req.url).pathname;

    console.log("\n接口为：" + pathName);

    if (pathName == "/js_study") { // 获取js学习信息
      let readSql = "SELECT * FROM new_schema.Js_study_table";
      connection.query(readSql, function (error1, response1) {
        if (error1) {
          throw error1;
        } else {
          let newRes = JSON.parse(JSON.stringify(response1));
          console.log(newRes);
          res.write(JSON.stringify({
            code: 0,
            message: "success",
            data: newRes
          }));
          res.end();
        }
      });

    } else if (pathName == "/ht_study") { // 获取html学习信息
      let readSql = "SELECT * FROM new_schema.html_study_table";
      connection.query(readSql, function (error1, response1) {
        if (error1) {
          throw error1;
        } else {
          let newRes = JSON.parse(JSON.stringify(response1));
          console.log(newRes);
          res.write(JSON.stringify({
            code: 0,
            message: "success",
            data: newRes
          }));
          res.end();
        }
      });
    } else if (pathName == "/search_nrgl") { // 获取内容管理
      let readSql = "SELECT * FROM new_schema.nrgl_table";
      connection.query(readSql, function (error1, response1) {
        if (error1) {
          throw error1;
        } else {
          let newRes = JSON.parse(JSON.stringify(response1));
          console.log(newRes);
          res.write(JSON.stringify({
            code: 0,
            message: "success",
            data: newRes
          }));
          res.end();
        }
      });
    } else if (pathName == "/search_nrglid/") {
      let params = url.parse(req.url, true).query;
      let id = params.id;
      let readSql = "SELECT * FROM new_schema.nrgl_table WHERE id = '" + id + "'";
      connection.query(readSql, function (error1, response1) {
        if (error1) {
          throw error1;
        } else {
          let newRes = JSON.parse(JSON.stringify(response1));
          res.write(JSON.stringify({
            code: 0,
            message: "success",
            data: newRes
          }));
          res.end();
        }
      });
    } else if (pathName == "/delete_nrgl/") { // 删除内容管理
      let params = url.parse(req.url, true).query;
      let id = params.id;
      let delSql = 'DELETE FROM nrgl_table where id= ' + id;
      connection.query(delSql, function (error1, response1) {
        if (error1) {
          throw error1;
        } else {
          let newRes = JSON.parse(JSON.stringify(response1));
          res.write(JSON.stringify({
            code: 0,
            message: "success",
            data: newRes
          }));
          res.end();
        }
      });
    }
    else if (pathName == "/") { // 首页
      res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
      });

      res.write('<h1 style="text-align:center">jsliang 前端有限公司服务已开启！</h1><h2 style="text-align:center">详情可见：<a href="https://github.com/LiangJunrong/document-library/blob/master/other-library/Node/NodeBase.md" target="_blank">Node 基础</a></h2>');

      res.end();
    }

  }

}).listen(8082); // 监听的端口

// 获取当前时间
function getNowFormatDate() {
  var date = new Date();
  var year = date.getFullYear(); // 年
  var month = date.getMonth() + 1; // 月
  var strDate = date.getDate(); // 日
  var hour = date.getHours(); // 时
  var minute = date.getMinutes(); // 分
  var second = date.getMinutes(); // 秒
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  // 返回 yyyy-mm-dd hh:mm:ss 形式
  var currentdate = year + "-" + month + "-" + strDate + " " + hour + ":" + minute + ":" + second;
  return currentdate;
}
