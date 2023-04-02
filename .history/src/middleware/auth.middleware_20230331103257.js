const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const auth = async (ctx, next) => {
  try {
    jwt.verify(token);
  } catch (e) {}

  await next();
};

module.exports = auth;
