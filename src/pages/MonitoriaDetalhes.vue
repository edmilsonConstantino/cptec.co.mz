<template>
  <div class="monitoring-course-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="course-badge mb-3">
              <span class="badge bg-primary text-white px-3 py-2 rounded-pill">
                <i class="bi bi-bar-chart-line me-2"></i>Administração
              </span>
            </div>
            <h1 class="hero-title">Monitoria, Gestão e Avaliação de Projectos</h1>
            <p class="hero-subtitle">
              Aprenda os conceitos fundamentais para planeamento, monitorização e 
              avaliação eficazes de projectos, utilizando estratégias e metodologias 
              comprovadas para garantir o sucesso dos seus empreendimentos.
            </p>
            
            <div class="course-meta d-flex gap-4 mb-4">
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-clock text-primary me-2"></i>
                <span>30 horas</span>
              </div>
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-people text-primary me-2"></i>
                <span>Certificação</span>
              </div>
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-trophy text-primary me-2"></i>
                <span>Nível Intermediário</span>
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
                      <i class="bi bi-bar-chart-line"></i>
                    </div>
                    <div>
                      <h6 class="mb-0 fw-bold">Gestão Eficaz</h6>
                      <small class="text-muted">Projectos de sucesso</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="hero-image">
              <img src="@/assets/imagens/MGP.png" 
                   alt="Monitoria, Gestão e Avaliação de Projectos" class="img-fluid rounded-4 shadow-lg">
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
                Este curso abrange os conceitos essenciais para o planeamento, 
                monitorização e avaliação de projectos, fornecendo as ferramentas 
                necessárias para garantir o sucesso e a sustentabilidade dos seus 
                empreendimentos através de metodologias comprovadas.
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
                            <h6 class="mb-1">Conceitos Fundamentais</h6>
                            <small class="text-muted">Planeamento, monitorização e avaliação</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module1" class="accordion-collapse collapse show">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Conceitos associados ao planeamento, monitorização e avaliação</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Fundamentos da gestão de projectos</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Ciclo de vida de projectos</li>
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
                            <h6 class="mb-1">Estratégias e Metodologias</h6>
                            <small class="text-muted">Ferramentas de utilização</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module2" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Estratégias e metodologias de utilização</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Frameworks de gestão de projectos</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Metodologias ágeis e tradicionais</li>
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
                            <h6 class="mb-1">Monitoria Participativa</h6>
                            <small class="text-muted">Técnicas e ferramentas</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module3" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Técnicas e ferramentas de monitoria participativa</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Envolvimento dos stakeholders</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Sistemas de feedback contínuo</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item border-0 shadow-sm mb-3">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#module4">
                        <div class="module-info">
                          <span class="module-number">04</span>
                          <div>
                            <h6 class="mb-1">Ferramentas de Aplicação</h6>
                            <small class="text-muted">Métodos e procedimentos</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module4" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Aplicação de ferramentas de monitoria</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Métodos e procedimentos de avaliação</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Implementação de sistemas de controlo</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item border-0 shadow-sm">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#module5">
                        <div class="module-info">
                          <span class="module-number">05</span>
                          <div>
                            <h6 class="mb-1">Recolha de Dados</h6>
                            <small class="text-muted">Instrumentos e técnicas</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module5" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Elaboração de instrumentos de recolha de dados</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Técnicas de análise quantitativa e qualitativa</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Relatórios e apresentação de resultados</li>
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
                        <i class="bi bi-target"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Definição de Objectivos</h6>
                        <p class="text-muted mb-0">Estabeleça metas claras e mensuráveis para os seus projectos</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-graph-up"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Estratégias de Monitorização</h6>
                        <p class="text-muted mb-0">Implemente sistemas eficazes de acompanhamento e controlo</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-clipboard-data"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Recolha de Dados</h6>
                        <p class="text-muted mb-0">Desenvolva instrumentos eficazes para recolha de informação</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-bar-chart"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Avaliação de Resultados</h6>
                        <p class="text-muted mb-0">Meça o impacto e eficácia dos seus projectos</p>
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
                        <h3 class="text-primary mb-3">MONITORIA, GESTÃO E AVALIAÇÃO DE PROJECTOS</h3>
                        <p class="text-muted">Módulos que você aprenderá:</p>
                      </div>
                      
                      <div class="modules-grid">
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Conceitos associados ao planeamento, monitorização e avaliação</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Estratégias e metodologias de utilização</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Técnicas e ferramentas de monitoria participativa</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Aplicação de ferramentas de monitoria, métodos e procedimentos</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Elaboração de instrumentos de recolha de dados</span>
                        </div>
                      </div>

                      <div class="program-section mt-4">
                        <h4 class="mb-3">Programa:</h4>
                        <div class="program-list">
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Indefinição dos objectivos</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Definição das estratégias e metodologias a utilizar</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Orçamentação</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Modelos de avaliação</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Planificar uma avaliação</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Ferramenta para o controle da função</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Preparação de avaliações</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Selecção de indicadores</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="course-image-container">
                      <div class="course-image-wrapper">
                        <img src="@/assets/imagens/MGP.png" 
                             alt="Monitoria, Gestão e Avaliação de Projectos" class="img-fluid rounded-3">
                        <div class="course-overlay">
                          <div class="overlay-badge">
                            <span class="badge bg-primary text-white">
                              <i class="bi bi-bar-chart-line me-1"></i>Administração
                            </span>
                          </div>
                          <div class="overlay-duration">
                            <i class="bi bi-clock me-1"></i>
                            <span>30 h</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="mt-4">
                        <div class="card bg-light border-0">
                          <div class="card-body text-center">
                            <h6 class="text-primary mb-2">Agendar Consulta</h6>
                            <p class="text-muted small mb-3">Precisa de mais informações sobre este curso?</p>
                            <button class="btn btn-outline-primary btn-sm">
                              <i class="bi bi-calendar-event me-2"></i>Schedule appointment
                            </button>
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
  name: 'ProjectMonitoringCoursePage'
}
</script>

<style scoped>
/* Main Content */
.monitoring-course-page {

}

.hero-section {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  padding: 10rem 0;
  position: relative;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #2e7d32;
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
  border-left: 4px solid #4caf50;
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
  background: linear-gradient(135deg, #2e7d32, #4caf50);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #1b5e20, #388e3c);
  transform: translateY(-2px);
}

.btn-outline-primary {
  border-color: #4caf50;
  color: #4caf50;
}

.btn-outline-primary:hover {
  background-color: #4caf50;
  border-color: #4caf50;
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
  color: #2e7d32;
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
  background: linear-gradient(135deg, #4caf50, #2e7d32);
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
  background: rgba(76, 175, 80, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4caf50;
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
  color: #2e7d32;
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
  background: rgba(46, 125, 50, 0.9);
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