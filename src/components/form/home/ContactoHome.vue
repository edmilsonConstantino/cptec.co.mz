<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section text-center text-white">
      <div class="container">
        <h1 class="display-6 fw-bold mb-3">Fale Conosco</h1>
        <p class="lead mb-0">Sua próxima aventura começa aqui!</p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container py-4">
      <div class="row g-4">
        <!-- Contact Form -->
        <div class="col-lg-7">
          <div class="contact-form bg-white rounded-3 shadow p-4">
            <h3 class="h4 text-center mb-4">
              <i class="bi bi-envelope-heart text-primary me-2"></i>
              Entre em Contato
            </h3>
            
            <!-- Success Alert -->
            <div v-if="showAlert" class="alert alert-success alert-dismissible fade show">
              <i class="bi bi-check-circle-fill me-2"></i>
              Mensagem enviada com sucesso!
              <button type="button" class="btn-close" @click="hideAlert"></button>
            </div>
            
            <!-- Contact Form -->
            <form @submit.prevent="submitForm" novalidate>
              <!-- Name Field -->
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

              <!-- Email Field -->
              <div class="mb-3">
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

              <!-- Phone Field -->
              <div class="mb-3">
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

              <!-- Message Field -->
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

              <!-- Privacy Checkbox -->
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

              <!-- Submit Button -->
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

        <!-- Contact Information -->
        <div class="col-lg-5">
          <div class="contact-info bg-light rounded-3 p-4 h-100">
            <h3 class="h4 mb-4">
              <i class="bi bi-info-circle text-primary me-2"></i>
              Informações de Contato
            </h3>

            <!-- Contact Items -->
            <div class="contact-items">
              <!-- Email -->
              <div class="contact-item">
                <div class="contact-icon bg-primary">
                  <i class="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <h6 class="fw-bold mb-1">Email</h6>
                  <a href="mailto:edyniltonnhamazane@gmail.com" class="text-decoration-none">
                    edyniltonnhamazane@gmail.com
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div class="contact-item">
                <div class="contact-icon bg-primary">
                  <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h6 class="fw-bold mb-1">Localização</h6>
                  <span class="text-muted">Maputo, MPM MZ</span>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="mt-4">
              <h5 class="h6 mb-3">
                <i class="bi bi-clock text-primary me-2"></i>
                Horários de Funcionamento
              </h5>
              <div class="hours-list">
                <div v-for="(hour, day) in hours" :key="day" class="d-flex justify-content-between py-1 border-bottom">
                  <span class="fw-semibold">{{ day }}</span>
                  <span class="text-muted">{{ hour }}</span>
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
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: #3b4cb8;
  padding: 10rem 0 2rem;
  margin-top: 0;
  position: relative;
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

/* Mobile Optimizations */
@media (max-width: 768px) {
  .hero-section {
    padding: 120px 0 3rem;
    margin-top: 0;
  }
  
  .display-6 {
    font-size: 2rem;
    margin-bottom: 1rem !important;
  }
  
  .lead {
    font-size: 1.1rem;
  }
  
  .contact-form, .contact-info {
    padding: 1.5rem !important;
  }
  
  .contact-item {
    flex-direction: row;
    text-align: left;
    padding: 1rem 0.75rem;
  }
  
  .contact-icon {
    margin-right: 1rem;
    margin-bottom: 0;
  }
  
  .hours-list {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding: 100px 0 2rem;
    margin-top: 0;
  }
  
  .display-6 {
    font-size: 1.8rem;
    margin-bottom: 1rem !important;
  }
  
  .lead {
    font-size: 1rem;
  }
  
  .contact-form, .contact-info {
    padding: 1rem !important;
  }
  
  .contact-item {
    margin-bottom: 1rem;
    padding: 0.75rem;
  }
  
  .contact-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .hours-list {
    font-size: 0.85rem;
  }
}

/* Ajustes específicos para mobile muito pequeno */
@media (max-width: 480px) {
  .hero-section {
    padding: 90px 0 2rem;
  }
  
  .display-6 {
    font-size: 1.6rem;
  }
  
  .lead {
    font-size: 0.95rem;
  }
}
</style>