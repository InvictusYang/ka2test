const Joi = require("joi");

const schema = Joi.object({
  goods_name: Joi.string().required(),
  goods_price: Joi.alphanum().required(),
  goods_num: Joi.alphanum().required(),
  goods_img: Joi.string().required(),
});
