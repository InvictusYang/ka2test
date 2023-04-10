const joi = require("joi");
const { uploadError } = require("../constant/error.type");
const schema = joi.object({
  goods_name: joi.string().required(),
  goods_price: joi.number().required(),
  goods_num: joi.number().required(),
  goods_img: joi.string().required(),
});

const validator = async (ctx, next) => {
  try {
    const { value, error } = await schema.validate(ctx.request.body);
    if (error) {
      ctx.body = error.message;
    }
    ctx.body = value;
  } catch (e) {
    ctx.app.emit("error", uploadError, ctx);
  }
  await next();
};

module.exports = { validator };
