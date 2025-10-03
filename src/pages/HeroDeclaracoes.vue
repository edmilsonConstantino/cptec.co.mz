<template>
  <section class="hero-section">
    <div class="container">
      <div class="row align-items-center min-vh-100">
        <div class="col-lg-8 col-xl-7">
          <div class="hero-content">
            <div class="hero-badge">
              <i class="bi bi-award me-2"></i>
              <span>Certificações Oficiais</span>
            </div>
            
            <h1 class="hero-title">
              <span class="title-main">Nossas</span>
              <span class="title-highlight">Declarações</span>
            </h1>
            
            <p class="hero-subtitle">
              Consulte os <span class="highlight-text">Certificados oficiais</span> dos alunos que 
              concluíram nossos cursos com sucesso.
            </p>
            
            <div class="hero-features">
              <div class="feature-item">
                <i class="bi bi-check-circle-fill"></i>
                <span>Certificados Oficiais</span>
              </div>
              <div class="feature-item">
                <i class="bi bi-check-circle-fill"></i>
                <span>Busca por Nome</span>
              </div>
              <div class="feature-item">
                <i class="bi bi-check-circle-fill"></i>
                <span>Código Único</span>
              </div>
            </div>
            
            <div class="hero-actions">
              <button @click="scrollToSearch" class="btn btn-primary btn-lg me-3">
                <i class="bi bi-search me-2"></i>
                Buscar Declaração
              </button>
              <router-link to="/Cursos" class="btn btn-outline-light btn-lg">
                <i class="bi bi-mortarboard me-2"></i>
                Ver Cursos
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="hero-overlay"></div>
    
    <div class="scroll-indicator d-none d-md-block">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span class="scroll-text">Role para baixo</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  emits: ['scrollToSearch'],
  methods: {
    scrollToSearch() {
      this.$emit('scrollToSearch');
    },
    
    initScrollIndicator() {
      const indicator = document.querySelector('.scroll-indicator');
      if (indicator) {
        window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;
          const threshold = 100;
          indicator.style.opacity = scrolled > threshold ? '0' : '1';
        });
      }
    }
  },
  
  mounted() {
    this.initScrollIndicator();
  }
}
</script>

<style scoped>

.hero-section {
  position: relative;
  min-height: 80vh;
  background-image: url('@/assets/imagens/livro.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 76, 184, 0.8), rgba(22, 36, 21, 0.6));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  animation: fadeInUp 1s ease-out;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.hero-badge i {
  color: #ffc107;
  font-size: 1.1rem;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.title-main {
  display: block;
  color: white;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
}

.title-highlight {
  display: block;
  background: linear-gradient(135deg, #ffc107, #ffeb3b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ffc107, #ffeb3b);
  border-radius: 2px;
}

.hero-subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.highlight-text {
  color: #ffc107;
  font-weight: 500;
}

.hero-features {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.feature-item {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
}

.feature-item i {
  color: #28a745;
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-actions .btn {
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.hero-actions .btn-primary {
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  border: none;
  box-shadow: 0 10px 30px rgba(59, 76, 184, 0.4);
}

.hero-actions .btn-outline-light {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  backdrop-filter: blur(10px);
}

.hero-actions .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  z-index: 2;
  animation: bounce 2s infinite;
}

.scroll-mouse {
  width: 26px;
  height: 40px;
  border: 2px solid white;
  border-radius: 13px;
  margin: 0 auto 10px;
  position: relative;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 1.5s infinite;
}

.scroll-text {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}


@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@keyframes scrollWheel {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(15px);
  }
}


@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-actions .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
    width: 100%;
    max-width: 300px;
  }
  
  .hero-badge {
    display: inline-flex !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    background-attachment: scroll;
    padding: 3rem 0;
  }
  
  .hero-badge {
    display: inline-flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
  }
  
  .hero-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-features {
    gap: 1rem;
  }
  
  .feature-item {
    font-size: 0.9rem;
  }
  
  .scroll-indicator {
    display: none !important;
  }
}
</style>