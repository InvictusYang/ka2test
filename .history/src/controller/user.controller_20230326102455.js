const { createUser } = require("../service/user.service"); //createUser是一个异步函数
class UserController {
  async register(ctx, next) {
    //获取数据
    console.log(ctx.request.body);
    //操作数据库
    const res = await createUser(
      ctx.request.body.user_name,
      ctx.request.body.password
    );
    //返回结果
    ctx.body = ctx.request.body;
  }
  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

module.exports = new UserController();
