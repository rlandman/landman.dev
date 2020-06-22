<template>
  <section class="app-intro">
    <div
      ref="intro"
      class="app-intro__inner"
    >
      <h1 class="app-intro__heading">
        <span
          ref="firstName"
          class="app-intro__firstName"
          v-text="firstName"
        />
        <span
          ref="lastName"
          class="app-intro__lastName"
          v-text="` ${lastName}`"
        />
      </h1>
      <p class="app-intro__body">
        <span
          v-for="(word, index) in splitString"
          :class="index % 2 === 0 ? 'even' : 'odd'"
          :key="`slice-${index}`"
          v-text="`${word} `"
        />
      </p>
      <button
        class="app-cta"
        :style="{ opacity: (!showButton ? 0 : false) }"
        v-text="'recent Projects'"
        @click="destroy"
      />
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';

export default {
  data() {
    return {
      showButton: true,
    };
  },
  props: {
    firstName: {
      type: String,
      default: 'Ryan',
    },
    lastName: {
      type: String,
      default: 'Landman',
    },
    bodyText: {
      type: String,
      default: 'Lorem ipsum dolor set',
    },
  },
  mounted() {
    gsap.fromTo(
      this.$refs.intro,
      {
        opacity: 0,
        scale: 1.3,
      },
      {
        opacity: 1,
        scale: 1,
        ease: 'back.out(1.1)',
        duration: 0.5,
      },
    );
  },
  computed: {
    splitString() {
      return this.bodyText.split(' ');
    },
  },
  methods: {
    updateRoute() {
      this.$router.push({ path: 'projects' });
    },
    destroy() {
      this.showButton = false;

      gsap.to(
        this.$refs.firstName,
        {
          y: '100vh',
          rotate: 15,
          ease: 'back.in(0.4)',
          duration: 0.5,
          // delay: 0.05,
        },
      );

      gsap.to(
        this.$refs.lastName,
        {
          y: '100vh',
          rotate: -20,
          ease: 'back.in(0.4)',
          duration: 0.45,
          delay: 0,
        },
      );

      gsap.to(
        '.odd',
        {
          y: '110vh',
          rotate: -80,
          ease: 'back.in(0.7)',
          stagger: {
            from: 'random',
            amount: 0.4,
          },
          onComplete: this.updateRoute,
        },
      );

      gsap.to(
        '.even',
        {
          y: '110vh',
          rotate: 80,
          ease: 'back.in(0.7)',
          stagger: {
            from: 'random',
            amount: 0.4,
          },
          onComplete: this.updateRoute,
        },
      );
    },
  },
};
</script>

<style lang="scss">
.app-intro {
  position: absolute;
  top: 4rem;
  left: 0;
  display: flex;
  width: 100%;
  height: calc(100% - 4rem);
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.app-intro__inner {
  padding: 0 1.5rem 4rem;

  @include screen(sm) {
    padding: 0 2rem 4rem;
  }
  @include screen(md) {
    max-width: 70%;
    padding: 0 0 4rem;
    margin-left: auto;
    margin-right: auto;
  }

  @include screen(lg) {
    max-width: 50%;
  }
}

.app-intro__heading {
  margin: 0;
  font-size: 3rem;
  line-height: 1.1;

  @include screen(md) {
    font-size: 4rem;
  }
}

.app-intro__firstName {
  display: inline-block;
  margin-right: 1.5rem;
  color: $colorPrimary;
}

.app-intro__lastName {
  display: inline-block;
}

.app-intro__body {
  margin-top: 1.2rem;
  font-size: 1.2rem;
  line-height: 1.8;

  @include screen(md) {
    font-size: 1.4rem;
  }
}

.odd,
.even {
  display: inline-block;
  margin-right: 0.8rem;
}
</style>
