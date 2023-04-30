const { Op } = require("sequelize");
const Cart = require("../model/cart.model");
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
}

module.exports = new CartService();
