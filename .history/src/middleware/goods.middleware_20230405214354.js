const joi = require("joi");

const schema = joi.object({
  goods_name: joi.string().required(),
  goods_price: joi.number().required(),
  goods_num: joi.number().required(),
  goods_img: joi.string().required(),
});

const validator = async (ctx, next) => {
  try {
    const value = await schema.validate(ctx.request.body);
    ctx.body = value;
  } catch (e) {
    ctx.body = e.message;
  }
  await next();
};

module.exports = { validator };
