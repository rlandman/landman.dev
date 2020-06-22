<template>
  <component
    :is="tag"
    class="app-card"
  >
    <button
      ref="button"
      class="app-card__cta"
      :style="{ color: project.color }"
      v-text="project.title"
      @click="handleClick"
    />
    <div
      class="app-card__image-wrap"
      :style="{ backgroundColor: project.color }"
    >
      <img
        :src="project.imageUrl"
        :alt="project.title"
        class="app-card__image"
      >
      <div
        ref="overlay"
        class="app-card__overlay"
        :style="{ backgroundColor: project.color}"
      />
    </div>
  </component>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$refs.button.blur();
      gsap.set(this.$el, { zIndex: 1 });
      gsap.to(
        this.$refs.overlay,
        {
          alpha: 1,
          duration: 0.3,
          ease: 'none',
        },
      );
      gsap.to(
        this.$refs.overlay,
        {
          scale: 300,
          duration: 0.5,
          delay: 0.2,
          ease: 'power3.in',
          onComplete: this.updateRoute,
        },
      );
    },
    updateRoute() {
      this.$router.push(`/projects/${this.project.slug}`);
    },
  },
};
</script>

<style lang="scss">
.app-card {
  position: relative;
  display: flex;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-top: 2rem;
  flex-flow: column-reverse;
  justify-content: flex-start;

  @include screen(sm) {
    width: 50%;
  }
}

.app-card__image-wrap {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}

.app-card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  .app-card__cta:hover ~ .app-card__image-wrap & {
    filter: grayscale(100%) contrast(150%);
    opacity: 0.4;
  }
}

.app-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: $colorPrimary;
  opacity: 0;
  // border-radius: 100vh;
  transform-origin: center;
  pointer-events: none;
}

.app-card__cta {
  display: flex;
  color: $colorPrimary;
  font-size: 1rem;
  padding: 1.5rem 2rem;
  background-color: white;
  flex-grow: 1;
  text-align: left;
  align-items: center;

  &::after {
    position: absolute;
    top: 0;
    left: 1rem;
    z-index: 1;
    display: block;
    width: calc(100% - 2rem);
    height: 100%;
    background-color: transparent;
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transition: box-shadow 100ms linear;
    content: "";
  }

  &:hover::after {
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.2),
      0 10px 10px -5px rgba(0, 0, 0, 0.08);
  }

  &:focus {
    outline: none;

    &::after {
      outline: none;
      box-shadow: 0 0 0 4px $colorPrimary;
    }
  }

  &:active::after {
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.2),
      0 10px 10px -5px rgba(0, 0, 0, 0.08);
  }
}

.app-card__cta-emoji {
  margin-right: 0.4rem;
}
</style>
