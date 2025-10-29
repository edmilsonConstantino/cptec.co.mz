<template>
  <div v-if="selectedDeclaracao" class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <button @click="closeModal" class="modal-close">
        <i class="bi bi-x"></i>
      </button>

      <div class="certificate-wrapper" v-if="!isMobile">
        <div class="certificate-header">
          <div class="institution-block">
            <div class="logo-circle">
              <i class="bi bi-mortarboard"></i>
            </div>
            <div class="institution-info">
              <h2>Centro de Formação Profissional</h2>
              <p>Reconhecido pelo Ministério da Educação</p>
            </div>
          </div>

          <div class="student-block">
            <div class="student-photo">
              <img
                :src="selectedDeclaracao.foto || defaultPhoto"
                :alt="selectedDeclaracao.nomeCompleto"
              />
            </div>
            <h3>{{ selectedDeclaracao.nomeCompleto }}</h3>
            <div class="badge-success">
              <i class="bi bi-check-circle-fill"></i>
              Concluído
            </div>
          </div>
        </div>

        <div class="certificate-body">
          <div class="title-section">
            <div class="line-ornament"></div>
            <h1>DECLARAÇÃO DE CONCLUSÃO</h1>
            <div class="line-ornament"></div>
          </div>

          <div class="declaration-text">
            <p v-html="getDeclaracaoTexto()"></p>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <i class="bi bi-mortarboard"></i>
              <div class="info-content">
                <span class="label">CURSO</span>
                <strong>{{ selectedDeclaracao.curso }}</strong>
              </div>
            </div>

            <div class="info-item">
              <i class="bi bi-calendar-check"></i>
              <div class="info-content">
                <span class="label">DURAÇÃO</span>
                <strong>{{ selectedDeclaracao.duracao }}</strong>
              </div>
            </div>

            <div class="info-item">
              <i class="bi bi-clock"></i>
              <div class="info-content">
                <span class="label">CARGA HORÁRIA</span>
                <strong>{{ selectedDeclaracao.cargaHoraria }}</strong>
              </div>
            </div>

            <div class="info-item">
              <i class="bi bi-calendar3"></i>
              <div class="info-content">
                <span class="label">DATA DE CONCLUSÃO</span>
                <strong>{{ formatDateFull(selectedDeclaracao.dataConclusao) }}</strong>
              </div>
            </div>
          </div>

          <div v-if="modulos && modulos.length > 0" class="modules-section">
            <h3 class="modules-title">
              <i class="bi bi-list-check"></i> Módulos Concluídos
            </h3>
            <div class="modules-grid">
              <div v-for="(modulo, index) in modulos" :key="index" class="module-card">
                <div class="module-number">{{ index + 1 }}</div>
                <div class="module-name">{{ modulo.nome || modulo }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="certificate-mobile" v-else>
        <div class="mobile-header">
          <div class="mobile-photo">
            <img
              :src="selectedDeclaracao.foto || defaultPhoto"
              :alt="selectedDeclaracao.nomeCompleto"
            />
            <div class="photo-badge">
              <i class="bi bi-award"></i>
            </div>
          </div>
          <h3>{{ selectedDeclaracao.nomeCompleto }}</h3>
          <p>{{ selectedDeclaracao.curso }}</p>
          <div class="badge-success">
            <i class="bi bi-check-circle-fill"></i>
            Concluído
          </div>
        </div>

        <div class="mobile-body">
          <h2>DECLARAÇÃO DE CONCLUSÃO</h2>

          <div class="mobile-text">
            <p v-html="getDeclaracaoTexto()"></p>
          </div>

          <div class="mobile-info">
            <div class="mobile-info-row">
              <i class="bi bi-calendar-check"></i>
              <div>
                <span>Duração</span>
                <strong>{{ selectedDeclaracao.duracao }}</strong>
              </div>
            </div>

            <div class="mobile-info-row">
              <i class="bi bi-clock"></i>
              <div>
                <span>Carga Horária</span>
                <strong>{{ selectedDeclaracao.cargaHoraria }}</strong>
              </div>
            </div>

            <div class="mobile-info-row">
              <i class="bi bi-calendar3"></i>
              <div>
                <span>Conclusão</span>
                <strong>{{ formatDateFull(selectedDeclaracao.dataConclusao) }}</strong>
              </div>
            </div>
          </div>

          <div v-if="modulos && modulos.length > 0" class="modules-section mobile-modules">
            <h3 class="modules-title">
              <i class="bi bi-list-check"></i> Módulos Concluídos
            </h3>
            <div class="modules-list-mobile">
              <div v-for="(modulo, index) in modulos" :key="index" class="module-item-mobile">
                <span class="module-number-mobile">{{ index + 1 }}</span>
                <span class="module-name-mobile">{{ modulo.nome || modulo }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CertificationsService from "@/components/services/certifications.js";

export default {
  name: "DetailsModal",
  props: {
    selectedDeclaracao: {
      type: Object,
      default: null
    },
    uniqueLink: {
      type: String,
      default: null
    }
  },
  emits: ["close", "update:selectedDeclaracao"],
  data() {
    return {
      isMobile: false,
      modulos: [],
      defaultPhoto: "https://via.placeholder.com/100"
    };
  },
  async mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);

    if (this.uniqueLink && !this.selectedDeclaracao) {
      await this.fetchDeclaracao(this.uniqueLink);
    } else if (this.selectedDeclaracao) {
      this.modulos = this.selectedDeclaracao.modulos || [];
      console.log("Módulos recebidos no modal:", this.modulos);
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    },

    closeModal() {
      this.$emit("close");
      document.body.style.overflow = "auto";
    },

    formatDateFull(dateString) {
      if (!dateString) return "Data não disponível";
      const date = new Date(dateString);
      return date.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    },

    async fetchDeclaracao(uniqueLink) {
      try {
        const data = await CertificationsService.getByUniqueLink(uniqueLink);
        this.$emit("update:selectedDeclaracao", data);
        this.modulos = data.modulos || [];
        console.log("Módulos carregados do backend:", this.modulos);
      } catch (error) {
        console.error("Erro ao buscar declaração:", error);
      }
    },

    getDeclaracaoTexto() {
      const declaracao = this.selectedDeclaracao?.declaracao;
      
      if (declaracao && declaracao.trim() !== "") {
        return declaracao;
      } else {
        const nome = this.selectedDeclaracao?.nomeCompleto || "________________";
        const curso = this.selectedDeclaracao?.curso || "________________";
        const carga = this.selectedDeclaracao?.cargaHoraria || "não informada";
        const duracao = this.selectedDeclaracao?.duracao || "não informada";

        return `
          Certificamos que o(a) <strong>${nome}</strong> concluiu com aproveitamento o curso de
          <strong>${curso}</strong>, com carga horária de <strong>${carga}</strong>, no período de
          <strong>${duracao}</strong>. Esta declaração é emitida para os devidos fins.
        `;
      }
    }
  },

  watch: {
    selectedDeclaracao(newVal) {
      if (newVal) {
        document.body.style.overflow = "hidden";
        this.checkMobile();
        this.modulos = newVal.modulos || [];
        console.log("Módulos atualizados:", this.modulos);
      }
    },

    uniqueLink: {
      immediate: true,
      async handler(newLink) {
        if (newLink && !this.selectedDeclaracao) {
          await this.fetchDeclaracao(newLink);
        }
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-container {
  background: white;
  border-radius: 20px;
  max-width: 1200px;
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.4s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  border: none;
  background: white;
  color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  font-size: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-close:hover {
  background: #dc3545;
  color: white;
  transform: rotate(90deg);
}

.modules-section {
  margin-top: -20px;
  padding: 25px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.03), rgba(118, 75, 162, 0.03));
  border-radius: 15px;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.modules-title {
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.modules-title i {
  color: #667eea;
  font-size: 24px;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.module-card {
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid #e8e8e8;
  transition: all 0.3s ease;
}

.module-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}

.module-number {
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  flex-shrink: 0;
}

.module-name {
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.4;
}

.mobile-modules {
  margin-top: 25px;
}

.modules-list-mobile {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.module-item-mobile {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
}

.module-number-mobile {
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
}

.module-name-mobile {
  flex: 1;
  font-size: 13px;
  font-weight: 600;
  color: #2c3e50;
  line-height: 1.3;
}

.certificate-wrapper {
  padding: 50px 60px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
}

.certificate-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 2px solid #e8e8e8;
  margin-bottom: 40px;
}

.institution-block {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo-circle {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.institution-info h2 {
  font-size: 24px;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 5px;
}

.institution-info p {
  font-size: 14px;
  color: #6c757d;
  font-weight: 500;
}

.student-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.student-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #667eea;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.student-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.student-block h3 {
  font-size: 20px;
  font-weight: 800;
  color: #2c3e50;
  text-align: center;
}

.badge-success {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
}

.certificate-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.title-section {
  text-align: center;
}

.line-ornament {
  width: 120px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
  margin: 15px auto;
}

.title-section h1 {
  font-size: 36px;
  font-weight: 900;
  color: #2c3e50;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.declaration-text {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  padding: 30px;
  border-radius: 15px;
  border-left: 4px solid #667eea;
}

.declaration-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #495057;
  text-align: justify;
  margin: 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.info-item {
  background: white;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}

.info-item i {
  font-size: 32px;
  color: #667eea;
  flex-shrink: 0;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.info-content .label {
  font-size: 10px;
  font-weight: 700;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-content strong {
  font-size: 14px;
  font-weight: 800;
  color: #2c3e50;
  line-height: 1.3;
}

/* Mobile Layout */
.certificate-mobile {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
}

.mobile-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 80px 20px 30px;
  color: white;
  text-align: center;
}

.mobile-photo {
  width: 90px;
  height: 90px;
  margin: 0 auto 15px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.3);
  position: relative;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.mobile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-badge {
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #ffc107, #ff8c00);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.mobile-header h3 {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 8px;
}

.mobile-header p {
  font-size: 14px;
  opacity: 0.95;
  margin-bottom: 15px;
}

.mobile-body {
  flex: 1;
  padding: 30px 20px;
  background: white;
}

.mobile-body h2 {
  font-size: 20px;
  font-weight: 900;
  color: #2c3e50;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 25px;
}

.mobile-text {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  padding: 20px;
  border-radius: 12px;
  border-left: 3px solid #667eea;
  margin-bottom: 25px;
}

.mobile-text p {
  font-size: 14px;
  line-height: 1.7;
  color: #495057;
  margin: 0;
}

.mobile-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-info-row {
  display: flex;
  align-items: center;
  gap: 15px;
  background: white;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 15px;
}

.mobile-info-row i {
  font-size: 28px;
  color: #667eea;
}

.mobile-info-row div {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.mobile-info-row span {
  font-size: 11px;
  font-weight: 700;
  color: #6c757d;
  text-transform: uppercase;
}

.mobile-info-row strong {
  font-size: 14px;
  font-weight: 800;
  color: #2c3e50;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .modules-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 0;
  }

  .modal-container {
    border-radius: 0;
    max-width: 100%;
    height: 100vh;
    max-height: 100vh;
  }

  .modal-close {
    background: rgba(255, 255, 255, 0.95);
  }
}

@media (max-width: 576px) {
  .mobile-header {
    padding: 70px 15px 25px;
  }

  .mobile-body {
    padding: 25px 15px;
  }

  .mobile-body h2 {
    font-size: 18px;
  }

  .mobile-text p {
    font-size: 13px;
  }
  
  .modules-section {
    padding: 20px 15px;
  }
  
  .modules-title {
    font-size: 18px;
  }
}
</style>