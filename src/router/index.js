import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
// import LoginPage from '@/pages/LoginPage.vue'


const routes = [
  //{ path: '/', name: 'login', component: () => import('@/pages/LoginPage.vue') },
  {
    path: '/',
    component: () => import('@/layout/MainLayout.vue'),
    children: [
      { path: '', redirect: 'home' }, // Redireciona a raiz para 'home'
      { path: 'home', component: () => import('@/pages/HomePage.vue')},
      // {path: '/login', name: 'login', component: LoginPage},
      // { path: '/register', name: 'register', component: () => import('@/pages/SignUp.vue') },
      
      { path: '/aulas', name: 'aulas', component: () => import('@/pages/CursosDisponiveis.vue') },
      { path: '/Ambiental', name: 'Ambiental', component: () => import('@/pages/GestaoDetalhes.vue') },
      { path: '/Qualidade', name: 'Qualidade', component: () => import('@/pages/GestaoQualidade.vue') },
      { path: '/Saude', name: 'Saude', component: () => import('@/pages/SaudeDetalhes.vue') },
      { path: '/Higiene', name: 'Higiene', component: () => import('@/pages/HigieneDetalhes.vue') },
      { path: '/Monitoria', name: 'Monitoria', component: () => import('@/pages/MonitoriaDetalhes.vue') },
      { path: '/Nebosh', name: 'Nebosh', component: () => import('@/pages/NeboshDetalhes.vue') },
      { path: '/Contacto', name: 'Contacto', component: () => import('@/components/form/home/ContactoHome.vue') },
      { path: '/Depoimentos', name: 'Depoimentos', component: () => import('@/pages/DepoiMentos.vue') },
      { path: '/Blog', name: 'Blog', component: () => import('@/pages/BlogHome.vue') },
      // { path: '/Cursos', name: 'Cursos', component: () => import('@/pages/GestaoDetalhes.vue') },

      { path: '/Cursos', name: 'Cursos', component: () => import('@/pages/CursosCompletos.vue') },
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
