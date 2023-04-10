const Joi = require("joi");

const schema = {
    const goods_name = Joi.string().required();
    const goods__price = Joi.alphanum().required();
    const goods_num = Joi.alphanum().required();
    const goods_img = Joi.string().required();
    const schema = Joi.object({});
}

const validator = async (ctx, next) => {};

module.exports = { validator };
