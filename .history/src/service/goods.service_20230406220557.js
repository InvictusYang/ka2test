//导入Goods对象
const Goods = require("../model/goods.model");
class GoodsService {
  async createGoods(goods) {
    const res = await Goods.create(goods);
  }
}

module.exports = new GoodsService();
