<template>
  <div class="home">
    <!-- eslint-disable -->
    <AppIntro
      firstName="ryan"
      lastName="Landman"
      bodyText="Hello. I'm a Front End Developer with over 10 years of experience developing accessible user interfaces."
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
