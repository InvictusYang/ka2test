const { DataTypes } = require("sequelize");
const seq = require("../db/seq"); //已经定义了seq对象，可以从文件导入

// 创建模型(Model koa_user-> koa_users)
const User = seq.define("koa_user", {
  user_name: {
    //   id会被sequelize自动创建
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: charset(64),
  },
});
