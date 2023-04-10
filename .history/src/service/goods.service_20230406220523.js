//导入Goods对象
const Goods = require("../model/goods.model");
class GoodsService {
  async createGoods(goods) {
    console.log("发布成功");
    return {
      goods_name: "蓝牙音箱",
    };
  }
}

module.exports = new GoodsService();
