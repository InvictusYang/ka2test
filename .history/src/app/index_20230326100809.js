const Koa = require("koa");

const { koaBody } = require("koa-body");

const userRouter = require("../router/userRoute");

const app = new Koa();

app.use(koaBody());
app.use(userRouter.routes());

module.exports = app; //导出app
