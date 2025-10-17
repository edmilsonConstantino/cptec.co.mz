<template>
  <div v-if="selectedDeclaracao" class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <button @click="closeModal" class="modal-close">
        <i class="bi bi-x"></i>
      </button>

      <div class="mobile-header" v-if="isMobile">
        <div class="mobile-header-background"></div>
        <div class="mobile-student-info">
          <div class="photo-container">
            <img :src="selectedDeclaracao.foto" :alt="selectedDeclaracao.nomeCompleto" class="mobile-photo" />
            <div class="photo-badge">
              <i class="bi bi-award"></i>
            </div>
          </div>
          <div class="mobile-details">
            <h3>{{ selectedDeclaracao.nomeCompleto }}</h3>
            <p>{{ selectedDeclaracao.curso }}</p>
            <div class="status-badge">
              <i class="bi bi-check-circle"></i>
              <span>Concluído</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="certificate-full">
        <!-- Header Desktop -->
        <div class="certificate-header" v-if="!isMobile">
          <div class="institution-section">
            <div class="institution-logo-wrapper">
              <div class="institution-logo-full">
                <i class="bi bi-mortarboard"></i>
                <div class="logo-glow"></div>
              </div>
            </div>
            <div class="institution-details">
              <h2>Centro de Formação Profissional</h2>
              <p>Reconhecido pelo Ministério da Educação</p>
              <div class="institution-badge">
                <i class="bi bi-shield-check"></i>
                <span>Certificado</span>
              </div>
            </div>
          </div>
          
          <div class="student-section">
            <div class="student-photo-wrapper">
              <div class="student-photo-full">
                <img :src="selectedDeclaracao.foto" :alt="selectedDeclaracao.nomeCompleto" />
                <div class="photo-overlay">
                  <i class="bi bi-award"></i>
                </div>
              </div>
            </div>
            <div class="completion-badge">
              <i class="bi bi-check-circle-fill"></i>
              <span>Concluído com Sucesso</span>
            </div>
          </div>
        </div>
        
    
        <div class="certificate-title">
          <div class="title-ornament top"></div>
          <h3 :class="{ 'mobile-title': isMobile }">DECLARAÇÃO DE CONCLUSÃO</h3>
          <div class="title-ornament bottom"></div>
        </div>
        
        <div class="certificate-content">
          <div class="certificate-text-section" :class="{ 'mobile-text-section': isMobile }">
  <div class="certificate-text-content">
    <p v-if="!isMobile" class="declaration-text" v-html="selectedDeclaracao.declaracao"></p>
    <p v-if="isMobile" class="declaration-text mobile" v-html="selectedDeclaracao.declaracao"></p>
  </div>
