<template>
  <section class="carousel-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-1 mb-md-1 ">
          <h2 class="section-title">Últimos Certificados Emitidos</h2>
          <p class="section-subtitle">Conheça os alunos que acabaram de concluir nossos cursos</p>
        </div>
      </div>
      
      <div class="carousel-container">
        <div 
          class="carousel-track" 
          ref="carouselTrack" 
          :style="carouselStyle"
          @scroll="handleTrackScroll"
        >
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
                  <p>{{ getDeclarationPreview(declaracao) }}</p>
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
      </div>
      
      <div class="carousel-dots">
        <button 
          v-for="(_, index) in dotsCount" 
          :key="index"
          @click="goToSlide(index)"
          class="dot"
          :class="{ active: currentDotIndex === index }"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
import CertificationsService from "@/components/services/certifications";

export default {
  name: "CarouselSection",
  emits: ["viewDetails"],

  data() {
    return {
      currentSlide: 0,
      slidesToShow: 3,
      autoSlideInterval: null,
      isMobile: false,
      declaracoes: [], 
      loading: true,
      error: null,
      isScrolling: false,
    };
  },

  computed: {
    carouselStyle() {
      if (this.isMobile) {
        return {
          display: "flex",
        };
      }
      return {
        transform: `translateX(-${(this.currentSlide * 100) / this.slidesToShow}%)`,
        transition: "transform 0.5s ease-in-out",
        width: `${(this.declaracoes.length / this.slidesToShow) * 100}%`,
      };
    },

    maxSlide() {
      return Math.max(0, this.declaracoes.length - this.slidesToShow);
    },

    dotsCount() {
      if (this.isMobile) {
        return this.declaracoes.length;
      }
      return Math.ceil(this.declaracoes.length / this.slidesToShow);
    },

    currentDotIndex() {
      if (this.isMobile) {
        return this.currentSlide;
      }
      return Math.floor(this.currentSlide / this.slidesToShow);
    },
  },

  async created() {
    try {
      this.loading = true;
      const data = await CertificationsService.getAll();

      this.declaracoes = data.map((item) => ({
        id: item.id,
        nomeCompleto: item.nome_completo,
        curso: item.curso,
        cargaHoraria: item.carga_horaria,
        dataConclusao: item.data_conclusao,
        codigo: item.codigo,
        status: item.status,
        depoimento: item.depoimento || "Excelente curso! Recomendo a todos.",
        duracao: item.duracao,
        documento: item.documento,
        foto: item.foto
          ? (item.foto.startsWith("http")
              ? item.foto
              : `https://cestificacoesiso-back.onrender.com${item.foto}`)
          : "https://via.placeholder.com/90",
      }));
    } catch (err) {
      this.error = "Não foi possível carregar as declarações.";
      console.error(err);
    } finally {
      this.loading = false;
    }
  },

  mounted() {
    this.updateResponsiveSettings();
    window.addEventListener("resize", this.updateResponsiveSettings);
    
    if (this.$refs.carouselTrack) {
      this.$refs.carouselTrack.addEventListener("scroll", this.handleTrackScroll);
    }
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updateResponsiveSettings);
    this.stopAutoSlide();
    
    if (this.$refs.carouselTrack) {
      this.$refs.carouselTrack.removeEventListener("scroll", this.handleTrackScroll);
    }
  },

  methods: {
    getDeclarationPreview(declaracao) {
      const texto = `Declaramos que ${declaracao.nomeCompleto} concluiu com aproveitamento o curso de ${declaracao.curso}, com carga horária de ${declaracao.cargaHoraria}, no período de ${declaracao.duracao}.`;
      return texto;
    },

    nextSlide() {
      if (this.currentSlide < this.maxSlide) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
      this.resetAutoSlide();
    },

    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.maxSlide;
      }
      this.resetAutoSlide();
    },

    goToSlide(index) {
      if (this.isMobile) {
        const track = this.$refs.carouselTrack;
        if (!track) return;
        
        const slideWidth = track.querySelector(".carousel-slide")?.offsetWidth || 0;
        const gap = 15;
        const scrollPosition = index * (slideWidth + gap);
        
        track.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
        this.currentSlide = index;
      } else {
        this.currentSlide = index * this.slidesToShow;
        this.resetAutoSlide();
      }
    },

    startAutoSlide() {
      if (!this.isMobile && this.declaracoes.length > this.slidesToShow) {
        this.autoSlideInterval = setInterval(() => {
          this.nextSlide();
        }, 5000);
      }
    },

    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    },

    resetAutoSlide() {
      this.stopAutoSlide();
      this.startAutoSlide();
    },

    updateResponsiveSettings() {
      const width = window.innerWidth;
      const wasMobile = this.isMobile;

      if (width < 768) {
        this.slidesToShow = 1;
        this.isMobile = true;
        this.stopAutoSlide();
      } else if (width < 1200) {
        this.slidesToShow = 2;
        this.isMobile = false;
      } else {
        this.slidesToShow = 3;
        this.isMobile = false;
      }

      if (wasMobile !== this.isMobile) {
        this.currentSlide = 0;
        if (!this.isMobile) {
          this.resetAutoSlide();
        }
      }
    },

    viewDetails(declaracao) {
      this.$emit("viewDetails", declaracao);
    },

    formatDate(dateString) {
      if (!dateString) return "Data não disponível";
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Data inválida";
      return date.toLocaleDateString("pt-BR");
    },

    handleTrackScroll() {
      if (!this.isMobile || this.isScrolling) return;
      
      this.isScrolling = true;
      
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        const track = this.$refs.carouselTrack;
        if (!track) return;
        
        const slideWidth = track.querySelector(".carousel-slide")?.offsetWidth || 1;
        const gap = 15;
        const scrollLeft = track.scrollLeft;
        const index = Math.round(scrollLeft / (slideWidth + gap));
        
        this.currentSlide = Math.max(0, Math.min(index, this.declaracoes.length - 1));
        this.isScrolling = false;
      }, 100);
    },
  },
};
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

