const fs = require("fs");

const Router = require("koa-router");
const router = new Router();
fs.readdirSync(__dirname).forEach((file) => {
  //   console.log(file);//可以拿到router目录下所有的文件
    if (file !== 'index.js') {
        const r = 
    }
});
