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
              
              <div class="hero-features">
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
              
              <div class="hero-actions">
                <router-link to="/Contacto" class="btn btn-primary btn-lg me-3">
                  <i class="bi bi-play-circle me-2"></i>
                  Ver Cursos
                </router-link>
                <router-link to="/Sobre-Nós" class="btn btn-outline-light btn-lg">
                  <i class="bi bi-info-circle me-2"></i>
                  Saiba Mais
                </router-link>
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
    <!-- Componentes dos Cursos -->
    <CursosPrimeiro />
    <CursosSegundo/>
    
  </div>
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
    },

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
  flex-wrap: wrap;
  justify-content: left;
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

/* CTA Section */
/* .cta-section {
  padding: 1rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23f1f3f4" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.5;
  z-index: 1;
}

.cta-card {
  background: white;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  border: 1px solid rgba(255, 193, 7, 0.2);
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.8s ease;
}

.cta-card.animate {
  transform: translateY(0);
  opacity: 1;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b4cb8, #ffeb3b);
  border-radius: 20px 20px 0 0;
}

.cta-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 193, 7, 0.1);
  color: #856404;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 193, 7, 0.2);
}

.cta-badge i {
  color: #ffc107;
}

.cta-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.text-highlight {
  color: #ffc107;
  position: relative;
}

.text-highlight::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ffc107, #ffeb3b);
  opacity: 0.3;
  border-radius: 2px;
}

.cta-description {
  font-size: 1.1rem;
  color: #6c757d;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.cta-features {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.cta-feature {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #495057;
  font-weight: 500;
}

.cta-feature i {
  color: #ffc107;
  margin-right: 0.75rem;
  font-size: 1.1rem;
}

.cta-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.btn-cta {
  background: linear-gradient(135deg, #ffc107, #ffb300);
  color: #2c3e50;
  border: none;
  padding: 1rem 2rem;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 193, 7, 0.4);
  color: #2c3e50;
  background: linear-gradient(135deg, #ffb300, #ffa000);
}

.btn-cta i {
  transition: transform 0.3s ease;
}

.btn-cta:hover i {
  transform: translateX(3px);
}

.cta-subtext {
  font-size: 0.85rem;
  color: #6c757d;
  margin: 0;
  text-align: center;
  font-style: italic;
} */

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

  /* Features no mobile */
  .hero-features {
    flex-direction: row;
    gap: 0.6rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: nowrap;
  }

  .feature-item {
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;
    justify-content: center;
    width: fit-content;
    flex: 1;
    max-width: none;
    text-align: center;
  }

  /* Botões no mobile */
  .hero-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .hero-actions .btn {
    width: 100%;
    max-width: 280px;
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  /* CTA Section Mobile */
  .cta-section {
    padding: 4rem 0;
  }

  .cta-card {
    padding: 2rem 1.5rem;
    text-align: center;
  }

  .cta-title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .cta-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .cta-features {
    margin-bottom: 2rem;
  }

  .btn-cta {
    width: 100%;
    max-width: 280px;
    padding: 1rem 1.5rem;
    font-size: 0.9rem;
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

  .hero-features {
    margin-bottom: 1.5rem;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: nowrap;
  }

  .feature-item {
    font-size: 0.75rem;
    padding: 0.4rem 0.6rem;
    flex: 1;
    text-align: center;
  }

  .hero-actions {
    gap: 0.8rem;
  }

  .hero-actions .btn {
    max-width: 260px;
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }

  /* CTA Mobile Pequeno */
  .cta-section {
    padding: 3rem 0;
  }

  .cta-card {
    padding: 1.5rem 1rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-description {
    font-size: 0.9rem;
  }

  .btn-cta {
    max-width: 100%;
    padding: 0.8rem 1.2rem;
    font-size: 0.85rem;
  }
}

/* Landscape Mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .hero-section {
    min-height: 100vh;
    padding: 1rem 0;
  }
  
  .hero-content {
    transform: scale(0.85);
  }
  
  .hero-badge {
    margin-bottom: 0.5rem;
  }
  
  .hero-title {
    margin-bottom: 0.5rem;
  }
  
  .hero-subtitle {
    margin-bottom: 0.8rem;
  }

  .hero-features {
    margin-bottom: 1rem;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
  }

  .feature-item {
    font-size: 0.7rem;
    padding: 0.3rem 0.8rem;
  }

  .hero-actions {
    flex-direction: row;
    gap: 0.5rem;
  }

  .hero-actions .btn {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    max-width: 140px;
  }
}

/* Efeito parallax sutil - apenas desktop */
@media (min-width: 768px) {
  .hero-section {
    background-attachment: fixed;
  }
}
</style>  