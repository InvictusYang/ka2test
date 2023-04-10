class GoodsController {
  async uploadGoods(ctx, next) {
    console.log(ctx.request.files.file);
    ctx.body = "商品图片上传成功";
  }
}

module.exports = new GoodsController();
