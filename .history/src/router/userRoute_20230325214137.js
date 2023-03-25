const Router = require("koa-router");

const { register } = require("../controller/user.controller");

const router = new Router({ prefix: "/user" });

router.get("/");

module.exports = router;
