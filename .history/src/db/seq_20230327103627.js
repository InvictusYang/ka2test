const { Sequelize } = require("sequelize"); //解构出的是一个类

//导入环境变量
const {
  MYSQL_HOST = localhost,
  MYSQL_PORT = 3306,
  MYSQL_USER = root,
  MYSQL_PWD = 123456,
  MYSQL_DB = koa,
} = require("..config/config.default.js");

const seq = new Sequelize("koa", "root", "will4ever", {
  host: "localhost",
  dialect: "mysql",
});

// async function test() {
//   try {
//     await seq.authenticate();
//     console.log("数据库链接成功");
//   } catch (e) {
//     console.log("数据库链接失败", e);
//   }
// }
// test();

module.exports = seq;
