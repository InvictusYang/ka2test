class CartController {
  async add(ctx) {
    //将商品添加到购物车
    //1. 解析user_id，因为要向对应的id里保存商品
    const user_id = ctx.state.user.id;
    const goods_id = ctx.request.body.goods_id;
    console.log(user_id, goods_id);
    //2. 操作数据库
    //3. 返回结果
  }
}

module.exports = new CartController();
