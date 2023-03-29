const { Sequelize } = require("sequelize"); //解构出的是一个类
const seq = new Sequelize("koa", "root", "will4ever", {
  host: "localhost",
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
