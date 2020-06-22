<template>
  <section class="projects">
    <div class="app-container">
      <h1
        ref="heading"
        class="projects__heading"
        v-text="'recent Projects'"
      />
      <ul
        ref="list"
        class="projects__list"
      >
        <AppCard
          v-for="project in projects"
          :key="project.slug"
          tag="li"
          :project="project"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';
import AppCard from '@/components/AppCard.vue';
import { projects } from '@/data/index.yml';

export default {
  components: {
    AppCard,
  },
  data() {
    return {
      projects: undefined,
    };
  },
  mounted() {
    this.projects = projects;
    gsap.set(this.$refs.list, { alpha: 0 });
    gsap.from(
      this.$refs.heading,
      {
        y: '100vh',
        rotate: '15deg',
        duration: 0.8,
        ease: 'back.out(0.8)',
      },
    );
    window.setTimeout(this.appear, 500);
  },
  methods: {
    appear() {
      gsap.set(this.$refs.list, { alpha: 1 });
      gsap.fromTo(
        '.app-card',
        {
          opacity: 0,
          x: -40,
          y: 80,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.4,
          ease: 'power3.out',
          delay: 0.2,
          stagger: 0.2,
        },
      );
    },
  },
};
</script>

<style lang="scss">
.projects {
  padding-top: 3rem;
  padding-bottom: 4rem;

  @include screen(md) {
    padding-bottom: 6rem;
  }
}

.projects__heading {
  font-size: 2.5rem;

  @include screen(sm) {
    padding-right: 1rem;
    padding-left: 1rem;
    font-size: 3rem;
  }
}

.projects__list {
  margin-top: 1rem;

  @include screen(sm) {
    display: flex;
    flex-flow: row wrap;
  }
}
</style>
