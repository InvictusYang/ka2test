const { Sequelize } = require("sequelize"); //解构出的是一个类

//导入环境变量
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require("../config/config.default"); //环境变量配置文件

const seq = new Sequelize("koa", "root", "will4ever", {
  host: MYSQL_HOST,
  dialect: "mysql",
});

module.exports = seq;

// 测试链接是否成功
// async function test() {
//   try {
//     await seq.authenticate();
//     console.log("数据库链接成功");
//   } catch (e) {
//     console.log("数据库链接失败", e);
//   }
// }
// test();
