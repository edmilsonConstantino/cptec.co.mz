<template>
    <nav class="professional-navbar" :class="{ scrolled: isScrolled }">
      <div class="navbar-container">
        <!-- LOGO - Lado Esquerdo -->
        <router-link to="/home" class="navbar-brand">
          <div class="logo-container">
            <img src="@/assets/imagens/LogoNav.png" alt="Logo" class="logo-image main-logo">
          </div>
        </router-link>

        <button class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="nav-menu" :class="{ active: isMenuOpen }">
          <ul class="nav-links">
            <li class="nav-item">
              <router-link class="nav-link" to="/" @click="closeMenu" exact>
                <span>Início</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Depoimentos" @click="closeMenu">
                <span>Depoimentos</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Cursos" @click="closeMenu">
                <span>Cursos</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Blog" @click="closeMenu">
                <span>certificações</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Contacto" @click="closeMenu">
                <span>Contacto</span>
              </router-link>
            </li>
            <li class="nav-item whatsapp-item">
              <a href="https://wa.me/+25887553696" target="_blank" class="nav-link whatsapp-link" @click="closeMenu">
                <i class="bi bi-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Overlay transparente para fechar menu ao clicar fora -->
        <div v-if="isMenuOpen" class="menu-overlay" @click="closeMenu"></div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'ProfessionalNavbar',
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // Não impede mais o scroll do body para permitir navegação na página
    },
    closeMenu() {
      this.isMenuOpen = false;
      
      // Pequeno delay para garantir que a navegação funcione
      setTimeout(() => {
        this.isMenuOpen = false;
      }, 100);
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  },
  mounted() {
    // Fechar menu ao redimensionar
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.isMenuOpen = false;
      }
    });
    
    // Adicionar efeito de scroll
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
/* === ESTILIZAÇÃO DESKTOP === */
.professional-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 9999;
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
  height: 70px;
}

