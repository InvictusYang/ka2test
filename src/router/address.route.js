//1. 导入koa-router
const Router = require("koa-router");
//2. 实例化对象
const router = new Router({ prefix: "/address" });

//中间件，控制器
const Joi = require("joi");
const { auth } = require("../middleware/auth.middleware");
const { validator } = require("../middleware/address.middleware");
const {
  create,
  findAll,
  update,
  remove,
  setDefault,
} = require("../controller/addr.controller");

//3. 编写路由规则
//3.1 添加接口：登录，格式
router.post(
  "/",
  auth,
  validator({
    consignee: Joi.string().required(),
    phone: Joi.string()
      .pattern(
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      )
      .required(),
    address: Joi.string().required(),
  }),
  create
);
//获取地址
router.get("/", auth, findAll);

//修改地址
router.put(
  "/:id",
  auth,
  validator({
    consignee: Joi.string().required(),
    phone: Joi.string()
      .pattern(
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      )
      .required(),
    address: Joi.string().required(),
  }),
  update
);
//删除地址
router.delete("/:id", auth, remove);
//设置默认地址
router.patch("/:id", auth, setDefault);
//4. 导出router对象
module.exports = router;
