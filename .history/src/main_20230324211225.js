const Koa = require("koa");
const app = new Koa();

app
  .use(async (ctx, next) => {
    await next(); //只有一个中间件时，next直接匹配后面的路由
    console.log(123);
  })
  .use((ctx) => {
    console.log(456);
  });
app.listen(3000);
