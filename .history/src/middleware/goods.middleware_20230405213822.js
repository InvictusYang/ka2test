const joi = require("joi");

const schema = joi.object({
  goods_name: joi.string().required(),
  goods_price: joi.number().required(),
  goods_num: joi.string().required(),
  goods_img: joi.string().required(),
});

const validator = async (ctx, next) => {
  try {
    const value = await schema.validate(ctx.request.body);
    ctx.body = "ok";
  } catch (e) {
    console.log(e);
  }
  await next();
};

module.exports = { validator };
