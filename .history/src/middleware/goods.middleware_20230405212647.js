const joi = require("joi");

const schema = joi.object({
  goods_name: joi.string().required().error(new Error("出错了")),
  goods_price: joi.alphanum().required().error(new Error("出错了")),
  goods_num: joi.alphanum().required().error(new Error("出错了")),
  goods_img: joi.string().required().error(new Error("出错了")),
});

const validator = async (ctx, next) => {
  try {
    const value = await schema.validate(ctx.request.body);
  } catch (e) {
    console.log(e);
  }
  await next();
};

module.exports = { validator };
