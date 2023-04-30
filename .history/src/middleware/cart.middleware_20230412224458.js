const joi = require("joi");

const {} = require();
const schema = joi.object({
  goods_id: joi.number().required(),
});

const validator = async (ctx, next) => {
  try {
    const { value, error } = await schema.validate(ctx.request.body);
    if (error) {
      return (ctx.body = error.message);
    }
  } catch (e) {
    return ctx.app.emit("error", uploadError, ctx);
  }
  await next();
};
