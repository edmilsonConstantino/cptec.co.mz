.nav-menu.active .nav-link:nth-child(1) { 
    animation-delay: 0.1s; 
    transition-delay: 0.1s;
  }
  .nav-menu.active .nav-link:nth-child(2) { 
    animation-delay: 0.2s; 
    transition-delay: 0.2s;
  }
  .nav-menu.active .nav-link:nth-child(3) { 
    animation-delay: 0.3s; 
    transition-delay: 0.3s;
  }
  .nav-menu.active .nav-link:nth-child(4) { 
    animation-delay: 0.4s; 
    transition-delay: 0.4s;
  }
  .nav-menu.active .nav-link:nth-child(5) { 
    animation-delay: 0.5s; 
    transition-delay: 0.5s;
  }
  .nav-menu.active .nav-link:nth-child(6) { 
    animation-delay: 0.6s; 
    transition-delay: 0.6s;
  }

  /* WhatsApp mobile styles */
  .whatsapp-link {
    background: rgba(37, 211, 102, 0.1) !important;
    border-color: rgba(37, 211, 102, 0.2) !important;
    color: #25D366 !important;
  }

  .whatsapp-link:hover {
    background: rgba(37, 211, 102, 0.2) !important;
    border-color: rgba(37, 211, 102, 0.4) !important;
  }
}<template>
    <nav class="professional-navbar">
      <div class="navbar-container">
        <!-- LOGO - Lado Esquerdo -->
        <router-link to="/" class="navbar-brand">
          <div class="logo-container">
            <img src="@/assets/imagens/LogoNav.png" alt="Logo" class="logo-image main-logo">

          </div>
        </router-link>

        <!-- Menu Toggle para Mobile -->
        <button class="menu-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Navigation Links - Lado Direito -->
        <div class="nav-menu" :class="{ active: isMenuOpen }">
          <ul class="nav-links">
            <li class="nav-item">
              <router-link class="nav-link" to="/" @click="closeMenu">
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
                <span>Blog</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Contacto" @click="closeMenu">
                <span>Contacto</span>
              </router-link>
            </li>
            <li class="nav-item whatsapp-item">
              <a href="https://wa.me/258XXXXXXXXX" target="_blank" class="nav-link whatsapp-link" @click="closeMenu">
                <i class="bi bi-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Overlay para Mobile -->
        <div class="menu-overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>
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
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      // Não fecha o menu no mobile ao clicar nos links
      if (window.innerWidth > 768) {
        this.isMenuOpen = false
      }
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  },
  mounted() {
    // Fechar menu ao redimensionar
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.isMenuOpen = false
      }
    })
    
    // Adicionar efeito de scroll
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
/* === ESTILIZAÇÃO DESKTOP (MANTIDA ORIGINAL) === */
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

/* Logo Section - Lado Esquerdo */
.navbar-brand {
  text-decoration: none;
  z-index: 1001;
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

/* Navigation Menu - Lado Direito */
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
.bi-whatsapp {
  font-size: 18px;
  margin-right: 8px;
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

.whatsapp-link:hover .bi-whatsapp {
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

/* === ESTILIZAÇÃO MOBILE ATUALIZADA === */
@media (max-width: 768px) {
  .professional-navbar {
    background: white;
    backdrop-filter: none;
  }

  .navbar-container {
    padding: 0 1rem;
    height: 70px;
  }

  .menu-toggle {
    display: flex;
  }

  .logo-image {
    width: 120px;
    height: 60px;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    right: -100%;
    width: 100%;
    height: 80vh;
    background: rgb(255, 255, 255);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    margin-left: 0;
    margin-right: 0;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
    border-radius: 0 0 20px 20px;
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-links {
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
    padding: 0;
    align-items: center;
  }

  .nav-link {
    width: auto;
    padding: 0.7rem 1.5rem;
    border-radius: 20px;
    justify-content: center;
    color: #2c3e50;
    background: rgba(102, 126, 234, 0.05);
    border: 2px solid rgba(102, 126, 234, 0.1);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    min-width: 160px;
    text-align: center;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .nav-menu.active .nav-link {
    transform: translateY(0);
    opacity: 1;
  }

  .nav-link::before {
    display: none;
  }

  .nav-link:hover {
    background: rgba(102, 126, 234, 0.1);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 3px 10px rgba(102, 126, 234, 0.15);
  }

  .nav-link.router-link-active {
    background: rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.4);
    color: #667eea;
    box-shadow: 0 3px 10px rgba(102, 126, 234, 0.2);
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

  /* Animações escalonadas para os links */
  .nav-menu.active .nav-link:nth-child(1) { 
    animation-delay: 0.1s; 
    transition-delay: 0.1s;
  }
  .nav-menu.active .nav-link:nth-child(2) { 
    animation-delay: 0.2s; 
    transition-delay: 0.2s;
  }
  .nav-menu.active .nav-link:nth-child(3) { 
    animation-delay: 0.3s; 
    transition-delay: 0.3s;
  }
  .nav-menu.active .nav-link:nth-child(4) { 
    animation-delay: 0.4s; 
    transition-delay: 0.4s;
  }
  .nav-menu.active .nav-link:nth-child(5) { 
    animation-delay: 0.5s; 
    transition-delay: 0.5s;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    height: 60px;
    padding: 0 1rem;
  }

  .logo-image {
    width: 100px;
    height: 50px;
  }

  .nav-link {
    min-width: 150px;
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }

  .nav-links {
    gap: 1.2rem;
  }
}
</style>