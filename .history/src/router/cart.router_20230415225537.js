//导入koa-router
const Router = require("koa-router");
//引入中间件
const { auth } = require("../middleware/auth.middleware");
const { validator } = require("../middleware/cart.middleware");
//引入控制器
const { add, findAll } = require("../controller/cart.controller");
//实例化router对象，并定义统一的前缀
const router = new Router({ prefix: "/carts" });
//编写路由规则
//添加到购物车接口：登录，校验格式
router.post("/", auth, validator, add);
//获取购物车列表
router.get("/", auth, findAll);
//导出router对象
module.exports = router;
