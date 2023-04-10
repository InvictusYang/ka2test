const Router = require("koa-router");

const { auth, isAdminPermission } = require("../middleware/auth.middleware");

const { uploadGoods } = require("../controller/goods.controller");

const router = new Router({ prefix: "/goods" });

// 商品图片上传接口;
router.post("/upload", auth, isAdminPermission, uploadGoods);
//发布商品接口
router.post("/", auth, isAdminPermission, validator);
module.exports = router;
