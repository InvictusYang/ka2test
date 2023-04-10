const { schema } = require("../constant/user.schema");
const validator = async (ctx, next) => {
  try {
    const { goods_name, goods_price, goods_num, goods_img } = ctx.request.body;
    const params = [goods_name, goods_price, goods_num, goods_img];
    const res = await schema.validate(params);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { validator };
