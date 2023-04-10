const { schema } = require("../constant/user.schema");
const validator = async (ctx, next) => {
  const { erro, value } = schema.validate();
};

module.exports = { validator };
