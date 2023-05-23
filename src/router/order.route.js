//创建路由
const Router = require("koa-router");
const router = new Router({ prefix: "/orders" });

//导入中间件
const Joi = require("joi");
const { auth } = require("../middleware/auth.middleware");
const { validator } = require("../middleware/order.middleware");
const {
  postOrder,
  getOrderList,
  modifyOrder,
} = require("../controller/order.controller.js");

//提交订单
router.post(
  "/",
  auth,
  validator({
    address_id: Joi.number().integer(),
    goods_info: Joi.string(),
    total: Joi.string(),
  }),
  postOrder
);
//获取订单列表
router.get("/", auth, getOrderList);

//修改订单接口
router.patch(
  "/:id",
  auth,
  validator({
    state: Joi.number().required(),
  }),
  modifyOrder
);

module.exports = router;
