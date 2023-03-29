const { createUser, getUserInfo } = require("../service/user.service"); //createUser是一个异步函数
class UserController {
  async register(ctx, next) {
    //获取数据
    // console.log(ctx.request.body);
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
    //操作数据库
    // console.log(user_name, password);
    const res = await createUser(user_name, password);
    // console.log(res); //返回值是user.controller对应操作的返回值
    //返回结果
    ctx.body = {
      code: 0,
      message: "用户注册成功",
      result: {
        id: res.id,
        user_name: res.user_name,
      },
    };
  }
  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

module.exports = new UserController();
