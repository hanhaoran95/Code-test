// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";
import login from "@/views/login"
import register from "@/views/register"
import profile from "@/views/profile"

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Login",
      meta: {
        title: "Login"
      },
      component: login
    },
    {
      path: "/register",
      name: "Register",
      meta: {
        title: "register"
      },
      component: register
    },
    {
      path: "/profile",
      name: "Profile",
      meta: {
        title: "profile"
      },
      component: profile
    },
  ]
});


export default router;

