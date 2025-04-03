import MainLayout from "@layouts/MainLayout.vue";
import AbouthPage from "@pages/About/index.vue";
import FAQPage from "@pages/FAQ/index.vue";
import HomePage from "@pages/HomePage/index.vue";
import LoginPage from "@/pages/Login/index.vue";
import NoPermission from "@pages/NoPermission/index.vue";
import NotFound from "@pages/NotFound/index.vue";
import SearchPage from "@pages/Search/index.vue";
import SharePage from "@pages/Share/index.vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import PersonalPage from "@/pages/Personal/index.vue";
import SearchPageDetail from "@/pages/Search/_id/index.vue";
import RegisterPage from "@/pages/Register/index.vue";
import VerifyPage from "@/pages/Verify/index.vue";
import ProfileCreatePage from "@/pages/ProfileCreate/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    // Pages use the MainLayout.
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "/search",
        name: "SearchPage",
        component: SearchPage,
      },
      {
        path: "/search/:id",
        name: "SearchPageDetail",
        component: SearchPageDetail,
      },
      {
        path: "/share",
        name: "SharePage",
        component: SharePage,
      },
      {
        path: "/about",
        name: "AbouthPage",
        component: AbouthPage,
      },
      {
        path: "/faq",
        name: "FAQPage",
        component: FAQPage,
      },
      {
        path: "/personal",
        name: "PersonalPage",
        component: PersonalPage,
      },
      {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
      },
      {
        path: "/register",
        name: "RegisterPage",
        component: RegisterPage,
      },
      {
        path: "/verify",
        name: "VerifyPage",
        component: VerifyPage,
      },
      {
        path: "/profile-create",
        name: "ProfileCreatePage",
        component: ProfileCreatePage,
      },
    ],
  },

  {
    path: "/no-permission",
    name: "NoPermission",
    component: NoPermission,
  },
  // Catch-all for invalid routes.
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard middleware.
router.beforeEach((to, from, next) => {
  // If no route is matched, redirect to NotFound.
  if (!to.matched.length) {
    next({ name: "NotFound" });
    return;
  }
  next();
  // // For HomePage route, check if token exists in localStorage.
  // if (to.name === "HomePage") {
  //   if (localStorage.getItem("token")) {
  //     next(); // Token exists: allow navigation.
  //   } else {
  //     next({ name: "LoginPage" }); // No token: redirect.
  //   }
  // } else {
  //   // For all other routes, allow navigation.
  //   next();
  // }
});

export default router;
