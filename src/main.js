require("dotenv").config();

const app = require("./app");
const { APP_PORT } = require("./config/config.default");

app.listen(APP_PORT,()=>{
    console.log(`server running at ${APP_PORT}`)
}); //port不能乱写，这里要的是端口
