<template>
  <div class="hygiene-course-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="course-badge mb-3">
              <span class="badge bg-primary text-white px-3 py-2 rounded-pill">
                <i class="bi bi-heart-pulse me-2"></i>Saúde
              </span>
            </div>
            <h1 class="hero-title">Higiene, Segurança e Saúde no Trabalho</h1>
            <p class="hero-subtitle">
              Aprenda os fundamentos essenciais para criar ambientes de trabalho 
              seguros e saudáveis, protegendo trabalhadores e garantindo conformidade
            </p>
            
            <div class="course-meta d-flex gap-4 mb-4">
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-clock text-primary me-2"></i>
                <span>45 horas</span>
              </div>
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-people text-primary me-2"></i>
                <span>Certificação</span>
              </div>
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-trophy text-primary me-2"></i>
                <span>Nível Fundamental</span>
              </div>
            </div>

            <div class="hero-actions d-flex gap-3">
              <button class="btn btn-primary btn-lg px-4 py-3">
                <i class="bi bi-play-circle me-2"></i>Iniciar Curso
              </button>
              
              <div class="floating-card">
                <div class="card bg-white shadow p-3">
                  <div class="d-flex align-items-center">
                    <div class="icon-circle bg-primary text-white me-3">
                      <i class="bi bi-heart-pulse"></i>
                    </div>
                    <div>
                      <h6 class="mb-0 fw-bold">Saúde Garantida</h6>
                      <small class="text-muted">Proteção completa</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="hero-image">
              <img src="@/assets/imagens/hst.png" 
                   alt="Higiene, Segurança e Saúde no Trabalho" class="img-fluid rounded-4 shadow-lg">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Course Overview -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="course-content">
              <h2 class="section-title mb-4">Sobre o Curso</h2>
              <p class="lead mb-4">
                Este curso de Higiene, Segurança e Saúde no Trabalho oferece conhecimentos 
                fundamentais para identificar riscos, implementar medidas preventivas e 
                garantir a proteção dos trabalhadores em todos os ambientes laborais.
              </p>

              <!-- Course Modules -->
              <div class="course-modules mb-5">
                <h3 class="mb-4">Módulos do Curso</h3>
                <div class="accordion" id="moduleAccordion">
                  <div class="accordion-item border-0 shadow-sm mb-3">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#module1">
                        <div class="module-info">
                          <span class="module-number">01</span>
                          <div>
                            <h6 class="mb-1">Fundamentos da Higiene e Segurança</h6>
                            <small class="text-muted">Conceitos básicos e princípios</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module1" class="accordion-collapse collapse show">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Fundamentos da Higiene e Segurança no Trabalho</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Conceitos básicos de saúde ocupacional</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Princípios da prevenção de acidentes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item border-0 shadow-sm mb-3">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#module2">
                        <div class="module-info">
                          <span class="module-number">02</span>
                          <div>
                            <h6 class="mb-1">Identificação e Avaliação de Riscos</h6>
                            <small class="text-muted">Análise de perigos ocupacionais</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module2" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Identificação e Avaliação de Riscos</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Tipos de riscos ocupacionais</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Metodologias de avaliação de riscos</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item border-0 shadow-sm mb-3">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#module3">
                        <div class="module-info">
                          <span class="module-number">03</span>
                          <div>
                            <h6 class="mb-1">Medidas de Prevenção</h6>
                            <small class="text-muted">Controle e prevenção de acidentes</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module3" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Medidas de Prevenção</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Equipamentos de proteção individual</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Sistemas de proteção coletiva</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item border-0 shadow-sm">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#module4">
                        <div class="module-info">
                          <span class="module-number">04</span>
                          <div>
                            <h6 class="mb-1">Acidentes de Trabalho</h6>
                            <small class="text-muted">Investigação e prevenção</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module4" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Acidentes de Trabalho</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Investigação de acidentes</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Registro e análise de ocorrências</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Benefits -->
              <div class="course-benefits">
                <h3 class="mb-4">O que você vai aprender</h3>
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-search"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Identificação de Riscos</h6>
                        <p class="text-muted mb-0">Reconheça e avalie diferentes tipos de riscos ocupacionais</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-shield-check"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Medidas Preventivas</h6>
                        <p class="text-muted mb-0">Implemente controles eficazes para prevenção de acidentes</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-exclamation-triangle"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Investigação de Acidentes</h6>
                        <p class="text-muted mb-0">Conduza investigações sistemáticas de acidentes</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-clipboard-check"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Conformidade Legal</h6>
                        <p class="text-muted mb-0">Garanta o cumprimento das normas regulamentares</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Course Details Section -->
              <div class="iso-details-section mt-5">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="details-card">
                      <div class="card-header">
                        <h3 class="text-primary mb-3">HIGIENE, SEGURANÇA E SAÚDE NO TRABALHO</h3>
                        <p class="text-muted">Módulos que você aprenderá:</p>
                      </div>
                      
                      <div class="modules-grid">
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Fundamentos da Higiene e Segurança no Trabalho</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Identificação e Avaliação de Riscos</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Medidas de Prevenção</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Acidentes de Trabalho</span>
                        </div>
                      </div>

                      <div class="program-section mt-4">
                        <h4 class="mb-3">Programa:</h4>
                        <div class="program-list">
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Principais diplomas</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Obrigações do empregador e do trabalhador</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Organização dos serviços de higiene e saúde no trabalho</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Organização do tempo de trabalho</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="course-image-container">
                      <div class="course-image-wrapper">
                        <img src="@/assets/imagens/hst.png" 
                             alt="Higiene, Segurança e Saúde no Trabalho" class="img-fluid rounded-3">
                        <div class="course-overlay">
                          <div class="overlay-badge">
                            <span class="badge bg-primary text-white">
                              <i class="bi bi-heart-pulse me-1"></i>Saúde
                            </span>
                          </div>
                          <div class="overlay-duration">
                            <i class="bi bi-clock me-1"></i>
                            <span>45 h</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
  name: 'HygieneSafetyCoursePage'
}
</script>

