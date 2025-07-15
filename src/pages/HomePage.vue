<template>

  <div>
    <!-- Componente HomePrincipal -->
    <HomePrincipal />

    <!-- Componente CursosDisponiveis -->
    
    <AulasHome />
     
     <NossosServicos/>
    <VantagensISO/>
    

  </div>
 <div>
 
 </div>
</template>

<script>
import HomePrincipal from '@/components/form/home/HomePrincipal.vue'
import AulasHome from '@/components/form/home/AulasHome.vue'
import VantagensISO from '@/components/form/home/VantagensISO.vue'
import NossosServicos from '@/components/form/home/NossosServicos.vue'


export default {
  components: {
    HomePrincipal,
    AulasHome,
    NossosServicos,
    VantagensISO,
   
  }
}
</script>

<style scoped>

</style>