/* Logo Section */
.navbar-brand {
  text-decoration: none;
  z-index: 10001;
  flex-shrink: 0;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-image {
  width: 180px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
  transition: all 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

.brand-text {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.brand-primary {
  color: #2c3e50;
}

.brand-gradient {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Menu Toggle */
.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 10001;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  background: rgba(102, 126, 234, 0.1);
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

/* Navigation Menu */
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
  background: linear-gradient(45deg, #667eea, #764ba2);
  transition: all 0.3s ease;
  transform: translateX(-50%);
  border-radius: 2px;
}

.nav-link:hover {
  color: #667eea;
  background: rgba(102, 126, 234, 0.05);
}

.nav-link:hover::before {
  width: 60%;
}

.nav-link.router-link-active {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
}

.nav-link.router-link-active::before {
  width: 60%;
}

/* WhatsApp Styles */
.whatsapp-icon {
  font-size: 20px; /* Aumentado de 18px para 20px */
  margin-right: 8px;
  display: inline-block;
}

.whatsapp-link {
  color: #25D366 !important;
  background: rgba(37, 211, 102, 0.1);
  border: 2px solid rgba(37, 211, 102, 0.2);
}

.whatsapp-link:hover {
  color: #128C7E !important;
  background: rgba(37, 211, 102, 0.15);
  border-color: rgba(37, 211, 102, 0.3);
}

.whatsapp-link:hover .whatsapp-icon {
  transform: scale(1.1);
}

/* Menu Overlay */
.menu-overlay {
  display: none;
}

/* Scroll Effect */
.professional-navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
}

/* Hover Effects */
.nav-item:hover .nav-link {
  transform: translateY(-1px);
}

/* Focus States */
.nav-link:focus {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}

/* === ESTILIZAÇÃO MOBILE === */
@media (max-width: 768px) {
  .professional-navbar {
    background: rgba(255, 255, 255, 0.98) !important;
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .navbar-container {
    padding: 0 1.5rem;
    height: 70px;
    position: relative;
  }

  .menu-toggle {
    display: flex;
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(102, 126, 234, 0.2);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .menu-toggle:active {
    transform: scale(0.95);
  }

  .logo-image {
    width: 120px;
    height: 60px;
  }

  /* Menu agora ocupa mais espaço na tela */
  .nav-menu {
    position: fixed;
    top: 70px;
    right: -100%;
    width: 100%;
    height: 80vh; /* Aumentado de 65vh para 80vh */
    max-height: 600px; /* Aumentado de 500px para 600px */
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem 1.5rem 2.5rem; /* Aumentado padding superior e inferior */
    transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    margin-left: 0;
    margin-right: 0;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(102, 126, 234, 0.1);
    border-bottom: 1px solid rgba(102, 126, 234, 0.1);
    border-bottom-left-radius: 20px;
    overflow-y: auto;
    z-index: 10000;
  }

  .nav-menu.active {
    right: 0;
  }

  /* Overlay que permite fechar o menu clicando fora */
  .menu-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9999;
    opacity: 0;
    animation: fadeIn 0.3s ease forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .nav-links {
    flex-direction: column;
    gap: 0;
    width: 100%;
    max-width: 320px; /* Aumentado de 280px para 320px */
    padding: 0;
    align-items: center;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 0;
    overflow: hidden;
  }

  .nav-item {
    width: 100%;
    border-bottom: 1px solid rgba(102, 126, 234, 0.15);
  }

  .nav-item:last-child {
    border-bottom: none;
  }

  .nav-link {
    width: 100%;
    padding: 1.5rem 1.5rem; /* Aumentado padding de 1.2rem para 1.5rem */
    border-radius: 0;
    justify-content: center;
    color: #2c3e50;
    background: transparent;
    border: none;
    font-size: 1.2rem; /* Aumentado de 1.1rem para 1.2rem */
    font-weight: 600;
    letter-spacing: 0.3px;
    text-align: center;
    transform: translateY(30px);
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: none;
    min-height: 70px; /* Aumentado de 60px para 70px */
    max-height: 70px;
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    position: relative;
  }

  .nav-menu.active .nav-link {
    transform: translateY(0);
    opacity: 1;
  }

  .nav-link::before {
    display: none;
  }

  .nav-link:hover,
  .nav-link:active {
    background: rgba(102, 126, 234, 0.1) !important;
    border-color: transparent !important;
    transform: translateY(0);
    box-shadow: none;
    color: #667eea !important;
  }

  .nav-link.router-link-active {
    background: rgba(102, 126, 234, 0.15) !important;
    border-color: transparent !important;
    color: #667eea !important;
    box-shadow: none;
  }

  .nav-link.router-link-active::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #667eea;
  }

  /* WhatsApp mobile styles */
  .whatsapp-icon {
    font-size: 20px; /* Aumentado para maior visibilidade */
    margin-right: 8px;
    transition: transform 0.3s ease;
    display: inline-block;
  }

  .whatsapp-link {
    background: transparent !important;
    border-color: transparent !important;
    color: #25D366 !important;
  }

  .whatsapp-link:hover,
  .whatsapp-link:active {
    background: rgba(37, 211, 102, 0.1) !important;
    border-color: transparent !important;
    color: #128C7E !important;
    box-shadow: none;
  }

  .whatsapp-link:hover .whatsapp-icon {
    transform: scale(1.1);
  }

  .whatsapp-link.router-link-active::after {
    background: #25D366;
  }

  /* Animações escalonadas para os links */
  .nav-menu.active .nav-link:nth-child(1) { 
    transition-delay: 0.1s;
  }
  .nav-menu.active .nav-link:nth-child(2) { 
    transition-delay: 0.15s;
  }
  .nav-menu.active .nav-link:nth-child(3) { 
    transition-delay: 0.2s;
  }
  .nav-menu.active .nav-link:nth-child(4) { 
    transition-delay: 0.25s;
  }
  .nav-menu.active .nav-link:nth-child(5) { 
    transition-delay: 0.3s;
  }
  .nav-menu.active .nav-link:nth-child(6) { 
    transition-delay: 0.35s;
  }

  /* Efeito de toque aprimorado */
  .nav-link:active {
    transform: scale(0.98) !important;
    transition: transform 0.1s ease;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    height: 65px;
    padding: 0 1rem;
  }

  .logo-image {
    width: 100px;
    height: 50px;
  }

  .nav-menu {
    padding: 2.5rem 1rem 2rem;
    top: 65px;
    height: 75vh;
    max-height: 550px;
  }

  .nav-links {
    gap: 0;
    max-width: 320px;
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 1.3rem 1.2rem;
    min-height: 65px;
    max-height: 65px;
  }
}

/* Adicionar suporte para toque */
@media (hover: none) and (pointer: coarse) {
  .nav-link:hover {
    background: initial;
    transform: initial;
  }
  
  .nav-link:active {
    background: rgba(102, 126, 234, 0.1) !important;
    border-color: rgba(102, 126, 234, 0.4) !important;
    transform: scale(0.98);
  }
}
</style>