const Koa = require("koa");

// require("dotenv").config();
const { APP_PORT } = require("./config/config.default");

const app = new Koa();

//路由
const Router = require("koa-router");
const indexRouter = new Router();

const getInfo = indexRouter.get("/", (ctx, next) => {
  ctx.body = "hello index";
});

app.use(getInfo);

app.listen({ port: process.env.APP_PORT }); //port不能乱写，这里要的是端口
