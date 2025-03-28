import MainLayout from '@layouts/MainLayout.vue';
import HomePage from '@pages/HomePage/index.vue';
import LoginPage from '@pages/LoginPage/index.vue';
import NoPermission from '@pages/NoPermission/index.vue';
import NotFound from '@pages/NotFound/index.vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    // Pages use the MainLayout.
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'HomePage',
        component: HomePage,
      },
    ],
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/no-permission',
    name: 'NoPermission',
    component: NoPermission,
  },
  // Catch-all for invalid routes.
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
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
    next({ name: 'NotFound' });
    return;
  }
  // For HomePage route, check if token exists in localStorage.
  if (to.name === 'HomePage') {
    if (localStorage.getItem('token')) {
      next(); // Token exists: allow navigation.
    } else {
      next({ name: 'LoginPage' }); // No token: redirect.
    }
  } else {
    // For all other routes, allow navigation.
    next();
  }
});

export default router;
