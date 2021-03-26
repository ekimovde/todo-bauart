import Vue from "vue";
import VueRouter from "vue-router";
import vHome from "@/components/Pages/vHome";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "vHome",
    component: vHome,
  },
  {
    path: "*",
    name: "NotFound",
    redirect: vHome,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
