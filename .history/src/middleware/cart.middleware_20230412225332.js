const joi = require("joi");

const { invalidGoodsId } = require("../constant/error.type");
const schema = joi.object({
  goods_id: joi.number().required()),
});

const validator = async (ctx, next) => {
  try {
    const { value, error } = await schema.validate(ctx.request.body);
    if (error) {
        return ctx.app.emit("error", invalidGoodsId, ctx);
    }
  } catch (e) {
    console.log(e.message)
  }
  await next();
};

module.exports = { validator };
