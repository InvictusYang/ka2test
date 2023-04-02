//导入User模型对象
const User = require("../model/user.model");

class UserService {
  async createUser(user_name, password) {
    try {
      //插入数据
      const res = await User.create({ user_name, password });
      return res.dataValues;
    } catch (e) {
      console.log(e);
    }
  }
  async getUserInfo({ id, user_name, password, is_admin }) {
    const whereOpt = {};
    //Object.assign() 方法将所有可枚举（Object.propertyIsEnumerable() 返回 true）的自有（Object.hasOwnProperty() 返回 true）属性从一个或多个源对象复制到目标对象，返回修改后的对象。
    id && Object.assign(whereOpt, { id });
    user_name && Object.assign(whereOpt, { user_name });
    password && Object.assign(whereOpt, { password });
    is_admin && Object.assign(whereOpt, { is_admin });

    //findOne 方法获得它找到的第一个条目(它可以满足提供的可选查询参数).
    const res = await User.findOne({
      attributes: ["id", "user_name", "password", "is_admin"],
      where: whereOpt,
    });
    return res ? res.dataValues : null;
  }
  async updateById({ id, user_name, password, is_admin }) {
    const whereOpt = { id };
    const newUser = {};
  }
}

module.exports = new UserService();
