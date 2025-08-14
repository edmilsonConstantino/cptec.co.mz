<template>
    <div>
       <div>
    <div>
      <navbarDesktop/>
      <!-- <navbarMobile v-else /> -->
    </div>
        <router-view />
      </div>
      <WhatsAppButton />
    </div>
</template>

<script>
import navbarDesktop from '@/components/form/navbar/NavbarDesktop.vue';
// import navbarMobile from '@/components/form/navbar/NavbarMobile.vue';
import WhatsAppButton from '@/components/WhatsAppButton.vue';

export default {
  name: 'MainLayout',
  components: {
    navbarDesktop,
    // navbarMobile
    WhatsAppButton,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },

  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
    }
  }
};
</script>
