const path = require("path");

const Koa = require("koa");

const { koaBody } = require("koa-body");
const koaStatic = require("koa-static");

//引入单独配置的errHandler
const errHandler = require("./errHandler");

// const userRouter = require("../router/userRoute");
// const goodsRouter = require("../router/goods.router");
// 定义了router管理文件之后，就不用一个个引入了
const router = require("../router/index");

const app = new Koa();

app
  .use(
    koaBody({
      multipart: true,
      formidable: {
        //配置选项里option里不推荐使用相对路径
        //option里的相对路径不是相对于当前文件，而是相对去process.cwd()
        //按照当前项目，就会找到koa+nodejs文件夹上一层目录了
        //推荐使用绝对路径
        //文件上传后，信息会被挂载到ctx里
        //可以通过ctx.request.files访问
        uploadDir: path.join(__dirname, "../upload"),
        keepExtensions: true,
      },
    })
  )
  .use(koaStatic(path.join(__dirname, "../upload")));
// app.use(userRouter.routes());
// app.use(goodsRouter.routes());
app.use(router.routes());
//允许http请求方式
app.use(router.allowedMethods());

//等错误中间件和错误类型都配置好以后，在这里进行注册。做统一错误处理
app.on("error", errHandler);
module.exports = app; //导出app
