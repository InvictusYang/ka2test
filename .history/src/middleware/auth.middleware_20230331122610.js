const {
  TokenExpiredError,
  JsonWebTokenError,
} = require("../constant/error.type");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const auth = async (ctx, next) => {
  //从ctx.request.headerli拿到authorization信息
  //就是Bearer开头的JWT token信息
  const { authorization } = ctx.request.header;
  //将authorization里的Berarer+空格替换成空格，以便验签
  const token = authorization.replace("Bearer ", "");
  console.log(token); //拿到了token串

  try {
    //user中包含了payload的信息（id,user_name, is_admin）
    const user = jwt.verify(token, JWT_SECRET);
    //将拿到的user信息挂载到ctx.state.user上，方便后期获取
    ctx.state.user = user;
  } catch (e) {
    switch (e.name) {
      case "TokenExpiredError":
        console.error("Token已过期", e);
        return ctx.app.emit("error", TokenExpiredError, ctx);
      case "JsonWebTokenError":
        console.error("Token错误", e);
        return ctx.app.emit("error", JsonWebTokenError, ctx);
    }
  }

  await next();
};

module.exports = { auth };
