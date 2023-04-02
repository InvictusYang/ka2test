//导入bcrypt加密包
const bcrypt = require("bcryptjs");
//导入错误类型
const {
  userFormatError,
  userExists,
  userNotExists,
  userLoginErr,
  userPwdErr,
} = require("../constant/error.type");
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
  //   if (await getUserInfo({ user_name })) {
  //     ctx.app.emit("error", { userExists }, ctx);
  //     return;
  //   }
  try {
    const res = await getUserInfo({ user_name });
    if (res) {
      console.error("用户名已经存在", { user_name });
      ctx.app.emit("error", userExists, ctx);
      return;
    }
  } catch (e) {
    ctx.app.emit("error", userRegisterError, ctx);
    return;
  }
  // 如果不符合条件，执行下一个中间件
  await next();
};
const cryptPassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  //生成加密盐
  const salt = bcrypt.genSaltSync(10);
  //hash里保存的是 密文
  const hash = bcrypt.hashSync(password, salt);
  //把密文挂载到body里
  ctx.request.body.password = hash;
  await next();
};
const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  try {
    //1.判断用户是否存在
    const res = await getUserInfo(user_name);

    if (!res) {
      console.error("用户不存在", user_name);
      ctx.app.emit("error", { userNotExists }, ctx);
      return;
    }
  } catch (e) {
    console.error(e);
    ctx.app.emit("error", userLoginErr, ctx);
  }
  //2.比对密码是否匹配
  //res.password是getUserInfo的返回值里的数据
  //使用async/await模式，官方推荐
  const match = await bcrypt.compare(password, res.password);
  if (!match) {
    ctx.app.emit("error", userPwdErr, ctx);
  }

  await next();
};
module.exports = { userValidator, verifyUser, cryptPassword, verifyLogin };
