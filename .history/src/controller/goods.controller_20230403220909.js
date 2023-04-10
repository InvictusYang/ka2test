const path = require("path");
class GoodsController {
  async uploadGoods(ctx, next) {
    // console.log(ctx.request.files.x);
    ctx.body = "商品图片上传成功";
    const { file } = ctx.request.files;
  }
}

module.exports = new GoodsController();
