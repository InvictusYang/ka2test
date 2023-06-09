//导入Goods对象
const Goods = require("../model/goods.model");
class GoodsService {
  async createGoods(goods) {
    const res = await Goods.create(goods);
    return res.dataValues;
  }
  async updateGoods(id, goods) {
    const res = await Goods.update(goods, { where: { id } });
    return res[0] > 0 ? true : false;
  }
  async removeGoods(id) {
    const res = await Goods.destroy({ where: { id } });
    return res > 0 ? true : false;
  }
  async restoreGoods(id) {
    const res = await Goods.restore({ where: { id } });
    return res > 0 ? true : false;
  }
  async findGoods(pageNum, pageSize) {
    //1.获取总数
    const count = await Goods.count({});
    //2.获取分页数据
  }
}

module.exports = new GoodsService();
