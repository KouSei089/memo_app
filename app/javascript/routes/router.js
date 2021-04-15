import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AboutPost from "../views/AboutPost.vue";
import HomeProfile from "../views/HomeProfile.vue";
import HeaderHome from "../views/HeaderHome.vue";
import HeaderAbout from "../views/HeaderAbout.vue";

const router = new Router({
  mode: "history",
  routes: [
    //ルーティングの設定
    {
      path: "/",
      components: {
        default: Home,
        header: HeaderHome
      }
    },
    {
      path: "/new-create",
      component: {
        NewCreate
      }
    },
    {
      path: "/about/:id",
      components: {
        default: About,
        header: HeaderAbout
      },
      props: true,
      children: [
        { path: "post", component: AboutPost ,name: "home-id-post"},
        { path: "profile", component: HomeProfile }
      ]
    },
  ],
});
export default router;
