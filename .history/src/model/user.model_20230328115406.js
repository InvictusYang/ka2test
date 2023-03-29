const { DataTypes } = require("sequelize");
const seq = require("../db/seq"); //已经定义了seq对象，可以从文件导入

// 创建模型(Model koa_user-> koa_users)
const User = seq.define(
  "koa_user",
  {
    user_name: {
      //   id会被sequelize自动创建
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: "用户名，唯一",
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "是否管理员0否1是",
    },
  },
  {
    tableName: "users",
  }
);

User.sync({ force: true }); //force:true代表如果表已经存在,则将其首先删除

module.exports = User;
