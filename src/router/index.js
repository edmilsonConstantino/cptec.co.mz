import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';



const routes = [
  //{ path: '/', name: 'login', component: () => import('@/pages/LoginPage.vue') },
  {
    path: '/',
    component: () => import('@/layout/MainLayout.vue'),
    children: [
      { path: '', redirect: 'home' }, // Redireciona a raiz para 'home'
      { path: 'home', component: () => import('@/pages/HomePage.vue')},
      
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

//const pinia = createPinia();
const app = createApp({});

//app.use(pinia);
app.use(router);
app.mount('#app');

export default router;
