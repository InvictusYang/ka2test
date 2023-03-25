//路由
const Router = require("koa-router");
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "hello index";
});

module.exports = indexRouter;
