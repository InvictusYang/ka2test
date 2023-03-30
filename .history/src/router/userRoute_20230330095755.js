const Router = require("koa-router");

//导入中间件
const { userValidator, verifyUser,cryptPassword } = require("../middleware/user.middleware");

const { register, login } = require("../controller/user.controller");

const router = new Router({ prefix: "/user" });

router.post("/register", userValidator, verifyUser, register); //路由后先交由中间件处理再交由controller

router.post("/login", login);

module.exports = router;