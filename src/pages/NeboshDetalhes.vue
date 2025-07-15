<template>
  <div class="nebosh-course-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="course-badge mb-3">
              <span class="badge bg-primary text-white px-3 py-2 rounded-pill">
                <i class="bi bi-shield-check me-2"></i>Saúde Ocupacional
              </span>
            </div>
            <h1 class="hero-title">NEBOSH - Certificação Internacional</h1>
            <p class="hero-subtitle">
              Obtenha a certificação NEBOSH Gold Learning Partner e torne-se um especialista 
              em saúde e segurança ocupacional, reconhecido internacionalmente através de 
              metodologias comprovadas e práticas de excelência.
            </p>
            
            <div class="course-meta d-flex gap-4 mb-4">
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-clock text-primary me-2"></i>
                <span>50 horas</span>
              </div>
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-award text-primary me-2"></i>
                <span>Certificação Internacional</span>
              </div>
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-trophy text-primary me-2"></i>
                <span>Nível Avançado</span>
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
                      <i class="bi bi-shield-check"></i>
                    </div>
                    <div>
                      <h6 class="mb-0 fw-bold">Gold Partner</h6>
                      <small class="text-muted">Certificação NEBOSH</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="hero-image">
              <img src="@/assets/imagens/NBOCH.png" 
                   alt="NEBOSH Learning Partner" class="img-fluid rounded-4 shadow-lg">
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
                O NEBOSH (National Examination Board in Occupational Safety and Health) 
                é a certificação internacional mais reconhecida em saúde e segurança ocupacional. 
                Este curso oferece formação abrangente em gestão de riscos, legislação e 
                práticas de segurança no local de trabalho.
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
                            <h6 class="mb-1">Gestão da Saúde e Segurança</h6>
                            <small class="text-muted">Fundamentos da gestão de segurança</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module1" class="accordion-collapse collapse show">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Princípios de gestão da saúde e segurança</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Sistemas de gestão de segurança</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Cultura organizacional de segurança</li>
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
                            <h6 class="mb-1">Legislação Internacional e Local</h6>
                            <small class="text-muted">Normas e regulamentações</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module2" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Legislação internacional de trabalho</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Regulamentações locais de segurança</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Conformidade legal e auditoria</li>
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
                            <h6 class="mb-1">Controle de Riscos</h6>
                            <small class="text-muted">Identificação e controle de riscos</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module3" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Identificação de perigos no local de trabalho</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Avaliação e controle de riscos</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Hierarquia de controles</li>
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
                            <h6 class="mb-1">Avaliação de Probabilidade e Severidade</h6>
                            <small class="text-muted">Análise quantitativa de riscos</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module4" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Métodos de avaliação de probabilidade</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Análise de severidade de acidentes</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Matriz de riscos e tomada de decisão</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="course-benefits">
                <h3 class="mb-4">O que você vai aprender</h3>
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-shield-check"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Gestão de Segurança</h6>
                        <p class="text-muted mb-0">Implemente sistemas eficazes de gestão de saúde e segurança</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-book"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Legislação e Normas</h6>
                        <p class="text-muted mb-0">Conheça as regulamentações internacionais e locais</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-exclamation-triangle"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Controle de Riscos</h6>
                        <p class="text-muted mb-0">Identifique e controle riscos no ambiente de trabalho</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-graph-up"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Análise de Dados</h6>
                        <p class="text-muted mb-0">Avalie probabilidade e severidade de acidentes</p>
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
                        <h3 class="text-primary mb-3">NEBOSH</h3>
                        <p class="text-muted">Módulos que você aprenderá:</p>
                      </div>
                      
                      <div class="modules-grid">
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Gestão da Saúde e Segurança</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Legislação internacional e local de trabalho</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Controle de Riscos no Local de Trabalho</span>
                        </div>
                        <div class="module-detail">
                          <i class="bi bi-check-circle text-primary me-2"></i>
                          <span>Avaliação de probabilidade e severidade</span>
                        </div>
                      </div>

                      <div class="program-section mt-4">
                        <h4 class="mb-3">Programa:</h4>
                        <div class="program-list">
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Papel da Legislação e Normas</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Planeamento e implementação de controlo</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Técnicas de investigação de acidentes</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Estatísticas avançadas de segurança</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Auditorias internas e externas</span>
                          </div>
                          <div class="program-item">
                            <i class="bi bi-lock text-primary me-2"></i>
                            <span>Ambiente organizacional e cultura de segurança</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="course-image-container">
                      <div class="course-image-wrapper">
                        <img src="@/assets/imagens/NBOCH.png" 
                             alt="NEBOSH Gold Learning Partner" class="img-fluid rounded-3">
                        <div class="course-overlay">
                          <div class="overlay-badge">
                            <span class="badge bg-primary text-white">
                              <i class="bi bi-shield-check me-1"></i>Saúde ocupacional
                            </span>
                          </div>
                          <div class="overlay-duration">
                            <i class="bi bi-clock me-1"></i>
                            <span>50 h</span>
                          </div>
                        </div>
                      </div>
                      
                      <div class="mt-4">
                        <div class="card bg-light border-0">
                          <div class="card-body text-center">
                            <h6 class="text-primary mb-2">Agendar Consulta</h6>
                            <p class="text-muted small mb-3">Precisa de mais informações sobre este curso?</p>
                            <button class="btn btn-outline-primary btn-sm">
                              <i class="bi bi-calendar-event me-2"></i>Agendar consulta
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
  name: 'NeboshCoursePage'
}
</script>

<style scoped>
/* Main Content */
.nebosh-course-page {

}

.hero-section {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 10rem 0;
  position: relative;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1565c0;
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
  border-left: 4px solid #1976d2;
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
  background: linear-gradient(135deg, #1565c0, #1976d2);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #0d47a1, #1565c0);
  transform: translateY(-2px);
}

.btn-outline-primary {
  border-color: #1976d2;
  color: #1976d2;
}

.btn-outline-primary:hover {
  background-color: #1976d2;
  border-color: #1976d2;
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
  color: #1565c0;
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
  background: linear-gradient(135deg, #1976d2, #1565c0);
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
  background: rgba(25, 118, 210, 0.1);
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
  color: #1565c0;
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
  background: rgba(21, 101, 192, 0.9);
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