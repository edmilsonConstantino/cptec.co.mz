<template>
  <section class="carousel-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-4 mb-md-5">
          <h2 class="section-title">Últimas Declarações Emitidas</h2>
          <p class="section-subtitle">Conheça os alunos que acabaram de concluir nossos cursos</p>
        </div>
      </div>
      
      <div class="carousel-container">
        <div class="carousel-track" ref="carouselTrack" :style="carouselStyle">
          <div 
            v-for="(declaracao) in declaracoes" 
            :key="declaracao.id"
            class="carousel-slide"
          >
            <div class="student-card">
              <div class="card-background"></div>
              <div class="student-photo">
                <img :src="declaracao.foto" :alt="declaracao.nomeCompleto" />
                <div class="photo-overlay">
                  <i class="bi bi-award"></i>
                </div>
              </div>
              
              <div class="student-info">
                <h3 class="student-name">{{ declaracao.nomeCompleto }}</h3>
                <p class="student-course">{{ declaracao.curso }}</p>
                
                <div class="student-details">
                  <div class="detail-item">
                    <i class="bi bi-calendar3"></i>
                    <span>{{ formatDate(declaracao.dataConclusao) }}</span>
                  </div>
                  <div class="detail-item">
                    <i class="bi bi-clock"></i>
                    <span>{{ declaracao.cargaHoraria }}</span>
                  </div>
                  <div class="detail-item">
                    <i class="bi bi-trophy"></i>
                    <span>Aprovado</span>
                  </div>
                </div>
                
                <div class="student-testimonial">
                  <i class="bi bi-quote quote-icon"></i>
                  <p>{{ declaracao.depoimento }}</p>
                </div>
                
                <div class="certificate-info">
                  <div class="certificate-code">
                    <i class="bi bi-qr-code me-1"></i>
                    {{ declaracao.codigo }}
                  </div>
                  
                  <button @click="viewDetails(declaracao)" class="btn-view-cert">
                    <i class="bi bi-eye me-2"></i>
                    <span>Ver Detalhes</span>
                    <i class="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <button 
          @click="prevSlide" 
          class="carousel-btn prev-btn" 
          :disabled="currentSlide === 0"
          v-show="!isMobile"
        >
          <i class="bi bi-chevron-left"></i>
        </button>
        <button 
          @click="nextSlide" 
          class="carousel-btn next-btn" 
          :disabled="currentSlide >= maxSlide"
          v-show="!isMobile"
        >
          <i class="bi bi-chevron-right"></i>
        </button>

        <div class="carousel-dots">
          <button 
            v-for="(_, index) in Math.ceil(declaracoes.length / slidesToShow)" 
            :key="index"
            @click="goToSlide(index)"
            class="dot"
            :class="{ active: Math.floor(currentSlide / slidesToShow) === index }"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CarouselSection',
  emits: ['viewDetails'],
  data() {
    return {
      currentSlide: 0,
      slidesToShow: 3,
      autoSlideInterval: null,
      isMobile: false,
      
      declaracoes: [
        {
          id: 1,
          nomeCompleto: 'João Carlos Silva Santos',
          documento: '123456789',
          curso: 'Desenvolvimento Web Full Stack',
          duracao: '6 meses',
          cargaHoraria: '240 horas',
          dataConclusao: '2024-03-15',
          codigo: 'CFP-2024-001-WEB',
          ano: '2024',
          status: 'Aprovado',
          foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format&q=80',
          depoimento: 'O curso me proporcionou conhecimentos essenciais em desenvolvimento web. Aprendi tecnologias modernas e consegui minha primeira oportunidade como desenvolvedor full stack.'
        },
        {
          id: 2,
          nomeCompleto: 'Maria José Fernandes Costa',
          documento: '987654321',
          curso: 'Marketing Digital Avançado',
          duracao: '4 meses',
          cargaHoraria: '180 horas',
          dataConclusao: '2024-02-28',
          codigo: 'CFP-2024-002-MKT',
          ano: '2024',
          status: 'Aprovado',
          foto: 'https://images.unsplash.com/photo-1494790108755-2616b9234706?w=200&h=200&fit=crop&crop=face&auto=format&q=80',
          depoimento: 'Excelente curso de marketing digital! Os professores são muito qualificados e o conteúdo é atualizado com as tendências do mercado.'
        },
        {
          id: 3,
          nomeCompleto: 'Paulo Roberto Mendes Lima',
          documento: '456789123',
          curso: 'Ciência de Dados e Analytics',
          duracao: '8 meses',
          cargaHoraria: '320 horas',
          dataConclusao: '2024-01-20',
          codigo: 'CFP-2024-003-DATA',
          ano: '2024',
          status: 'Aprovado',
          foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format&q=80',
          depoimento: 'Curso excepcional em ciência de dados. Aprendi desde estatística básica até machine learning avançado. Material muito bem estruturado.'
        },
        {
          id: 4,
          nomeCompleto: 'Ana Paula Costa Oliveira',
          documento: '789123456',
          curso: 'Design UX/UI Profissional',
          duracao: '5 meses',
          cargaHoraria: '200 horas',
          dataConclusao: '2023-12-10',
          codigo: 'CFP-2023-045-UX',
          ano: '2023',
          status: 'Aprovado',
          foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&auto=format&q=80',
          depoimento: 'O curso de UX/UI mudou minha carreira completamente. Aprendi metodologias de design centrado no usuário e hoje trabalho em uma grande empresa.'
        },
        {
          id: 5,
          nomeCompleto: 'Roberto Lima Carvalho',
          documento: '321654987',
          curso: 'Gestão Empresarial',
          duracao: '6 meses',
          cargaHoraria: '250 horas',
          dataConclusao: '2023-11-25',
          codigo: 'CFP-2023-046-GES',
          ano: '2023',
          status: 'Aprovado',
          foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face&auto=format&q=80',
          depoimento: 'Curso muito completo sobre gestão empresarial. Os conhecimentos me ajudaram a reestruturar minha empresa e aumentar a produtividade.'
        },
        {
          id: 6,
          nomeCompleto: 'Carla Fernandes Rodrigues',
          documento: '654987321',
          curso: 'Gestão de Projetos Ágeis',
          duracao: '4 meses',
          cargaHoraria: '160 horas',
          dataConclusao: '2023-10-15',
          codigo: 'CFP-2023-047-PROJ',
          ano: '2023',
          status: 'Aprovado',
          foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face&auto=format&q=80',
          depoimento: 'Aprendi metodologias ágeis que transformaram como gerencio projetos. Recebi uma promoção logo após concluir o curso.'
        }
      ]
    }
  },
  
  computed: {
    carouselStyle() {
      if (this.isMobile) {
        return {}
      }
      return {
        transform: `translateX(-${this.currentSlide * (100 / this.declaracoes.length)}%)`,
        transition: 'transform 0.5s ease-in-out',
        width: `${this.declaracoes.length * (100 / this.slidesToShow)}%`
      }
    },
    
    maxSlide() {
      return this.declaracoes.length - this.slidesToShow
    }
  },
  
  mounted() {
    this.updateResponsiveSettings()
    this.startAutoSlide()
    window.addEventListener('resize', this.updateResponsiveSettings)
  },
  
  beforeUnmount() {
    this.stopAutoSlide()
    window.removeEventListener('resize', this.updateResponsiveSettings)
  },
  
  methods: {
    nextSlide() {
      if (this.currentSlide < this.maxSlide) {
        this.currentSlide++
      } else {
        this.currentSlide = 0
      }
      this.resetAutoSlide()
    },
    
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      } else {
        this.currentSlide = this.maxSlide
      }
      this.resetAutoSlide()
    },
    
    goToSlide(index) {
      this.currentSlide = index * this.slidesToShow
      this.resetAutoSlide()
    },
    
    startAutoSlide() {
      if (!this.isMobile) {
        this.autoSlideInterval = setInterval(() => {
          this.nextSlide()
        }, 5000)
      }
    },
    
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval)
        this.autoSlideInterval = null
      }
    },
    
    resetAutoSlide() {
      this.stopAutoSlide()
      this.startAutoSlide()
    },
    
    updateResponsiveSettings() {
      const width = window.innerWidth
      const wasMobile = this.isMobile
      
      if (width < 768) {
        this.slidesToShow = 1
        this.isMobile = true
        this.stopAutoSlide()
      } else if (width < 1200) {
        this.slidesToShow = 2
        this.isMobile = false
      } else {
        this.slidesToShow = 3
        this.isMobile = false
      }
      
      if (wasMobile !== this.isMobile) {
        this.currentSlide = 0
        this.resetAutoSlide()
      }
    },
    
    viewDetails(declaracao) {
      this.$emit('viewDetails', declaracao)
    },
    
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('pt-BR')
    }
  }
}
</script>

