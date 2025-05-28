import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import axios from 'axios';
import { useAuthStore } from './stores/auth'; // Ajuste o caminho se necessário

// Configurações globais do Axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.withCredentials = true; // Para enviar cookies

const pinia = createPinia();
const app = createApp(App);

// Torna o axios global
app.config.globalProperties.$axios = axios;

app.use(router);
app.use(pinia);

// Configurar interceptores do Axios
app.mixin({
  setup() {
    const authStore = useAuthStore();

    axios.interceptors.request.use(
      (config) => {
        const token = authStore.token;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    authStore.initializeStore();
  },
});

app.mount('#app');
