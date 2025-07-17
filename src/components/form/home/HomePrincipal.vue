<template>
  <div class="page-wrapper">

    <div class="main-content">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6 text-white">
            <h1 class="h1 fw-bold mb-4">{{ title }}<span class="text-custom-yellow d-block">{{ rotatingText }}</span></h1>
            <p class="mb-3 opacity-75">Conquiste certificações ISO e <span class="text-custom-yellow">acelere sua carreira</span></p>
            <div class="d-flex gap-3 mb-4">
              <router-link to="/Cursos" class="btn btn-custom-yellow fw-bold px-4 py-2">EXPLORAR</router-link>
              <router-link to="/Sobre-Nós"  class="btn btn-outline-light px-4 py-2">Saiba Mais</router-link>
            </div>
                      
            <div class="stats-container">
              <div class="stat-item">
                <strong class="text-custom-yellow">500+</strong>
                <span>Certificados</span>
              </div>
              <div class="stat-item">
                <strong class="text-custom-yellow">3+</strong>
                <span>Anos</span>
              </div>
              <div class="stat-item">
                <strong class="text-custom-yellow">4.9</strong>
                <span>Avaliação</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6 text-center mt-4 mt-lg-0">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      title: 'Certificações ISO para o Sucesso ',
      rotatingText: 'da sua Carreira',
      words: ['da sua Carreira', 'da sua Empresa', 'do seu Futuro'],
      index: 0,
      isMenuOpen: false,
      isScrolled: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  },
  mounted() {
    // Texto rotativo
    setInterval(() => {
      this.index = (this.index + 1) % this.words.length;
      this.rotatingText = this.words[this.index];
    }, 3000);

    // Menu responsivo
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.isMenuOpen = false
      }
    })
    
    // Efeito de scroll
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
/* Cor customizada - ALTERADA PARA AMARELO */
.text-custom-yellow {
  color: #ffc107 !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.btn-custom-yellow {
  background: #ffc107;
  color: #162415;
  border-color: #ffc107;
  font-weight: 700;
}

.btn-custom-yellow:hover {
  background: #ffb300;
  color: #162415;
  border-color: #ffb300;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
}

/* Wrapper da página */
.page-wrapper {
  position: relative;
  min-height: 100vh;
}

/* Navbar Styles */
.professional-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.navbar-brand {
  text-decoration: none;
  z-index: 1001;
  flex-shrink: 0;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.main-logo {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
  transition: all 0.3s ease;
}

.plus-logo {
  width: 35px;
  height: 35px;
  border-radius: 8px;
  object-fit: cover;
  transition: all 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

.brand-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.brand-gradient {
  background: linear-gradient(45deg, #162415, #2d4a2a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: #2c3e50;
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 2rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 600;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.3px;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 3px;
  background: linear-gradient(45deg, #162415, #2d4a2a);
  transition: all 0.3s ease;
  transform: translateX(-50%);
  border-radius: 2px;
}

.nav-link:hover {
  color: #162415;
  background: rgba(22, 36, 21, 0.05);
}

.nav-link:hover::before {
  width: 60%;
}

.nav-link.router-link-active {
  color: #162415;
  background: rgba(22, 36, 21, 0.1);
}

.nav-link.router-link-active::before {
  width: 60%;
}

.menu-overlay {
  display: none;
}

/* Conteúdo Principal com Fundo */
.main-content {
  background-image: url('@/assets/imagens/Capa.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  padding-top: 80px;
  position: relative;
}

.main-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(22, 36, 21, 0.65) 0%, rgba(22, 36, 21, 0.75) 100%);
  z-index: 1;
}

.main-content .container {
  position: relative;
  z-index: 2;
}

/* Estilos do conteúdo */
.h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.opacity-75 {
  opacity: 0.75;
}

.btn {
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-outline-light {
  color: white;
  border-color: white;
}

.btn-outline-light:hover {
  background: white;
  color: #162415;
  transform: translateY(-2px);
}

.stats-container {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  padding-top: 1rem;
  margin-top: 2rem;
  gap: 2rem;
}

.stat-item {
  text-align: center;
  flex: 1;
}

.stat-item strong {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
}

.stat-item span {
  font-size: 0.9rem;
  opacity: 0.8;
}

.image-container {
  position: relative;
  display: inline-block;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-container {
    padding: 0 1rem;
    height: 70px;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 80px 0 2rem 0;
    transition: right 0.3s ease;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
    margin-left: 0;
    margin-right: 0;
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-links {
    flex-direction: column;
    gap: 0;
    width: 100%;
    padding: 0 1rem;
  }

  .nav-link {
    width: 100%;
    padding: 1.2rem 1.5rem;
    border-radius: 0;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .nav-link::before {
    display: none;
  }

  .nav-link:hover {
    background: rgba(22, 36, 21, 0.05);
    padding-left: 2rem;
  }

  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .menu-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  .main-logo {
    width: 70px;
    height: 70px;
  }
  
  .plus-logo {
    width: 25px;
    height: 25px;
  }

  .brand-text {
    font-size: 1.5rem;
  }

  .main-content {
    padding-top: 70px;
    background-attachment: scroll;
  }

  .h1 {
    font-size: 2.5rem;
  }

  .hero-image {
    max-width: 350px;
    height: 350px;
  }

  .stats-container {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    height: 60px;
    padding: 0 1rem;
  }

  .main-logo {
    width: 60px;
    height: 60px;
  }
  
  .plus-logo {
    width: 20px;
    height: 20px;
  }

  .brand-text {
    font-size: 1.3rem;
  }

  .main-content {
    padding-top: 60px;
  }

  .h1 {
    font-size: 2rem;
  }

  .hero-image {
    max-width: 300px;
    height: 300px;
  }
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

.main-content .container > .row > div {
  animation: fadeInUp 0.8s ease-out;
}

.main-content .container > .row > div:nth-child(2) {
  animation-delay: 0.2s;
}
</style>