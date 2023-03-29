const Koa = require("koa");

const { koaBody } = require("koa-body");

const userRouter = require("../router/userRoute");

const app = new Koa();

app.use(koaBody());
app.use(userRouter.routes());

//等错误中间件和错误类型都配置好以后，在这里进行

module.exports = app; //导出app
