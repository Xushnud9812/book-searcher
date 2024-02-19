import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home.vue'),
    },
    {
      path: '/books/:id',
      name: 'book-details',
      component: () => import('@/pages/books/bookDetails.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login.vue')
    }
  ]
})


export default router