<style scoped>

* {
  box-sizing: border-box;
}


.carousel-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  overflow: hidden;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  font-weight: 300;
}

.carousel-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  flex: 0 0 20%;
  padding: 0 15px;
  box-sizing: border-box;
}

.student-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  height: 600px;
  display: flex;
  flex-direction: column;
}

.student-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  z-index: 1;
}

.student-photo {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 30px auto 20px;
  z-index: 2;
}

.student-photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 4px solid white;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  min-width: 100px;
  min-height: 100px;
  max-width: 100px;
  max-height: 100px;
}

.photo-overlay {
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #ffc107, #ffeb3b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  font-size: 1rem;
  font-weight: bold;
  border: 3px solid white;
}

.student-info {
  padding: 0 1.5rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.student-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.6rem;
}

.student-course {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 1.2rem;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.4rem;
}

.student-details {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.2rem;
}

.detail-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #495057;
}

.detail-item i {
  color: #3b4cb8;
  margin-right: 0.5rem;
  width: 16px;
}

.student-testimonial {
  background: rgba(59, 76, 184, 0.05);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1.2rem;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100px;
}

.quote-icon {
  color: #3b4cb8;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.student-testimonial p {
  font-size: 0.85rem;
  line-height: 1.5;
  color: #495057;
  margin: 0;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.certificate-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

.certificate-code {
  font-size: 0.75rem;
  color: #6c757d;
  font-family: 'Courier New', monospace;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 8px;
  border-left: 3px solid #3b4cb8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-view-cert {
  width: 100%;
  padding: 0.8rem 1.2rem;
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
}

.btn-view-cert:hover {
  background: linear-gradient(135deg, #218838, #1abc9c);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
}


.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 5px 20px rgba(59, 76, 184, 0.3);
}

.carousel-btn:hover:not(:disabled) {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 25px rgba(59, 76, 184, 0.4);
}

.carousel-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
}

