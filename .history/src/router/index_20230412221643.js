const fs = require("fs");

const Router = require("koa-router");
const router = new Router();
fs.readdirSync(__dirname).forEach((file) => {
  //   console.log(file);//可以拿到router目录下所有的文件
  //fs.readdirSync()方法用于同步读取给定目录的内容。该方法返回一个数组，其中包含目录中的所有文件名或对象。
  if (file !== "index.js") {
    //排除该文件自身
    //获得文件
    let r = require("./" + file);
    //利用router注册中间件
    router.use(r.routes());
  }
});

module.exports = router;
