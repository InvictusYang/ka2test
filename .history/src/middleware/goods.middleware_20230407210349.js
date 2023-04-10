const joi = require("joi");
const { uploadError } = require("../constant/error.type");
const schema = joi.object({
  goods_name: joi.string().required().error(new Error("商品名称必填")),
  goods_price: joi.number().required().error(new Error("商品价格必填")),
  goods_num: joi.number().required().error(new Error("商品数量必填")),
  goods_img: joi.string().required().error(new Error("图片必须上传")),
});

const validator = async (ctx, next) => {
  try {
    const { value, error } = await schema.validate(ctx.request.body);
    if (error) {
      return (ctx.body = error.message);
    }
  } catch (e) {
    return ctx.app.emit("error", uploadError, ctx);
  }
  await next();
};

module.exports = { validator };
