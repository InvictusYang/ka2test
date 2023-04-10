const Router = require("koa-router");

const { auth, isAdminPermission } = require("../middleware/auth.middleware");

const { uploadGoods } = require("../controller/goods.controller");

const router = new Router({ prefix: "/goods" });

// router.post("/upload", auth, isAdminPermission, uploadGoods);
router.post("/upload", uploadGoods);

module.exports = router;
