import Vue from "vue";
import VueRouter from "vue-router";

import app from "./App";
import goods from "./components/goods/goods";
import ratings from "./components/ratings/ratings";
import seller from "./components/seller/seller";

/* eslint-disable no-new */
// new Vue({
//   el: "body",
//   components: { app },
// });

Vue.use(VueRouter);
let router = new VueRouter();
router.map({
  "/goods": {
    component: goods,
  },
  "/ratings": {
    component: ratings,
  },
  "/seller": {
    component: seller,
  },
});
// 启动路由
router.start(app, "#app");
// 请求默认路由
router.go("/goods");
