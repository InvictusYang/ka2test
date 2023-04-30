const { Op } = require("sequelize");
const Cart = require("../model/cart.model");
const Goods = require("../model/goods.model");
class CartService {
  async createOrUpdate(user_id, goods_id) {
    //根据user_id和goods_id同时查找是否有数据记录
    //因为数据有可能发生变化，用let更好一些
    let res = await Cart.findOne({
      where: {
        [Op.and]: {
          user_id,
          goods_id,
        },
      },
    });
    if (res) {
      //res不为空代表已经存在一条记录,此时将number自增即可
      await res.increment("number");
      //返回记录对象
      return await res.reload();
    } else {
      //res为空则返回数据
      return await Cart.create({
        user_id,
        goods_id,
      });
    }
  }
  async findCarts(pageNum, pageSize) {
    const offset = (pageNum - 1) * pageSize;
    //`count` - 一个整数 - 与查询匹配的记录总数
    //`rows` - 一个数组对象 - 获得的记录
    const { count, rows } = await Cart.findAndCountAll({
      //设定查询字段
      attributes: ["id", "number", "selected"],
      offset: offset,
      limit: pageSize * 1,
      //指定连表字段
      include: {
        model: Goods,
        //指定别名
        as: "goods_info",
        attributes: ["id", "goods_name", "goods_price", "goods_img"],
      },
    });
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    };
  }

  async updateCarts(params) {
    const { id, number, selected } = params;

    const res = await Cart.findByPk(id);
    if (!res) return "";

    number !== undefined ? (res.number = number) : "";
    if (selected !== undefined) {
      res.selected = selected;
    }
    return await res.save();
  }
}

module.exports = new CartService();
