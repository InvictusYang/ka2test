const Koa = require("koa");

// require("dotenv").config();
const { APP_PORT } = require("./config/config.default");

const app = new Koa();

//路由
const Router = require("koa-router");
const indexRouter = new Router();

indexRouter.get("/", (ctx, next) => {
  ctx.body = "hello index";
});

app.use(indexRouter).use((ctx) => {
  console.log(456);
  ctx.body = "hello";
});
app.listen({ port: process.env.APP_PORT }); //port不能乱写，这里要的是端口
