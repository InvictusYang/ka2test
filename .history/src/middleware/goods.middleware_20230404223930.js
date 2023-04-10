const Joi = require("joi");

const schema = {
    goods_name = Joi.string().required();goods__price = Joi.alphanum().required();
    goods_num = Joi.alphanum().required();
    goods_img = Joi.string().required();
    schema = Joi.object({});
}

const validator = async (ctx, next) => {};

module.exports = { validator };
