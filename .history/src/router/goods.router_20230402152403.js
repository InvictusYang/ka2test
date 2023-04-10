const Router = require("koa-router");

const { uploadGoods } = require("../controller/goods.controller");

const roouter = new Router({ prefix: "/goods" });

router.post("/upload", uploadGoods);
