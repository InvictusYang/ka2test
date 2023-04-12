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
    //执行的语句是：SELECT count(*) AS `count` FROM `koa_goods` AS `koa_goods` WHERE (`koa_goods`.`deletedAt` IS NULL);
    //count方法自动加入了判断条件，不会计算deletedAt不为空的条目
    const count = await Goods.count();
    // console.log(count); //返回满足条件的总数
    //2.获取分页数据
    //计算偏移量的公式
    const offset = (pageNum - 1) * pageSize;
    //offset代表偏移量，limit代表每页显示条目数
    const rows = await Goods.findAll({ offset: offset, limit: pageSize * 1 }); //*1是为了做隐式转换，把字符型转换为数值型
  }
}

module.exports = new GoodsService();
