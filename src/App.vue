<template>
  <div>
    <router-view />
    <!-- essa paste n sei se esta correto mas funcionou -->
    <FooterDesk /> 
  </div>
</template>

<script>
import FooterDesk from "@/components/Footers/FooterDesk.vue";

export default {
  components: {
    FooterDesk,
  },
};
</script>


