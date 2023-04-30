class CartController {
  async add(ctx) {
    //将商品添加到购物车
    ctx.body = {
      code: "0",
      msg: "购物车控制器",
      stage: ctx.state.user,
    };
  }
}

module.exports = new CartController();
