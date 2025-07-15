<template>
  <div class="container-fluid py-5">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-5">
      <div class="text-center flex-grow-1">
        <div class="d-flex justify-content-center align-items-center mb-2">
          <span class="me-2" style="font-size: 2rem;">📘</span>
          <h3 class="fw-bold mb-0">Cursos de Gestão da Qualidade ISO</h3>
        </div>
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="container">
      <div class="row g-4">
        <!-- Card 1 -->
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 card-hover">
            <div class="position-relative">
              <img src="@/assets/imagens/image1.png" 
                   alt="Educação Financeira" class="card-img-top">
              <span class="badge-custom bg-custom-blue">Gestão Ambiental</span>
            </div>
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <span class="icon-wrapper bg-custom-blue-opacity text-custom-blue">🌿</span>
                <h5 class="card-title mb-0 fw-bold">ISO 14001 - Gestão Ambiental</h5>
              </div>
              <p class="card-text text-muted mb-3">
                Implemente um sistema de gestão ambiental eficaz e alinhe sua organização às melhores práticas sustentáveis
              </p>
              <div class="course-info mb-3">
                <div class="info-item">
                  <i class="bi bi-clock me-1"></i>48 h
                </div>
                <div class="info-item">
                  <i class="bi bi-leaf me-1"></i>Meio Ambiente
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <span class="course-badge">ISO</span>
                <router-link to="/Ambiental" class="btn btn-custom-blue rounded-pill px-4">
                  Ver Curso
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 card-hover">
            <div class="position-relative">
              <img src="@/assets/imagens/image2.png" 
                   alt="Currículo Online" class="card-img-top">
              <span class="badge-custom bg-custom-blue">Gestão da Qualidade</span>
            </div>
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <span class="icon-wrapper bg-custom-blue-opacity text-custom-blue">🏅</span>
                <h5 class="card-title mb-0 fw-bold">ISO 9001 - Gestão da Qualidade</h5>
              </div>
              <p class="card-text text-muted mb-3">
                Aprenda os princípios e requisitos do sistema de gestão da qualidade mais reconhecido mundialmente.
              </p>
              <div class="course-info mb-3">
                <div class="info-item">
                  <i class="bi bi-clock me-1"></i>45 h
                </div>
                <div class="info-item">
                  <i class="bi bi-award me-1"></i>Executivo
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <span class="course-badge">ISO</span>
                            <router-link to="/Qualidade" class="btn btn-custom-blue rounded-pill px-4">
                  Ver Curso
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 card-hover">
            <div class="position-relative">
              <img src="@/assets/imagens/image.png" 
                   alt="Currículo Online" class="card-img-top">
              <span class="badge-custom bg-custom-blue">Segurança</span>
            </div>
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <span class="icon-wrapper bg-custom-blue-opacity text-custom-blue">👷</span>
                <h5 class="card-title mb-0 fw-bold">ISO 45001 - Saúde e Segurança</h5>
              </div>
              <p class="card-text text-muted mb-3">
                Proteja seus colaboradores e minimize riscos com um sistema de gestão de saúde e segurança ocupacional.
              </p>
              <div class="course-info mb-3">
                <div class="info-item">
                  <i class="bi bi-clock me-1"></i>42 h
                </div>
                <div class="info-item">
                  <i class="bi bi-shield me-1"></i>Segurança
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <span class="course-badge">ISO</span>
                 <router-link to="/Saude" class="btn btn-custom-blue rounded-pill px-4">
                  Ver Curso
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="d-flex justify-content-end mt-4">
        <button class="btn btn-custom-blue btn-sm rounded-pill px-4 py-2 fw-semibold text-uppercase">
          <router-link to="/Cursos" class="text-white text-decoration-none">
            <i class="bi bi-mortarboard me-2"></i>
            Ver Todos os Cursos
            <i class="fas fa-arrow-right ms-2"></i>
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AulasHome',
  methods: {
    verDetalhes(curso) {
      console.log('Ver detalhes do curso:', curso);
    },
    inscreverSe(curso) {
      console.log('Inscrever-se no curso:', curso);
    }
  }
}
</script>

<style scoped>
:root {
  --custom-blue: #3d4ed8;
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}

.badge-custom {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}

.bg-custom-blue {
  background-color: #3d4ed8 !important;
}

.text-custom-blue {
  color: #3d4ed8 !important;
}

.btn-custom-blue {
  background-color: #3d4ed8;
  border-color: #3d4ed8;
  color: white;
  transition: all 0.3s ease;
}

.btn-custom-blue:hover {
  background-color: #2d3ba8;
  border-color: #2d3ba8;
  color: white;
  transform: translateY(-2px);
}

.bg-custom-blue-opacity {
  background-color: rgba(61, 78, 216, 0.1) !important;
}

.icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.course-info {
  display: flex;
  gap: 1rem;
}

.info-item {
  font-size: 0.9rem;
  color: #6c757d;
  display: flex;
  align-items: center;
}

.course-badge {
  color: #3d4ed8;
  font-weight: bold;
  font-size: 1.1rem;
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15px;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .container-fluid {
    padding: 2rem 0;
  }
  
  .card-img-top {
    height: 200px;
  }
  
  .card-body {
    padding: 1.5rem !important;
  }
  
  .card-title {
    font-size: 1.1rem;
    line-height: 1.3;
  }
  
  .card-text {
    font-size: 0.9rem;
  }
  
  .badge-custom {
    font-size: 0.7rem;
    padding: 0.3rem 0.8rem;
  }
  
  .icon-wrapper {
    width: 35px;
    height: 35px;
    font-size: 1rem;
    margin-right: 0.75rem;
  }
  
  /* Course info lado a lado no mobile */
  .course-info {
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    background: #f8f9fa;
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
    margin-bottom: 1rem !important;
  }
  
  .btn-custom-blue {
    padding: 0.4rem 1.2rem;
    font-size: 0.9rem;
  }
  
  /* Esconder badge ISO no mobile para economizar espaço */
  .course-badge {
    display: none;
  }
  
  .d-flex.justify-content-between.align-items-center {
    justify-content: center !important;
  }
  
  /* Header responsivo */
  .d-flex.justify-content-center h3 {
    font-size: 1.5rem;
  }
  
  .d-flex.justify-content-center span {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 576px) {
  .col-lg-4 {
    margin-bottom: 1.5rem;
  }
  
  .card-img-top {
    height: 180px;
  }
  
  .card-body {
    padding: 1rem !important;
  }
  
  .badge-custom {
    top: 0.5rem;
    left: 0.5rem;
    font-size: 0.65rem;
    padding: 0.25rem 0.6rem;
  }
  
  .d-flex.align-items-center.mb-3 {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 0.5rem;
  }
  
  .icon-wrapper {
    margin-right: 0;
    margin-bottom: 0.25rem;
  }
  
  .course-info {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }
  
  .btn-custom-blue {
    width: 100%;
    text-align: center;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  
  /* Header mais compacto */
  .d-flex.justify-content-center h3 {
    font-size: 1.25rem;
    text-align: center;
  }
  
  .d-flex.justify-content-center {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  /* Botão "Ver Todos" responsivo */
  .d-flex.justify-content-end {
    justify-content: center !important;
  }
  
  .btn-sm {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
}
</style>