.dot {
  width: 12px;
  height: 12px;
  border: none;
  background: #dee2e6;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  transform: scale(1.3);
}

/* RESPONSIVE BREAKPOINTS */

@media (max-width: 1200px) {
  .carousel-slide {
    flex: 0 0 50%;
  }
  
  .carousel-container {
    padding: 0 70px;
  }
  
  .prev-btn {
    left: 15px;
  }
  
  .next-btn {
    right: 15px;
  }
}

/* Tablet pequeno - 992px e abaixo */
@media (max-width: 992px) {
  .carousel-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .carousel-container {
    padding: 0 60px;
  }
}


@media (max-width: 768px) {
  .carousel-section {
    padding: 2.5rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  

  .carousel-container {
    padding: 0;
    overflow: visible;
  }
  
  .carousel-track {
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    gap: 15px;
    padding: 0 20px; 
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .carousel-track::-webkit-scrollbar {
    display: none;
  }
  
  .carousel-slide {
    flex: 0 0 280px;
    padding: 0;
    scroll-snap-align: center;
  }
  
  .student-card {
    height: 480px;
    border-radius: 16px;
    margin: 0;
    max-width: 100%;
  }
  
  .card-background {
    height: 100px;
  }
  
  .student-photo {
    width: 70px;
    height: 70px;
    margin: 20px auto 15px;
  }
  
  .student-photo img {
    min-width: 70px;
    min-height: 70px;
    max-width: 70px;
    max-height: 70px;
    border-width: 3px;
  }
  
  .photo-overlay {
    width: 24px;
    height: 24px;
    font-size: 0.8rem;
    bottom: -3px;
    right: -3px;
    border-width: 2px;
  }
  
  .student-info {
    padding: 0 1rem 1rem;
  }
  
  .student-name {
    font-size: 1rem;
    min-height: 2rem;
    margin-bottom: 0.4rem;
  }
  
  .student-course {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    min-height: 2rem;
  }
  
  .student-details {
    gap: 0.3rem;
    margin-bottom: 1rem;
  }
  
  .detail-item {
    font-size: 0.7rem;
  }
  
  .detail-item i {
    width: 14px;
  }
  
  .student-testimonial {
    padding: 0.8rem;
    margin-bottom: 1rem;
    min-height: 80px;
  }
  
  .quote-icon {
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
  }
  
  .student-testimonial p {
    font-size: 0.75rem;
    line-height: 1.4;
    -webkit-line-clamp: 3;
  }
  
  .certificate-code {
    font-size: 0.7rem;
    padding: 0.4rem;
  }
  
  .btn-view-cert {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
    border-radius: 8px;
  }
  
  .carousel-dots {
    margin-top: 2rem;
  }
  
  .dot {
    width: 8px;
    height: 8px;
  }
}

@media (max-width: 576px) {
  .carousel-container {
    padding: 0;
  }
  
  .carousel-track {
    padding: 0 15px; 
  }
  
  .carousel-slide {
    flex: 0 0 260px;
  }
  
  .student-card {
    height: 450px;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .section-subtitle {
    font-size: 0.9rem;
  }
  
  .student-photo {
    width: 60px;
    height: 60px;
    margin: 15px auto 10px;
  }
  
  .student-photo img {
    min-width: 60px;
    min-height: 60px;
    max-width: 60px;
    max-height: 60px;
  }
  
  .photo-overlay {
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
  }
  
  .student-info {
    padding: 0 0.8rem 0.8rem;
  }
  
  .student-name {
    font-size: 0.9rem;
    min-height: 1.8rem;
  }
  
  .student-course {
    font-size: 0.75rem;
    min-height: 1.8rem;
  }
  
  .detail-item {
    font-size: 0.65rem;
  }
  
  .student-testimonial {
    padding: 0.6rem;
    min-height: 70px;
  }
  
  .student-testimonial p {
    font-size: 0.7rem;
    -webkit-line-clamp: 2;
  }
  
  .certificate-code {
    font-size: 0.65rem;
    padding: 0.3rem;
  }
  
  .btn-view-cert {
    padding: 0.5rem 0.8rem;
    font-size: 0.75rem;
  }
}


@media (max-width: 375px) {
  .carousel-track {
    padding: 0 10px;
  }
  
  .carousel-slide {
    flex: 0 0 240px;
  }
  
  .student-card {
    height: 420px;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .section-subtitle {
    font-size: 0.85rem;
  }
  
  .card-background {
    height: 80px;
  }
  
  .student-photo {
    width: 50px;
    height: 50px;
    margin: 10px auto 8px;
  }
  
  .student-photo img {
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    border-width: 2px;
  }
  
  .photo-overlay {
    width: 18px;
    height: 18px;
    font-size: 0.6rem;
    bottom: -2px;
    right: -2px;
  }
  
  .student-info {
    padding: 0 0.6rem 0.6rem;
  }
  
  .student-name {
    font-size: 0.85rem;
    min-height: 1.6rem;
    margin-bottom: 0.3rem;
  }
  
  .student-course {
    font-size: 0.7rem;
    min-height: 1.6rem;
    margin-bottom: 0.8rem;
  }
  
  .student-details {
    gap: 0.2rem;
    margin-bottom: 0.8rem;
  }
  
  .detail-item {
    font-size: 0.6rem;
  }
  
  .detail-item i {
    width: 12px;
    margin-right: 0.3rem;
  }
  
  .student-testimonial {
    padding: 0.5rem;
    min-height: 60px;
    margin-bottom: 0.8rem;
  }
  
  .quote-icon {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
  
  .student-testimonial p {
    font-size: 0.65rem;
    line-height: 1.3;
    -webkit-line-clamp: 2;
  }
  
  .certificate-info {
    gap: 0.8rem;
  }
  
  .certificate-code {
    font-size: 0.6rem;
    padding: 0.25rem;
  }
  
  .btn-view-cert {
    padding: 0.4rem 0.6rem;
    font-size: 0.7rem;
    gap: 0.3rem;
  }
  
  .carousel-dots {
    margin-top: 1.5rem;
  }
  
  .dot {
    width: 6px;
    height: 6px;
  }
}

@media (hover: hover) and (pointer: fine) {
  .student-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  }
  
  .btn-view-cert:hover {
    background: linear-gradient(135deg, #218838, #1abc9c);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
  }
  
  .carousel-btn:hover:not(:disabled) {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 25px rgba(59, 76, 184, 0.4);
  }
}
</style>
