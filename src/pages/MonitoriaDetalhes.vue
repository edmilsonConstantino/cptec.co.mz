<template>
  <div class="monitoring-course-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-1 order-2">
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

            <div class="hero-actions d-flex flex-column flex-md-row gap-3 align-items-start">
              <router-link to="/Contacto" class="btn btn-primary btn-lg px-4 py-3">
                <i class="bi bi-play-circle me-2"></i>Iniciar Curso
              </router-link>
              
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

          <div class="col-lg-5 order-lg-2 order-1">
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
                  <!-- Módulo 1 -->
                  <div class="accordion-item border-0 shadow-sm mb-3">
                    <h2 class="accordion-header" id="heading1">
                      <button 
                        class="accordion-button" 
                        :class="{ 'collapsed': activeModule !== 1 }"
                        type="button" 
                        @click="toggleModule(1)"
                        :aria-expanded="activeModule === 1"
                        aria-controls="module1">
                        <div class="module-info">
                          <span class="module-number">01</span>
                          <div>
                            <h6 class="mb-1">Conceitos Fundamentais</h6>
                            <small class="text-muted">Planeamento, monitorização e avaliação</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div 
                      id="module1" 
                      class="accordion-collapse collapse" 
                      :class="{ 'show': activeModule === 1 }"
                      aria-labelledby="heading1" 
                      data-bs-parent="#moduleAccordion">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Conceitos associados ao planeamento, monitorização e avaliação</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Fundamentos da gestão de projectos</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Ciclo de vida de projectos</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Módulo 2 -->
                  <div class="accordion-item border-0 shadow-sm mb-3">
                    <h2 class="accordion-header" id="heading2">
                      <button 
                        class="accordion-button collapsed" 
                        :class="{ 'collapsed': activeModule !== 2 }"
                        type="button" 
                        @click="toggleModule(2)"
                        :aria-expanded="activeModule === 2"
                        aria-controls="module2">
                        <div class="module-info">
                          <span class="module-number">02</span>
                          <div>
                            <h6 class="mb-1">Estratégias e Metodologias</h6>
                            <small class="text-muted">Ferramentas de utilização</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div 
                      id="module2" 
                      class="accordion-collapse collapse" 
                      :class="{ 'show': activeModule === 2 }"
                      aria-labelledby="heading2" 
                      data-bs-parent="#moduleAccordion">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Estratégias e metodologias de utilização</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Frameworks de gestão de projectos</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Metodologias ágeis e tradicionais</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Módulo 3 -->
                  <div class="accordion-item border-0 shadow-sm mb-3">
                    <h2 class="accordion-header" id="heading3">
                      <button 
                        class="accordion-button collapsed" 
                        :class="{ 'collapsed': activeModule !== 3 }"
                        type="button" 
                        @click="toggleModule(3)"
                        :aria-expanded="activeModule === 3"
                        aria-controls="module3">
                        <div class="module-info">
                          <span class="module-number">03</span>
                          <div>
                            <h6 class="mb-1">Monitoria Participativa</h6>
                            <small class="text-muted">Técnicas e ferramentas</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div 
                      id="module3" 
                      class="accordion-collapse collapse" 
                      :class="{ 'show': activeModule === 3 }"
                      aria-labelledby="heading3" 
                      data-bs-parent="#moduleAccordion">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Técnicas e ferramentas de monitoria participativa</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Envolvimento dos stakeholders</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Sistemas de feedback contínuo</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Módulo 4 -->
                  <div class="accordion-item border-0 shadow-sm mb-3">
                    <h2 class="accordion-header" id="heading4">
                      <button 
                        class="accordion-button collapsed" 
                        :class="{ 'collapsed': activeModule !== 4 }"
                        type="button" 
                        @click="toggleModule(4)"
                        :aria-expanded="activeModule === 4"
                        aria-controls="module4">
                        <div class="module-info">
                          <span class="module-number">04</span>
                          <div>
                            <h6 class="mb-1">Ferramentas de Aplicação</h6>
                            <small class="text-muted">Métodos e procedimentos</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div 
                      id="module4" 
                      class="accordion-collapse collapse" 
                      :class="{ 'show': activeModule === 4 }"
                      aria-labelledby="heading4" 
                      data-bs-parent="#moduleAccordion">
                      <div class="accordion-body">
                        <ul class="list-unstyled">
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Aplicação de ferramentas de monitoria</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Métodos e procedimentos de avaliação</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-primary me-2"></i>Implementação de sistemas de controlo</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Módulo 5 -->
                  <div class="accordion-item border-0 shadow-sm">
                    <h2 class="accordion-header" id="heading5">
                      <button 
                        class="accordion-button collapsed" 
                        :class="{ 'collapsed': activeModule !== 5 }"
                        type="button" 
                        @click="toggleModule(5)"
                        :aria-expanded="activeModule === 5"
                        aria-controls="module5">
                        <div class="module-info">
                          <span class="module-number">05</span>
                          <div>
                            <h6 class="mb-1">Recolha de Dados</h6>
                            <small class="text-muted">Instrumentos e técnicas</small>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div 
                      id="module5" 
                      class="accordion-collapse collapse" 
                      :class="{ 'show': activeModule === 5 }"
                      aria-labelledby="heading5" 
                      data-bs-parent="#moduleAccordion">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProjectMonitoringCoursePage',
  data() {
    return {
      activeModule: 1 // Módulo 1 aberto por padrão
    }
  },
  methods: {
    toggleModule(moduleNumber) {
      // Se o módulo clicado já está ativo, fecha ele
      if (this.activeModule === moduleNumber) {
        this.activeModule = null;
      } else {
        // Caso contrário, abre o módulo clicado
        this.activeModule = moduleNumber;
      }
    }
  }
}
</script>

