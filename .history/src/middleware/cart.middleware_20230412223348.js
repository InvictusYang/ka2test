const validator = async (ctx, next) => {};
const joi = require("joi");
const schema = joi.object({
  goods_id: joi.string().required().error(new Error("商品名称必填")),
});
