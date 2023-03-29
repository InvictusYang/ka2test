//导入User模型对象
const User = require("../model/user.model");

class UserService {
  async createUser(user_name, password) {
    try {
      //插入数据
      const res = await User.create({ user_name, password });
      console.log(res);
      return res.dataValues;
    } catch (e) {
      console.log(e);
    }
  }
  async getUserInfo({}) {}
}

module.exports = new UserService();
