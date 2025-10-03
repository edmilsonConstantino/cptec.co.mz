<template>
  <div>

    <HeroDeclaracoes @scrollToSearch="scrollToSearch" />

    <UltimasDeclaracoes @viewDetails="openModal" />

    <DetalheDeclaracoes 
      :selectedDeclaracao="selectedDeclaracao" 
      @close="closeModal"
    />

    <BuscarDeclaracoes 
      ref="buscarDeclaracoes"
      @viewDetails="openModal" 
    />
  </div>
</template>

<script>
import HeroDeclaracoes from '@/pages/HeroDeclaracoes.vue'
import UltimasDeclaracoes from '@/pages/UltimasDeclaracoes.vue'
import DetalheDeclaracoes from '@/pages/DetalheDeclaracoes.vue'
import BuscarDeclaracoes from '@/pages/BuscaDeclaracoes.vue'

export default {
  components: {
    HeroDeclaracoes,
    UltimasDeclaracoes,
    DetalheDeclaracoes,
    BuscarDeclaracoes
  },
  data() {
    return {
      selectedDeclaracao: null
    }
  },
  methods: {

    scrollToSearch() {
      const searchSection = this.$refs.buscarDeclaracoes?.$el
      if (searchSection) {
        searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },

  
    openModal(declaracao) {
      this.selectedDeclaracao = declaracao
    },

    closeModal() {
      this.selectedDeclaracao = null
    }
  }
}
</script>
