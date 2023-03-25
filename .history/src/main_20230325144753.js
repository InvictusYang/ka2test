const Koa = require("koa");

// const { APP_PORT } = require("./config/config.default");
import * as dotenv from "dotenv";
dotenv.config();

const app = new Koa();

app
  .use(async (ctx, next) => {
    await next(); //只有一个中间件时，next直接匹配后面的路由
    console.log(123);
  })
  .use((ctx) => {
    console.log(456);
    ctx.body = "hello";
  });
app.listen(APP_PORT);
