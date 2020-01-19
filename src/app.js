/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
import Vue from "vue";
import AppLayout from "./theme/Layout.vue";
import router from "./router";
import store from "./vuex/index";

export const app = new Vue({
  router,
  ...AppLayout,
  store
});

export { router, store };
