const Address = require("../model/addr.model");
class AddrService {
  async createAddr(addr) {
    return await Address.create(addr);
  }
  async findAllAddr(user_id) {
    return await Address.findAll({
      //使用attribute定义显示的字段
      attributes: ["id", "consignee", "phone", "address", "is_default"],
      where: { user_id },
    });
  }
  //修改地址
  async updateAddrById(id, params) {
    return await Address.update(params, {
      where: { id },
    });
  }
  //删除地址
  async removeAddrById(id) {
    return await Address.destroy({ where: { id } });
  }
  //设置默认地址,但是没有判断id是否是存在的，即使id不存在也不会报错
  async setDefaultAddr(user_id, id) {
    await Address.update(
      { is_default: false },
      {
        where: {
          user_id,
        },
      }
    );
    return await Address.update(
      { is_default: true },
      {
        where: {
          id,
        },
      }
    );
  }
}

module.exports = new AddrService();
