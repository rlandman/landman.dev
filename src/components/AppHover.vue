<template>
  <div
    class="app-hover"
    @mousemove="handleHover"
    @mouseout="handleReset"
  >
    <img
      ref="image"
      :alt="altText"
      :src="imageUrl"
      :style="{ transform: `translateX(-${imageOffset}px` }"
      class="app-hover__image"
    >
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      rect: undefined,
      imageOffset: 0,
    };
  },
  methods: {
    setSizes(event) {
      this.rect = event.target.getBoundingClientRect();
    },
    handleReset() {
      this.imageOffset = 0;
      this.rect = undefined;
    },
    handleHover(event) {
      if (!this.rect) {
        this.rect = event.target.getBoundingClientRect();
      } else {
        const { left, width } = this.rect;
        const containerWidth = this.$el.clientWidth;
        const xPosition = event.clientX - left;
        const xRatio = xPosition / containerWidth;

        this.imageOffset = (width - containerWidth) * xRatio;
        console.log(this.imageOffset);
      }
    },
  },
};
</script>

<style lang="scss">
.app-hover {
  overflow: hidden;

  @include screen(md) {
    transition: box-shadow 100ms linear;
    box-shadow: -40px 0 60px -5px rgba(0, 0, 0, 0.25);
  }
}

.app-hover__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  // transition: transform 200ms linear;
  // transition-delay: 50ms;

  @include screen(md) {
    width: auto;
    max-width: none;
    height: 100vh;
  }
}
</style>
