const userValidator = async (ctx, next) => {
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
};

module.exports = { userValidator };
