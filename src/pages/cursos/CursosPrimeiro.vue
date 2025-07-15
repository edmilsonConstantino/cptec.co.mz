<template>
  <div class="container-fluid py-5">
    <div class="container">
      <div class="row g-4 justify-content-center">
        <!-- Card 1 - ISO 14001 -->
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 card-hover">
            <div class="position-relative">
              <img src="@/assets/imagens/image1.png" 
                   alt="ISO 14001" class="card-img-top">
              <span class="badge-custom badge-success">Gestão Ambiental</span>
            </div>
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <span class="icon-wrapper bg-success">🌿</span>
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
                  <i class="bi bi-award me-1"></i>Meio Ambiente
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <span class="course-badge">ISO</span>
                <router-link to="/iso14001" class="btn btn-primary">
                  Ver Curso
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2 - ISO 9001 -->
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 card-hover">
            <div class="position-relative">
              <img src="@/assets/imagens/image2.png" 
                   alt="ISO 9001" class="card-img-top">
              <span class="badge-custom badge-warning">Gestão da Qualidade</span>
            </div>
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <span class="icon-wrapper bg-warning">🏅</span>
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
                  <i class="bi bi-star me-1"></i>Executivo
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <span class="course-badge">ISO</span>
                <router-link to="/Qualidade" class="btn btn-primary">
                  Ver Curso
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 - ISO 45001 -->
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 card-hover">
            <div class="position-relative">
              <img src="@/assets/imagens/image.png" 
                   alt="ISO 45001" class="card-img-top">
              <span class="badge-custom badge-danger">Segurança</span>
            </div>
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <span class="icon-wrapper bg-danger">👷</span>
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
                <router-link to="/Saude" class="btn btn-primary">
                  Ver Curso
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AulasHome'
}
</script>

<style scoped>
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
}

.badge-success {
  background: rgba(40, 167, 69, 0.9);
  color: white;
}

.badge-warning {
  background: rgba(255, 193, 7, 0.9);
  color: #212529;
}

.badge-danger {
  background: rgba(220, 53, 69, 0.9);
  color: white;
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
  color: white;
}

.bg-success { 
  background-color: rgba(40, 167, 69, 0.2);
  color: #28a745 !important;
}
.bg-warning { 
  background-color: rgba(255, 193, 7, 0.2);
  color: #ffc107 !important;
}
.bg-danger { 
  background-color: rgba(220, 53, 69, 0.2);
  color: #dc3545 !important;
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
  color: #3b4cb8;
  font-weight: bold;
  font-size: 1.1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #3b4cb8, #2c3e50);
  border: none;
  border-radius: 25px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #2c3e50, #3b4cb8);
  transform: translateY(-2px);
}

.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15px;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15) !important;
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
  
  .btn-primary {
    padding: 0.4rem 1.2rem;
    font-size: 0.9rem;
  }
  
  /* Esconder badge ISO e botão no mobile para economizar espaço */
  .course-badge {
    display: none;
  }
  
  .d-flex.justify-content-between {
    justify-content: center !important;
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
  
  .course-info {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }
  
  .btn-primary {
    width: 100%;
    text-align: center;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
}
</style>