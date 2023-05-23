const {
  createAddr,
  findAllAddr,
  updateAddrById,
  removeAddrById,
  setDefaultAddr,
} = require("../service/addr.service");
class AddrController {
  async create(ctx) {
    //1.解析user_id,consingee,phone,address
    const user_id = ctx.state.user.id;
    const { consignee, phone, address } = ctx.request.body;
    //2. 调用service方法操作数据库
    const res = await createAddr({ user_id, consignee, phone, address });
    //3. 返回数据
    ctx.body = {
      code: 0,
      message: "地址添加成功",
      result: res,
    };
  }
  async findAll(ctx) {
    const user_id = ctx.state.user.id;
    const res = await findAllAddr(user_id);

    ctx.body = {
      code: 0,
      message: "获取地址成功",
      result: res,
    };
  }
  //修改地址
  async update(ctx) {
    //拿到的是地址对应的id
    const id = ctx.request.params.id;
    const res = await updateAddrById(id, ctx.request.body);

    ctx.body = {
      code: 0,
      message: "地址修改成功",
      result: res,
    };
  }
  //删除地址
  async remove(ctx) {
    const id = ctx.request.params.id;
    const res = await removeAddrById(id);

    ctx.body = {
      code: 0,
      message: "删除地址成功",
      result: res,
    };
  }

  //设置默认地址,当一个地址默认时，其他地址需要设置非默认，可以使用数据库触发器
  async setDefault(ctx) {
    const user_id = ctx.state.user.id;
    const id = ctx.request.params.id;

    const res = await setDefaultAddr(user_id, id);

    ctx.body = {
      code: 0,
      message: "设置默认地址成功",
      result: res,
    };
  }
}

module.exports = new AddrController();
