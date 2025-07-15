<template>
  <footer class="modern-footer">
    <div class="footer-container">
      <div class="footer-content">

        <!-- LOGO + Descrição -->
        <div class="footer-section logo-section">
          <div class="logo-container">
            <img
              src="@/assets/imagens/LogoFoot.png"
              alt="Logo CPTEC"
              class="footer-logo"
            />
          </div>
          <p class="footer-description">
            O CPTEC oferece formação e consultoria em sistemas de gestão ISO, capacitando profissionais e impulsionando empresas rumo à excelência.
          </p>
        </div>

        <!-- LINKS Úteis -->
        <div class="footer-section links-section">
          <h6 class="footer-title">Links Úteis</h6>
          <ul class="footer-links">
            <li><a href="#inicio" class="footer-link">Início</a></li>
            <li><a href="#servicos" class="footer-link">Serviços</a></li>
            <li><a href="#cursos" class="footer-link">Cursos</a></li>
            <li><a href="#contato" class="footer-link">Contato</a></li>
          </ul>
        </div>

        <!-- HORÁRIO -->
        <div class="footer-section schedule-section">
          <h6 class="footer-title">Horário de Funcionamento</h6>
          <ul class="footer-schedule">
            <li>
              <i class="bi bi-clock"></i>
              <span>Seg - Sex: 9h – 22h</span>
            </li>
            <li>
              <i class="bi bi-clock"></i>
              <span>Sábado: 9h – 18h</span>
            </li>
            <li>
              <i class="bi bi-clock"></i>
              <span>Domingo: 9h – 12h</span>
            </li>
          </ul>
        </div>

        <!-- CONTATO -->
        <div class="footer-section contact-section">
          <h6 class="footer-title">Contato</h6>
          <ul class="footer-contact">
            <li>
              <i class="bi bi-envelope"></i>
              <span>edyniltonnhamazane@gmail.com</span>
            </li>
            <li>
              <i class="bi bi-geo-alt"></i>
              <span>Maputo - Moçambique</span>
            </li>
            <li>
              <i class="bi bi-telephone"></i>
              <span>+258 84 000 0000</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-divider"></div>

      <!-- Rodapé Final -->
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>&copy; 2025 Centro Profissional de Tecnologia, Empreendedorismo e Comunicação. Todos os direitos reservados.</p>
        </div>
        <div class="footer-legal">
          <a href="#" class="footer-legal-link">Política de Privacidade</a>
          <a href="#" class="footer-legal-link">FAQs</a>
          <a href="#" class="footer-legal-link">Admissão</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.modern-footer {
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
  color: #ffffff;
  padding: 3rem 0 1.5rem;
  position: relative;
}

.modern-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

/* Logo Section */
.logo-section {
  max-width: 300px;
}

.footer-logo {
  max-width: 180px;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.footer-description {
  color: #cbd5e0;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

/* Titles */
.footer-title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
}

/* Links Section */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-link {
  color: #cbd5e0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-link:hover {
  color: #667eea;
  transform: translateX(5px);
}

/* Schedule Section */
.footer-schedule {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-schedule li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #cbd5e0;
  font-size: 0.9rem;
}

.footer-schedule i {
  margin-right: 0.5rem;
  color: #667eea;
  font-size: 0.8rem;
}

/* Contact Section */
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact li {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  color: #cbd5e0;
  font-size: 0.9rem;
}

.footer-contact i {
  margin-right: 0.8rem;
  color: #667eea;
  font-size: 1rem;
  min-width: 16px;
}

.footer-contact span {
  word-break: break-all;
}

/* Divider */
.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #4a5568, transparent);
  margin: 2rem 0;
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copyright {
  color: #a0aec0;
  font-size: 0.85rem;
}

.footer-copyright p {
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.footer-legal-link {
  color: #a0aec0;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.footer-legal-link:hover {
  color: #667eea;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .modern-footer {
    padding: 2rem 0 1rem;
  }

  .footer-container {
    padding: 0 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .logo-section {
    max-width: 100%;
  }

  .footer-logo {
    max-width: 150px;
  }

  .footer-description {
    font-size: 0.85rem;
    max-width: 100%;
  }

  .footer-title {
    font-size: 1rem;
    text-align: center;
  }

  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-links,
  .footer-schedule,
  .footer-contact {
    max-width: 280px;
    margin: 0 auto;
  }

  .footer-contact li {
    justify-content: center;
    text-align: left;
  }

  .footer-schedule li {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .footer-legal {
    flex-direction: column;
    gap: 0.8rem;
  }

  .footer-copyright {
    font-size: 0.8rem;
  }

  .footer-legal-link {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 0.8rem;
  }

  .footer-content {
    gap: 1.5rem;
  }

  .footer-logo {
    max-width: 120px;
  }

  .footer-description {
    font-size: 0.8rem;
  }

  .footer-title {
    font-size: 0.95rem;
  }

  .footer-link,
  .footer-schedule li,
  .footer-contact li {
    font-size: 0.8rem;
  }

  .footer-copyright {
    font-size: 0.75rem;
  }

  .footer-legal-link {
    font-size: 0.75rem;
  }
}

/* Hover Effects */
.footer-section:hover .footer-title {
  color: #667eea;
}

.footer-contact li:hover i,
.footer-schedule li:hover i {
  transform: scale(1.1);
}
</style>