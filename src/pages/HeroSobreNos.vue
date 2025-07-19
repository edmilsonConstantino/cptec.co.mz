<template>
    

<section class="hero-section">
  <div class="container">
    <div class="row align-items-center min-vh-100">
      <div class="col-lg-6 order-lg-1 order-2">
        <div class="hero-content">
          <div class="hero-badge">
            <i class="bi bi-award me-2"></i>
            <span>Centro de Excelência</span>
          </div>
          
          <h1 class="hero-title">
            <span class="title-main">Sobre o</span>
            <span class="title-highlight">CPTEC</span>
          </h1>
          
          <p class="hero-subtitle">
            Centro Profissional de Tecnologia, Empreendedorismo e Comunicação - 
            Transformando carreiras através da educação de qualidade há mais de uma década.
          </p>
          
          <div class="hero-features">
            <div class="feature-item">
              <i class="bi bi-check-circle-fill"></i>
              <span>Excelência</span>
            </div>
            <div class="feature-item">
              <i class="bi bi-check-circle-fill"></i>
              <span>Inovação</span>
            </div>
            <div class="feature-item">
              <i class="bi bi-check-circle-fill"></i>
              <span>Compromisso</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 order-lg-2 order-1">
        <div class="hero-image">
          <img src="@/assets/imagens/LogoFoot.png" 
               alt="CPTEC Logo" class="img-fluid rounded-4 shadow-lg">
        </div>
      </div>
    </div>
  </div>
  
  <!-- Overlay -->
  <div class="hero-overlay"></div>
</section>
<SobreNos/>
</template>
<script>
import SobreNos from '@/pages/SobreNos.vue';

export default {
components:{
    SobreNos,
}
}
</script>
<style scoped>


/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #4a5bc7 0%, #6366f1 50%, #8b5cf6 100%);
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
  background: rgba(0, 0, 0, 0.1);
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
  color: #fbbf24;
  font-size: 1.1rem;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.title-main {
  display: block;
  color: white;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
}

.title-highlight {
  display: block;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.95;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  max-width: 500px;
}

.hero-features {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
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
  flex: 1;
  max-width: none;
  text-align: center;
  justify-content: center;
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

.hero-image {
  position: relative;
  z-index: 2;
  text-align: center;
}

/* Animations */
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

/* Mobile Responsive para Hero Section */
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 0;
    text-align: center;
  }

  .hero-content {
    padding: 1rem;
  }

  .hero-badge {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
    margin-bottom: 1.5rem;
  }

  .hero-title {
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    margin-bottom: 1.5rem;
    max-width: 100%;
  }

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
    flex: 1;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .hero-features {
    gap: 0.4rem;
  }

  .feature-item {
    font-size: 0.75rem;
    padding: 0.4rem 0.6rem;
  }
}
</style>