class UserController {
  async register(ctx, next) {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
  }
  async login(ctx, next) {
    ctx.body = "用户登录成功";
  }
}

module.exports = new UserController();
