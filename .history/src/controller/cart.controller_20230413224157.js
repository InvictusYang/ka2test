const { createOrUpdate } = require("../service/cart.service");
class CartController {
  async add(ctx) {
    //将商品添加到购物车
    //1. 解析user_id，因为要向对应的id里保存商品
    const user_id = ctx.state.user.id;
    const goods_id = ctx.request.body.goods_id;
    console.log(user_id, goods_id);
    //2. 操作数据库
    //这里有个判断，同样的goods_id传多次，number自增，代表存放多件
    //所以应该使用create或者update
    await createOrUpdate(user_id, goods_id);
    //3. 返回结果
    ctx.body = {
      code: 0,
      message: "添加到购物车成功",
      result: res,
    };
  }
}

module.exports = new CartController();
