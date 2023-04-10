const Router = require("koa-router");

const { auth, isAdminPermission } = require("../middleware/auth.middleware");
const { validator } = require("../middleware/goods.middleware");

const { uploadGoods, create } = require("../controller/goods.controller");

const router = new Router({ prefix: "/goods" });

// 商品图片上传接口;
router.post("/upload", auth, isAdminPermission, uploadGoods);
//发布商品接口
router.post("/", auth, isAdminPermission, validator, create);
router.put("/:id", auth, isAdminPermission, validator, (ctx) => {
  ctx.body = "修改商品成功";
});
module.exports = router;
