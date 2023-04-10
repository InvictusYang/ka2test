const joi = require("joi");

const schema = joi.object({
  goods_name: joi.string().required().error(new Error("出错了")),
  goods_price: joi.alphanum().required().error(new Error("出错了")),
  goods_num: joi.alphanum().required().error(new Error("出错了")),
  goods_img: joi.string().required().error(new Error("出错了")),
});

const validator = async (ctx, next) => {
  try {
    const { goods_name, goods_price, goods_num, goods_img } = ctx.request.body;
    const value = await schema.validateAsync({
      goods_name: "xx",
      goods_price: 33,
      goods_num: 33,
      goods_img: "",
    });
  } catch (e) {
    console.log(e);
  }
  await next();
};

module.exports = { validator };
