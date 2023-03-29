const { getUserInfo } = require("../service/user.service");
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  //判断数据合法性
  if (!user_name || !password) {
    console.error("用户名或密码为空");
    ctx.status = 400;
    ctx.body = {
      code: "10001",
      message: "用户名或密码为空",
      result: "",
    };
    return;
  }
  await next();
};
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;
  //判断数据合理性
  //需要加上await因为async返回的是一个promise对象，不为空，要用await取结果
  if (await getUserInfo({ user_name })) {
    ctx.status = 409;
    ctx.body = {
      code: "10002",
      message: "用户已经存在",
      result: "",
    };
    return;
  }
};

module.exports = { userValidator };
