const { Sequelize } = require("sequelize"); //解构出的是一个类
const seq = new Sequelize("koa", "root", "will4ever", {
  host: "localhost",
  dialect: "mysql",
});

seq.authenticate().then.catch;
