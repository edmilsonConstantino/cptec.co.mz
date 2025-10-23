<template>
  <div>
    <HeroDeclaracoes />

    <UltimasDeclaracoes @viewDetails="openModal" />

    <BuscarDeclaracoes @viewDetails="openModal" />

    <!-- Modal de Detalhes -->
    <DetalheDeclaracoes
      v-if="selectedDeclaracao"
      :selectedDeclaracao="selectedDeclaracao"
      @close="closeModal"
    />

    <!-- Loading enquanto busca via link único -->
    <div v-if="loadingUniqueLink" class="loading-overlay">
      <div class="loading-container">
        <div class="spinner"></div>
        <p>Carregando certificação...</p>
      </div>
    </div>
  </div>
</template>

<script>
import CertificationsService from "@/components/services/certifications";
import DetalheDeclaracoes from "@/pages/DetalheDeclaracoes.vue";
import HeroDeclaracoes from "@/pages/HeroDeclaracoes.vue";
import UltimasDeclaracoes from "@/pages/UltimasDeclaracoes.vue";
import BuscarDeclaracoes from "@/pages/BuscaDeclaracoes.vue";

export default {
  name: "DeclaracoesHome",
  components: {
    DetalheDeclaracoes,
    HeroDeclaracoes,
    UltimasDeclaracoes,
    BuscarDeclaracoes
  },
  props: {
    uniqueLink: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      selectedDeclaracao: null,
      loadingUniqueLink: false
    };
  },
  async mounted() {
    if (this.uniqueLink) {
      await this.loadDeclaracaoByLink(this.uniqueLink);
    }
  },
  methods: {
    openModal(declaracao) {
      this.selectedDeclaracao = declaracao;
      document.body.style.overflow = 'hidden';
    },

    closeModal() {
      this.selectedDeclaracao = null;
      document.body.style.overflow = 'auto';
      
      if (this.uniqueLink) {
        this.$router.push({ name: 'declaracoes' });
      }
    },

    async loadDeclaracaoByLink(uniqueLink) {
      try {
        this.loadingUniqueLink = true;
        
        const data = await CertificationsService.getByUniqueLink(uniqueLink);
        
        // Mapear os dados para o formato esperado
        const declaracao = {
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

        this.loadingUniqueLink = false;
        
        setTimeout(() => {
          this.openModal(declaracao);
        }, 300);

      } catch (err) {
        console.error('Erro ao buscar declaração:', err);
        this.loadingUniqueLink = false;
        
        alert('Certificação não encontrada. Verifique se o link está correto.');
        
        this.$router.push({ name: 'declaracoes' });
      }
    },

    getDeclarationPreview(data) {
      return `Declaramos que ${data.nome_completo} concluiu com aproveitamento o curso de ${data.curso}, com carga horária de ${data.carga_horaria}, no período de ${data.duracao}.`;
    }
  },

  watch: {
    uniqueLink: {
      immediate: true,
      async handler(newLink) {
        if (newLink && !this.selectedDeclaracao) {
          await this.loadDeclaracaoByLink(newLink);
        }
      }
    }
  }
};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-container {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 400px;
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
</style>