const joi = require("joi");

const { invalidGoodsId } = require("../constant/error.type");
const schema = joi.object({
  goods_id: joi.number().required().error(new Error("id只能为数字")),
});

const validator = async (ctx, next) => {
  try {
    const { value, error } = await schema.validate(ctx.request.body);
    if (error) {
      return (ctx.body = error.message);
    }
  } catch (e) {
    return ctx.app.emit("error", invalidGoodsId, ctx);
  }
  await next();
};

module.exports = { validator };
