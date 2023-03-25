const Router = require("koa-router");
const userRouter = new Router();

userRouter.get("/user", (ctx, next) => {
  ctx.body = "hello user";
});

module.exports = userRouter;
