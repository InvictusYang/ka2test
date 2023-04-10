const path = require("path");
class GoodsController {
  async uploadGoods(ctx, next) {
    // console.log(ctx.request.files.x);
    // ctx.body = "商品图片上传成功";
    const { x } = ctx.request.files;

    const fileTypes = ["image/jpeg", "image/png"];
    ctx.request.files.mimetype;

    if (fileTypes !== image / png) {
      ctx.app.emit("error", fileTypeError, ctx);
    }
    if (x) {
      ctx.body = {
        code: 0,
        message: "商品图片上传成功",
        result: {
          goods_img: path.basename(x.filepath),
        },
      };
    } else {
      return ctx.app.emit("error", fileUploadErr, ctx);
    }
  }
}

module.exports = new GoodsController();
