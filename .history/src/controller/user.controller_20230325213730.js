class UserController {
  async register(ctx, next) {
    ctx.body = "用户注册成功";
  }
}

module.exports = new UserController();
