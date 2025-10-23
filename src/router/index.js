import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layout/MainLayout.vue'),
    children: [
      { path: '', redirect: 'home' },
      { path: 'home', component: () => import('@/pages/HomePage.vue')},
      { path: 'declaracoes', name: 'declaracoes', component: () => import('@/pages/DeclaracoesHome.vue')},
      { 
        path: 'declaracoes/:uniqueLink', 
        name: 'declaracoesLink', 
        component: () => import('@/pages/DeclaracoesHome.vue'),
        props: true 
      },
      { path: 'Ambiental', name: 'Ambiental', component: () => import('@/pages/GestaoDetalhes.vue') },
      { path: 'Qualidade', name: 'Qualidade', component: () => import('@/pages/GestaoQualidade.vue') },
      { path: 'Saude', name: 'Saude', component: () => import('@/pages/SaudeDetalhes.vue') },
      { path: 'Higiene', name: 'Higiene', component: () => import('@/pages/HigieneDetalhes.vue') },
      { path: 'Monitoria', name: 'Monitoria', component: () => import('@/pages/MonitoriaDetalhes.vue') },
      { path: 'Nebosh', name: 'Nebosh', component: () => import('@/pages/NeboshDetalhes.vue') },
      { path: 'Contacto', name: 'Contacto', component: () => import('@/components/form/home/ContactoHome.vue') },
      { path: 'Depoimento', name: 'Depoimento', component: () => import('@/pages/DepoiMentos.vue') },
      { path: 'Certificacoes', name: 'Blog', component: () => import('@/pages/BlogHome.vue') },
      { path: 'SobreNos', name: 'SobreNos', component: () => import('@/pages/HeroSobreNos.vue') },
      { path: 'Cursos', name: 'Cursos', component: () => import('@/pages/CursosCompletos.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }

    return { top: 0, behavior: 'smooth' };
  }
});

const app = createApp({});
app.use(router);
app.mount('#app');

export default router;