</div>


          <div class="info-cards-section" :class="{ 'mobile-info-cards': isMobile }">
            <div class="info-cards-grid">
              <div class="info-display-card">
                <div class="card-gradient curso"></div>
                <div class="card-icon-large">
                  <i class="bi bi-mortarboard"></i>
                </div>
                <div class="card-details">
                  <span class="card-label">CURSO</span>
                  <h5 class="card-value">{{ selectedDeclaracao.curso }}</h5>
                </div>
              </div>

              <div class="info-display-card">
                <div class="card-gradient duracao"></div>
                <div class="card-icon-large">
                  <i class="bi bi-calendar-check"></i>
                </div>
                <div class="card-details">
                  <span class="card-label">DURAÇÃO</span>
                  <h5 class="card-value">{{ selectedDeclaracao.duracao }}</h5>
                </div>
              </div>

              <div class="info-display-card">
                <div class="card-gradient carga"></div>
                <div class="card-icon-large">
                  <i class="bi bi-clock"></i>
                </div>
                <div class="card-details">
                  <span class="card-label">CARGA HORÁRIA</span>
                  <h5 class="card-value">{{ selectedDeclaracao.cargaHoraria }}</h5>
                </div>
              </div>

              <div class="info-display-card">
                <div class="card-gradient conclusao"></div>
                <div class="card-icon-large">
                  <i class="bi bi-calendar3"></i>
                </div>
                <div class="card-details">
                  <span class="card-label">CONCLUSÃO</span>
                  <h5 class="card-value">{{ formatDateFull(selectedDeclaracao.dataConclusao) }}</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="details-grid-section" v-if="!isMobile">
            <div class="details-grid">
            </div>
          </div>
        </div>

        <div class="certificate-footer-full" v-if="!isMobile">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsModal',
  props: {
    selectedDeclaracao: {
      type: Object,
      default: null
    }
  },
  emits: ['close'],
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
   
    if (this.isMobile && this.selectedDeclaracao) {
      window.history.pushState({ modal: true }, '')
      window.addEventListener('popstate', this.handleBack)
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
    
    window.removeEventListener('popstate', this.handleBack)
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768
    },
    
    closeModal() {
      this.$emit('close')
      document.body.style.overflow = 'auto'
    },
    
    shareCertificate() {
      if (navigator.share) {
        navigator.share({
          title: `Declaração - ${this.selectedDeclaracao.nomeCompleto}`,
          text: `Veja a declaração de conclusão do curso ${this.selectedDeclaracao.curso}`,
          url: window.location.href
        })
      } else {
        navigator.clipboard.writeText(window.location.href)
        alert('Link copiado para a área de transferência!')
      }
    },
    
    formatDateFull(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('pt-BR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    },

    ocultarBI(documento) {
      if (!documento || documento.length < 10) return documento
      
      const inicio = documento.substring(0, 3)
      const fim = documento.substring(documento.length - 7)
      const meio = '**'
      
      return `${inicio}${meio}${fim}`
    },

    handleBack() {
      if (this.isMobile && this.selectedDeclaracao) {
        this.closeModal()
      }
    }
  },
  
  watch: {
    selectedDeclaracao(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
        this.checkMobile()
        if (this.isMobile) {
          window.history.pushState({ modal: true }, '')
          window.addEventListener('popstate', this.handleBack)
        }
      } else {
        window.removeEventListener('popstate', this.handleBack)
      }
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(59, 76, 184, 0.3); }
  50% { box-shadow: 0 0 30px rgba(59, 76, 184, 0.6); }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(59, 76, 184, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(10px);
  animation: fadeIn 0.3s ease;
}

.modal-container {
  background: linear-gradient(135deg, #ffffff, #f8f9ff);
  border-radius: 25px;
  max-width: 1100px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideInUp 0.5s ease;
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.modal-close {
  position: absolute;
  top: 35px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 249, 250, 0.95));
  color: #495057;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;
  font-size: 1.8rem;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.modal-close:hover {
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
  transform: scale(1.1) rotate(90deg);
  box-shadow: 0 10px 30px rgba(220, 53, 69, 0.4);
}

/* Header Mobile */
.mobile-header {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 5rem 2rem 2rem;
  color: white;
  border-radius: 25px 25px 0 0;
  overflow: hidden;
}

.mobile-header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
}

.mobile-student-info {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.photo-container {
  position: relative;
  flex-shrink: 0;
}

.mobile-photo {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 0 0 8px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  margin-top: 15%;
}

.photo-badge {
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #ffc107, #ff8c00);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.4);
  animation: pulse 2s infinite;
}

.mobile-details {
  flex: 1;
}

.mobile-details h3 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.mobile-details p {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(40, 167, 69, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
}

.certificate-full {
  padding: 5rem 2.5rem;
  position: relative;
}

.certificate-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  padding-bottom: 2.5rem;
  border-bottom: 2px solid #e3e6f0;
  position: relative;
}

.certificate-header::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}

.institution-section {
  display: flex;
  align-items: center;
  flex: 1;
}

.institution-logo-wrapper {
  position: relative;
  margin-right: 2rem;
}

.institution-logo-full {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.2rem;
  position: relative;
  z-index: 2;
  box-shadow: 
    0 15px 35px rgba(102, 126, 234, 0.4),
    inset 0 2px 0 rgba(255, 255, 255, 0.2);
}

.logo-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(15px);
  animation: glow 3s ease-in-out infinite;
}

.institution-details h2 {
  font-size: 2.2rem;
  font-weight: 900;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #2c3e50, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.institution-details p {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 1rem;
  font-weight: 500;
}

.institution-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
}

.student-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.student-photo-wrapper {
  position: relative;
}

.student-photo-full {
  width: 130px;
  height: 130px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #667eea;
  box-shadow: 
    0 15px 35px rgba(102, 126, 234, 0.4),
    0 0 0 10px rgba(102, 126, 234, 0.1);
}

.student-photo-full img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  opacity: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.student-photo-full:hover .photo-overlay {
  opacity: 1;
}

