//路由
const Router = require("koa-router");
const indexRouter = new Router();

indexRouter.get("/", (ctx, next) => {
  ctx.body = "hello index";
});
