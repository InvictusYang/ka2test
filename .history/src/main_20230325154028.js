const Koa = require("koa");

require("dotenv").config();
// const { APP_PORT } = require("./config/config.default");

const app = new Koa();

const indexRoute = require("/src");
app.use(indexRouter.routes());
app.use(userRouter.routes());

app.listen({ port: process.env.APP_PORT }); //port不能乱写，这里要的是端口
