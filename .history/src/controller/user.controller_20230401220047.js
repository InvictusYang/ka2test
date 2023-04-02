const jwt = require("jsonwebtoken");
const { userRegisterError } = require("../constant/error.type");
const {
  createUser,
  getUserInfo,
  updateById,
} = require("../service/user.service"); //createUser是一个异步函数

//导入环境变量,?在main入口文件里定义了process.env了，这里可以直接用
const { JWT_SECRET } = process.env;
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
    //获取用户信息（用户payload载荷中要记录'id, user_name,is_admin'）
    //查询数据库
    try {
      //service定义了这里getUserInfo获取的是包含密码的信息
      //利用剩余参数来解构出获取的信息，并把密码单独拿出来
      const { password, ...res } = await getUserInfo({ user_name });
      ctx.body = {
        code: 0,
        message: "用户登录成功",
        result: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: "1d" }),
        },
      };
    } catch (e) {
      console.error(e);
    }
  }
  async changePassword(ctx, next) {
    //获取密码
    const id = ctx.state.user.id;
    // const password = ctx.request.body.password;
    const { password } = ctx.request.body;
    //操作数据库
    if (await updateById({ id, password })) {
      ctx.body = {
        code: 0,
        message: "修改密码成功",
        result: "",
      };
    }
    //返回结果
    await next();
  }
}

module.exports = new UserController();
