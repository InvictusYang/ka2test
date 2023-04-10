const { schema } = require("../constant/user.schema");
const validator = async (ctx, next) => {
  try {
    const { goods_name, goods_price, goods_num, goods_img } = ctx.request.body;
    const value = await schema.validateAsync({
      goods_name,
      goods_price,
      goods_num,
      goods_img,
    });
    if (err) {
      ctx.body = err;
    }
  } catch (e) {
    console.log(e);
  }
  await next();
};

module.exports = { validator };
