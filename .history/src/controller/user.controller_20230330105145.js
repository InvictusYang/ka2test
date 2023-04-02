const { userRegisterError } = require("../constant/error.type");
const { createUser, getUserInfo } = require("../service/user.service"); //createUser是一个异步函数
class UserController {
  async register(ctx, next) {
    //获取数据
    // console.log(ctx.request.body);
    const { user_name, password } = ctx.request.body;
    //操作数据库
    // console.log(user_name, password);
    try {
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
    } catch (e) {
      console.log(e);
      ctx.app.emit("error", userRegisterError, ctx);
    }
  }
  async login(ctx, next) {
    //解析user_name
    const { user_name } = ctx.request.body;
    ctx.body = `欢迎回来，${user_name}`;
  }
}

module.exports = new UserController();
