//导入koa-router
const Router = require("koa-router");
//实例化router对象，并定义统一的前缀
const router = new Router({ prefix: "/carts" });
//编写路由规则
router.post("/", (ctx) => {
  ctx.body = "添加到购物车成功";
});
//导出router对象
