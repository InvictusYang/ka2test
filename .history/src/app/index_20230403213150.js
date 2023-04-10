const Koa = require("koa");

const { koaBody } = require("koa-body");

//引入单独配置的errHandler
const errHandler = require("./errHandler");

// const userRouter = require("../router/userRoute");
// const goodsRouter = require("../router/goods.router");
// 定义了router管理文件之后，就不用一个个引入了
const router = require("../router/index");

const app = new Koa();

app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: "",
      keepExtensions: true,
    },
  })
);
// app.use(userRouter.routes());
// app.use(goodsRouter.routes());
app.use(router.routes());
//允许http请求方式
app.use(router.allowedMethods());

//等错误中间件和错误类型都配置好以后，在这里进行注册。做统一错误处理
app.on("error", errHandler);
module.exports = app; //导出app
