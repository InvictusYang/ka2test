//导入koa-router
const Router = require("koa-router");
//引入中间件
const Joi = require("joi");
const { auth } = require("../middleware/auth.middleware");
const { validator } = require("../middleware/cart.middleware");
//引入控制器
const {
  add,
  findAll,
  updateCart,
  remove,
  selectAll,
  unselectAll,
} = require("../controller/cart.controller");
//实例化router对象，并定义统一的前缀
const router = new Router({ prefix: "/carts" });
//编写路由规则
//添加到购物车接口：登录，校验格式
router.post(
  "/",
  auth,
  validator({
    goods_id: Joi.number().required(),
  }),
  add
);
//获取购物车列表
router.get("/", auth, findAll);
//更新购物车，通过id指定要修改的数据
router.patch(
  "/:id",
  auth,
  validator({
    number: Joi.number(),
    selected: Joi.boolean(),
  }),
  updateCart
);
//删除购物车接口
//数据校验中，要使用validator校验传入的商品ids
router.delete(
  "/",
  auth,
  validator({ ids: Joi.array().items(Joi.number()).required() }),
  remove
);

//全选/取消全选购物车
router.post("/selectall", auth, selectAll);
router.post("/unselectall", auth, unselectAll);
// router.post("/select", auth, select);
//导出router对象
module.exports = router;
