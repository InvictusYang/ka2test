const { createUser } = require("../service/user.service"); //createUser是一个异步函数
class UserController {
  async register(ctx, next) {
    //获取数据
    // console.log(ctx.request.body);
    const { user_name, password } = ctx.request.body;
    //操作数据库
    // console.log(user_name, password);
    const res = await createUser(user_name, password);
    // console.log(res); //返回值是user.controller对应操作的返回值
    //返回结果
    // ctx.body = ctx.request.body;
  }
  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

module.exports = new UserController();
