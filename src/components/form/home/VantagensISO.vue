<template>
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Por que escolher nossos cursos ISO -->
      <div class="text-center mb-5">
        <h2 class="fw-bold text-blue mb-3">Por que escolher nossos cursos ISO?</h2>
        <p class="lead text-muted">Oferecemos a melhor experiência em formação de gestão da qualidade</p>
      </div>

      <!-- Diferenciais Grid -->
      <div class="row g-4">
        <!-- Certificação Reconhecida -->
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 border-0 shadow-sm text-center p-4 diferencial-card">
            <div class="diferencial-icon bg-blue text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center">
              <i class="bi bi-award fs-2"></i>
            </div>
            <h5 class="fw-bold text-blue mb-3">Certificação Reconhecida</h5>
            <p class="text-muted mb-0">
              Nossos certificados são válidos internacionalmente e emitidos por 
              organismos acreditados reconhecidos globalmente.
            </p>
          </div>
        </div>

        <!-- Instrutores Especialistas -->
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 border-0 shadow-sm text-center p-4 diferencial-card">
            <div class="diferencial-icon bg-blue text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center">
              <i class="bi bi-people fs-2"></i>
            </div>
            <h5 class="fw-bold text-blue mb-3">Instrutores Especialistas</h5>
            <p class="text-muted mb-0">
              Professores com vasta experiência prática em implementação de 
              normas ISO em diversas indústrias e setores.
            </p>
          </div>
        </div>

        <!-- Foco no Mercado -->
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 border-0 shadow-sm text-center p-4 diferencial-card">
            <div class="diferencial-icon bg-blue text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center">
              <i class="bi bi-briefcase fs-2"></i>
            </div>
            <h5 class="fw-bold text-blue mb-3">Foco no Mercado</h5>
            <p class="text-muted mb-0">
              Conteúdo atualizado e alinhado com as necessidades reais do 
              mercado de trabalho e tendências atuais.
            </p>
          </div>
        </div>

        <!-- Plataforma Interativa -->
        <div class="col-lg-3 col-md-6">
          <div class="card h-100 border-0 shadow-sm text-center p-4 diferencial-card">
            <div class="diferencial-icon bg-blue text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center">
              <i class="bi bi-laptop fs-2"></i>
            </div>
            <h5 class="fw-bold text-blue mb-3">Plataforma Interativa</h5>
            <p class="text-muted mb-0">
              Aulas online ao vivo e gravadas, materiais didáticos exclusivos 
              e fóruns de discussão para networking.
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="bg-blue text-white rounded-4 p-5 text-center">
            <h3 class="fw-bold mb-3">Pronto para começar sua jornada?</h3>
            <p class="mb-4 opacity-75">Fale conosco e descubra como podemos ajudar sua empresa a crescer</p>
            <router-link to="/Contacto" class="btn btn-light rounded-pill px-4 text-decoration-none">
              <i class="bi bi-whatsapp"></i>
              Entrar em Contato
            </router-link>
          </div>
        </div>
      </div>

      <!-- Estatísticas -->
      <div class="row text-center mt-5 pt-5 border-top">
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="stat-item">
            <h2 class="fw-bold text-blue mb-2">5.000+</h2>
            <p class="text-muted mb-0">Profissionais Certificados</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="stat-item">
            <h2 class="fw-bold text-blue mb-2">98%</h2>
            <p class="text-muted mb-0">Taxa de Aprovação</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="stat-item">
            <h2 class="fw-bold text-blue mb-2">15+</h2>
            <p class="text-muted mb-0">Anos de Experiência</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="stat-item">
            <h2 class="fw-bold text-blue mb-2">4.9/5</h2>
            <p class="text-muted mb-0">Avaliação dos Alunos</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhyChooseSection',
  methods: {
    iniciarCurso() {
      console.log('Iniciar curso');
    },
    falarComConsultor() {
      console.log('Falar com consultor');
    }
  }
}
</script>

<style scoped>
:root {
  --bs-primary: #3d4ed8;
  --bs-primary-rgb: 61, 78, 216;
}

.bg-blue {
  background-color: #3d4ed8 !important;
}

.text-blue {
  color: #3d4ed8 !important;
}

.btn-blue {
  background-color: #3d4ed8;
  color: white;
  border: none;
  transition: all 0.3s ease;
}

.btn-blue:hover {
  background-color: #2d3ba8;
  transform: translateY(-2px);
}

.diferencial-icon {
  width: 80px;
  height: 80px;
  transition: all 0.3s ease;
}

.diferencial-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.diferencial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
}

.diferencial-card:hover .diferencial-icon {
  transform: scale(1.1);
}

.stat-item {
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .diferencial-icon {
    width: 60px;
    height: 60px;
  }
  
  .diferencial-card {
    margin-bottom: 2rem;
  }
}
</style>