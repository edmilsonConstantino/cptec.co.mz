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
          :class="{ 'centered-cards': shouldCenterCards }"
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
                  <p>
                    <span>
                      {{ declaracao.declaracao ? declaracao.declaracao : getDeclarationPreview(declaracao) }}
                    </span>
                  </p>
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
           <div class="pagination-controls" v-show="!isMobile && totalPages > 1">
        <button 
          @click="prevPage" 
          class="pagination-arrow" 
          :disabled="currentPage === 0"
        >
          <i class="bi bi-chevron-left"></i>
        </button>
        
        <div class="pagination-numbers">
          <button 
            v-for="page in totalPages" 
            :key="page"
            @click="goToPage(page - 1)"
            class="page-number"
            :class="{ active: currentPage === page - 1 }"
          >
            {{ page }}
          </button>
        </div>
        
        <button 
          @click="nextPage" 
          class="pagination-arrow" 
          :disabled="currentPage >= totalPages - 1"
        >
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
      </div>
      
   

      <div class="carousel-dots" v-show="isMobile">
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
      slidesToShow: 4,
      autoSlideInterval: null,
      isMobile: false,
      declaracoes: [],
      loading: true,
      error: null,
      isScrolling: false,
      userInteracted: false,
      userInteractionTimeout: null,
      scrollTimeout: null,
    };
  },

  computed: {
    carouselStyle() {
      return { display: "flex" };
    },

    maxSlide() {
      return this.isMobile
        ? Math.max(0, this.declaracoes.length - 1)
        : Math.max(0, this.declaracoes.length - this.slidesToShow);
    },

    dotsCount() {
      return this.isMobile
        ? Math.min(3, this.declaracoes.length)
        : Math.ceil(this.declaracoes.length / this.slidesToShow);
    },

    currentPage() {
      return Math.floor(this.currentSlide / this.slidesToShow);
    },

    totalPages() {
      if (this.declaracoes.length <= this.slidesToShow) return 1;
      return Math.ceil(this.declaracoes.length / this.slidesToShow);
    },

    shouldCenterCards() {
      return !this.isMobile && this.declaracoes.length < this.slidesToShow;
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
        declaracao: item.declaracao,
        foto: item.foto
          ? item.foto.startsWith("http")
            ? item.foto
            : `https://cestificacoesiso-back.onrender.com/${item.foto}`
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

    this.$nextTick(() => {
      const track = this.$refs.carouselTrack;
      if (track) {
        track.addEventListener("scroll", this.handleTrackScroll, { passive: true });
        track.addEventListener("touchstart", this.handleUserInteraction, { passive: true });
        track.addEventListener("mousedown", this.handleUserInteraction);
        track.addEventListener("wheel", this.handleUserInteraction, { passive: true });
        track.addEventListener("mouseenter", this.handleUserInteraction);
      }

      setTimeout(() => {
        this.startAutoSlide();
      }, 800);
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updateResponsiveSettings);
    this.stopAutoSlide();

    if (this.userInteractionTimeout) clearTimeout(this.userInteractionTimeout);

    const track = this.$refs.carouselTrack;
    if (track) {
      track.removeEventListener("scroll", this.handleTrackScroll);
      track.removeEventListener("touchstart", this.handleUserInteraction);
      track.removeEventListener("mousedown", this.handleUserInteraction);
      track.removeEventListener("wheel", this.handleUserInteraction);
      track.removeEventListener("mouseenter", this.handleUserInteraction);
    }
  },

  methods: {
    viewDetails(declaracao) {
      
       if (declaracao.unique_link) {
      this.$router.push({
        name: 'declaracoesLink',
        params: { uniqueLink: declaracao.unique_link }
      });
    } else {
      this.$emit('viewDetails', declaracao);
    }
  },

    getDeclarationPreview(declaracao) {
      return `Declaramos que ${declaracao.nomeCompleto} concluiu com aproveitamento o curso de ${declaracao.curso}, com carga horária de ${declaracao.cargaHoraria}, no período de ${declaracao.duracao}.`;
    },

    handleUserInteraction() {
      this.userInteracted = true;
      this.stopAutoSlide();

      if (this.userInteractionTimeout) clearTimeout(this.userInteractionTimeout);
      this.userInteractionTimeout = setTimeout(() => {
        this.userInteracted = false;
        this.startAutoSlide();
      }, 10000);
    },

    getSlideMetrics() {
      const track = this.$refs.carouselTrack;
      const slideEl = track?.querySelector(".carousel-slide");
      const slideWidth = slideEl ? slideEl.getBoundingClientRect().width : 0;
      const gap = parseInt(getComputedStyle(track || document.documentElement).gap) || 20;
      return { track, slideWidth, gap };
    },

    nextSlide() {
      const { track, slideWidth, gap } = this.getSlideMetrics();
      if (!track || this.declaracoes.length <= 1) return;

      this.currentSlide = (this.currentSlide + 1) % this.declaracoes.length;
      const left = this.currentSlide * (slideWidth + gap);
      track.scrollTo({ left, behavior: "smooth" });
    },
   goToPage(page) {
  const { track, slideWidth, gap } = this.getSlideMetrics();
  if (!track) return;

  const targetIndex = this.isMobile
    ? page - 1
    : (page - 1) * this.slidesToShow; 

  this.currentSlide = Math.max(0, Math.min(targetIndex, this.declaracoes.length - 1));

  const left = this.currentSlide * (slideWidth + gap);
  track.scrollTo({ left, behavior: "smooth" });
},

    prevSlide() {
      const { track, slideWidth, gap } = this.getSlideMetrics();
      if (!track || this.declaracoes.length <= 1) return;

      this.currentSlide =
        this.currentSlide > 0 ? this.currentSlide - 1 : this.declaracoes.length - 1;
      const left = this.currentSlide * (slideWidth + gap);
      track.scrollTo({ left, behavior: "smooth" });
    },

    startAutoSlide() {
      this.stopAutoSlide();
      if (this.declaracoes.length <= 1) return;

      this.autoSlideInterval = setInterval(() => {
        if (!this.userInteracted) this.nextSlide();
      }, 5000);
    },

    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    },

    updateResponsiveSettings() {
      const width = window.innerWidth;
      const wasMobile = this.isMobile;

      if (width < 768) {
        this.slidesToShow = 1;
        this.isMobile = true;
      } else {
        this.slidesToShow = 4;
        this.isMobile = false;
      }

      if (wasMobile !== this.isMobile) {
        this.currentSlide = 0;
        this.$nextTick(() => {
          const { track } = this.getSlideMetrics();
          if (track) track.scrollTo({ left: 0, behavior: "smooth" });
          this.startAutoSlide();
        });
      }
    },

    formatDate(dateString) {
      if (!dateString) return "Data não disponível";
      const date = new Date(dateString);
      return isNaN(date.getTime())
        ? "Data inválida"
        : date.toLocaleDateString("pt-BR");
    },

    handleTrackScroll() {
      if (!this.$refs.carouselTrack || this.isScrolling) return;
      this.isScrolling = true;

      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        const { track, slideWidth, gap } = this.getSlideMetrics();
        if (!track) {
          this.isScrolling = false;
          return;
        }
        const index = Math.round(track.scrollLeft / (slideWidth + gap));
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
  padding: 1rem 0;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  background: transparent;
  overflow: hidden;
  
}


.container {
  width: 100%;
  max-width: 1400px;
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
  overflow: visible;
  min-height: 480px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  align-items: flex-start;
  gap: 20px;
  padding: 0 10px;
  overflow-x: auto;    
  scroll-behavior: smooth;  
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;    
}

.carousel-track::-webkit-scrollbar { display: none; }

.carousel-track.centered-cards {
  justify-content: center;
  gap: 20px;
}

.carousel-slide {
  flex: 0 0 calc(25% - 15px);
  box-sizing: border-box;
  max-width: 320px;
}

.student-card {
  background: rgb(255, 255, 255);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 520px;
  width: 100%;
  margin: 30px auto 0;
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
  margin: 0;
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

.pagination-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 1rem;
  padding: 0.4rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.pagination-arrow {
  min-width: 40px;
  height: 40px;
  background: transparent;
  color: #6c757d;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1.1rem;
}

.pagination-arrow:hover:not(:disabled) {
  background: #f1f3f5;
  color: #495057;
}

.pagination-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  align-items: center;
  gap: 0.20rem;
}

.page-number {
  min-width: 40px;
  height: 40px;
  padding: 0 0.5rem;
  background: transparent;
  color: #495057;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  font-weight: 500;
}

.page-number:hover:not(.active) {
  background: #f1f3f5;
}

.page-number.active {
  background: #5469d4;
  color: white;
  font-weight: 600;
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
    flex: 0 0 calc(25% - 15px);
  }
}

@media (max-width: 992px) {
  .carousel-slide {
    flex: 0 0 calc(25% - 15px);
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .carousel-section {
    padding: 1rem 0;
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

.carousel-track.centered-cards {
  justify-content: center !important;
  gap: 20px !important;
}

.carousel-track.centered-cards .carousel-slide {
  flex: 0 0 calc(25% - 15px) !important;
  max-width: 320px !important;
}
</style>