.container {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 15px;
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
  margin-bottom: 0.6rem;
}

.carousel-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  min-height: 560px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  align-items: flex-start;
}

.carousel-slide {
  flex: 0 0 calc(60% / 3);
  padding: 0 12px;
  box-sizing: border-box;
}

.student-card {
  background: rgb(255, 255, 255);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 520px;
  width: 100%;
  max-width: 340px;
  margin: 40px auto 0;
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
  height: 120px;
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  z-index: 1;
}

.student-photo {
  position: relative;
  width: 92px;
  height: 90px;
  margin: 15px auto 15px;
  z-index: 2;
  flex-shrink: 0;
}

.student-photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 4px solid white;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
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
  padding: 0 1.2rem 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.student-name {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0.6rem 0 0.4rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.4rem;
}

.student-course {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 1rem;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.student-details {
  display: flex;
  flex-direction: column;
  gap: 0.30rem;
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: #495057;
}

.detail-item i {
  color: #3b4cb8;
  margin-right: 0.4rem;
  width: 14px;
}

.student-testimonial {
  background: rgba(59, 76, 184, 0.05);
  padding: 0.9rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 110px;
  flex-shrink: 0;
  justify-content: flex-start;
}

.quote-icon {
  color: #3b4cb8;
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  flex-shrink: 0;
  margin-top: 0;
  align-self: center;
}

.student-testimonial p {
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.certificate-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  word-break: break-all;
  margin:0 ;
}

.btn-view-cert {
  width: 100%;
  padding: 0.8rem 1.2rem;
  background: linear-gradient(135deg, #285da7, #20c997);
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
  margin-top: 1rem;
  width: 100%;
}

.dot {
  width: 12px;
  height: 12px;
  border: none;
  background: #dee2e6;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot.active {
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  transform: scale(1.1);
}

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
    padding: 1.5rem 0;
    overflow: visible;
    background: transparent;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }
  
  .carousel-container {
    padding: 0;
    overflow: visible;
    min-height: auto;
    margin-top: 0;
    display: contents; 
  }

  .carousel-track {
    overflow-x: auto;
    overflow-y: visible;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    gap: 15px;
    padding: 0 15px 20px 15px;
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
    height: 450px;
    min-height: 450px;
    max-height: 450px;
    border-radius: 16px;
    margin: 40px 0 0;
    max-width: 100%;
  }

  .card-background {
    height: 90px;
  }

  .student-photo {
    width: 70px;
    height: 70px;
    margin: 10px auto 10px;
  }

  .photo-overlay {
    width: 24px;
    height: 24px;
    font-size: 0.8rem;
  }

  .student-info {
    padding: 0 0.8rem 0.8rem;
  }

  .student-name {
    font-size: 0.9rem;
    min-height: 2.2rem;
    max-height: 2.2rem;
    line-height: 1.2;
    margin: 0.4rem 0 0.3rem;
  }

  .student-course {
    font-size: 0.8rem;
    min-height: 2rem;
    max-height: 2rem;
    margin-bottom: 0.6rem;
  }

  .student-details {
    gap: 0.2rem;
    margin-bottom: 0.6rem;
  }

  .detail-item {
    font-size: 0.7rem;
  }

  .student-testimonial {
    height: 85px;
    min-height: 85px;
    max-height: 85px;
    overflow: hidden;
    padding: 0.6rem;
    margin-bottom: 0.6rem;
    justify-content: flex-start;
  }

  .quote-icon {
    font-size: 1rem;
    margin-bottom: 0.3rem;
    align-self: center;
  }

  .student-testimonial p {
    -webkit-line-clamp: 3;
    font-size: 0.75rem;
    line-height: 1.3;
  }

  .certificate-code {
    font-size: 0.65rem;
    padding: 0.4rem;
    margin-bottom: 0.4rem;
  }

  .btn-view-cert {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
  }

  .certificate-info {
    margin-top: auto;
    gap: 0.4rem;
  }
}

