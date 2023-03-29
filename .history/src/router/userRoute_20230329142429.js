const Router = require("koa-router");

//导入中间件
const { userValidator} from 

const { register, login } = require("../controller/user.controller");

const router = new Router({ prefix: "/user" });

router.post("/register", register);

router.post("/login", login);

module.exports = router;
