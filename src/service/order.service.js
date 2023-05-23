const Order = require("../model/order.model");

class OrderService {
  async createOrder(order) {
    return await Order.create(order);
  }
  async findAllOrders(pageNum, pageSize, state) {
    const { count, rows } = await Order.findAndCountAll({
      attributes: ["goods_info", "total", "order_number", "state"],
      where: {
        state,
      },
      offset: (pageNum - 1) * pageSize,
      //转换为数值
      limit: pageSize * 1,
    });
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    };
  }
  async modifyOrderDetails(id, state) {
    return await Order.update({ state }, { where: { id } });
  }
}

module.exports = new OrderService();
