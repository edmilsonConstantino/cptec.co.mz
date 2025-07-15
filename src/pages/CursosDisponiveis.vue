  <template>
    <div class="aulas-page">
      <!-- Header Section -->
      <div class="header-section">
        <div class="container">
          <div class="header-content">
            <h1 class="main-title">Aulas Disponíveis</h1>
            <p class="subtitle">Escolha o programa educacional ideal para o seu futuro</p>
            <div class="header-decoration"></div>
          </div>
        </div>
      </div>

      <!-- Filtros -->
      <div class="filtros-section">
        <div class="container">
          <div class="filtros-wrapper">
            <button 
              v-for="categoria in categorias" 
              :key="categoria"
              :class="['filtro-btn', { active: filtroAtivo === categoria }]"
              @click="filtrarAulas(categoria)"
            >
              {{ categoria }}
            </button>
          </div>
        </div>
      </div>

      <!-- Aulas Grid -->
      <section class="aulas-container">
        <div class="container">
          <div class="aulas-grid">
            <div 
              class="aula-card" 
              v-for="aula in aulasFiltradas" 
              :key="aula.id"
              @click="selecionarAula(aula)"
            >
              <div class="card-header">
                <div class="imagem-wrapper">
                  <img :src="aula.imagem" :alt="aula.titulo" />
                  <div class="overlay">
                    <div class="play-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="decorador" :style="{ borderColor: aula.cor }"></div>
              </div>
              
              <div class="card-content">
                <div class="categoria-badge" :style="{ backgroundColor: aula.cor }">
                  {{ aula.categoria }}
                </div>
                <h3 class="titulo-aula">{{ aula.titulo }}</h3>
                <p class="descricao">{{ aula.descricao }}</p>
                
                <div class="card-meta">
                  <div class="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
                    </svg>
                    <span>{{ aula.duracao }}</span>
                  </div>
                  <div class="meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L20.71 8.71L23 11V6H16Z" fill="currentColor"/>
                    </svg>
                    <span>{{ aula.nivel }}</span>
                  </div>
                </div>
                
                <div class="card-footer">
                  <div class="preco">
                    <span class="preco-atual">{{ aula.preco }}</span>
                    <span v-if="aula.precoOriginal" class="preco-original">{{ aula.precoOriginal }}</span>
                  </div>
                  <button class="btn-inscrever" :style="{ backgroundColor: aula.cor }">
                    Inscrever-se
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <div class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>Não encontrou o que procura?</h2>
            <p>Entre em contato conosco para mais informações sobre outros cursos disponíveis</p>
            <button class="btn-cta">Falar com Consultor</button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import { ref, computed, onMounted } from 'vue'

  export default {
    name: "AulasDisponiveis",
    setup() {
      const filtroAtivo = ref('Todos')
      const aulas = ref([
        {
          id: 1,
          titulo: "Graduação em Tecnologia",
          categoria: "GRADUAÇÃO",
          descricao: "Curso completo de graduação em tecnologia da informação com foco em desenvolvimento",
          imagem: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
          duracao: "4 anos",
          nivel: "Iniciante",
          preco: "Gratuito",
          precoOriginal: null,
          cor: "#4A90E2"
        },
        {
          id: 2,
          titulo: "Pós-Graduação Avançada",
          categoria: "PÓS-GRADUAÇÃO",
          descricao: "Especialização em áreas específicas com mentoria personalizada e projetos reais",
          imagem: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
          duracao: "2 anos",
          nivel: "Avançado",
          preco: "Gratuito",
          precoOriginal: "R$ 15.000",
          cor: "#F5A623"
        },
        {
          id: 3,
          titulo: "Cursos Livres Online",
          categoria: "CURSOS LIVRES",
          descricao: "Cursos flexíveis em diversas áreas do conhecimento com certificação reconhecida",
          imagem: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
          duracao: "3-6 meses",
          nivel: "Todos os níveis",
          preco: "Gratuito",
          precoOriginal: null,
          cor: "#7ED321"
        },
        {
          id: 4,
          titulo: "💸Introdução à Educação Financeira",
          categoria: "CURSOS LIVRES",
          descricao: "Programa intensivo de programação com foco no mercado de trabalho",
          imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
          duracao: "12 semanas",
          nivel: "Intermediário",
          preco: "Gratuito",
          precoOriginal: "8.500Mt",
          cor: "#7ED321"
        },
        {
          id: 5,
          titulo: "Currículo Online com Canva",
          categoria: "PÓS-GRADUAÇÃO",
          descricao: "Programa executivo para líderes e gestores em tecnologia e inovação",
          imagem: "https://media.istockphoto.com/id/1718485741/photo/curriculum-vitae-an-italian-form.jpg?b=1&s=612x612&w=0&k=20&c=jZD1xezPehmGAeY4gYbQyFyNmtb-Eu-oVfcHjrrsqa8=",
          duracao: "18 meses",
          nivel: "Executivo",
          preco: "Gratuito",
          precoOriginal: " 25.000 MT",
          cor: "#F5A623"
        },
        {
          id: 6,
          titulo: "🧠 IA para WhatsApp",
          categoria: "GRADUAÇÃO",
          descricao: "Formação completa em engenharia de software com laboratórios modernos",
          imagem: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop",
          duracao: "5 anos",
          nivel: "Iniciante",
          preco: "Gratuito",
          precoOriginal: null,
          cor: "#4A90E2"
        }
      ])

const categorias = ref(['Todos', 'GRADUAÇÃO', 'PÓS-GRADUAÇÃO', 'CURSOS LIVRES'])

      const aulasFiltradas = computed(() => {
        if (filtroAtivo.value === 'Todos') {
          return aulas.value
        }
        return aulas.value.filter(aula => aula.categoria === filtroAtivo.value)
      })

      const filtrarAulas = (categoria) => {
        filtroAtivo.value = categoria
      }

      const selecionarAula = (aula) => {
        console.log('Aula selecionada:', aula)
        // Aqui vou ou posso implementar a modelacao
      }

      onMounted(() => {
        // Animação de entrada
        const cards = document.querySelectorAll('.aula-card')
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate-in')
          }, index * 100)
        })
      })

      return {
        aulas,
        categorias,
        filtroAtivo,
        aulasFiltradas,
        filtrarAulas,
        selecionarAula
      }
    }
  }
  </script>

  <style scoped lang="scss">
  * {
    box-sizing: border-box;
  }

  .aulas-page {
    min-height: 100vh;
    background: linear-gradient(135deg,  #7c3aed 10%, #dc69cb 40%, #dc69cb 30%);
    font-family: 'Inter', 'Segoe UI', sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Header Section */
  .header-section {
    padding: 80px 0 50px;
    text-align: center;
    color: white;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
      pointer-events: none;
    }
  }

  .header-content {
    position: relative;
    z-index: 2;
  }

  .main-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .header-decoration {
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.5));
    margin: 0 auto;
    border-radius: 2px;
  }

  /* Filtros */
  .filtros-section {
    padding: 40px 0;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .filtros-wrapper {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .filtro-btn {
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    &.active {
      background: white;
      color: #667eea;
      border-color: white;
    }
  }

  /* Aulas Container */
  .aulas-container {
    padding: 60px 0;
    background: white;
    min-height: 60vh;
  }

  .aulas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
    margin-top: 40px;
  }

  .aula-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    opacity: 0;
    transform: translateY(30px);

    &.animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);

      .overlay {
        opacity: 1;
      }

      .decorador {
        transform: scale(1.05);
      }
    }
  }

  .card-header {
    position: relative;
    height: 220px;
  }

  .imagem-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    margin: 12px;
    width: calc(100% - 24px);
    height: calc(100% - 24px);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    .play-icon {
      width: 60px;
      height: 60px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #667eea;
      transform: scale(0.8);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1);
      }
    }
  }

  .decorador {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 4px solid;
    border-radius: 20px;
    z-index: -1;
    transition: transform 0.3s ease;
  }

  .card-content {
    padding: 30px;
  }

  .categoria-badge {
    display: inline-block;
    padding: 6px 16px;
    border-radius: 20px;
    color: white;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 16px;
  }

  .titulo-aula {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: #2c3e50;
    line-height: 1.3;
  }

  .descricao {
    color: #7f8c8d;
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;
  }

  .card-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 24px;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #95a5a6;
    font-size: 0.9rem;

    svg {
      opacity: 0.7;
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #ecf0f1;
  }

  .preco {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .preco-atual {
    font-size: 1.2rem;
    font-weight: 700;
    color: #27ae60;
  }

  .preco-original {
    font-size: 0.9rem;
    color: #95a5a6;
    text-decoration: line-through;
  }

  .btn-inscrever {
    padding: 12px 24px;
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }

  /* CTA Section */
  .cta-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
    text-align: center;
    color: white;
  }

  .cta-content h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .cta-content p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-cta {
    padding: 16px 40px;
    background: white;
    color: #2c3e50;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .aulas-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    
    .filtros-wrapper {
      gap: 10px;
    }
    
    .filtro-btn {
      padding: 10px 16px;
      font-size: 0.9rem;
    }
    
    .card-footer {
      flex-direction: column;
      gap: 16px;
      align-items: stretch;
    }
    
    .btn-inscrever {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    .header-section {
      padding: 60px 0 40px;
    }
    
    .aulas-container {
      padding: 60px 0;
    }
    
    .card-content {
      padding: 20px;
    }
    
    .cta-section {
      padding: 60px 0;
    }
  }
  </style>