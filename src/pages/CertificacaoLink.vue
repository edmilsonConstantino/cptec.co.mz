<template>
  <div>
    <!-- ✅ Enquanto carrega -->
    <div v-if="loading" class="loading-container">
      <div class="spinner"></div>
      <p>Carregando certificação...</p>
    </div>

    <!-- ✅ Erro -->
    <div v-else-if="error" class="error-container">
      <i class="bi bi-exclamation-triangle"></i>
      <h2>Certificação não encontrada</h2>
      <p>{{ error }}</p>
      <router-link to="/" class="btn-voltar">
        <i class="bi bi-arrow-left"></i>
        Voltar para Home
      </router-link>
    </div>

    <!-- ✅ Card (modal) - Só mostra quando tem certificação -->
    <div v-else>
      <DetalheDeclaracoes
        v-if="certificacao && showModal"
        :selectedDeclaracao="certificacao"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import CertificationsService from "@/components/services/certifications";
import DetalheDeclaracoes from "@/pages/DetalheDeclaracoes.vue";

export default {
  name: "CertificacaoLink",
  components: {
    DetalheDeclaracoes
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
        this.error = null;

        const data = await CertificationsService.getByUniqueLink(this.uniqueLink);

        // Mapear os dados para o formato esperado pelo modal
        this.certificacao = {
          id: data.id,
          nomeCompleto: data.nome_completo,
          documento: data.documento,
          curso: data.curso,
          duracao: data.duracao,
          cargaHoraria: data.carga_horaria,
          dataConclusao: data.data_conclusao,
          codigo: data.codigo,
          status: data.status,
          unique_link: data.unique_link,
          declaracao: data.declaracao || this.getDeclarationPreview(data),
          depoimento: data.depoimento || "Excelente curso! Recomendo a todos.",
          foto: data.foto
            ? (data.foto.startsWith("http")
                ? data.foto
                : `https://cestificacoesiso-back.onrender.com/${data.foto}`)
            : "https://via.placeholder.com/90"
        };

        this.loading = false;
        
        setTimeout(() => {
          this.showModal = true;
          document.body.style.overflow = 'hidden';
        }, 300);

      } catch (err) {
        console.error('Erro ao buscar certificação:', err);
        this.error = err.response?.data?.error || 
          "Erro ao carregar certificação. Verifique se o link está correto.";
        this.loading = false;
      }
    },

    getDeclarationPreview(data) {
      return `Declaramos que ${data.nome_completo} concluiu com aproveitamento o curso de ${data.curso}, com carga horária de ${data.carga_horaria}, no período de ${data.duracao}.`;
    },

    closeModal() {
      this.showModal = false;
      document.body.style.overflow = 'auto';
      
      // Volta à página principal
      setTimeout(() => {
        this.$router.push("/");
      }, 300);
    }
  },

  watch: {
    uniqueLink: {
      immediate: true,
      async handler(newLink) {
        if (newLink) {
          await this.buscarCertificacao();
        }
      }
    }
  }
};
</script>

<style scoped>
.loading-container,
.error-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.loading-container {
  color: white;
}

.error-container {
  color: white;
  text-align: center;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1.5rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-container p {
  font-size: 1.2rem;
  margin: 0;
}

.error-container i {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #ffd700;
}

.error-container h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.error-container p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.btn-voltar {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-voltar:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-voltar i {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .loading-container,
  .error-container {
    padding: 1rem;
  }
  
  .error-container h2 {
    font-size: 1.5rem;
  }
  
  .error-container p {
    font-size: 1rem;
  }
  
  .btn-voltar {
    padding: 0.75rem 1.5rem;
  }
}
</style>