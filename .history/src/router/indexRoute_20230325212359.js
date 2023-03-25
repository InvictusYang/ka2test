//路由
const Router = require("koa-router");

router.get("/", (ctx, next) => {
  ctx.body = "hello index";
});

module.exports = router;
