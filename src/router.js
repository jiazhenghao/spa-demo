/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
import Vue from "vue";
import VueRouter from "vue-router";
import Category from "./theme/Category.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Category
    }
  ]
});

export default router;
