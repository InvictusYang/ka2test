const Joi = require("joi");
const { addrFormatError } = require("../constant/error.type");
const validator = (rules) => {
  const schema = Joi.object(rules).options({ presence: "required" });
  return async (ctx, next) => {
    try {
      const value = await schema.validateAsync(ctx.request.body);
    } catch (e) {
      console.error(e);
      addrFormatError.result = e;
      return ctx.app.emit("error", addrFormatError, ctx);
    }

    await next();
  };
};

module.exports = { validator };
