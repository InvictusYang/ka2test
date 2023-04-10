const Router = require("koa-router");

const roouter = new Router({ prefix: "/goods" });

router.post("/upload", uploadGoods);
