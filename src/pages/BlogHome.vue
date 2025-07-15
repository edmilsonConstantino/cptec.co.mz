<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section text-center text-white position-relative overflow-hidden">
      <div class="hero-overlay"></div>
      <div class="container position-relative" style="z-index: 2;">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-4">
              Certificação ISO para<br>
              <span class="text-warning">sua empresa</span>
            </h1>
            <p class="lead mb-4 opacity-90">
              Garanta a qualidade dos seus processos, aumente a credibilidade no mercado e
              atenda aos requisitos internacionais com nossos serviços de certificação ISO
            </p>
            <button class="btn btn-outline-light btn-lg px-5 py-3 text-uppercase fw-semibold">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
      
      <!-- Floating Icons -->
      <div class="floating-icons d-none d-lg-block">
        <div class="floating-icon" style="top: 20%; left: 10%;">
          <i class="bi bi-graph-up fs-2"></i>
        </div>
        <div class="floating-icon" style="top: 30%; right: 15%;">
          <i class="bi bi-gear fs-2"></i>
        </div>
        <div class="floating-icon" style="bottom: 30%; left: 15%;">
          <i class="bi bi-lightbulb fs-2"></i>
        </div>
        <div class="floating-icon" style="bottom: 20%; right: 10%;">
          <i class="bi bi-cloud fs-2"></i>
        </div>
      </div>
    </section>

    <!-- ISO Certificates Section -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row g-4 justify-content-center">
          <div class="col-lg-3 col-md-6 col-6">
            <div class="text-center">
              <div class="iso-certificate">
                <img src="@/assets/imagens/iso-9001.png" alt="ISO 9001" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="text-center">
              <div class="iso-certificate">
                <img src="@/assets/imagens/ISO 14001.png" alt="ISO 14001" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="text-center">
              <div class="iso-certificate">
                <img src="@/assets/imagens/iso-45001.png" alt="ISO 45001" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="text-center">
              <div class="iso-certificate">
                <img src="@/assets/imagens/iso-50001.png" alt="ISO 50001" class="img-fluid">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <!-- Main Content -->
          <div class="col-lg-8">
            <div class="content-header mb-5">
              <span class="badge bg-primary text-uppercase fw-semibold mb-3">Certificação ISO</span>
              <h2 class="display-6 fw-bold text-dark mb-3">
                Transforme sua empresa com certificação internacional
              </h2>
              <p class="lead text-muted">
                Descubra como a certificação ISO pode revolucionar seus processos e elevar sua empresa ao próximo nível
              </p>
              <small class="text-muted d-block">
                <i class="bi bi-calendar3 me-1"></i>Atualizado em June 29, 2025
              </small>
            </div>

            <div class="row g-4">
              <!-- Benefícios Section -->
              <div class="col-md-6">
                <div class="content-card">
                  <div class="card-header-custom">
                    <i class="bi bi-check2-circle text-success me-2"></i>
                    <h4 class="fw-bold text-dark mb-0">Benefícios da Certificação ISO</h4>
                  </div>
                  <div class="benefits-list">
                    <div class="benefit-item">
                      <div class="benefit-icon bg-success">
                        <i class="bi bi-award-fill"></i>
                      </div>
                      <div class="benefit-content">
                        <h6 class="fw-semibold mb-1">Reputação e Credibilidade</h6>
                        <small class="text-muted">Reconhecimento internacional e confiança do mercado</small>
                      </div>
                    </div>
                    
                    <div class="benefit-item">
                      <div class="benefit-icon bg-primary">
                        <i class="bi bi-graph-down-arrow"></i>
                      </div>
                      <div class="benefit-content">
                        <h6 class="fw-semibold mb-1">Redução de Custos</h6>
                        <small class="text-muted">Otimização de processos e eliminação de desperdícios</small>
                      </div>
                    </div>
                    
                    <div class="benefit-item">
                      <div class="benefit-icon bg-info">
                        <i class="bi bi-gear-fill"></i>
                      </div>
                      <div class="benefit-content">
                        <h6 class="fw-semibold mb-1">Eficiência Interna</h6>
                        <small class="text-muted">Melhoria contínua e padronização de processos</small>
                      </div>
                    </div>
                    
                    <div class="benefit-item">
                      <div class="benefit-icon bg-warning">
                        <i class="bi bi-globe"></i>
                      </div>
                      <div class="benefit-content">
                        <h6 class="fw-semibold mb-1">Acesso a Mercados</h6>
                        <small class="text-muted">Abertura para novos mercados e oportunidades</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Processo Section -->
              <div class="col-md-6">
                <div class="content-card">
                  <div class="card-header-custom">
                    <i class="bi bi-list-ol text-primary me-2"></i>
                    <h4 class="fw-bold text-dark mb-0">Processo da Certificação ISO</h4>
                  </div>
                  <div class="process-timeline">
                    <div class="timeline-item">
                      <div class="timeline-marker">
                        <span class="step-number">1</span>
                      </div>
                      <div class="timeline-content">
                        <h6 class="fw-semibold mb-1">Diagnóstico e Análise</h6>
                        <small class="text-muted">Avaliação completa dos processos atuais</small>
                      </div>
                    </div>
                    
                    <div class="timeline-item">
                      <div class="timeline-marker">
                        <span class="step-number">2</span>
                      </div>
                      <div class="timeline-content">
                        <h6 class="fw-semibold mb-1">Implementação</h6>
                        <small class="text-muted">Desenvolvimento e aplicação do sistema</small>
                      </div>
                    </div>
                    
                    <div class="timeline-item">
                      <div class="timeline-marker">
                        <span class="step-number">3</span>
                      </div>
                      <div class="timeline-content">
                        <h6 class="fw-semibold mb-1">Auditoria Externa</h6>
                        <small class="text-muted">Verificação por organismo certificador</small>
                      </div>
                    </div>
                    
                    <div class="timeline-item">
                      <div class="timeline-marker">
                        <span class="step-number">4</span>
                      </div>
                      <div class="timeline-content">
                        <h6 class="fw-semibold mb-1">Emissão e Manutenção</h6>
                        <small class="text-muted">Certificado e acompanhamento contínuo</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA Section -->
            <div class="cta-section mt-5 p-4 bg-light rounded-3">
              <div class="row align-items-center">
                <div class="col-md-8">
                  <h5 class="fw-bold text-dark mb-2">Pronto para certificar sua empresa?</h5>
                  <p class="text-muted mb-0">Nossa equipe está pronta para guiá-lo em todo o processo de certificação ISO.</p>
                </div>
                <div class="col-md-4 text-md-end">
                              <router-link to="/Contacto" class="btn btn-primary btn-lg px-4">
              <i class="bi bi-telephone me-2"></i>
              Fale Conosco
            </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <div class="sidebar-content">
              <div class="sidebar-card bg-primary text-white p-4 rounded-3 mb-4">
                <h5 class="fw-bold mb-3">
                  <i class="bi bi-info-circle me-2"></i>Sobre a Certificação
                </h5>
                <p class="mb-3 opacity-90">
                  A certificação ISO é um diferencial competitivo que demonstra o compromisso da sua empresa com a qualidade e excelência.
                </p>
                <ul class="list-unstyled mb-0">
                  <li class="mb-2">
                    <i class="bi bi-check-lg me-2"></i>Válida internacionalmente
                  </li>
                  <li class="mb-2">
                    <i class="bi bi-check-lg me-2"></i>Reconhecida mundialmente
                  </li>
                  <li class="mb-0">
                    <i class="bi bi-check-lg me-2"></i>Melhoria contínua
                  </li>
                </ul>
              </div>
              
              <div class="sidebar-stats">
                <h6 class="fw-bold text-dark mb-3">Estatísticas</h6>
                <div class="stat-item mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="text-muted">Empresas certificadas</span>
                    <span class="fw-bold text-primary">500+</span>
                  </div>
                </div>
                <div class="stat-item mb-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="text-muted">Taxa de sucesso</span>
                    <span class="fw-bold text-success">98%</span>
                  </div>
                </div>
                <div class="stat-item">
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="text-muted">Tempo médio</span>
                    <span class="fw-bold text-info">6 meses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CertificacaoISO',
  mounted() {
    this.initFloatingAnimation()
  },
  methods: {
    initFloatingAnimation() {
      const icons = document.querySelectorAll('.floating-icon')
      icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.5}s`
      })
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #3b4cb8 0%, #2c3e50 100%);
  display: flex;
  align-items: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

/* Floating Icons */
.floating-icons {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-icon {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  animation: float 6s ease-in-out infinite;
}

/* ISO Certificates */
.iso-certificate {
  transition: transform 0.3s ease;
  max-width: 150px;
  margin: 0 auto;
}

.iso-certificate:hover {
  transform: scale(1.05);
}

.iso-certificate img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.bg-primary {
  background-color: #3b4cb8 !important;
}

.text-primary {
  color: #3b4cb8 !important;
}

/* Content Cards */
.content-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 1px solid #e9ecef;
  height: 100%;
}

.card-header-custom {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f8f9fa;
}

/* Benefits Section */
.benefit-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.benefit-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 1rem;
  flex-shrink: 0;
}

.benefit-content {
  flex: 1;
}

/* Timeline Process */
.process-timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  position: relative;
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 19px;
  top: 40px;
  width: 2px;
  height: calc(100% + 0.5rem);
  background: #e9ecef;
}

.timeline-marker {
  margin-right: 1rem;
  flex-shrink: 0;
}

.step-number {
  width: 38px;
  height: 38px;
  background: #3b4cb8;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

.timeline-content {
  flex: 1;
  padding-top: 0.25rem;
}

/* CTA Section */
.cta-section {
  border: 2px solid #e9ecef;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

/* Sidebar */
.sidebar-card {
  background: linear-gradient(135deg, #3b4cb8 0%, #2c3e50 100%) !important;
}

.sidebar-stats {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.stat-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid #f8f9fa;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    min-height: 80vh;
    padding: 2rem 0;
  }
  
  .display-4 {
    font-size: 2rem;
  }
  
  .lead {
    font-size: 1rem;
  }
  
  .iso-certificate {
    max-width: 100px;
  }
  
  .step-number {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    min-height: 70vh;
  }
  
  .display-4 {
    font-size: 1.75rem;
  }
  
  .lead {
    font-size: 0.9rem;
  }
  
  .iso-certificate {
    max-width: 80px;
  }
}
</style>