const Joi = require("joi");
const schema = Joi.object({
  goods_name: Joi.string(),
});
const validator = async (ctx, next) => {};

module.exports = { validator };
