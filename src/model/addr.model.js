//1. 导入seq链接+
const { DataTypes } = require("sequelize");
const seq = require("../db/seq.js");

//2. 定义字段（模型）
const Address = seq.define("koa_address", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "用户id",
  },
  consignee: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "收件人",
  },
  phone: {
    type: DataTypes.CHAR(11),
    allowNull: false,
    comment: "收件人手机号",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "收货人地址",
  },
  is_default: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    comment: "是否默认值，0：不是，1：是",
  },
});

//3. 同步数据，sync+
// Address.sync({ force: true });

//4. 导出模型对象
module.exports = Address;
