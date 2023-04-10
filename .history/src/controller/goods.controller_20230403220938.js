const path = require("path");
class GoodsController {
  async uploadGoods(ctx, next) {
    // console.log(ctx.request.files.x);
    // ctx.body = "商品图片上传成功";
    const { file } = ctx.request.files;
    console.log(file);
    if (file) {
      ctx.body = {
        code: 0,
        message: "商品图片上传成功",
        result: { goods_img: basename(file.path) },
      };
    } else {
      return ctx.app.emit("error", fileUploadErr, ctx);
    }
  }
}

module.exports = new GoodsController();
