const Koa = require("koa");

const { koaBody } = require("koa-body");

const errHandler

const userRouter = require("../router/userRoute");

const app = new Koa();

app.use(koaBody());
app.use(userRouter.routes());

//等错误中间件和错误类型都配置好以后，在这里进行注册。做统一错误处理
app.on("error", (err, ctx) => {});
module.exports = app; //导出app
