<template>
  <div class="iso-course-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="course-badge mb-3">
              <span class="badge bg-warning text-dark px-3 py-2 rounded-pill">
                <i class="bi bi-shield-check me-2"></i>Saúde e Segurança
              </span>
            </div>
            <h1 class="hero-title">ISO 45001 - Saúde e Segurança</h1>
            <p class="hero-subtitle">
              Domine o sistema de gestão de saúde e segurança ocupacional 
              para proteger trabalhadores e criar ambientes de trabalho seguros
            </p>
            
            <div class="course-meta d-flex gap-4 mb-4">
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-clock text-warning me-2"></i>
                <span>42 horas</span>
              </div>
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-people text-warning me-2"></i>
                <span>Certificação ISO</span>
              </div>
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-trophy text-warning me-2"></i>
                <span>Nível Executivo</span>
              </div>
            </div>

            <div class="hero-actions d-flex gap-3">
              <button class="btn btn-primary btn-lg px-4 py-3">
                <i class="bi bi-play-circle me-2"></i>Iniciar Curso
              </button>
              
              <div class="floating-card">
                <div class="card bg-white shadow p-3">
                  <div class="d-flex align-items-center">
                    <div class="icon-circle bg-warning text-dark me-3">
                      <i class="bi bi-shield-check"></i>
                    </div>
                    <div>
                      <h6 class="mb-0 fw-bold">Segurança Garantida</h6>
                      <small class="text-muted">Implementação eficaz</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="hero-image">
              <img src="@/assets/imagens/image.png" 
                   alt="ISO 45001" class="img-fluid rounded-4 shadow-lg">
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
                O curso ISO 45001 é fundamental para profissionais que desejam implementar 
                sistemas de gestão de saúde e segurança ocupacional eficazes, garantindo 
                a proteção dos trabalhadores e a conformidade com as melhores práticas internacionais.
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
                            <h6 class="mb-1">Fundamentos da SSO</h6>
                            <small class="text-muted">Conceitos básicos e terminologia</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module1" class="accordion-collapse collapse show">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Conceitos básicos de Saúde e Segurança Ocupacional</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Termos e Definições de SGSS</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Terminologia utilizada na ISO 45001</li>
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
                            <h6 class="mb-1">Liderança e Participação</h6>
                            <small class="text-muted">Engajamento dos trabalhadores</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module2" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Liderança e Participação dos Trabalhadores</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Política de SSO</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Interpretação prática dos principais termos</li>
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
                            <h6 class="mb-1">Gestão de Riscos</h6>
                            <small class="text-muted">Identificação e controle</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module3" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Identificação de perigos e avaliação de riscos</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Planejamento e controle operacional</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Eliminação de perigos e redução de riscos</li>
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
                            <h6 class="mb-1">Implementação e Auditoria</h6>
                            <small class="text-muted">Monitoramento e melhoria</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module4" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Monitoramento, medição, análise e avaliação</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Etapas de implementação da ISO 45001</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-warning me-2"></i>Incidentes, não conformidades e ações corretivas</li>
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
                        <i class="bi bi-shield-check"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Identificação de Perigos</h6>
                        <p class="text-muted mb-0">Domine técnicas para identificar e avaliar riscos ocupacionais</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-people"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Engajamento de Trabalhadores</h6>
                        <p class="text-muted mb-0">Aprenda a envolver equipes na cultura de segurança</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-graph-up"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Monitoramento de Performance</h6>
                        <p class="text-muted mb-0">Desenvolva sistemas de medição e análise de desempenho</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-arrow-repeat"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Melhoria Contínua</h6>
                        <p class="text-muted mb-0">Implemente ciclos de melhoria contínua em SSO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ISO 45001 Details Section -->
              <div class="iso-details-section mt-5">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="details-card">
                      <div class="card-header">
                        <h3 class="text-primary mb-3">ISO 45001 - SAÚDE E SEGURANÇA</h3>
                        <p class="text-muted">Módulos que você aprenderá:</p>
                      </div>
                      
                      <div class="modules-grid">
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-warning me-2"></i>
                          <span>Conceitos básicos de Saúde e Segurança Ocupacional (SSO)</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-warning me-2"></i>
                          <span>Termos e Definições de SGSS</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-warning me-2"></i>
                          <span>Liderança e Participação dos Trabalhadores</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-warning me-2"></i>
                          <span>Avaliação de Desempenho</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-warning me-2"></i>
                          <span>Implementação e Auditoria</span>
                        </div>
                      </div>

                      <div class="program-section mt-4">
                        <h4 class="mb-3">Programa:</h4>
                        <div class="program-list">
                          <div class="program-item">
                            <i class="bi bi-lock text-warning me-2"></i>
                            <span>Terminologia utilizada na ISO 45001</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-warning me-2"></i>
                            <span>Política de SSO</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-warning me-2"></i>
                            <span>Interpretação prática dos principais termos</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-warning me-2"></i>
                            <span>Identificação de perigos e avaliação de riscos</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-warning me-2"></i>
                            <span>Planejamento e controle operacional</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-warning me-2"></i>
                            <span>Eliminação de perigos e redução de riscos</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-warning me-2"></i>
                            <span>Monitoramento, medição, análise e avaliação</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-warning me-2"></i>
                            <span>Etapas de implementação da ISO 45001</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-warning me-2"></i>
                            <span>Simulações e estudos de caso</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-warning me-2"></i>
                            <span>Incidentes, não conformidades e ações corretivas</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="course-image-container">
                      <div class="course-image-wrapper">
                        <img src="@/assets/imagens/image.png" 
                             alt="ISO 45001 Course" class="img-fluid rounded-3">
                        <div class="course-overlay">
                          <div class="overlay-badge">
                            <span class="badge bg-warning text-dark">
                              <i class="bi bi-shield-check me-1"></i>Segurança
                            </span>
                          </div>
                          <div class="overlay-duration">
                            <i class="bi bi-clock me-1"></i>
                            <span>42 h</span>
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
  name: 'ISO45001CoursePage'
}
</script>

<style scoped>
/* Main Content */
.iso-course-page {

}

.hero-section {
  background: linear-gradient(135deg, #fff8e1 0%, #fff3c4 100%);
  padding: 10rem 0;
  position: relative;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #162415;
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
  border-left: 4px solid #ffc107;
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
  background: linear-gradient(135deg, #162415, #2d4a2a);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #0f1c0f, #243a24);
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
  color: #162415;
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
  background: linear-gradient(135deg, #ffc107, #ffb300);
  color: #000;
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
  background: rgba(255, 193, 7, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f57c00;
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* ISO 45001 Details Section */
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
  color: #162415;
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
  background: rgba(22, 36, 21, 0.9);
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