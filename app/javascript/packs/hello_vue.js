import Vue from "vue";
import Vuex from "vuex"
import VueRouter from "vue-router";
import store from "../store/store.js";
import router from "../routes/router.js";
import App from "../app.vue";
import axios from "axios"; 
import VueAxios from "vue-axios"; 
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    store,
    router,
    render: (h) => h(App),
  }).$mount();
  document.body.appendChild(app.$el);
});
