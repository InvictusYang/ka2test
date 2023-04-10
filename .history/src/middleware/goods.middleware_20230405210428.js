const { schema } = require("../constant/user.schema");
const validator = async (ctx, next) => {
  ctx.request.body.validate("post");
};

module.exports = { validator };
