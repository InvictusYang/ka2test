const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const Goods = seq.define("koa_goods", {
  goods_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "商品名称",
  },
  goods_price: {
    type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    comment:'商品价格'
    },
    good_num: {
        type: DataTypes.INTEGER，
        allowNull:false
  }
});