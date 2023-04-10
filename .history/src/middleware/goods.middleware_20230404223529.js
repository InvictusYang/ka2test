const Joi = require("joi");
const goods_name = Joi.string().alphanum().required()
const 
const schema = Joi.object({
   
    
});
const validator = async (ctx, next) => {};

module.exports = { validator };
