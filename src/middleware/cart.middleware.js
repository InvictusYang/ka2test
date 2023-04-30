const joi = require("joi");

const { cartFormatError } = require("../constant/error.type");

//使用闭包来改造validator，可以单独为多种场景配置验证规则
const validator = (rules) => {
  //不写return会返回undefined
  return async (ctx, next) => {
    try {
      const schema = joi.object(rules);
      //如果没传对应的required数据，ctx.request.body为undefined，这时需要替换为空对象
      //因为joi里schema.validateAsync()校验的元素是一个对象
      const res = await schema.validateAsync(ctx.request.body || {});
      console.log("passed");
    } catch (error) {
      console.log(error);
      cartFormatError.result = error;
      return ctx.app.emit("error", cartFormatError, ctx);
    }
    await next();
  };
};

module.exports = { validator };
