/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable quotes */
import Vue from "vue";
import AppLayout from "./theme/Layout.vue";
import router from "./router";

export const app = new Vue({
  router,
  ...AppLayout
});

export { router };
