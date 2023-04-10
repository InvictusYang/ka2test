const Router = require("koa-router");

const { auth } = require("../middleware/auth.middleware");

const { uploadGoods } = require("../controller/goods.controller");

const router = new Router({ prefix: "/goods" });

router.post("/upload", auth, uploadGoods);

module.exports = router;
