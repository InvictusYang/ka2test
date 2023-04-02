const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const auth = async (ctx, next) => {
  try {
    //user中包含了payload的信息（id,user_name, is_admin）
    const user = jwt.verify(token);
  } catch (e) {}

  await next();
};

module.exports = auth;
