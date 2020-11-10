<template>
  <div class="home">
    <!-- eslint-disable -->
    <AppIntro
      firstName="ryan"
      lastName="Landman"
      bodyText="Hello. I'm a Front End Developer with over 12 years of experience building accessible User Interfaces, with a passion for scalable systems."
    />
    <!-- eslint-enable -->
  </div>
</template>

<script>
import AppIntro from '@/components/AppIntro.vue';

export default {
  name: 'Home',
  components: {
    AppIntro,
  },
};
</script>
