const Router = require("koa-router");

const { auth, isAdminPermission } = require("../middleware/auth.middleware");

const { uploadGoods } = require("../controller/goods.controller");

const router = new Router({ prefix: "/goods" });

// router.post("/upload", auth, isAdminPermission, uploadGoods);
商品图片上传接口;
router.post("/upload", uploadGoods);
router.post("");
module.exports = router;
