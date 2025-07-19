<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section text-center text-white">
      <div class="container">
        <div class="hero-content">
          <h1 class="display-6 fw-bold mb-3">Fale Conosco</h1>
          <p class="lead mb-4">Sua próxima aventura começa aqui!</p>
          
        
          <div class="hero-cta">
            <router-link to="/SobreNos" class="btn btn-hero">
              <i class="bi bi-info-circle me-2"></i>
              Conheça Nossa História
            </router-link>
            <p class="hero-subtext mt-2">
              Descubra quem somos e nossa missão
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-4">
      <div class="row g-4">

        <div class="col-lg-7">
          <div class="contact-form bg-white rounded-3 shadow p-4">
            <h3 class="h4 text-center mb-4">
              <i class="bi bi-envelope-heart text-primary me-2"></i>
              Entre em Contato
            </h3>
            
            <div v-if="showAlert" class="alert alert-success alert-dismissible fade show">
              <i class="bi bi-check-circle-fill me-2"></i>
              Mensagem enviada com sucesso!
              <button type="button" class="btn-close" @click="hideAlert"></button>
            </div>
            
    
            <form @submit.prevent="submitForm" novalidate>

              <div class="mb-3">
                <label class="form-label fw-semibold">
                  <i class="bi bi-person me-1"></i>Nome *
                </label>
                <input 
                  type="text" 
                  class="form-control form-control-lg"
                  :class="{'is-invalid': errors.name}"
                  v-model="form.name"
                  placeholder="Seu nome completo"
                  required
                >
                <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
              </div>

        
              <div class="row g-3 mb-3">
 
                <div class="col-md-6">
                  <label class="form-label fw-semibold">
                    <i class="bi bi-envelope me-1"></i>Email *
                  </label>
                  <input 
                    type="email" 
                    class="form-control form-control-lg"
                    :class="{'is-invalid': errors.email}"
                    v-model="form.email"
                    placeholder="seu@email.com"
                    required
                  >
                  <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                </div>

                <div class="col-md-6">
                  <label class="form-label fw-semibold">
                    <i class="bi bi-telephone me-1"></i>Telefone *
                  </label>
                  <input 
                    type="tel" 
                    class="form-control form-control-lg"
                    :class="{'is-invalid': errors.phone}"
                    v-model="form.phone"
                    @input="formatPhone"
                    placeholder="(+258) 00000-0000"
                    required
                  >
                  <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label fw-semibold">
                  <i class="bi bi-chat-dots me-1"></i>Mensagem
                </label>
                <textarea 
                  class="form-control"
                  v-model="form.message"
                  rows="4"
                  placeholder="Descreva como podemos ajudá-lo..."
                ></textarea>
              </div>

              <div class="form-check mb-4">
                <input 
                  class="form-check-input"
                  :class="{'is-invalid': errors.privacy}"
                  type="checkbox" 
                  id="privacy"
                  v-model="form.privacy"
                  required
                >
                <label class="form-check-label small" for="privacy">
                  Autorizo armazenar minha submissão para resposta à consulta. *
                </label>
                <div v-if="errors.privacy" class="invalid-feedback d-block">{{ errors.privacy }}</div>
              </div>
              <div class="d-grid">
                <button 
                  type="submit" 
                  class="btn btn-primary btn-lg"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                  <i v-else class="bi bi-send me-2"></i>
                  {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="contact-info bg-light rounded-3 p-4 h-100">
            <h3 class="h4 mb-4">
              <i class="bi bi-info-circle text-primary me-2"></i>
              Informações de Contato
            </h3>

            <div class="contact-items">

              <div class="contact-item">
                <div class="contact-icon bg-primary">
                  <i class="bi bi-envelope-fill"></i>
                </div>
                <div class="contact-details">
                  <h6 class="fw-bold mb-1">Email</h6>
                  <a href="mailto:cptecacadmy@gmail.com" class="text-decoration-none contact-link">
                    cptecacadmy@gmail.com
                  </a>
                </div>
              </div>


              <div class="contact-item">
                <div class="contact-icon bg-primary">
                  <i class="bi bi-telephone-fill"></i>
                </div>
                <div class="contact-details">
                  <h6 class="fw-bold mb-1">Telefone</h6>
                  <a href="tel:+258840000000" class="text-decoration-none contact-link">
                    +258 87 553 1696
                  </a>
                </div>
              </div>


              <div class="contact-item clickable-location" @click="openGoogleMaps">
                <div class="contact-icon bg-primary">
                  <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div class="contact-details">
                  <h6 class="fw-bold mb-1">Localização</h6>
                  <span class="text-muted location-text">Matola, Infulene A nº48</span>
                  <small class="d-block text-primary mt-1 maps-hint">
                    <i class="bi bi-cursor-fill me-1"></i>Clique para abrir no Google Maps
                  </small>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="business-hours mt-4">
              <h5 class="h6 mb-3">
                <i class="bi bi-clock text-primary me-2"></i>
                Horários de Funcionamento
              </h5>
              <div class="hours-list">
                <div v-for="(hour, day) in hours" :key="day" class="d-flex justify-content-between py-1 border-bottom">
                  <span class="fw-semibold day-name">{{ day }}</span>
                  <span class="text-muted hour-time">{{ hour }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  emits: ['form-submitted', 'alert-dismissed'],
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
        privacy: false
      },
      errors: {},
      isSubmitting: false,
      showAlert: false,
      hours: {
        'Segunda': '9:00 - 22:00',
        'Terça': '9:00 - 22:00',
        'Quarta': '9:00 - 22:00',
        'Quinta': '9:00 - 22:00',
        'Sexta': '9:00 - 22:00',
        'Sábado': '9:00 - 18:00',
        'Domingo': '9:00 - 12:00'
      }
    }
  },
  mounted() {
    // Scroll para o topo quando a página carrega
    window.scrollTo(0, 0)
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.form.name.trim()) this.errors.name = 'Nome é obrigatório'
      if (!this.form.email.trim()) this.errors.email = 'Email é obrigatório'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) this.errors.email = 'Email inválido'
      if (!this.form.phone.trim()) this.errors.phone = 'Telefone é obrigatório'
      if (!this.form.privacy) this.errors.privacy = 'Aceite os termos'
      
      return Object.keys(this.errors).length === 0
    },
    
    formatPhone() {
      let value = this.form.phone.replace(/\D/g, '')
      if (value.length <= 11) {
        if (value.length <= 2) this.form.phone = value
        else if (value.length <= 7) this.form.phone = `(${value.slice(0, 2)}) ${value.slice(2)}`
        else this.form.phone = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
      }
    },
    
    async submitForm() {
      if (!this.validateForm()) return
      
      this.isSubmitting = true
      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        this.form = { name: '', email: '', phone: '', message: '', privacy: false }
        this.showAlert = true
        setTimeout(() => this.hideAlert(), 5000)
      } catch (error) {
        alert('Erro ao enviar formulário')
      } finally {
        this.isSubmitting = false
      }
    },
    
    hideAlert() {
      this.showAlert = false
    },
    
    openGoogleMaps() {
      const address = 'Matola, Infulene A nº48, Mozambique'
      const encodedAddress = encodeURIComponent(address)
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
      
      // Abrir em uma nova aba
      window.open(googleMapsUrl, '_blank')
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #3b4cb8 0%, #2c3e50 100%);
  padding: 8rem 0 4rem;
  margin-top: 0;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
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
  max-width: 600px;
  margin: 0 auto;
}