@media (max-width: 576px) {
  .carousel-track {
    padding: 0 10px 15px 10px;
  }
  
  .carousel-slide {
    flex: 0 0 250px;
  }
  
  .student-card {
    height: 430px;
    min-height: 430px;
    max-height: 430px;
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
    margin: 10px auto 8px;
  }
  
  .photo-overlay {
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
  }
  
  .student-info {
    padding: 0 0.6rem 0.6rem;
  }
  
  .student-name {
    font-size: 0.85rem;
    min-height: 2rem;
    max-height: 2rem;
    margin-top: 0.4rem;
  }
  
  .student-course {
    font-size: 0.72rem;
    margin-bottom: 0.5rem;
    min-height: 1.8rem;
    max-height: 1.8rem;
  }
  
  .detail-item {
    font-size: 0.65rem;
    margin-bottom: 0.15rem;
  }
  
  .student-testimonial {
    min-height: 75px;
    max-height: 75px;
    height: 75px;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    justify-content: flex-start;
  }

  .student-testimonial p {
    -webkit-line-clamp: 3;
    font-size: 0.7rem;
    line-height: 1.25;
  }
  
  .certificate-code {
    font-size: 0.6rem;
    padding: 0.3rem;
  }
  
  .btn-view-cert {
    padding: 0.5rem 0.7rem;
    font-size: 0.75rem;
  }
}

@media (max-width: 375px) {
  .carousel-track {
    padding: 0 10px 20px 10px;
  }
  
  .carousel-slide {
    flex: 0 0 240px;
  }
  
  .student-card {
    height: 420px;
    min-height: 420px;
    max-height: 420px;
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
    width: 55px;
    height: 55px;
    margin: 8px auto 8px;
  }
  
  .photo-overlay {
    width: 18px;
    height: 18px;
    font-size: 0.65rem;
    bottom: -2px;
    right: -2px;
    border-width: 2px;
  }
  
  .student-info {
    padding: 0 0.5rem 0.5rem;
  }
  
  .student-name {
    font-size: 0.8rem;
    min-height: 1.8rem;
    max-height: 1.8rem;
    margin-top: 0.8rem;
  }
  
  .student-course {
    font-size: 0.68rem;
    min-height: 1.6rem;
    max-height: 1.6rem;
    margin-bottom: 0.5rem;
  }
  
  .student-details {
    gap: 0.2rem;
    margin-bottom: 0.5rem;
  }
  
  .detail-item {
    font-size: 0.62rem;
  }
  
  .detail-item i {
    width: 11px;
    margin-right: 0.25rem;
  }
  
  .student-testimonial {
    padding: 0.5rem;
    min-height: 70px;
    max-height: 70px;
    height: 70px;
    margin-bottom: 0.5rem;
    justify-content: flex-start;
  }
  
  .quote-icon {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
    align-self: center;
  }
  
  .student-testimonial p {
    font-size: 0.65rem;
    line-height: 1.3;
    -webkit-line-clamp: 3;
  }
  
  .certificate-info {
    gap: 0.4rem;
    margin-top: auto;
  }
  
  .certificate-code {
    font-size: 0.58rem;
    padding: 0.3rem;
  }
  
  .btn-view-cert {
    padding: 0.45rem 0.6rem;
    font-size: 0.7rem;
    gap: 0.25rem;
  }
  
  .carousel-dots {
    margin-top: 1.5rem;
  }

  .dot {
    width: 10px;
    height: 10px;
  }
}
</style>