const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const auth = async (ctx, next) => {
  try {
    //user中包含了payload的信息（id,user_name, is_admin）
    const user = jwt.verify(token, JWT_SECRET);
    //将拿到的user信息挂载到ctx.state.user上，方便后期获取
    ctx.state.user = user;
  } catch (e) {}

  await next();
};

module.exports = auth;
