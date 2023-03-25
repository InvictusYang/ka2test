const Koa = require("koa");

const app = new Koa();

const router = new Router();

const userRouter = require("./router/userRoute");

app.use(userRouter.routes());

module.exports = app; //导出app
