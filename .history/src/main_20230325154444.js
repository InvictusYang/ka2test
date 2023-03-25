const Koa = require("koa");

require("dotenv").config();

const indexRoute = require("./router/indexRoute");
const userRoute = require("./router/userRoute");
// const { APP_PORT } = require("./config/config.default");

const app = new Koa();

app.use(indexRouter.routes());
app.use(userRouter.routes());

app.listen({ port: process.env.APP_PORT }); //port不能乱写，这里要的是端口
