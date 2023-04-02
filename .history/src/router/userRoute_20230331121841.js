const Router = require("koa-router");

//导入中间件
const {
  userValidator,
  verifyUser,
  cryptPassword,
  verifyLogin,
} = require("../middleware/user.middleware");

const 

const { register, login } = require("../controller/user.controller");

const router = new Router({ prefix: "/user" });

router.post("/register", userValidator, verifyUser, cryptPassword, register); //路由后先交由中间件处理再交由controller

router.post("/login", userValidator, verifyLogin, login);

//修改密码接口
router.patch("/", (ctx, next) => {
  //从ctx.request.headerli拿到authorization信息
  //就是Bearer开头的JWT token信息
  const { authorization } = ctx.request.header;
  //将authorization里的Berarer+空格替换成空格，以便验签
  const token = authorization.replace("Bearer ", "");
  console.log(token); //拿到了token串
});

module.exports = router;
