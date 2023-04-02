const jwt = require("jsonwebtoken");
const auth = async (ctx, next) => {
  await next();
};

module.exports = auth;
