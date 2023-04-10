const Joi = require("joi");
const schema = Joi.object({
  goods_name: Joi.string().alphanum().required(),
});
const validator = async (ctx, next) => {};

module.exports = { validator };
