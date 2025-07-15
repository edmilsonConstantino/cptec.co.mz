<template>
  <div class="cursos-page">
    <!-- Header Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-8 col-xl-7">
            <div class="hero-content">
              <div class="hero-badge">
                <i class="bi bi-mortarboard me-2"></i>
                <span>Educação Profissional</span>
              </div>
              
              <h1 class="hero-title">
                <span class="title-main">Nossos</span>
                <span class="title-highlight">Cursos</span>
              </h1>
              
              <p class="hero-subtitle">
                Aprenda com <span class="highlight-text">especialistas</span> e alcance seus 
                objetivos profissionais com cursos de alta qualidade.
              </p>
              
              <div class="hero-features d-none d-md-flex">
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>Certificação</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>Especialistas</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>Qualidade</span>
                </div>
              </div>
              
              <div class="hero-actions d-none d-md-block">
                <button class="btn btn-primary btn-lg me-3">
                  <i class="bi bi-play-circle me-2"></i>
                  Ver Cursos
                </button>
                <button class="btn btn-outline-light btn-lg">
                  <i class="bi bi-info-circle me-2"></i>
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Overlay para melhor legibilidade -->
      <div class="hero-overlay"></div>
      
      <!-- Scroll Indicator -->
      <div class="scroll-indicator d-none d-md-block">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span class="scroll-text">Role para baixo</span>
      </div>
    </section>
  </div>
  <CursosPrimeiro />
  <CursosSegundo/>
</template>

<script>
import CursosPrimeiro from '@/pages/cursos/CursosPrimeiro.vue'
import CursosSegundo from '@/pages/cursos/CursosSegundo.vue'

export default {
  name: 'CursosPage',
  components: {
    CursosPrimeiro,
    CursosSegundo
  },
  mounted() {
    this.initScrollIndicator()
  },
  methods: {
    initScrollIndicator() {
      const indicator = document.querySelector('.scroll-indicator')
      if (indicator) {
        window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset
          const threshold = 100
          indicator.style.opacity = scrolled > threshold ? '0' : '1'
        })
      }
    }
  }
}
</script>

<style scoped>
.cursos-page {
  position: relative;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
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

/* Overlay para contraste */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 76, 184, 0.8), rgba(22, 36, 21, 0.6));
  z-index: 1;
}

/* Conteúdo do Hero */
.hero-content {
  position: relative;
  z-index: 2;
  animation: fadeInUp 1s ease-out;
}

/* Badge do Hero */
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
  animation: slideInLeft 1s ease-out 0.3s both;
}

.hero-badge i {
  color: #ffc107;
  font-size: 1.1rem;
}

/* Título Principal */
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
  animation: slideInLeft 1s ease-out 0.5s both;
}

.title-highlight {
  display: block;
  background: linear-gradient(135deg, #ffc107, #ffeb3b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: slideInRight 1s ease-out 0.7s both;
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
  animation: expandWidth 1s ease-out 1.2s both;
}

/* Subtítulo */
.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.95;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  max-width: 550px;
  font-weight: 400;
  animation: fadeInUp 1s ease-out 0.9s both;
}

.highlight-text {
  color: #ffc107;
  font-weight: 600;
}

/* Features */
.hero-features {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  animation: fadeInUp 1s ease-out 1.1s both;
}

.feature-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.feature-item i {
  color: #4ade80;
  margin-right: 0.5rem;
  font-size: 1rem;
}

/* Botões de Ação */
.hero-actions {
  animation: fadeInUp 1s ease-out 1.3s both;
}

.btn-primary {
  background: linear-gradient(135deg, #3b4cb8, #2c3e50);
  border: none;
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(59, 76, 184, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(59, 76, 184, 0.4);
}

.btn-outline-light {
  border: 2px solid rgba(255, 255, 255, 0.8);
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.btn-outline-light:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
  transform: translateY(-2px);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 2;
  animation: fadeInUp 1s ease-out 2s both;
  transition: opacity 0.3s ease;
}

.scroll-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  margin: 0 auto 0.5rem;
  position: relative;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 2s infinite;
}

.scroll-text {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Animações */
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes expandWidth {
  from { width: 0; }
  to { width: 80px; }
}

@keyframes scrollWheel {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-50%) translateY(12px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Responsividade Mobile */
@media (max-width: 768px) {
  .hero-section {
    background-attachment: scroll;
    min-height: 100vh;
    padding: 2rem 0;
  }
  
  .hero-content {
    text-align: center;
    padding: 1rem;
  }
  
  .hero-badge {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-title {
    font-size: clamp(2rem, 12vw, 3.5rem);
    margin-bottom: 1rem;
  }
  
  .title-highlight::after {
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
  }
  
  .hero-subtitle {
    font-size: clamp(0.9rem, 4vw, 1.1rem);
    margin-bottom: 1.5rem;
    padding: 0 1rem;
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .hero-section {
    min-height: 100vh;
    padding: 1rem 0;
  }
  
  .hero-content {
    padding: 0.5rem;
  }
  
  .hero-badge {
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
  }
  
  .hero-title {
    font-size: clamp(1.8rem, 15vw, 3rem);
    margin-bottom: 0.75rem;
  }
  
  .title-highlight::after {
    width: 50px;
  }
  
  .hero-subtitle {
    font-size: clamp(0.85rem, 5vw, 1rem);
    margin-bottom: 1rem;
    padding: 0;
    line-height: 1.5;
  }
}

/* Landscape Mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .hero-section {
    min-height: 100vh;
    padding: 1rem 0;
  }
  
  .hero-content {
    transform: scale(0.9);
  }
  
  .hero-badge {
    margin-bottom: 0.5rem;
  }
  
  .hero-title {
    margin-bottom: 0.5rem;
  }
  
  .hero-subtitle {
    margin-bottom: 0.5rem;
  }
}

/* Efeito parallax sutil - apenas desktop */
@media (min-width: 768px) {
  .hero-section {
    background-attachment: fixed;
  }
}
</style>