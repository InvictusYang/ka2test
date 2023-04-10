const path = require("path");
class GoodsController {
  async uploadGoods(ctx, next) {
    // console.log(ctx.request.files.x);
    // ctx.body = "商品图片上传成功";
    const { x } = ctx.request.files;
    if (x) {
      ctx.body = {
        code: 0,
        message: "商品图片上传成功",
        result: { goods_img: basename(x.path) },
      };
    } else {
    }
  }
}

module.exports = new GoodsController();
