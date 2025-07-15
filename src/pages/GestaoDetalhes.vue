<template>
  <div class="iso-course-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-1 order-2">
            <div class="course-badge mb-3">
              <span class="badge bg-success text-white px-3 py-2 rounded-pill">
                <i class="bi bi-leaf me-2"></i>Meio Ambiente
              </span>
            </div>
            <h1 class="hero-title">ISO 14001 - Gestão Ambiental</h1>
            <p class="hero-subtitle">
              Implemente um sistema de gestão ambiental eficaz e alinhe sua 
              organização às melhores práticas sustentáveis
            </p>
            
            <div class="course-meta d-flex gap-4 mb-4">
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-clock text-success me-2"></i>
                <span>48 horas</span>
              </div>
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-people text-success me-2"></i>
                <span>Certificação ISO</span>
              </div>
              <div class="meta-item d-flex align-items-center">
                <i class="bi bi-award text-success me-2"></i>
                <span>Reconhecido Internacionalmente</span>
              </div>
            </div>

            <div class="hero-actions d-flex flex-column flex-md-row gap-3 align-items-start">
              <button class="btn btn-primary btn-lg px-4 py-3">
                <i class="bi bi-play-circle me-2"></i>Iniciar Curso
              </button>
              
              <div class="floating-card">
                <div class="card bg-white shadow p-3">
                  <div class="d-flex align-items-center">
                    <div class="icon-circle bg-success text-white me-3">
                      <i class="bi bi-check-lg"></i>
                    </div>
                    <div>
                      <h6 class="mb-0 fw-bold">Certificação Garantida</h6>
                      <small class="text-muted">98% de aprovação</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <div class="col-lg-5 order-lg-2 order-1">
            <div class="hero-image">
              <img src="@/assets/imagens/image1.png" 
                   alt="ISO 14001" class="img-fluid rounded-4 shadow-lg">
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
                O curso ISO 14001 é projetado para profissionais que desejam implementar 
                sistemas de gestão ambiental eficazes em suas organizações, contribuindo 
                para a sustentabilidade e conformidade regulamentar.
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
                            <h6 class="mb-1">Introdução à ISO 14001</h6>
                            <small class="text-muted">Fundamentos e princípios</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module1" class="accordion-collapse collapse show">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>História e evolução da norma</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Estrutura da ISO 14001:2015</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Benefícios da implementação</li>
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
                            <h6 class="mb-1">Planejamento do SGA</h6>
                            <small class="text-muted">Sistema de Gestão Ambiental</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module2" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Análise de contexto organizacional</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Identificação de aspectos ambientais</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Definição de objetivos e metas</li>
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
                            <h6 class="mb-1">Implementação e Operação</h6>
                            <small class="text-muted">Práticas operacionais</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module3" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Controles operacionais</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Gestão de emergências</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Treinamento e conscientização</li>
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
                            <h6 class="mb-1">Auditoria e Melhoria</h6>
                            <small class="text-muted">Monitoramento e avaliação</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div id="module4" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Auditorias internas</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Análise crítica da direção</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Melhoria contínua</li>
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
                        <h6 class="fw-bold">Conformidade Legal</h6>
                        <p class="text-muted mb-0">Garanta o cumprimento das regulamentações ambientais</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-graph-up"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Redução de Custos</h6>
                        <p class="text-muted mb-0">Otimize recursos e reduza desperdícios</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-award"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Certificação</h6>
                        <p class="text-muted mb-0">Obtenha certificação reconhecida mundialmente</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="benefit-item d-flex">
                      <div class="benefit-icon">
                        <i class="bi bi-people"></i>
                      </div>
                      <div>
                        <h6 class="fw-bold">Competitividade</h6>
                        <p class="text-muted mb-0">Destaque-se no mercado com práticas sustentáveis</p>
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
  name: 'ISO14001CoursePage'
}
</script>

<style scoped>
/* Cores customizadas */
.bg-custom-blue {
  background-color: #3d4ed8 !important;
}

.text-custom-blue {
  color: #3d4ed8 !important;
}

/* Main Content */
.iso-course-page {
  /* Removido padding-top já que não há navbar */
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #f8fffe 0%, #f0f9f4 100%);
  padding: 10rem 0;
  position: relative;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #3d4ed8;
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
  border-left: 4px solid #198754;
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
  background: linear-gradient(135deg, #198754, #157347);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #157347, #0f5132);
  transform: translateY(-2px);
}

.btn-outline-primary {
  color: #198754;
  border-color: #198754;
}

.btn-outline-primary:hover {
  background: #198754;
  border-color: #198754;
}

/* Hero Image */
.hero-image {
  position: relative;
}

.floating-card {
  animation: float 3s ease-in-out infinite;
}

.floating-card .card {
  border: none;
  border-radius: 15px;
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
  color: #3d4ed8;
  font-weight: 700;
  font-size: 2.5rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 1.5rem;
  }
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
  background: linear-gradient(135deg, #3d4ed8, #2d3ba8);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

/* Benefits */
.benefit-item {
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.benefit-icon {
  width: 50px;
  height: 50px;
  background: rgba(25, 135, 84, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #198754;
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .course-meta {
    flex-direction: column;
    gap: 1rem !important;
    border-left: none;
    border-top: 4px solid #198754;
    padding-left: 0;
    padding-top: 1rem;
  }

  .meta-item {
    justify-content: center;
    text-align: center;
  }
  
  .hero-actions {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 1rem !important;
  }

  .hero-actions .btn {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
  }
  
  .floating-card {
    margin-top: 1rem;
    width: 100%;
  }

  .floating-card .card {
    text-align: center;
  }

  .course-badge {
    text-align: center;
  }

  .col-lg-6:first-child {
    margin-bottom: 0;
  }

  .col-lg-5 {
    margin-bottom: 3rem;
  }

  .hero-image {
    text-align: center;
  }

  .hero-image img {
    max-width: 90%;
    height: auto;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding: 3rem 0;
  }

  .hero-title {
    font-size: 2rem;
    line-height: 1.3;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .course-meta {
    gap: 0.8rem !important;
    margin-bottom: 1.5rem;
  }

  .meta-item {
    font-size: 0.9rem;
  }

  .meta-item i {
    font-size: 1rem;
  }

  .hero-actions .btn {
    padding: 0.8rem;
    font-size: 1rem;
  }

  .floating-card .card {
    padding: 1rem !important;
  }

  .floating-card .icon-circle {
    width: 40px;
    height: 40px;
  }

  .floating-card h6 {
    font-size: 0.9rem;
  }

  .floating-card small {
    font-size: 0.8rem;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>