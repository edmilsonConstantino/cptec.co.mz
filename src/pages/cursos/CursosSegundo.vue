<template>
  <div class="container-fluid py-5">
    <div class="container">
      <div class="row g-4 justify-content-center">
        <!-- Card 1 - Higiene, Segurança e Saúde no Trabalho -->
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 card-hover">
            <div class="position-relative">
              <img src="@/assets/imagens/hst.png" 
                   alt="Higiene e Segurança" class="card-img-top">
              <span class="badge-custom badge-primary">Saúde e Segurança</span>
            </div>
            <div class="card-body p-4 d-flex flex-column">
              <div class="d-flex align-items-center mb-3">
                <span class="icon-wrapper bg-primary">🛡️</span>
                <h5 class="card-title mb-0 fw-bold">Higiene, Segurança e Saúde no Trabalho</h5>
              </div>
              <p class="card-text text-muted mb-3 flex-grow-1">
                Conhecer os princípios base da HSST e aplicar as principais ferramentas nas empresas.
              </p>
              <div class="course-info mb-3">
                <div class="info-item">
                  <i class="bi bi-clock me-1"></i>45 h
                </div>
                <div class="info-item">
                  <i class="bi bi-shield-check me-1"></i>Saúde
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <span class="course-badge">HSST</span>
                <router-link to="/Higiene" class="btn btn-primary">
                  Ver Curso
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2 - Monitoria, Gestão e avaliação de Projectos -->
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 card-hover">
            <div class="position-relative">
              <img src="@/assets/imagens/MGP.png" 
                   alt="Gestão de Projectos" class="card-img-top">
              <span class="badge-custom badge-info">Gestão e Administração</span>
            </div>
            <div class="card-body p-4 d-flex flex-column">
              <div class="d-flex align-items-center mb-3">
                <span class="icon-wrapper bg-info">📊</span>
                <h5 class="card-title mb-0 fw-bold">Monitoria, Gestão e avaliação de Projectos</h5>
              </div>
              <p class="card-text text-muted mb-3 flex-grow-1">
                Envolver no planejamento, organização, direção e controle de recursos para atingir os objetivos do projecto.
              </p>
              <div class="course-info mb-3">
                <div class="info-item">
                  <i class="bi bi-clock me-1"></i>30 h
                </div>
                <div class="info-item">
                  <i class="bi bi-briefcase me-1"></i>Administração
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <span class="course-badge">MGP</span>
                <router-link to="/Monitoria" class="btn btn-primary">
                  Ver Curso
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 3 - NEBOSH -->
        <div class="col-lg-4 col-md-6">
          <div class="card h-100 shadow-sm border-0 card-hover">
            <div class="position-relative">
              <img src="@/assets/imagens/NBOCH.png" 
                   alt="NEBOSH" class="card-img-top">
              <span class="badge-custom badge-warning">Saúde Ocupacional</span>
            </div>
            <div class="card-body p-4 d-flex flex-column">
              <div class="d-flex align-items-center mb-3">
                <span class="icon-wrapper bg-warning">🏭</span>
                <h5 class="card-title mb-0 fw-bold">NEBOSH</h5>
              </div>
              <p class="card-text text-muted mb-3 flex-grow-1">
                Melhora a capacidade de lidar com riscos e incidentes complexos.
              </p>
              <div class="course-info mb-3">
                <div class="info-item">
                  <i class="bi bi-clock me-1"></i>50 h
                </div>
                <div class="info-item">
                  <i class="bi bi-gear me-1"></i>Segurança
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <span class="course-badge">NEBOSH</span>
                <router-link to="/Nebosh" class="btn btn-primary">
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
  name: 'TresSecoesCursos'
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
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  max-width: calc(100% - 2rem);
}

.badge-primary {
  background: rgba(59, 76, 184, 0.9);
  color: white;
}

.badge-info {
  background: rgba(59, 76, 184, 0.9);
  color: white;
}

.badge-warning {
  background: rgba(59, 76, 184, 0.9);
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
  flex-shrink: 0;
}

.bg-primary { 
  background-color: rgba(59, 76, 184, 0.2);
  color: #3b4cb8 !important;
}

.bg-info { 
  background-color: rgba(23, 162, 184, 0.2);
  color: #17a2b8 !important;
}

.bg-warning { 
  background-color: rgba(255, 111, 0, 0.2);
  color: #ff6f00 !important;
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

/* Alinhamento dos cards */
.card-body {
  display: flex;
  flex-direction: column;
}

.card-text {
  flex-grow: 1;
}

.d-flex.justify-content-between.align-items-center {
  margin-top: auto;
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
    padding: 0.4rem 0.8rem;
  }
  
  .icon-wrapper {
    width: 35px;
    height: 35px;
    font-size: 1rem;
    margin-right: 0.75rem;
  }
  
  .course-info {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .btn-primary {
    padding: 0.4rem 1.2rem;
    font-size: 0.9rem;
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
    font-size: 0.6rem;
    padding: 0.3rem 0.6rem;
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
  
  .d-flex.justify-content-between.align-items-center {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start !important;
  }
  
  .btn-primary {
    width: 100%;
    text-align: center;
  }
}
</style>