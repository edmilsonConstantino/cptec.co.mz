<template>
  <div class="declaracoes-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-8 col-xl-7">
            <div class="hero-content">
              <div class="hero-badge">
                <i class="bi bi-award me-2"></i>
                <span>Certificações Oficiais</span>
              </div>
              
              <h1 class="hero-title">
                <span class="title-main">Nossas</span>
                <span class="title-highlight">Declarações</span>
              </h1>
              
              <p class="hero-subtitle">
                Consulte as <span class="highlight-text">declarações oficiais</span> dos alunos que 
                concluíram nossos cursos com sucesso.
              </p>
              
              <div class="hero-features">
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>Certificados Oficiais</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>Busca por Nome</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>Código Único</span>
                </div>
              </div>
              
              <div class="hero-actions">
                <button @click="scrollToSearch" class="btn btn-primary btn-lg me-3">
                  <i class="bi bi-search me-2"></i>
                  Buscar Declaração
                </button>
                <router-link to="/Cursos" class="btn btn-outline-light btn-lg">
                  <i class="bi bi-mortarboard me-2"></i>
                  Ver Cursos
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="hero-overlay"></div>
      
      <div class="scroll-indicator d-none d-md-block">
        <div class="scroll-mouse">
          <div class="scroll-wheel"></div>
        </div>
        <span class="scroll-text">Role para baixo</span>
      </div>
    </section>

    <!-- Carrossel de Depoimentos -->
    <section class="carousel-section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
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
                  
                  <div class="certificate-code">
                    <i class="bi bi-qr-code me-1"></i>
                    {{ declaracao.codigo }}
                  </div>
                  
                  <button @click="viewDeclaracao(declaracao)" class="btn-view-cert">
                    <i class="bi bi-eye me-1"></i>
                    Ver Declaração
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Controles do Carrossel -->
          <button @click="prevSlide" class="carousel-btn prev-btn" :disabled="currentSlide === 0">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button @click="nextSlide" class="carousel-btn next-btn" :disabled="currentSlide >= maxSlide">
            <i class="bi bi-chevron-right"></i>
          </button>
          
          <!-- Indicadores -->
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

    <!-- Search Section -->
    <section class="search-section" ref="searchSection">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section-title">Buscar Declaração</h2>
            <p class="section-subtitle">Encontre sua declaração pelo nome, curso ou código de verificação</p>
          </div>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="search-box">
              <div class="search-main">
                <div class="search-input-group">
                  <div class="input-icon">
                    <i class="bi bi-search"></i>
                  </div>
                  <input 
                    type="text" 
                    v-model="searchQuery" 
                    @input="filterDeclaracoes"
                    class="form-control search-input" 
                    placeholder="Digite o nome do aluno, curso ou código da declaração..."
                  >
                  <button @click="clearSearch" class="clear-btn" v-if="searchQuery">
                    <i class="bi bi-x"></i>
                  </button>
                </div>
              </div>
              
              <div class="search-filters">
                <div class="filter-group">
                  <label>Curso:</label>
                  <select v-model="selectedCourse" @change="filterDeclaracoes" class="form-select">
                    <option value="">Todos os Cursos</option>
                    <option v-for="curso in cursos" :key="curso" :value="curso">{{ curso }}</option>
                  </select>
                </div>
                
                <div class="filter-group">
                  <label>Ano:</label>
                  <select v-model="selectedYear" @change="filterDeclaracoes" class="form-select">
                    <option value="">Todos os Anos</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
                
                <div class="filter-group">
                  <label>Status:</label>
                  <select v-model="selectedStatus" @change="filterDeclaracoes" class="form-select">
                    <option value="">Todos</option>
                    <option value="Aprovado">Aprovado</option>
                    <option value="Concluído">Concluído</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="results-section">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12">
            <div class="results-header">
              <h3>
                {{ filteredDeclaracoes.length > 0 ? `${filteredDeclaracoes.length} declaração(ões) encontrada(s)` : 'Nenhuma declaração encontrada' }}
              </h3>
              <div class="view-options">
                <div class="view-toggle">
                  <button 
                    @click="viewMode = 'grid'" 
                    class="view-btn"
                    :class="{ active: viewMode === 'grid' }"
                  >
                    <i class="bi bi-grid-3x3-gap"></i>
                    <span>Grade</span>
                  </button>
                  <button 
                    @click="viewMode = 'list'" 
                    class="view-btn"
                    :class="{ active: viewMode === 'list' }"
                  >
                    <i class="bi bi-list"></i>
                    <span>Lista</span>
                  </button>
                </div>
                <div class="sort-options">
                  <select v-model="sortBy" @change="sortDeclaracoes" class="form-select">
                    <option value="nome">Ordenar por Nome</option>
                    <option value="data">Ordenar por Data</option>
                    <option value="curso">Ordenar por Curso</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Grid View -->
        <div v-if="viewMode === 'grid'" class="row">
          <div 
            v-for="declaracao in paginatedDeclaracoes" 
            :key="declaracao.id"
            class="col-lg-4 col-md-6 mb-4"
          >
            <div class="declaracao-card" @click="viewDeclaracao(declaracao)">
              <div class="card-image">
                <img :src="declaracao.foto" :alt="declaracao.nomeCompleto" />
                <div class="card-badge">
                  <i class="bi bi-patch-check-fill"></i>
                </div>
              </div>
              
              <div class="card-content">
                <h5 class="student-name-card">{{ declaracao.nomeCompleto }}</h5>
                <p class="course-name">{{ declaracao.curso }}</p>
                
                <div class="card-details">
                  <div class="detail-row">
                    <i class="bi bi-calendar"></i>
                    <span>{{ formatDate(declaracao.dataConclusao) }}</span>
                  </div>
                  <div class="detail-row">
                    <i class="bi bi-clock"></i>
                    <span>{{ declaracao.cargaHoraria }}</span>
                  </div>
                  <div class="detail-row">
                    <i class="bi bi-award"></i>
                    <span>{{ declaracao.status || 'Aprovado' }}</span>
                  </div>
                </div>
                
                <div class="testimonial-preview">
                  <i class="bi bi-quote"></i>
                  <p>{{ declaracao.depoimento.substring(0, 80) }}...</p>
                </div>
                
                <div class="card-footer">
                  <div class="certificate-code-small">
                    {{ declaracao.codigo }}
                  </div>
                  <button class="btn-view-small">
                    <i class="bi bi-eye"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- List View -->
        <div v-else class="declarations-list">
          <div 
            v-for="declaracao in paginatedDeclaracoes" 
            :key="declaracao.id"
            class="list-item"
            @click="viewDeclaracao(declaracao)"
          >
            <div class="list-photo">
              <img :src="declaracao.foto" :alt="declaracao.nomeCompleto" />
              <div class="status-badge">
                <i class="bi bi-check-circle-fill"></i>
              </div>
            </div>
            
            <div class="list-content">
              <div class="list-main">
                <h5 class="list-name">{{ declaracao.nomeCompleto }}</h5>
                <p class="list-course">{{ declaracao.curso }}</p>
                <div class="list-testimonial">
                  <i class="bi bi-quote"></i>
                  <span>{{ declaracao.depoimento.substring(0, 120) }}...</span>
                </div>
              </div>
              
              <div class="list-details">
                <div class="list-detail-item">
                  <span class="label">Data:</span>
                  <span class="value">{{ formatDate(declaracao.dataConclusao) }}</span>
                </div>
                <div class="list-detail-item">
                  <span class="label">Carga:</span>
                  <span class="value">{{ declaracao.cargaHoraria }}</span>
                </div>
                <div class="list-detail-item">
                  <span class="label">Código:</span>
                  <span class="value">{{ declaracao.codigo }}</span>
                </div>
              </div>
            </div>
            
            <div class="list-action">
              <button class="btn-view-list">
                <i class="bi bi-eye"></i>
                <span>Ver Declaração</span>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
        <div class="row" v-if="totalPages > 1">
          <div class="col-12">
            <nav class="pagination-nav">
              <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <button @click="changePage(currentPage - 1)" class="page-link">
                    <i class="bi bi-chevron-left"></i>
                  </button>
                </li>
                
                <li 
                  v-for="page in visiblePages" 
                  :key="page"
                  class="page-item" 
                  :class="{ active: page === currentPage }"
                >
                  <button @click="changePage(page)" class="page-link">{{ page }}</button>
                </li>
                
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <button @click="changePage(currentPage + 1)" class="page-link">
                    <i class="bi bi-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal de Visualização -->
    <div v-if="selectedDeclaracao" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <button @click="closeModal" class="modal-close">
          <i class="bi bi-x"></i>
        </button>
        
        <div class="certificate-full">
          <div class="certificate-header">
            <div class="institution-info-full">
              <div class="institution-logo-full">
                <i class="bi bi-mortarboard"></i>
              </div>
              <div class="institution-details">
                <h2>Centro de Formação Profissional</h2>
                <p>Reconhecido pelo Ministério da Educação</p>
              </div>
            </div>
            
            <div class="student-photo-full">
              <img :src="selectedDeclaracao.foto" :alt="selectedDeclaracao.nomeCompleto" />
            </div>
          </div>
          
          <div class="certificate-title">
            <h3>DECLARAÇÃO DE CONCLUSÃO DE CURSO</h3>
          </div>
          
          <div class="certificate-content">
            <div class="certificate-text">
              <p>
                Declaramos para os devidos fins que <strong>{{ selectedDeclaracao.nomeCompleto }}</strong>,
                portador(a) do documento de identidade nº <strong>{{ selectedDeclaracao.documento }}</strong>,
                concluiu com aproveitamento o curso de <strong>{{ selectedDeclaracao.curso }}</strong>,
                com carga horária de <strong>{{ selectedDeclaracao.cargaHoraria }}</strong>,
                no período de <strong>{{ selectedDeclaracao.duracao }}</strong>.
              </p>
              
              <p>
                O referido curso foi concluído em <strong>{{ formatDateFull(selectedDeclaracao.dataConclusao) }}</strong>,
                tendo o(a) aluno(a) demonstrado dedicação e aproveitamento satisfatório
                nas disciplinas cursadas.
              </p>
            </div>
            
            <div class="student-testimonial-full">
              <h4>Depoimento do Aluno</h4>
              <div class="testimonial-content">
                <i class="bi bi-quote quote-large"></i>
                <p>{{ selectedDeclaracao.depoimento }}</p>
                <div class="testimonial-author">
                  <strong>{{ selectedDeclaracao.nomeCompleto }}</strong>
                </div>
              </div>
            </div>
            
            <div class="certificate-details-grid">
              <div class="detail-card">
                <div class="detail-icon">
                  <i class="bi bi-mortarboard"></i>
                </div>
                <div class="detail-info">
                  <span class="detail-label">Curso</span>
                  <span class="detail-value">{{ selectedDeclaracao.curso }}</span>
                </div>
              </div>
              
              <div class="detail-card">
                <div class="detail-icon">
                  <i class="bi bi-calendar-check"></i>
                </div>
                <div class="detail-info">
                  <span class="detail-label">Duração</span>
                  <span class="detail-value">{{ selectedDeclaracao.duracao }}</span>
                </div>
              </div>
              
              <div class="detail-card">
                <div class="detail-icon">
                  <i class="bi bi-clock-history"></i>
                </div>
                <div class="detail-info">
                  <span class="detail-label">Carga Horária</span>
                  <span class="detail-value">{{ selectedDeclaracao.cargaHoraria }}</span>
                </div>
              </div>
              
              <div class="detail-card">
                <div class="detail-icon">
                  <i class="bi bi-calendar3"></i>
                </div>
                <div class="detail-info">
                  <span class="detail-label">Conclusão</span>
                  <span class="detail-value">{{ formatDateFull(selectedDeclaracao.dataConclusao) }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="certificate-footer-full">
            <div class="signature-section">
              <div class="signature-box">
                <div class="signature-line-full"></div>
                <p class="signature-name">Prof. João Silva</p>
                <p class="signature-title">Diretor Acadêmico</p>
              </div>
            </div>
            
            <div class="verification-section">
              <div class="verification-code">
                <div class="qr-placeholder">
                  <i class="bi bi-qr-code"></i>
                </div>
                <div class="code-details">
                  <p class="code-title">Código de Verificação:</p>
                  <p class="code-number">{{ selectedDeclaracao.codigo }}</p>
                  <p class="code-url">www.seusite.com/verificar</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="certificate-actions">
            <button @click="downloadPDF" class="btn btn-primary">
              <i class="bi bi-download me-2"></i>
              Baixar PDF
            </button>
            <button @click="printCertificate" class="btn btn-outline-primary">
              <i class="bi bi-printer me-2"></i>
              Imprimir
            </button>
            <button @click="shareCertificate" class="btn btn-outline-success">
              <i class="bi bi-share me-2"></i>
              Compartilhar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeclaracoesPage',
  data() {
    return {
      currentSlide: 0,
      searchQuery: '',
      selectedCourse: '',
      selectedYear: '',
      selectedStatus: '',
      viewMode: 'grid',
      sortBy: 'nome',
      currentPage: 1,
      itemsPerPage: 12,
      selectedDeclaracao: null,
      slidesToShow: 3,
      autoSlideInterval: null,
      
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
          foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
          depoimento: 'O curso me proporcionou conhecimentos essenciais em desenvolvimento web. Aprendi tecnologias modernas e consegui minha primeira oportunidade como desenvolvedor full stack. Recomendo para quem quer ingressar na área de tecnologia.'
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
          foto: 'https://images.unsplash.com/photo-1494790108755-2616b9234706?w=150&h=150&fit=crop&crop=face',
          depoimento: 'Excelente curso de marketing digital! Os professores são muito qualificados e o conteúdo é atualizado com as tendências do mercado. Consegui implementar as estratégias aprendidas em minha empresa e os resultados foram incríveis.'
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
          foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
          depoimento: 'Curso excepcional em ciência de dados. Aprendi desde estatística básica até machine learning avançado. O material é muito bem estruturado e os projetos práticos me prepararam para o mercado de trabalho.'
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
          foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
          depoimento: 'O curso de UX/UI mudou minha carreira completamente. Aprendi metodologias de design centrado no usuário e hoje trabalho em uma das maiores empresas de tecnologia do país. Muito obrigada pela oportunidade!'
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
          foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
          depoimento: 'Curso muito completo sobre gestão empresarial. Os conhecimentos adquiridos me ajudaram a reestruturar minha empresa e aumentar a produtividade da equipe. Professores experientes e metodologia eficiente.'
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
          foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
          depoimento: 'Aprendi metodologias ágeis que transformaram a forma como gerencio projetos. O curso é prático e focado nas necessidades do mercado atual. Recebi uma promoção logo após concluir o curso.'
        },
        {
          id: 7,
          nomeCompleto: 'Pedro Henrique Santos',
          documento: '147258369',
          curso: 'Programação Mobile',
          duracao: '7 meses',
          cargaHoraria: '280 horas',
          dataConclusao: '2023-09-30',
          codigo: 'CFP-2023-048-MOB',
          ano: '2023',
          status: 'Aprovado',
          foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
          depoimento: 'Excelente curso de desenvolvimento mobile. Aprendi tanto Android quanto iOS e consegui desenvolver meu primeiro aplicativo que está na Play Store. Recomendo para quem quer entrar no mundo mobile.'
        },
        {
          id: 8,
          nomeCompleto: 'Juliana Alves Pereira',
          documento: '963852741',
          curso: 'Contabilidade Digital',
          duracao: '5 meses',
          cargaHoraria: '200 horas',
          dataConclusao: '2023-08-20',
          codigo: 'CFP-2023-049-CONT',
          ano: '2023',
          status: 'Aprovado',
          foto: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face',
          depoimento: 'O curso de contabilidade digital me atualizou com as novas tecnologias do setor. Aprendi sobre automação contábil e sistemas integrados. Hoje consigo atender meus clientes de forma muito mais eficiente.'
        }
      ],
      
      filteredDeclaracoes: []
    }
  },
  computed: {
    cursos() {
      return [...new Set(this.declaracoes.map(d => d.curso))].sort()
    },
    
    totalPages() {
      return Math.ceil(this.filteredDeclaracoes.length / this.itemsPerPage)
    },
    
    paginatedDeclaracoes() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredDeclaracoes.slice(start, end)
    },
    
    visiblePages() {
      const delta = 2
      const range = []
      const rangeWithDots = []

      for (let i = Math.max(2, this.currentPage - delta); 
           i <= Math.min(this.totalPages - 1, this.currentPage + delta); 
           i++) {
        range.push(i)
      }

      if (this.currentPage - delta > 2) {
        rangeWithDots.push(1, '...')
      } else {
        rangeWithDots.push(1)
      }

      rangeWithDots.push(...range)

      if (this.currentPage + delta < this.totalPages - 1) {
        rangeWithDots.push('...', this.totalPages)
      } else {
        rangeWithDots.push(this.totalPages)
      }

      return rangeWithDots.filter(item => item !== '...' || rangeWithDots.indexOf(item) === rangeWithDots.lastIndexOf(item))
    },
    
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentSlide * (100 / this.slidesToShow)}%)`,
        transition: 'transform 0.5s ease-in-out'
      }
    },
    
    maxSlide() {
      return this.declaracoes.length - this.slidesToShow
    }
  },
  
  mounted() {
    this.initScrollIndicator()
    this.filteredDeclaracoes = [...this.declaracoes]
    this.startAutoSlide()
    this.updateSlidesToShow()
    window.addEventListener('resize', this.updateSlidesToShow)
  },
  
  beforeUnmount() {
    this.stopAutoSlide()
    window.removeEventListener('resize', this.updateSlidesToShow)
  },
  
  methods: {
    scrollToSearch() {
      this.$refs.searchSection.scrollIntoView({ behavior: 'smooth' })
    },
    
    // Carousel Methods
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
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval)
      }
    },
    
    resetAutoSlide() {
      this.stopAutoSlide()
      this.startAutoSlide()
    },
    
    updateSlidesToShow() {
      const width = window.innerWidth
      if (width < 768) {
        this.slidesToShow = 1
      } else if (width < 1200) {
        this.slidesToShow = 2
      } else {
        this.slidesToShow = 3
      }
      this.currentSlide = 0
    },
    
    // Search Methods
    filterDeclaracoes() {
      this.filteredDeclaracoes = this.declaracoes.filter(declaracao => {
        const matchesSearch = !this.searchQuery || 
          declaracao.nomeCompleto.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          declaracao.curso.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          declaracao.codigo.toLowerCase().includes(this.searchQuery.toLowerCase())
        
        const matchesCourse = !this.selectedCourse || declaracao.curso === this.selectedCourse
        const matchesYear = !this.selectedYear || declaracao.ano === this.selectedYear
        const matchesStatus = !this.selectedStatus || declaracao.status === this.selectedStatus
        
        return matchesSearch && matchesCourse && matchesYear && matchesStatus
      })
      
      this.sortDeclaracoes()
      this.currentPage = 1
    },
    
    sortDeclaracoes() {
      this.filteredDeclaracoes.sort((a, b) => {
        switch (this.sortBy) {
          case 'nome':
            return a.nomeCompleto.localeCompare(b.nomeCompleto)
          case 'data':
            return new Date(b.dataConclusao) - new Date(a.dataConclusao)
          case 'curso':
            return a.curso.localeCompare(b.curso)
          default:
            return 0
        }
      })
    },
    
    clearSearch() {
      this.searchQuery = ''
      this.selectedCourse = ''
      this.selectedYear = ''
      this.selectedStatus = ''
      this.filterDeclaracoes()
    },
    
    // Pagination Methods
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
        window.scrollTo({ top: this.$refs.searchSection.offsetTop, behavior: 'smooth' })
      }
    },
    
    // Modal Methods
    viewDeclaracao(declaracao) {
      this.selectedDeclaracao = declaracao
      document.body.style.overflow = 'hidden'
    },
    
    closeModal() {
      this.selectedDeclaracao = null
      document.body.style.overflow = 'auto'
    },
    
    downloadPDF() {
      alert('Funcionalidade de download PDF será implementada')
    },
    
    printCertificate() {
      window.print()
    },
    
    shareCertificate() {
      if (navigator.share) {
        navigator.share({
          title: `Declaração - ${this.selectedDeclaracao.nomeCompleto}`,
          text: `Veja a declaração de conclusão do curso ${this.selectedDeclaracao.curso}`,
          url: window.location.href
        })
      } else {
        navigator.clipboard.writeText(window.location.href)
        alert('Link copiado para a área de transferência!')
      }
    },
    
    // Utility Methods
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('pt-BR')
    },
    
    formatDateFull(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('pt-BR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    },
    
    initScrollIndicator() {
      const indicator = document.querySelector('.scroll-indicator')
      if (indicator) {
        window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset
          const threshold = 100
          indicator.style.opacity = scrolled > threshold ? '0' : '1'
        })
      }
    }
  }
}
</script>

<style scoped>
/* Base styles from original */
.declaracoes-page {
  position: relative;
}

/* Hero Section - keeping original styles */
.hero-section {
  position: relative;
  min-height: 100vh;
  background-image: url('@/assets/imagens/livro.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
  background: linear-gradient(135deg, rgba(59, 76, 184, 0.8), rgba(22, 36, 21, 0.6));
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
  color: #ffc107;
  font-size: 1.1rem;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.title-main {
  display: block;
  color: white;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
}

.title-highlight {
  display: block;
  background: linear-gradient(135deg, #ffc107, #ffeb3b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ffc107, #ffeb3b);
  border-radius: 2px;
}

.hero-subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.highlight-text {
  color: #ffc107;
  font-weight: 500;
}

.hero-features {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.feature-item {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
}

.feature-item i {
  color: #28a745;
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero-actions .btn {
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.hero-actions .btn-primary {
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  border: none;
  box-shadow: 0 10px 30px rgba(59, 76, 184, 0.4);
}

.hero-actions .btn-outline-light {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  backdrop-filter: blur(10px);
}

.hero-actions .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  z-index: 2;
  animation: bounce 2s infinite;
}

.scroll-mouse {
  width: 26px;
  height: 40px;
  border: 2px solid white;
  border-radius: 13px;
  margin: 0 auto 10px;
  position: relative;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 1.5s infinite;
}

.scroll-text {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Carousel Section */
.carousel-section {
  padding: 5rem 0;
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

.carousel-track {
  display: flex;
  width: calc(100% * 8 / 3); /* 8 items / 3 visible */
}

.carousel-slide {
  flex: 0 0 calc(100% / 8);
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
  height: 200px;
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  z-index: 1;
}

.student-photo {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 60px auto 20px;
  z-index: 2;
}

.student-photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.photo-overlay {
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ffc107, #ffeb3b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: bold;
  border: 3px solid white;
}

.student-info {
  padding: 0 2rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.student-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.student-course {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.student-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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
  margin-bottom: 1rem;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.quote-icon {
  color: #3b4cb8;
  font-size: 1.5rem;
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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.certificate-code {
  font-size: 0.75rem;
  color: #6c757d;
  font-family: 'Courier New', monospace;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.btn-view-cert {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
}

.btn-view-cert:hover {
  background: linear-gradient(135deg, #2c3592, #3b5bd1);
  transform: translateY(-2px);
}

/* Carousel Controls */
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

/* Search Section */
.search-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #3b4cb8, #2c3e50);
  color: white;
}

.search-section .section-title {
  color: white;
}

.search-section .section-subtitle {
  color: rgba(255, 255, 255, 0.8);
}

.search-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.search-main {
  margin-bottom: 2rem;
}

.search-input-group {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
  z-index: 2;
}

.search-input {
  width: 100%;
  padding: 1rem 3rem 1rem 3rem;
  font-size: 1.1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.9);
  color: #2c3e50;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #ffc107;
  box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2);
  background: white;
}

.search-input::placeholder {
  color: #6c757d;
}

.clear-btn {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border: none;
  background: #dc3545;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-btn:hover {
  background: #c82333;
  transform: translateY(-50%) scale(1.1);
}

.search-filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-group label {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.filter-group .form-select {
  padding: 0.75rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: #2c3e50;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.filter-group .form-select:focus {
  outline: none;
  border-color: #ffc107;
  box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2);
  background: white;
}

/* Results Section */
.results-section {
  padding: 4rem 0;
  background: #f8f9fa;
  min-height: 50vh;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.results-header h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0;
}

.view-options {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.view-toggle {
  display: flex;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.view-btn {
  padding: 0.75rem 1rem;
  border: none;
  background: white;
  color: #6c757d;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.view-btn.active {
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  color: white;
}

.view-btn:hover:not(.active) {
  background: #f8f9fa;
  color: #3b4cb8;
}

.sort-options .form-select {
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  background: white;
  color: #2c3e50;
  font-size: 0.9rem;
}

/* Grid View Cards */
.declaracao-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.declaracao-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.declaracao-card:hover .card-image img {
  transform: scale(1.05);
}

.card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #28a745, #20c997);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 5px 15px rgba(40, 167, 69, 0.4);
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.student-name-card {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.course-name {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 1rem;
  font-weight: 500;
}

.card-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.detail-row {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #495057;
}

.detail-row i {
  color: #3b4cb8;
  margin-right: 0.5rem;
  width: 16px;
}

.testimonial-preview {
  background: rgba(59, 76, 184, 0.05);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  flex: 1;
}

.testimonial-preview i {
  color: #3b4cb8;
  margin-bottom: 0.5rem;
}

.testimonial-preview p {
  font-size: 0.85rem;
  line-height: 1.4;
  color: #495057;
  margin: 0;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
}

.certificate-code-small {
  font-size: 0.75rem;
  color: #6c757d;
  font-family: 'Courier New', monospace;
}

.btn-view-small {
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-view-small:hover {
  transform: scale(1.1);
}

/* List View */
.declarations-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.list-item {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  border-left: 4px solid #3b4cb8;
}

.list-item:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
}

.list-photo {
  position: relative;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.list-photo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.status-badge {
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 25px;
  height: 25px;
  background: linear-gradient(135deg, #28a745, #20c997);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  border: 2px solid white;
}

.list-content {
  flex: 1;
  display: flex;
  gap: 2rem;
  align-items: center;
}

.list-main {
  flex: 1;
}

.list-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.list-course {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
}

.list-testimonial {
  font-size: 0.85rem;
  color: #495057;
  font-style: italic;
}

.list-testimonial i {
  color: #3b4cb8;
  margin-right: 0.5rem;
}

.list-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 200px;
}

.list-detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-detail-item .label {
  font-size: 0.8rem;
  color: #6c757d;
  font-weight: 500;
}

.list-detail-item .value {
  font-size: 0.85rem;
  color: #2c3e50;
  font-weight: 600;
}

.list-action {
  margin-left: auto;
}

.btn-view-list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.btn-view-list:hover {
  background: linear-gradient(135deg, #2c3592, #3b5bd1);
  transform: scale(1.05);
}

/* Pagination */
.pagination-nav {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.pagination {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  background: white;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.page-item {
  border: none;
}

.page-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: none;
  background: white;
  color: #495057;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.page-item.active .page-link {
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  color: white;
}

.page-link:hover:not(.page-item.disabled .page-link) {
  background: #f8f9fa;
  color: #3b4cb8;
}

.page-item.disabled .page-link {
  color: #dee2e6;
  cursor: not-allowed;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;
}

.modal-container {
  background: white;
  border-radius: 20px;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideInUp 0.3s ease;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  color: #6c757d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  font-size: 1.2rem;
}

.modal-close:hover {
  background: #dc3545;
  color: white;
  transform: scale(1.1);
}

/* Full Certificate */
.certificate-full {
  padding: 3rem;
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  position: relative;
}

.certificate-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #e9ecef;
}

.institution-info-full {
  display: flex;
  align-items: center;
  flex: 1;
}

.institution-logo-full {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  color: white;
  font-size: 2rem;
  box-shadow: 0 10px 30px rgba(59, 76, 184, 0.3);
}

.institution-details h2 {
  font-size: 2rem;
  font-weight: 800;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.institution-details p {
  font-size: 1rem;
  color: #6c757d;
  margin: 0;
  font-weight: 500;
}

.student-photo-full {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}

.student-photo-full img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #3b4cb8;
  box-shadow: 0 10px 30px rgba(59, 76, 184, 0.3);
}

.certificate-title {
  text-align: center;
  margin-bottom: 3rem;
}

.certificate-title h3 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  position: relative;
}

.certificate-title h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3b4cb8, #ffc107);
  border-radius: 2px;
}

.certificate-content {
  margin-bottom: 3rem;
}

.certificate-text {
  background: rgba(59, 76, 184, 0.02);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #3b4cb8;
  margin-bottom: 2rem;
}

.certificate-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #495057;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.certificate-text p:last-child {
  margin-bottom: 0;
}

.certificate-text strong {
  color: #2c3e50;
  font-weight: 700;
}

.student-testimonial-full {
  margin: 2rem 0;
}

.student-testimonial-full h4 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.testimonial-content {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 2rem;
  border-radius: 15px;
  position: relative;
  text-align: center;
}

.quote-large {
  font-size: 3rem;
  color: #3b4cb8;
  opacity: 0.3;
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.testimonial-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #495057;
  font-style: italic;
  margin: 0 0 1rem 0;
  position: relative;
  z-index: 2;
}

.testimonial-author {
  font-size: 1rem;
  color: #3b4cb8;
  font-weight: 600;
}

.certificate-details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.detail-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-3px);
}

.detail-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.detail-info {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 0.8rem;
  color: #6c757d;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
}

.detail-value {
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 700;
}

.certificate-footer-full {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #e9ecef;
}

.signature-section {
  flex: 1;
}

.signature-box {
  text-align: center;
  max-width: 250px;
}

.signature-line-full {
  width: 200px;
  height: 2px;
  background: #2c3e50;
  margin: 0 auto 1rem;
  border-radius: 1px;
}

.signature-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.signature-title {
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0;
  font-weight: 500;
}

.verification-section {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.verification-code {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #dee2e6;
}

.qr-placeholder {
  font-size: 3rem;
  color: #3b4cb8;
  margin-right: 1rem;
}

.code-details {
  text-align: left;
}

.code-title {
  font-size: 0.8rem;
  color: #6c757d;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
}

.code-number {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2c3e50;
  font-family: 'Courier New', monospace;
  margin-bottom: 0.25rem;
}

.code-url {
  font-size: 0.8rem;
  color: #3b4cb8;
  margin: 0;
  font-weight: 500;
}

.certificate-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 2px solid #e9ecef;
}

.certificate-actions .btn {
  padding: 1rem 2rem;
  font-weight: 600;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  min-width: 160px;
}

.certificate-actions .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.certificate-actions .btn-primary {
  background: linear-gradient(135deg, #3b4cb8, #4e73df);
  border: none;
}

.certificate-actions .btn-outline-primary {
  border: 2px solid #3b4cb8;
  color: #3b4cb8;
  background: transparent;
}

.certificate-actions .btn-outline-primary:hover {
  background: #3b4cb8;
  color: white;
}

.certificate-actions .btn-outline-success {
  border: 2px solid #28a745;
  color: #28a745;
  background: transparent;
}

.certificate-actions .btn-outline-success:hover {
  background: #28a745;
  color: white;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

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

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@keyframes scrollWheel {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(15px);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .carousel-container {
    padding: 0 40px;
  }
  
  .carousel-slide {
    flex: 0 0 calc(100% / 6); /* 6 items for smaller screens */
  }
  
  .carousel-track {
    width: calc(100% * 8 / 2); /* 8 items / 2 visible */
  }
}

@media (max-width: 992px) {
  .hero-title {
    font-size: clamp(2rem, 6vw, 3.5rem);
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .carousel-slide {
    flex: 0 0 calc(100% / 4); /* 4 items for tablets */
  }
  
  .carousel-track {
    width: calc(100% * 8 / 1); /* 8 items / 1 visible */
  }
  
  .student-card {
    height: 550px;
  }
  
  .list-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .list-details {
    flex-direction: row;
    min-width: auto;
    width: 100%;
    justify-content: space-between;
  }
  
  .certificate-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .institution-info-full {
    justify-content: center;
  }
  
  .certificate-footer-full {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  
  .verification-section {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
  }
  
  .carousel-container {
    padding: 0 20px;
  }
  
  .carousel-slide {
    flex: 0 0 100%; /* 1 item for mobile */
  }
  
  .carousel-track {
    width: calc(100% * 8); /* 8 items total */
  }
  
  .student-card {
    height: auto;
    min-height: 500px;
  }
  
  .carousel-btn {
    display: none;
  }
  
  .search-filters {
    grid-template-columns: 1fr;
  }
  
  .view-options {
    flex-direction: column;
    align-items: stretch;
  }
  
  .view-toggle {
    justify-content: center;
  }
  
  .list-item {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .list-photo {
    align-self: center;
  }
  
  .list-details {
    justify-content: space-around;
  }
  
  .list-action {
    margin-left: 0;
  }
  
  .btn-view-list {
    width: 100%;
    justify-content: center;
  }
  
  .modal-container {
    margin: 0;
    border-radius: 0;
    max-height: 100vh;
    height: 100vh;
  }
  
  .certificate-full {
    padding: 2rem 1rem;
  }
  
  .certificate-title h3 {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }
  
  .certificate-details-grid {
    grid-template-columns: 1fr;
  }
  
  .certificate-actions {
    flex-direction: column;
  }
}

@media (max-width: 576px) {
  .hero-section {
    background-attachment: scroll;
  }
  
  .scroll-indicator {
    display: none !important;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .student-card {
    min-height: 450px;
  }
  
  .student-photo {
    width: 100px;
    height: 100px;
    margin: 40px auto 15px;
  }
  
  .search-box {
    padding: 1.5rem;
  }
  
  .search-input {
    padding: 0.75rem 2.5rem;
    font-size: 1rem;
  }
  
  .pagination .page-link {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
  
  .list-details {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .list-detail-item {
    justify-content: space-between;
  }
  
  .certificate-details-grid {
    gap: 1rem;
  }
  
  .detail-card {
    padding: 1rem;
  }
  
  .detail-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}

/* Print Styles */
@media print {
  .modal-overlay,
  .modal-close,
  .certificate-actions,
  .hero-section,
  .carousel-section,
  .search-section,
  .results-section {
    display: none !important;
  }
  
  .certificate-full {
    background: white !important;
    padding: 2rem !important;
    box-shadow: none !important;
    border: 2px solid #000 !important;
  }
  
  .certificate-text,
  .testimonial-content,
  .detail-card,
  .verification-code {
    background: white !important;
    border: 1px solid #000 !important;
  }
}
</style>