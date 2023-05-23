const {
  createOrder,
  findAllOrders,
  modifyOrderDetails,
} = require("../service/order.service.js");
class OrderController {
  async postOrder(ctx) {
    const user_id = ctx.state.user.id;
    const { address_id, goods_info, total } = ctx.request.body;
    const order_number =
      "Koa" + Date.now() + Math.random().toString(36).slice(-6);
    const res = await createOrder({
      user_id,
      address_id,
      goods_info,
      total,
      order_number,
    });

    ctx.body = {
      code: 0,
      message: "生成订单成功",
      result: res,
    };
  }
  async getOrderList(ctx) {
    try {
      //get请求需要从query中取参数，这里给了默认值
      const { pageNum = 1, pageSize = 10, state = 0 } = ctx.request.query;

      const res = await findAllOrders(pageNum, pageSize, state);

      ctx.body = {
        code: 0,
        message: "获取订单列表成功",
        result: res,
      };
    } catch (e) {
      console.log(e);
    }
  }
  async modifyOrder(ctx) {
    const id = ctx.request.params.id;
    const { state } = ctx.request.body;

    const res = await modifyOrderDetails(id, state);

    ctx.body = {
      code: 0,
      message: "更新订单状态成功",
      result: res,
    };
  }
}

module.exports = new OrderController();