/* Hero CTA Styles */
.hero-cta {
  margin-top: 2rem;
}

.btn-hero {
  background: linear-gradient(135deg, #ffc107, #ffb300);
  color: #2c3e50;
  border: none;
  padding: 1rem 2.5rem;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.btn-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-hero:hover::before {
  left: 100%;
}

.btn-hero:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 193, 7, 0.4);
  color: #2c3e50;
  background: linear-gradient(135deg, #ffb300, #ffa000);
  text-decoration: none;
}

.btn-hero i {
  transition: transform 0.3s ease;
  font-size: 1.2rem;
}

.btn-hero:hover i {
  transform: scale(1.1);
}

.hero-subtext {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;
  font-style: italic;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.contact-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 1rem;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.contact-details {
  flex: 1;
  min-width: 0;
}

.contact-link {
  color: #2c3e50;
  word-break: break-all;
}

.contact-link:hover {
  color: #3b4cb8;
}

.clickable-location {
  cursor: pointer;
  transition: all 0.3s ease;
}

.clickable-location:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  background: #f8f9ff;
}

.location-text {
  font-weight: 500;
}

.maps-hint {
  font-size: 0.75rem;
}

.btn-primary {
  background: #3b4cb8;
  border-color: #3b4cb8;
}

.btn-primary:hover {
  background: #2c3e50;
  border-color: #2c3e50;
  transform: translateY(-1px);
}

.text-primary {
  color: #3b4cb8 !important;
}

.bg-primary {
  background-color: #3b4cb8 !important;
}

/* Business Hours Styling */
.business-hours {
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.hours-list .d-flex {
  font-size: 0.9rem;
  padding: 0.5rem 0;
}

.day-name {
  color: #2c3e50;
}

.hour-time {
  font-weight: 500;
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .hero-section {
    padding:8rem 0 3rem;
    margin-top: 0;
  }
  
  .display-6 {
    font-size: 2rem;
    margin-bottom: 1rem !important;
  }
  
  .lead {
    font-size: 1.1rem;
    margin-bottom: 2rem !important;
  }
  
  .hero-cta {
    margin-top: 1.5rem;
  }
  
  .btn-hero {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    width: 100%;
    max-width: 320px;
    justify-content: center;
  }
  
  .hero-subtext {
    font-size: 0.85rem;
    margin-top: 1rem !important;
  }
  
  .contact-form, .contact-info {
    padding: 1.5rem !important;
  }
  
  /* Email and Phone stacked on mobile */
  .row.g-3 .col-md-6 {
    margin-bottom: 1rem;
  }
  
  .row.g-3 .col-md-6:last-child {
    margin-bottom: 0;
  }
  
  .contact-item {
    flex-direction: row;
    text-align: left;
    padding: 1rem 0.75rem;
    margin-bottom: 1rem;
  }
  
  .contact-icon {
    margin-right: 0.75rem;
    margin-bottom: 0;
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .contact-details h6 {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }
  
  .contact-link {
    font-size: 0.85rem;
  }
  
  .maps-hint {
    font-size: 0.7rem;
  }
  
  .business-hours {
    margin-top: 1rem !important;
    padding: 0.75rem;
  }
  
  .hours-list .d-flex {
    font-size: 0.8rem;
    padding: 0.4rem 0;
  }
  
  .day-name {
    font-size: 0.8rem;
  }
  
  .hour-time {
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding: 8rem 0 2rem;
    margin-top: 0;
  }
  
  .display-6 {
    font-size: 1.8rem;
    margin-bottom: 1rem !important;
  }
  
  .lead {
    font-size: 1rem;
    margin-bottom: 1.5rem !important;
  }
  
  .btn-hero {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    max-width: 100%;
  }
  
  .hero-subtext {
    font-size: 0.8rem;
  }
  
  .contact-form, .contact-info {
    padding: 1rem !important;
  }
  
  .contact-item {
    margin-bottom: 0.75rem;
    padding: 0.75rem 0.5rem;
  }
  
  .contact-icon {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }
  
  .contact-details h6 {
    font-size: 0.85rem;
    margin-bottom: 0.2rem;
  }
  
  .contact-link {
    font-size: 0.8rem;
  }
  
  .maps-hint {
    font-size: 0.65rem;
  }
  
  .business-hours {
    padding: 0.5rem;
  }
  
  .hours-list .d-flex {
    font-size: 0.75rem;
    padding: 0.3rem 0;
  }
  
  .day-name, .hour-time {
    font-size: 0.75rem;
  }
}

/* Ajustes específicos para mobile muito pequeno */
@media (max-width: 480px) {
  .hero-section {
    padding: 8rem 0 2rem;
  }
  
  .display-6 {
    font-size: 1.6rem;
  }
  
  .lead {
    font-size: 0.95rem;
  }
  
  .btn-hero {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
  
  .hero-subtext {
    font-size: 0.75rem;
  }
  
  .contact-item {
    padding: 0.5rem;
  }
  
  .contact-icon {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
  
  .contact-details h6 {
    font-size: 0.8rem;
  }
  
  .contact-link {
    font-size: 0.75rem;
  }
  
  .maps-hint {
    font-size: 0.6rem;
  }
}

/* Fix for very long email addresses */
@media (max-width: 400px) {
  .contact-link {
    word-break: break-all;
    line-height: 1.3;
  }
}
</style>