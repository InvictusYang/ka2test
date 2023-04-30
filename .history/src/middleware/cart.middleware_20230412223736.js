const validator = async (ctx, next) => {};
const joi = require("joi");
const schema = joi.object({
  goods_id: joi.number().required(),
});
