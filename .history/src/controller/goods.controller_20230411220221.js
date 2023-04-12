const path = require("path");
const {
  fileUploadErr,
  fileTypeError,
  publishGoodsErr,
  invalidGoodsId,
} = require("../constant/error.type");

const {
  createGoods,
  updateGoods,
  removeGoods,
  restoreGoods,
} = require("../service/goods.service");

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
    try {
      //res的返回值是布尔值
      const res = await updateGoods(ctx.params.id, ctx.request.body);
      if (res) {
        ctx.body = {
          code: 0,
          message: "修改商品成功",
          result: "",
        };
      } else {
        ctx.app.emit("error", invalidGoodsId, ctx);
      }
    } catch (err) {
      console.error(err);
    }
  }
  //删除商品
  async remove(ctx) {
    try {
      const res = await removeGoods(ctx.params.id);
      if (res) {
        ctx.body = {
          code: 0,
          message: "商品下架成功",
          result: "",
        };
      } else {
        return ctx.app.emit("error", invalidGoodsId, ctx);
      }
    } catch (e) {
      console.error(e);
    }
  }
  //重新上架产品
  async restore(ctx) {
    const res = await restoreGoods(ctx.params.id);
    try {
      if (res) {
        ctx.body = {
          code: 0,
          message: "商品上架成功",
          result: "",
        };
      } else {
        ctx.app.emit("error", invalidGoodsId, ctx);
      }
    } catch (err) {
      console.err(e);
    }
  }
  //查找商品
  async findAll(ctx) {
    // 1.要解析pageNum和pageSize
    const { pageNum, pageSize } = ctx.request.query;
    // 2.调用数据处理的相关方法
    const res = await findGoods(pageNum, pageSize);
    // 3.返回结果
    ctx.body = {
      code: 0,
      message: "获取商品列表成功",
      result: res,
    };
  }
}

module.exports = new GoodsController();
