const Koa = require("koa");

const KoaBody = require("koa-body");

const userRouter = require("../router/userRoute");

const app = new Koa();

app.use(userRouter.routes());

module.exports = app; //导出app
