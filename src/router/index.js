import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import goTo from "vuetify/lib/services/goto";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // lazy load the other routes
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      title: 'Unilink | About Us'
    }
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: () => import("../views/ContactUs.vue"),
    meta: {
      title: 'Unilink | Contact Us'
    }
  },
  {
    path: "/*",
    component: 404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// change broswer tab title
const DEFAULT_TITLE = "Unilink Nexus International";
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

// scroll to top of page
router.afterEach(() => {
  goTo(0, { duration: 0 });
});

export default router;
