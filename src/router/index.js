import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/:region(br|eune|euw|jp|kr|lan|las|na|oce|tr|ru)/:username",
      name: "Profile",
      component: Profile,
    },
    { path: "*", name: "404", component: NotFound },
  ],
});

export default router;
