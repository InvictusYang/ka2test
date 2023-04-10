const Router = require("koa-router");

const { auth, isAdminPermission } = require("../middleware/auth.middleware");
const { validator } = require("../middleware/goods.middleware");

const {
  uploadGoods,
  create,
  update,
  remove,
} = require("../controller/goods.controller");

const router = new Router({ prefix: "/goods" });

// 商品图片上传接口;
router.post("/upload", auth, isAdminPermission, uploadGoods);
//发布商品接口
router.post("/", auth, isAdminPermission, validator, create);
//修改商品接口
router.put("/:id", auth, isAdminPermission, validator, update);
//硬删除,delete是一个关键字，所以不能直接作为方法名
// router.delete("/:id", auth, isAdminPermission, remove);
//软删除
router.post("/:id/off");
module.exports = router;
