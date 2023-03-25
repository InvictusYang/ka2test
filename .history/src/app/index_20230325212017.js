const Koa = require("koa");
const app = new Koa();
const indexRouter = require("./router/indexRoute");
const userRouter = require("./router/userRoute");
app.use(indexRouter.routes());
app.use(userRouter.routes());
