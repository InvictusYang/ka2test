const Router = require("koa-router");
const router = new Router({ prefix: "/user" });
const { register } = require("../controller/user.controller");
router.get("/");

module.exports = router;
