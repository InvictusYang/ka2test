const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  await next(); //只有一个中间件时，next直接匹配后面的路由
  ctx.response.type = "text/html";
  ctx.body = "<h1>Hello World!</h1>";
});
app.listen(3000);
