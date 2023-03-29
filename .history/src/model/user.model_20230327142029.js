const { DataTypes } = require("sequelize");
const seq = require("../db/seq"); //已经定义了seq对象，可以从文件导入

// 创建模型()
const User = seq.define("koa_user");