.student-photo-full:hover img {
  transform: scale(1.1);
}

.completion-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 8px 25px rgba(40, 167, 69, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Título */
.certificate-title {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.title-ornament {
  height: 3px;
  background: linear-gradient(90deg, transparent, #667eea, #764ba2, transparent);
  margin: 1rem auto;
  border-radius: 2px;
  position: relative;
}

.title-ornament.top {
  width: 200px;
  margin-bottom: 1.5rem;
}

.title-ornament.bottom {
  width: 150px;
  margin-top: 1rem;
}

.certificate-title h3 {
  font-size: 3rem;
  font-weight: 900;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0;
  background: linear-gradient(135deg, #2c3e50, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.mobile-title {
  font-size: 1.8rem !important;
  letter-spacing: 2px !important;
  margin-bottom: 2rem !important;
}

/* Texto da Declaração */
.certificate-text-section {
  margin-bottom: 3rem;
  position: relative;
}

.mobile-text-section {
  margin-bottom: 1rem;
}

.text-ornament {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
  margin: 0 auto 2rem;
}

.certificate-text-content {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.03), rgba(118, 75, 162, 0.03));
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.1);
  position: relative;
  overflow: hidden;
}

.certificate-text-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0 3px 3px 0;
}

.declaration-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #495057;
  margin: 0;
  text-align: justify;
  position: relative;
  z-index: 2;
}

.declaration-text.mobile {
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: left;
  margin-top: -5%;
}

.highlight {
  color: #2c3e50;
  font-weight: 800;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  border-bottom: 1px solid #667eea;
}

/* Cards de Informações */
.info-cards-section {
  margin-bottom: 3rem;
}

.mobile-info-cards {
  margin-bottom: 2rem;
}

.info-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.info-display-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 3px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.4s ease;
  text-align: center;
}

.info-display-card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.1);
}

.card-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  border-radius: 20px 20px 0 0;
}

.card-gradient.curso {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.card-gradient.duracao {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.card-gradient.carga {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.card-gradient.conclusao {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.card-icon-large {
  width: 70px;
  height: 70px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  position: relative;
  background: linear-gradient(135deg, #667eea, #764ba2);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.info-display-card:nth-child(2) .card-icon-large {
  background: linear-gradient(135deg, #667eea, #764ba2);
    box-shadow: 0 8px 25px rgba(31, 102, 234, 0.3);
}

.info-display-card:nth-child(3) .card-icon-large {
  background: linear-gradient(135deg, #667eea, #764ba2);
 box-shadow: 0 8px 25px rgba(24, 108, 233, 0.3);
}

.info-display-card:nth-child(4) .card-icon-large {
  background: linear-gradient(135deg, #667eea, #764ba2);
    box-shadow: 0 8px 25px rgba(41, 130, 213, 0.3);
}

.card-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-label {
  font-size: 0.75rem;
  font-weight: 800;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-value {
  font-size: 1.3rem;
  font-weight: 800;
  color: #2c3e50;
  margin: 0;
  line-height: 1.3;
}

/* Responsividade */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 0;
    align-items: stretch;
  }
  
  .modal-container {
    border-radius: 0;
    max-height: 100vh;
    height: 100vh;
    max-width: none;
    margin: 0;
  }
  
  .certificate-full {
    padding: 1.5rem;
  }
  
  .modal-close {
    top: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }
  
  .mobile-header {
    padding: 4.5rem 1.5rem 2rem;
    border-radius: 0;
  }
  
  .certificate-title h3 {
    font-size: 1.6rem !important;
    letter-spacing: 1.5px !important;
  }

  .info-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .info-display-card {
    padding: 1.8rem 1.5rem;
  }

  .card-icon-large {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  .card-value {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .mobile-header {
    padding: 4rem 1.2rem 1.5rem;
  }
  
  .mobile-student-info {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .mobile-details h3 {
    font-size: 1.3rem;
  }
  
  .certificate-full {
    padding: 1rem;
  }
  
  .info-cards-grid {
    gap: 1.2rem;
  }

  .info-display-card {
    padding: 1.5rem 1.2rem;
  }

  .card-icon-large {
    width: 55px;
    height: 55px;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .card-label {
    font-size: 0.7rem;
  }

  .card-value {
  
    font-size: 1.1rem;
  }
}
</style>