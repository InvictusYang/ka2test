//导入User模型对象
const User = require("../model/user.model");

class UserService {
  async createUser(user_name, password) {
    try {
      //插入数据
      const res = await User.create({ user_name: "ff", password: "fsdfsd" });
      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserService();
