import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const router = new Router({
  mode: "history",
  routes: [
    //ルーティングの設定
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about/:id",
      component: About,
      props: true,
      children: [
        { path: "post", component:  }
      ]
    },
  ],
});
export default router;
