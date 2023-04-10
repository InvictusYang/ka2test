const joi = require("joi");

const schema = joi.object({
  goods_name: joi.string().required(),
  goods_price: joi.alphanum().required(),
  goods_num: joi.alphanum().required(),
  goods_img: joi.string().required(),
});

module.exports = {
  schema,
};
