<template>
  <div class="certificacao-link-page">
    <!-- Loading -->
    <div v-if="loading" class="loading-container">
      <div class="spinner"></div>
      <p>Carregando certificação...</p>
    </div>

    <!-- Erro -->
    <div v-else-if="error" class="error-container">
      <i class="bi bi-exclamation-triangle"></i>
      <h2>Certificação não encontrada</h2>
      <p>{{ error }}</p>
      <router-link to="/" class="btn-voltar">
        <i class="bi bi-house"></i>
        Voltar para Home
      </router-link>
    </div>

    <!-- Modal de Detalhes -->
    <DetailsModal
      v-if="certificacao && showModal"
      :selectedDeclaracao="certificacao"
      @close="closeModal"
    />
  </div>
</template>

<script>
import CertificationsService from "@/components/services/certifications";
import DetailsModal from "@/pages/DetalheDeclaracoes.vue";

export default {
  name: "CertificacaoLink",
  components: {
    DetailsModal
  },
  props: {
    uniqueLink: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      certificacao: null,
      loading: true,
      error: null,
      showModal: false
    };
  },
  async mounted() {
    await this.buscarCertificacao();
  },
  methods: {
    async buscarCertificacao() {
      try {
        this.loading = true;
        
        // Busca a certificação pelo link único
        const data = await CertificationsService.getByUniqueLink(this.uniqueLink);
        
        // Formata os dados para o modal
        this.certificacao = {
          id: data.id,
          nomeCompleto: data.nome_completo,
          documento: data.documento,
          curso: data.curso,
          duracao: data.duracao,
          cargaHoraria: data.carga_horaria,
          dataConclusao: data.data_conclusao,
          codigo: data.codigo,
          ano: data.ano,
          status: data.status,
          foto: data.foto
            ? (data.foto.startsWith("http")
                ? data.foto
                : `http://127.0.0.1:8000${data.foto}`)
            : "https://via.placeholder.com/90",
        };
        
        this.loading = false;
        
        // Abre o modal após carregar os dados
        setTimeout(() => {
          this.showModal = true;
        }, 300);
        
      } catch (err) {
        this.error = err.response?.data?.error || "Erro ao carregar certificação. Verifique se o link está correto.";
        this.loading = false;
      }
    },
    
    closeModal() {
      this.showModal = false;
      // Redireciona para home após fechar o modal
      setTimeout(() => {
        this.$router.push('/');
      }, 300);
    }
  }
};
</script>

<style scoped>
.certificacao-link-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.loading-container,
.error-container {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1.5rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-container p {
  font-size: 1.2rem;
  color: #6c757d;
  margin: 0;
}

.error-container i {
  font-size: 4rem;
  color: #dc3545;
  margin-bottom: 1rem;
}

.error-container h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.error-container p {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 2rem;
}

.btn-voltar {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-voltar:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .certificacao-link-page {
    padding: 1rem;
  }
  
  .loading-container,
  .error-container {
    padding: 2rem 1.5rem;
  }
  
  .error-container h2 {
    font-size: 1.5rem;
  }
  
  .error-container p {
    font-size: 1rem;
  }
}
</style>