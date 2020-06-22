<template>
  <section class="project">
    <div class="app-container">
      <div class="project__inner">
        <h1
          class="project__heading"
          :style="{ color: project.color }"
          v-text="project.title"
        />
      </div>
    </div>
    <AppHover
      class="project__image-wrap"
      :altText="project.title"
      :imageUrl="project.imageUrl"
    />
    <div class="app-container">
      <div class="project__inner">
        <p
          class="project__description"
          v-text="project.description"
        />
        <ul
          v-if="project.tags"
          class="project__tags"
        >
          <li
            v-for="(tag, index) in project.tags"
            :key="`tag-${index}`"
            class="project__tag"
            v-text="tag"
          />
        </ul>
        <a
          v-if="project.url"
          target="_blank"
          rel="noopener"
          :href="project.url"
          class="app-cta"
          :style="{ color: project.color }"
        >
          Visit Website
          <span
            class="project__emoji"
            v-text="project.emoji || '👉'"
          />
        </a>
        <p>
          <router-link
            to="/projects"
            class="project__back"
            :style="{ color: project.color }"
          >
            &larr; Back to Projects
          </router-link>
        </p>
      </div>
    </div>
    <div
      v-if="showOverlay"
      class="project__overlay"
    >
      <div
        v-for="i in 4"
        :key="`slice-${i}`"
        class="project__overlay-slice"
        :style="{ backgroundColor: project.color}"
      />
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';
import AppHover from '@/components/AppHover.vue';

export default {
  components: {
    AppHover,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showOverlay: true,
    };
  },
  mounted() {
    gsap.to(
      '.project__overlay-slice',
      {
        y: '-100%',
        ease: 'power3.in',
        stagger: {
          from: 'random',
          amount: 0.2,
        },
        onComplete: () => { this.showOverlay = false; },
      },
    );
  },
};
</script>

<style lang="scss">
.project {
  padding-bottom: 6rem;
}

.project__inner {
  @include screen(md) {
    width: 50%;
  }
}

.project__heading {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 1rem 1rem 1rem 1rem;
  margin-top: 2rem;
  font-size: 2.5rem;
  background-color: $colorBackground;

  @include screen(sm) {
    font-size: 4rem;
  }

  @include screen(md) {
    padding-left: 0;
  }
}

.project__description {
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
}

.project__tags {
  display: flex;
  margin-top: 1.5rem;
  justify-content: flex-start;
}

.project__tag {
  display: block;
  padding: 0.2rem 0.3rem;
  background: rgba(lightslategray, 0.65);
  border-radius: 2px;
  font-size: 0.7rem;
  line-height: 1;
  color: white;

  &:not(:last-child) {
    margin-right: 0.4rem;
  }
}

.project__image-wrap {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  margin-top: -2rem;

  @include screen(md) {
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    padding-top: 0;
    margin-top: 0;
  };
}

.project__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;

  @include screen(md) {
    object-fit: none;
    width: auto;
    height: 100%;
  }
}

.project__emoji {
  margin-left: 1rem;
  font-size: 2rem;
}

.project__back {
  display: inline-block;
  padding: 0.5rem 0;
  margin-top: 1.5rem;
  font-size: 0.7rem;
  text-decoration: underline;

  &:not(:hover) {
    color: lightslategray !important;
  }

  &:focus {
    @include focusDefault;
  }
}

.project__overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.project__overlay-slice {
  position: fixed;
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
  background-color: $colorPrimary;

  &:nth-child(2) {
    left: 25%;
  }

  &:nth-child(3) {
    left: 50%;
  }

  &:nth-child(4) {
    left: 75%;
  }
}
</style>
