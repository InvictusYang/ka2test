const dotenv = require("dotenv");
dotenv.config();

// console.log(process.env.APP_PORT);//打印env设定的端口
module.exports = process.env; //用户环境对象
