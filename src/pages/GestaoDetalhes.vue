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
              <router-link to="/Contacto" class="btn btn-primary btn-lg px-4 py-3">
                <i class="bi bi-play-circle me-2"></i>Iniciar Curso
              </router-link>
              
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
                            <h6 class="mb-1">Introdução à ISO 14001</h6>
                            <small class="text-muted">Fundamentos e princípios</small>
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
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>História e evolução da norma</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Estrutura da ISO 14001:2015</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Benefícios da implementação</li>
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
                            <h6 class="mb-1">Planejamento do SGA</h6>
                            <small class="text-muted">Sistema de Gestão Ambiental</small>
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
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Análise de contexto organizacional</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Identificação de aspectos ambientais</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Definição de objetivos e metas</li>
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
                            <h6 class="mb-1">Implementação e Operação</h6>
                            <small class="text-muted">Práticas operacionais</small>
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
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Controles operacionais</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Gestão de emergências</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Treinamento e conscientização</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Módulo 4 -->
                  <div class="accordion-item border-0 shadow-sm">
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
                            <h6 class="mb-1">Auditoria e Melhoria</h6>
                            <small class="text-muted">Monitoramento e avaliação</small>
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
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Auditorias internas</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Análise crítica da direção</li>
                          <li class="mb-2"><i class="bi bi-check-circle text-success me-2"></i>Melhoria contínua</li>
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
  name: 'ISO14001CoursePage',
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
.bg-custom-blue {
  background-color: #3d4ed8 !important;
}

.text-custom-blue {
  color: #3d4ed8 !important;
}

.iso-course-page {
  margin-top: 0;
  padding-top: 0;
}

.hero-section {
  background: linear-gradient(135deg, #f8fffe 0%, #f0f9f4 100%);
  padding: 12rem 0 4rem;
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

.section-title {
  color: #3d4ed8;
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
  color: #3d4ed8;
  box-shadow: none;
}

.course-modules .accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(61, 78, 216, 0.25);
  border: none;
}

.module-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
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

/* Ícone do accordion - removido pois já existe no design original */

/* Transição suave para o conteúdo */
.accordion-collapse {
  transition: all 0.3s ease;
}

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

@media (max-width: 768px) {
  .hero-section {
    padding: 140px 0 3rem;
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
    border-top: 4px solid #198754;
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
  }

  .hero-image {
    text-align: center;
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
    padding: 120px 0 2rem;
  }

  .hero-title {
    font-size: 1.8rem;
    line-height: 1.3;
  }

  .hero-subtitle {
    font-size: 0.9rem;
    margin-bottom: 1rem;
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
    padding: 110px 0 1.5rem;
  }

  .hero-title {
    font-size: 1.6rem;
  }

  .hero-subtitle {
    font-size: 0.85rem;
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