<template>
  <section class="py-4 bg-light">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-5">
        <div class="mb-4">
          <div class="d-flex align-items-center justify-content-center mb-3">
            <div class="icon-circle bg-blue text-white rounded-circle me-3 d-flex align-items-center justify-content-center">
              <i class="bi bi-gear-fill"></i>
            </div>
            <h2 class="fw-bold text-blue mb-0">Nossos Serviços</h2>
          </div>
          <div class="title-line bg-blue mx-auto"></div>
        </div>
        
        <div class="text-carousel position-relative">
          <p class="text-muted fs-5 text-item active">
            Transforme seu futuro com nossos cursos e destaque sua empresa no mercado 
            com certificação especializada em normas ISO.
          </p>
          <p class="text-muted fs-5 text-item">
            Conquiste certificações reconhecidas internacionalmente e acelere sua carreira 
            profissional com metodologia prática e especializada.
          </p>
          <p class="text-muted fs-5 text-item">
            Capacite sua equipe e implemente sistemas de gestão da qualidade que 
            geram resultados reais para sua organização.
          </p>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="row g-4">
        <!-- Cursos -->
        <div class="col-lg-6">
          <div class="card border-0 shadow h-100 service-card">
            <div class="position-relative overflow-hidden">
              <img src="@/assets/imagens/livro.png" class="card-img-top service-img" alt="Cursos ISO">
              <div class="service-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div class="text-center text-white">
                  <div class="overlay-icon bg-white bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center">
                    <i class="bi bi-book fs-1"></i>
                  </div>
                  <h4 class="fw-bold">Educação & Conhecimento</h4>
                </div>
              </div>
              <span class="badge bg-custom-blue position-absolute top-0 end-0 m-3">POPULAR</span>
            </div>
            
            <div class="card-body p-4">
              <span class="badge text-white mb-3 bg-custom-blue">Educação</span>
              <h4 class="card-title fw-bold text-custom-blue">Cursos Especializados</h4>
              <p class="card-text text-muted">
                Domine novas habilidades com nossos cursos ministrados por 
                especialistas do setor com experiência internacional.
              </p>
              
              <div class="mb-4">
                <div class="d-flex align-items-center mb-2">
                  <i class="bi bi-check-circle-fill text-blue me-2"></i>
                  <span class="text-muted">Certificação Internacional</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="bi bi-check-circle-fill text-blue me-2"></i>
                  <span class="text-muted">Suporte Especializado</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-blue me-2"></i>
                  <span class="text-muted">Material Atualizado</span>
                </div>
              </div>
              
              <router-link
                to="/Cursos"
                class="btn btn-blue w-100 rounded-pill py-3 fw-semibold service-btn d-flex align-items-center justify-content-center text-decoration-none text-white"
              >
                <span>Explorar Cursos</span>
                <i class="bi bi-arrow-right ms-2"></i>
              </router-link>

            </div>
          </div>
        </div>

        <!-- Consultoria -->
        <div class="col-lg-6">
          <div class="card border-0 shadow h-100 service-card">
            <div class="position-relative overflow-hidden">
              <img src="@/assets/imagens/Servico2.png" 
                   class="card-img-top service-img" alt="Consultoria ISO">
              <div class="service-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div class="text-center text-white">
                  <div class="overlay-icon bg-white bg-opacity-25 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center">
                    <i class="bi bi-diagram-3 fs-1"></i>
                  </div>
                  <h4 class="fw-bold">ISO & Certificação</h4>
                </div>
              </div>
              <span class="badge bg-custom-blue position-absolute top-0 end-0 m-3">PREMIUM</span>
            </div>
            
            <div class="card-body p-4">
              <span class="badge text-white mb-3 bg-custom-blue">Consultoria</span>
              <h4 class="card-title fw-bold text-custom-blue">Certificações ISO</h4>
              <p class="card-text text-muted">
                Receba orientação especializada para planejar e implementar a certificação 
                da sua empresa com normas ISO reconhecidas mundialmente.
              </p>
              
              <div class="mb-4">
                <div class="d-flex align-items-center mb-2">
                  <i class="bi bi-check-circle-fill text-blue me-2"></i>
                  <span class="text-muted">Análise Personalizada</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="bi bi-check-circle-fill text-blue me-2"></i>
                  <span class="text-muted">Implementação Completa</span>
                </div>
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-blue me-2"></i>
                  <span class="text-muted">Suporte Contínuo</span>
                </div>
              </div>
              
              <router-link
                to="/Contacto"
                class="btn btn-blue w-100 rounded-pill py-3 fw-semibold service-btn d-flex align-items-center justify-content-center text-decoration-none text-white"
              >
                <span>Explorar Cursos</span>
                <i class="bi bi-arrow-right ms-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesOnlySection',
  mounted() {
    this.startTextCarousel();
  },
  beforeUnmount() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  },
  data() {
    return {
      carouselInterval: null,
      currentTextIndex: 0
    }
  },
  methods: {
    startTextCarousel() {
      this.carouselInterval = setInterval(() => {
        const textItems = document.querySelectorAll('.text-item');
        const currentItem = textItems[this.currentTextIndex];
        currentItem.classList.remove('active');
        this.currentTextIndex = (this.currentTextIndex + 1) % textItems.length;
        textItems[this.currentTextIndex].classList.add('active');
      }, 4000);
    }
  }
}
</script>

<style scoped>
:root {
  --bs-primary: #3d4ed8;
  --bs-primary-rgb: 61, 78, 216;
}

.bg-custom-blue {
  background-color: #3d4ed8 !important;
}

.text-custom-blue {
  color: #3d4ed8 !important;
}

.bg-blue {
  background: linear-gradient(135deg, #3d4ed8, #2d3ba8) !important;
}

.text-blue {
  color: #3d4ed8 !important;
}

.btn-blue {
  background: linear-gradient(135deg, #3d4ed8, #2d3ba8);
  border: none;
  color: white;
}

.btn-blue:hover {
  background: linear-gradient(135deg, #2d3ba8, #1e2871);
  color: white;
}

.icon-circle {
  width: 50px;
  height: 50px;
  font-size: 1.2rem;
}

.title-line {
  width: 80px;
  height: 4px;
}

.text-carousel {
  max-width: 700px;
  margin: 0 auto;
  min-height: 60px;
}

.text-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.text-item.active {
  opacity: 1;
  transform: translateY(0);
  position: relative;
}

.service-card {
  transition: transform 0.3s ease;
  border-radius: 1rem !important;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-img {
  height: 280px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-card:hover .service-img {
  transform: scale(1.05);
}

.service-overlay {
  background: linear-gradient(135deg, rgba(61, 78, 216, 0.8), rgba(45, 59, 168, 0.6));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.overlay-icon {
  width: 60px;
  height: 60px;
}

.service-btn {
  transition: all 0.3s ease;
}

.service-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .service-img {
    height: 200px;
  }
  
  .icon-circle {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
</style>