<style scoped>
/* Cores customizadas */
.bg-custom-blue {
  background-color: #4a5bc7 !important;
}

.text-custom-blue {
  color: #4a5bc7 !important;
}

/* Main Content */
.monitoring-course-page {
  margin-top: 0;
  padding-top: 0;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #4a5bc7 0%, #6366f1 50%, #8b5cf6 100%);
  padding: 13rem 0 4rem;
  position: relative;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #e2e8f0;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.course-meta {
  border-left: 4px solid #fbbf24;
  padding-left: 1rem;
  margin-bottom: 2rem;
}

.meta-item {
  font-weight: 500;
  color: #f1f5f9;
}

.hero-actions .btn {
  font-weight: 600;
  border-radius: 50px;
}

.btn-primary {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border: none;
  color: #1f2937;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  transform: translateY(-2px);
  color: #1f2937;
}

.btn-outline-primary {
  border-color: #fbbf24;
  color: #fbbf24;
}

.btn-outline-primary:hover {
  background-color: #fbbf24;
  border-color: #fbbf24;
  color: #1f2937;
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
  color: #4a5bc7;
  font-weight: 700;
  font-size: 2.5rem;
}

/* Accordion Styles */
.course-modules .accordion-button {
  background: white;
  border: none;
  box-shadow: none;
  padding: 1.5rem;
  position: relative;
}

.course-modules .accordion-button:not(.collapsed) {
  background: white;
  color: #4a5bc7;
  box-shadow: none;
}

.course-modules .accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(74, 91, 199, 0.25);
  border: none;
}

.module-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
}

.module-number {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #1f2937;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

/* Transição suave para o conteúdo */
.accordion-collapse {
  transition: all 0.3s ease;
}

/* Benefits */
.benefit-item {
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.benefit-icon {
  width: 50px;
  height: 50px;
  background: rgba(251, 191, 36, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f59e0b;
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .hero-section {
    padding: 170px 0 3rem;
  }

  .hero-title {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    text-align: center;
    line-height: 1.5;
  }

  .course-badge {
    text-align: center;
    margin-bottom: 1.5rem !important;
  }

  .course-meta {
    flex-direction: column;
    gap: 0.8rem !important;
    border-left: none;
    border-top: 4px solid #fbbf24;
    padding-left: 0;
    padding-top: 1rem;
    margin-bottom: 1.5rem;
  }

  .meta-item {
    justify-content: center;
    text-align: center;
    font-size: 0.9rem;
  }
  
  .hero-actions {
    flex-direction: column !important;
    align-items: center !important;
    gap: 1rem !important;
  }

  .hero-actions .btn {
    width: 100%;
    max-width: 300px;
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }
  
  .floating-card {
    margin-top: 1rem;
    width: 100%;
    max-width: 300px;
    animation: none;
  }

  .floating-card .card {
    text-align: center;
    padding: 1rem !important;
  }

  .col-lg-5 {
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .hero-image {
    text-align: center;
    margin-top: 0.5rem;
  }

  .hero-image img {
    max-width: 85%;
    height: auto;
  }

  .section-title {
    font-size: 1.8rem;
    text-align: center;
  }

  .lead {
    font-size: 1rem;
    text-align: center;
  }

  .course-modules h3 {
    font-size: 1.4rem;
    text-align: center;
  }

  .course-benefits h3 {
    font-size: 1.4rem;
    text-align: center;
  }

  .accordion-button {
    padding: 1rem !important;
  }

  .module-number {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }

  .module-info h6 {
    font-size: 0.95rem;
  }

  .module-info small {
    font-size: 0.8rem;
  }

  .benefit-item {
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  .benefit-icon {
    margin-bottom: 0.5rem;
  }

  .benefit-item h6 {
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding: 150px 0 2rem;
  }

  .hero-title {
    font-size: 1.8rem;
    line-height: 1.3;
  }

  .hero-subtitle {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .col-lg-5 {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }

  .hero-image {
    margin-top: 1rem;
  }

  .course-meta {
    gap: 0.6rem !important;
    margin-bottom: 1rem;
  }

  .meta-item {
    font-size: 0.8rem;
  }

  .meta-item i {
    font-size: 0.9rem;
  }

  .hero-actions .btn {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
    max-width: 280px;
  }

  .floating-card .card {
    padding: 0.8rem !important;
  }

  .floating-card .icon-circle {
    width: 35px;
    height: 35px;
  }

  .floating-card h6 {
    font-size: 0.85rem;
  }

  .floating-card small {
    font-size: 0.75rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .lead {
    font-size: 0.9rem;
  }

  .course-modules h3,
  .course-benefits h3 {
    font-size: 1.2rem;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .accordion-body {
    padding: 1rem;
  }

  .accordion-body li {
    font-size: 0.85rem;
  }

  .benefit-item h6 {
    font-size: 0.9rem;
  }

  .benefit-item p {
    font-size: 0.8rem;
  }

  .benefit-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 130px 0 1.5rem;
  }

  .hero-title {
    font-size: 1.6rem;
  }

  .hero-subtitle {
    font-size: 0.85rem;
  }

  .col-lg-5 {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .hero-image {
    margin-top: 2rem;
  }

  .hero-actions .btn {
    max-width: 100%;
    font-size: 0.85rem;
  }

  .floating-card {
    max-width: 100%;
  }
}
</style>