const fs = require("fs");

const Router = require("koa-router");
fs.readdirSync(__dirname).forEach((file) => {
  //   console.log(file);//可以拿到router目录下所有的文件
});