<style scoped>
/* Main Content */
.hygiene-course-page {

}

.hero-section {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 10rem 0;
  position: relative;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #0d47a1;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.course-meta {
  border-left: 4px solid #2196f3;
  padding-left: 1rem;
  margin-bottom: 2rem;
}

.meta-item {
  font-weight: 500;
  color: #4b5563;
}

.hero-actions .btn {
  font-weight: 600;
  border-radius: 50px;
}

.btn-primary {
  background: linear-gradient(135deg, #0d47a1, #1976d2);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #0a3d91, #1565c0);
  transform: translateY(-2px);
}

/* Hero Image */
.hero-image {
  position: relative;
}

.floating-card {
  position: relative;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Course Content */
.section-title {
  color: #0d47a1;
  font-weight: 700;
  font-size: 2.5rem;
}

.course-modules .accordion-button {
  background: white;
  border: none;
  box-shadow: none;
  padding: 1.5rem;
}

.module-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.module-number {
  background: linear-gradient(135deg, #2196f3, #1976d2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.benefit-item {
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.benefit-icon {
  width: 50px;
  height: 50px;
  background: rgba(33, 150, 243, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1976d2;
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* Course Details Section */
.iso-details-section {
  background: #f8f9fa;
  padding: 3rem 0;
  border-radius: 20px;
  margin-top: 3rem;
}

.details-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.card-header h3 {
  color: #0d47a1;
  font-weight: 700;
  font-size: 1.5rem;
}

.modules-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.module-detail {
  display: flex;
  align-items: center;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 8px;
  font-weight: 500;
  color: #4b5563;
}

.program-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.program-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  font-weight: 500;
  color: #4b5563;
  transition: all 0.3s ease;
}

.program-item:hover {
  background: #e9ecef;
  transform: translateX(5px);
}

/* Course Image Container */
.course-image-container {
  position: sticky;
  top: 2rem;
}

.course-image-wrapper {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.course-image-wrapper img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.course-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
}

.overlay-badge {
  align-self: flex-start;
}

.overlay-duration {
  align-self: flex-end;
  background: rgba(13, 71, 161, 0.9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .details-card {
    padding: 1.5rem;
  }
  
  .iso-details-section {
    padding: 2rem 0;
  }
  
  .course-image-container {
    position: static;
    margin-top: 2rem;
  }
  
  .course-image-wrapper img {
    height: 250px;
  }
}
</style>