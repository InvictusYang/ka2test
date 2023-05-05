const {
  createOrUpdate,
  findCarts,
  updateCarts,
  removeCarts,
  selectAllCarts,
  unselectAllCarts,
} = require("../service/cart.service");
const { cartFormatError } = require("../constant/error.type");
class CartController {
  async add(ctx) {
    //将商品添加到购物车
    //1. 解析user_id，因为要向对应的id里保存商品
    const user_id = ctx.state.user.id;
    const goods_id = ctx.request.body.goods_id;
    // console.log(user_id, goods_id);
    //2. 操作数据库
    //这里有个判断，同样的goods_id传多次，number自增，代表存放多件
    //所以应该使用create或者update
    const res = await createOrUpdate(user_id, goods_id);
    // 3. 返回结果
    ctx.body = {
      code: 0,
      message: "添加到购物车成功",
      result: res,
    };
  }
  async findAll(ctx) {
    //1.解析请求参数
    const { pageNum = 1, pageSize = 10 } = ctx.request.query;
    //2.操作数据库
    const res = await findCarts(pageNum, pageSize);
    //3.返回结果
    ctx.body = {
      code: 0,
      message: "获取购物车列表成功",
      result: res,
    };
  }

  async updateCart(ctx) {
    //1.解析参数
    //当用户传入id时，id会存在于`ctx.params`参数中
    const { id } = ctx.request.params;
    //和视频不一样，这里用视频方法一直过不去，所以改为以下方法
    //只有ctx.request.params传了数据才解构数据
    if (ctx.request.body === undefined) {
      cartFormatError.message = "number和selected不能同时为空";
      return ctx.app.emit("error", cartFormatError, ctx);
    }
    const { number, selected } = ctx.request.body;
    //2.操作数据库
    const res = await updateCarts({ id, number, selected });
    //3.返回数据
    ctx.body = {
      code: 0,
      message: "更新购物车成功",
      result: res,
    };
  }

  async remove(ctx) {
    const { ids } = ctx.request.body;
    const res = await removeCarts(ids);
    ctx.body = {
      code: 0,
      message: "删除购物车成功",
      //受影响的行数
      result: res,
    };
  }

  async selectAll(ctx) {
    // 要通过ctx.state.user中获取id
    const user_id = ctx.state.user.id;

    const res = await selectAllCarts(user_id);

    ctx.body = {
      code: 0,
      //根据allSelected的值来判断是全选还是取消全选
      message: "全部选中",
      result: res,
    };
  }

  async unselectAll(ctx) {
    // 要通过ctx.state.user中获取id
    const user_id = ctx.state.user.id;

    const res = await unselectAllCarts(user_id);

    ctx.body = {
      code: 0,
      //根据allSelected的值来判断是全选还是取消全选
      message: "全部取消",
      result: res,
    };
  }
}

module.exports = new CartController();
