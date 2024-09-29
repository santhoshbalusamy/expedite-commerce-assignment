import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'product',
          component: () => import('@/views/ProductShowcase.vue'), // lazy load the component
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/views/userProfile.vue'), // lazy load the component
        },
      ]
    },
  ],
});

export default router;
