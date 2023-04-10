class GoodsController {
  async uploadGoods(ctx, next) {
    ctx.request.files;
    ctx.body = "商品图片上传成功";
  }
}

module.exports = new GoodsController();
