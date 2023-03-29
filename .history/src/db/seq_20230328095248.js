const { Sequelize } = require("sequelize"); //解构出的是一个类

//导入环境变量
const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require("../config/config.default");
console.log(MYSQL_USER);

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

async function test() {
  try {
    await seq.authenticate();
    console.log("数据库链接成功");
  } catch (e) {
    console.log("数据库链接失败", e);
  }
}
test();

module.exports = seq;
