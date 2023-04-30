//导入seq链接
const { DataTypes } = require("sequelize");
const seq = require("../db/seq");

//连表查询，导入Goods模型
const Goods = require("./goods.model");
//定义Cart模型
const Cart = seq.define("koa_carts", {
  goods_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "商品id",
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "用户id",
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    comment: "商品数量",
  },
  selected: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "是否选中",
  },
});
//同步数据
// Cart.sync({force:true})
//数据表关联
Cart.belongsTo(Goods, {
  //指定外键
  foreignKey: "goods_id",
  //指定别名
  as: "goods_info",
});
//导出Cart
module.exports = Cart;
