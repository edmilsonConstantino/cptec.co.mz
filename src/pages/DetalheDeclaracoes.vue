<template>
  <div v-if="selectedDeclaracao" class="modal-overlay" @click="closeModal">
    <div class="modal-container" @click.stop>
      <button @click="closeModal" class="modal-close">
        <i class="bi bi-x"></i>
      </button>
      
      <!-- Header Mobile -->
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
          <!-- infromcoes de  Mobile -->
          <div class="mobile-info-section" v-if="isMobile">
            <div class="info-grid">
              <div class="info-card modern">
                <div class="card-icon curso">
                  <i class="bi bi-mortarboard"></i>
                </div>
                <div class="card-content">
                  <span class="info-label">Curso</span>
                  <span class="info-value">{{ selectedDeclaracao.curso }}</span>
                </div>
                <div class="card-accent"></div>
              </div>
              
              <div class="info-card modern">
                <div class="card-icon data">
                  <i class="bi bi-calendar3"></i>
                </div>
                <div class="card-content">
                  <span class="info-label">Conclusão</span>
                  <span class="info-value">{{ formatDateFull(selectedDeclaracao.dataConclusao) }}</span>
                </div>
                <div class="card-accent"></div>
              </div>
              
              <div class="info-card modern">
                <div class="card-icon carga">
                  <i class="bi bi-clock"></i>
                </div>
                <div class="card-content">
                  <span class="info-label">Carga Horária</span>
                  <span class="info-value">{{ selectedDeclaracao.cargaHoraria }}</span>
                </div>
                <div class="card-accent"></div>
              </div>

              <div class="info-card modern">
                <div class="card-icon duracao">
                  <i class="bi bi-calendar-check"></i>
                </div>
                <div class="card-content">
                  <span class="info-label">Duração</span>
                  <span class="info-value">{{ selectedDeclaracao.duracao }}</span>
                </div>
                <div class="card-accent"></div>
              </div>

              <div class="info-card modern">
                <div class="card-icon documento">
                  <i class="bi bi-person-badge"></i>
                </div>
                <div class="card-content">
                  <span class="info-label">Documento</span>
                  <span class="info-value">{{ selectedDeclaracao.documento }}</span>
                </div>
                <div class="card-accent"></div>
              </div>
            </div>
          </div>
          
          <!-- Texto da fake wareva sei la tambem heide ver depois -->
          <div class="certificate-text-section" :class="{ 'mobile-text-section': isMobile }">
            <div class="text-ornament"></div>
            <div class="certificate-text-content">
              <p v-if="!isMobile" class="declaration-text">
                Declaramos para os devidos fins que <strong class="highlight">{{ selectedDeclaracao.nomeCompleto }}</strong>,
                portador(a) do documento de identidade nº <strong class="highlight">{{ selectedDeclaracao.documento }}</strong>,
                concluiu com aproveitamento o curso de <strong class="highlight">{{ selectedDeclaracao.curso }}</strong>,
                com carga horária de <strong class="highlight">{{ selectedDeclaracao.cargaHoraria }}</strong>,
                no período de <strong class="highlight">{{ selectedDeclaracao.duracao }}</strong>.
              </p>
              
              <p v-if="isMobile" class="declaration-text mobile">
                <strong class="highlight">{{ selectedDeclaracao.nomeCompleto }}</strong> concluiu com aproveitamento 
                o curso de <strong class="highlight">{{ selectedDeclaracao.curso }}</strong> em 
                <strong class="highlight">{{ formatDateFull(selectedDeclaracao.dataConclusao) }}</strong>.
              </p>
            </div>
          </div>

          <!-- Depoimentos warevaaa -->
          <div class="testimonial-section">
            <div class="section-header">
              <div class="section-icon">
                <i class="bi bi-chat-quote"></i>
              </div>
              <h4>{{ isMobile ? 'Depoimento' : 'Depoimento do Aluno' }}</h4>
            </div>
            
            <div class="testimonial-card">
              <div class="quote-decoration">
                <i class="bi bi-quote" v-if="!isMobile"></i>
              </div>
              <p class="testimonial-text">{{ selectedDeclaracao.depoimento }}</p>
              <div class="testimonial-footer" v-if="!isMobile">
                <div class="author-info">
                  <strong>{{ selectedDeclaracao.nomeCompleto }}</strong>
                  <span>Estudante</span>
                </div>
              </div>
            </div>
          </div>

          <div class="details-grid-section" v-if="!isMobile">
            <div class="details-grid">
              <div class="detail-card premium">
                <div class="card-header">
                  <div class="detail-icon curso">
                    <i class="bi bi-mortarboard"></i>
                  </div>
                  <div class="card-glow"></div>
                </div>
                <div class="card-body">
                  <span class="detail-label">Curso</span>
                  <span class="detail-value">{{ selectedDeclaracao.curso }}</span>
                </div>
              </div>
              
              <div class="detail-card premium">
                <div class="card-header">
                  <div class="detail-icon duracao">
                    <i class="bi bi-calendar-check"></i>
                  </div>
                  <div class="card-glow"></div>
                </div>
                <div class="card-body">
                  <span class="detail-label">Duração</span>
                  <span class="detail-value">{{ selectedDeclaracao.duracao }}</span>
                </div>
              </div>
              
              <div class="detail-card premium">
                <div class="card-header">
                  <div class="detail-icon carga">
                    <i class="bi bi-clock-history"></i>
                  </div>
                  <div class="card-glow"></div>
                </div>
                <div class="card-body">
                  <span class="detail-label">Carga Horária</span>
                  <span class="detail-value">{{ selectedDeclaracao.cargaHoraria }}</span>
                </div>
              </div>
              
              <div class="detail-card premium">
                <div class="card-header">
                  <div class="detail-icon data">
                    <i class="bi bi-calendar3"></i>
                  </div>
                  <div class="card-glow"></div>
                </div>
                <div class="card-body">
                  <span class="detail-label">Conclusão</span>
                  <span class="detail-value">{{ formatDateFull(selectedDeclaracao.dataConclusao) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="certificate-footer-full" v-if="!isMobile">
          <div class="signature-section">
            <div class="signature-card">
              <div class="signature-decoration"></div>
              <div class="signature-line-full"></div>
              <div class="signature-info">
                <p class="signature-name">Prof. João Silva</p>
                <p class="signature-title">Diretor Acadêmico</p>
              </div>
              <div class="signature-seal">
                <i class="bi bi-award"></i>
              </div>
            </div>
          </div>
          
          <div class="verification-section">
            <div class="verification-card">
              <div class="qr-section">
                <div class="qr-placeholder">
                  <i class="bi bi-qr-code"></i>
                  <div class="qr-glow"></div>
                </div>
              </div>
              <div class="code-info">
                <p class="code-title">Código de Verificação</p>
                <p class="code-number">{{ selectedDeclaracao.codigo }}</p>
                <p class="code-url">https://cptec.co.mz/</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-verification" v-if="isMobile">
          <div class="verification-card mobile">
            <div class="qr-mobile">
              <i class="bi bi-qr-code"></i>
              <div class="qr-glow"></div>
            </div>
            <div class="verification-info">
              <span class="code-label">Código de Verificação</span>
              <span class="code-value">{{ selectedDeclaracao.codigo }}</span>
              <span class="code-site">cptec.co.mz</span>
            </div>
          </div>
        </div>
      </div>

      <!-- acoes waarevaa -->
      <div class="certificate-actions" :class="{ 'mobile-actions': isMobile }">
        <button @click="downloadPDF" class="action-btn primary" :class="{ 'mobile-action-btn': isMobile }">
          <div class="btn-icon">
            <i class="bi bi-download"></i>
          </div>
          <span v-if="!isMobile" class="btn-text">Baixar PDF</span>
          <div class="btn-glow"></div>
        </button>

        
        <button @click="shareCertificate" class="action-btn success" :class="{ 'mobile-action-btn': isMobile }">
          <div class="btn-icon">
            <i class="bi bi-share"></i>
          </div>
          <span v-if="!isMobile" class="btn-text">Compartilhar</span>
          <div class="btn-glow"></div>
        </button>
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
    
    downloadPDF() {
  
      alert('Funcionalidade de download PDF será implementada em breve!')
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
  top: 20px;
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
  gap: 1.5rem;
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
  padding: 3rem 2.5rem;
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
  margin-bottom: 2rem;
}

.title-ornament.bottom {
  width: 150px;
  margin-top: 2rem;
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

/* Informações Mobile */
.mobile-info-section {
  margin-bottom: 3rem;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.info-card.modern {
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
}

.info-card.modern:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.15),
    0 4px 15px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.card-icon.curso { background: linear-gradient(135deg, #667eea, #764ba2); }
.card-icon.data { background: linear-gradient(135deg, #f093fb, #f5576c); }
.card-icon.carga { background: linear-gradient(135deg, #4facfe, #00f2fe); }
.card-icon.duracao { background: linear-gradient(135deg, #43e97b, #38f9d7); }
.card-icon.documento { background: linear-gradient(135deg, #fa709a, #fee140); }

.card-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.info-label {
  font-size: 0.8rem;
  color: #6c757d;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 0.3rem;
}

.info-value {
  font-size: 1.1rem;
  color: #2c3e50;
  font-weight: 800;
  line-height: 1.3;
}

.card-accent {
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 0 20px 20px 0;
}

/* Texto da Declaração */
.certificate-text-section {
  margin-bottom: 3rem;
  position: relative;
}

.mobile-text-section {
  margin-bottom: 2rem;
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
  line-height: 1.6;
  text-align: left;
}

.highlight {
  color: #2c3e50;
  font-weight: 800;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  border-bottom: 2px solid #667eea;
}

/* Depoimento */
.testimonial-section {
  margin-bottom: 3rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.section-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.section-header h4 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2c3e50;
  margin: 0;
  background: linear-gradient(135deg, #2c3e50, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.testimonial-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  position: relative;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.08),
    0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.1);
  overflow: hidden;
}

.quote-decoration {
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  font-size: 4rem;
  color: rgba(102, 126, 234, 0.1);
  z-index: 1;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #495057;
  font-style: italic;
  margin: 0 0 1.5rem 0;
  position: relative;
  z-index: 2;
  text-align: left;
}

.testimonial-footer {
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
}

.author-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
}

.author-info strong {
  font-size: 1rem;
  color: #667eea;
  font-weight: 800;
}

.author-info span {
  font-size: 0.9rem;
  color: #6c757d;
  font-weight: 500;
}

/* Grid de Detalhes Desktop */
.details-grid-section {
  margin-bottom: 3rem;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.detail-card.premium {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.08),
    0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.4s ease;
}

.detail-card.premium:hover {
  transform: translateY(-10px) rotateX(5deg);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-header {
  position: relative;
  padding: 2rem 1.5rem 1rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
}

.detail-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.card-glow {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(20px);
}

.detail-card.premium:nth-child(1) .card-glow {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.detail-card.premium:nth-child(2) .card-glow {
  background: linear-gradient(135deg, #43e97b, #38f9d7);
}

.detail-card.premium:nth-child(3) .card-glow {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.detail-card.premium:nth-child(4) .card-glow {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.card-body {
  padding: 1rem 1.5rem 2rem;
  text-align: center;
}

.detail-label {
  font-size: 0.85rem;
  color: #6c757d;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 0.5rem;
  display: block;
}

.detail-value {
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: 800;
  line-height: 1.3;
  display: block;
}

/* Footer Desktop */
/* Footer Desktop */
.certificate-footer-full {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem; /* espaço entre os dois cards */
  margin-top: 3rem;
}

.signature-section, 
.verification-section {
  flex: 1; /* ocupa metade cada */
  display: flex;
  justify-content: center;
}

.signature-card,
.verification-card {
  background: #fff;
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 400px; /* limite de largura */
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}
.signature-card:hover,
.verification-card:hover {
  transform: translateY(-5px);
}

.signature-section {
  flex: 1;
}

.signature-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 3px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.1);
  position: relative;
  text-align: center;
  max-width: 300px;
}

.signature-decoration {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 20px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 0 0 20px 20px;
}

.signature-line-full {
  width: 180px;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  margin: 0 auto 1.5rem;
  border-radius: 2px;
}

.signature-info {
  margin-bottom: 1rem;
}

.signature-name {
  font-size: 1.2rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.3rem;
}

.signature-title {
  font-size: 0.95rem;
  color: #6c757d;
  margin: 0;
  font-weight: 600;
}

.signature-seal {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ffc107, #ff8c00);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  margin: 0 auto;
  box-shadow: 0 6px 20px rgba(255, 193, 7, 0.4);
}

.verification-section {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.verification-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 3px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 350px;
}

.qr-section {
  position: relative;
}

.qr-placeholder {
  font-size: 4rem;
  color: #667eea;
  position: relative;
  z-index: 2;
}

.qr-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3), transparent);
  border-radius: 50%;
  filter: blur(15px);
  animation: pulse 2s infinite;
}

.code-info {
  text-align: left;
}

.code-title {
  font-size: 0.9rem;
  color: #6c757d;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.code-number {
  font-size: 1.3rem;
  font-weight: 800;
  color: #2c3e50;
  font-family: 'Courier New', monospace;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  padding: 0.3rem 0.5rem;
  border-radius: 8px;
}

.code-url {
  font-size: 0.9rem;
  color: #667eea;
  margin: 0;
  font-weight: 600;
}

/* Verificação Mobile */
.mobile-verification {
  margin: 2rem 0;
}

.verification-card.mobile {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 3px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.qr-mobile {
  position: relative;
  font-size: 3rem;
  color: #667eea;
  flex-shrink: 0;
}

.verification-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.code-label {
  font-size: 0.8rem;
  color: #6c757d;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.code-value {
  font-size: 1.2rem;
  color: #2c3e50;
  font-weight: 800;
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.code-site {
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
}

/* Ações */
.certificate-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2.5rem;
  border-top: 2px solid #e3e6f0;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.5), rgba(233, 236, 239, 0.5));
  border-radius: 0 0 25px 25px;
}

.mobile-actions {
  display: flex !important;
  justify-content: space-around !important;
  padding: 2rem 1.5rem !important;
  gap: 1rem !important;
}

.action-btn {
  position: relative;
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  cursor: pointer;
  transition: all 0.4s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 180px;
  justify-content: center;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.15),
    0 3px 10px rgba(0, 0, 0, 0.1);
}

.action-btn:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.2),
    0 5px 15px rgba(0, 0, 0, 0.15);
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.action-btn.secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.action-btn.secondary:hover {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: transparent;
}

.action-btn.success {
  background: white;
  color: #28a745;
  border: 2px solid #28a745;
}

.action-btn.success:hover {
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  border-color: transparent;
}

.btn-icon {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-text {
  font-size: 0.95rem;
}

.btn-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50px;
}

.action-btn:hover .btn-glow {
  opacity: 1;
}

.mobile-action-btn {
  min-width: auto !important;
  width: 70px !important;
  height: 70px !important;
  border-radius: 50% !important;
  padding: 0 !important;
  justify-content: center !important;
  font-size: 1.5rem !important;
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
  
  .section-header {
    flex-direction: column;
    gap: 0.8rem;
  }
  
  .section-header h4 {
    font-size: 1.3rem;
  }
  
  .testimonial-card {
    padding: 1.8rem;
  }
  
  .testimonial-text {
    font-size: 1rem;
    line-height: 1.6;
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
  
  .info-card.modern {
    padding: 1.2rem;
    gap: 1rem;
  }
  
  .card-icon {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
  
  .info-value {
    font-size: 1rem;
  }
  
  .verification-card.mobile {
    padding: 1.5rem;
    gap: 1rem;
  }
  
  .qr-mobile {
    font-size: 2.5rem;
  }
  
  .mobile-actions {
    padding: 1.8rem 1rem !important;
    gap: 0.8rem !important;
  }
  
  .mobile-action-btn {
    width: 60px !important;
    height: 60px !important;
    font-size: 1.3rem !important;
  }
}

</style>