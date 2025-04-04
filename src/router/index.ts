import MainLayout from "@layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import AbouthPage from "@pages/About/index.vue";
import FAQPage from "@pages/FAQ/index.vue";
import HomePage from "@pages/HomePage/index.vue";
import LoginPage from "@/pages/Authorization/Login/index.vue";
import NoPermission from "@pages/NoPermission/index.vue";
import NotFound from "@pages/NotFound/index.vue";
import SearchPage from "@pages/Search/index.vue";
import SharePage from "@pages/Share/index.vue";
import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import PersonalPage from "@/pages/Personal/index.vue";
import SearchPageDetail from "@/pages/Search/_id/index.vue";
import RegisterPage from "@/pages/Authorization/Register/index.vue";
import VerifyEmailPage from "@/pages/Authorization/Verify/Email/index.vue";
import VerifyPhonePage from "@/pages/Authorization/Verify/Phone/index.vue";
import ProfileCreatePage from "@/pages/Authorization/ProfileCreate/index.vue";
import ForgotPasswordPage from "@/pages/Authorization/ForgotPassword/index.vue";
import RequestEmailOtpPage from "@/pages/Authorization/Verify/RequestEmailOtp/index.vue";

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
        path: "/auth",
        component: AuthLayout,
        children: [
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
            path: "/verify-email",
            name: "VerifyEmailPage",
            component: VerifyEmailPage,
          },
          {
            path: "/verify-phone",
            name: "VerifyPhonePage",
            component: VerifyPhonePage,
          },
          {
            path: "/profile-create",
            name: "ProfileCreatePage",
            component: ProfileCreatePage,
          },
          {
            path: "/forgot-password",
            name: "ForgotPasswordPage",
            component: ForgotPasswordPage,
          },
          {
            path: "/request-email-otp",
            name: "RequestEmailOtpPage",
            component: RequestEmailOtpPage,
          },
        ],
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
