const Router = require("koa-router");

const { auth, isAdminPermission } = require("../middleware/auth.middleware");
const { validator } = require("../middleware/goods.middleware");

const {
  uploadGoods,
  create,
    update,
  delete
} = require("../controller/goods.controller");

const router = new Router({ prefix: "/goods" });

// 商品图片上传接口;
router.post("/upload", auth, isAdminPermission, uploadGoods);
//发布商品接口
router.post("/", auth, isAdminPermission, validator, create);
//修改商品接口
router.put("/:id", auth, isAdminPermission, validator, update);
//硬删除
router.delete('/:id',auth, isAdminPermission, validator, delete)
module.exports = router;
