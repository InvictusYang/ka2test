//导入错误类型
const { userFormatError, userExists } = require("../constant/error.type");
//从service层中导出getUserInfo方法
const { getUserInfo } = require("../service/user.service");
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  //判断数据合法性
  if (!user_name || !password) {
    console.error("用户名或密码为空", ctx.request.body);
    ctx.app.emit("error", { userFormatError }, ctx);
    return;
  }
  await next();
};
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;
  //判断数据合理性
  //需要加上await因为async返回的是一个promise对象，不为空，要用await取结果
  if (await getUserInfo({ user_name })) {
    ctx.app.emi("error");
    return;
  }
  // 如果不符合条件，执行下一个中间件
  await next();
};

module.exports = { userValidator, verifyUser };
