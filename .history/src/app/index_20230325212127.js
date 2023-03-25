const Koa = require("koa");

const app = new Koa();

const userRouter = require("./router/userRoute");

app.use(userRouter.routes());

module.exports = app; //导出app
