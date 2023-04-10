const path = require("path");
const {
  fileUploadErr,
  fileTypeError,
  publishGoodsErr,
} = require("../constant/error.type");

const { createGoods } = require("../service/goods.service");

class GoodsController {
  async uploadGoods(ctx, next) {
    // console.log(ctx.request.files.x);
    // ctx.body = "商品图片上传成功";
    const { x } = ctx.request.files;
    const fileTypes = ["image/jpeg", "image/png"];
    if (x) {
      //判断上传的文件是否包含在允许的类型数组中
      if (!fileTypes.includes(x.mimetype)) {
        return ctx.app.emit("error", fileTypeError, ctx);
      }
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
  async create(ctx) {
    try {
      //调用service的createGoods方法
      const { createdAt, updatedAt, ...res } = await createGoods(
        ctx.request.body
      );
      ctx.body = {
        code: 0,
        message: "发布成功",
        result: res,
      };
    } catch (e) {
      console.error(e);
      return ctx.app.emit("error", publishGoodsErr, ctx);
    }
  }
  async update(ctx) {
    const res = await updateGoods(ctx.params.id, ctx.request.body);
    console.log(res);
  }
}

module.exports = new GoodsController();
