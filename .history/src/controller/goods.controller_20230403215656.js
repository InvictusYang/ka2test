class GoodsController {
  async uploadGoods(ctx, next) {
    // console.log(ctx.request.files.x);
    // ctx.body = "商品图片上传成功";
    const { x } = ctx.request.files;
    if (file) {
      ctx.body = {
        code: 0,
        message: "商品上传成功",
      };
    }
  }
}

module.exports = new GoodsController();
