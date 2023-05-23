const Joi = require("joi");
const { orderFormatError } = require("../constant/error.type");
const validator = (rules) => {
  const schema = Joi.object(rules).options({ presence: "required" });
  return async (ctx, next) => {
    try {
      await schema.validateAsync(ctx.request.body);
    } catch (e) {
      //错误日志
      console.error(e);
      orderFormatError.result = e;
      return ctx.app.emit("error", orderFormatError, ctx);
    }
    await next();
  };
};

module.exports = { validator };
