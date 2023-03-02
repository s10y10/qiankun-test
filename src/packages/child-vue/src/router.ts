import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__
      ? 'micro-vue'
      : import.meta.env.BASE_URL
  ),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/AboutView.vue'),
    },
  ],
});

export default router;
