<template>
  <div id="app">
    <nav class="app-nav">
      <ul class="app-nav__list">
        <li class="app-nav__item">
          <router-link
            to="/"
            class="app-nav__link"
          >
            rL
          </router-link>
        </li>
        <li class="app-nav__item">
          <router-link
            to="/projects"
            class="app-nav__link"
          >
            projects
          </router-link>
        </li>
        <li class="app-nav__item">
          <a
            href="/ryan-landman.pdf"
            target="_blank"
            rel="noopener"
            class="app-nav__link"
          >
            resume
          </a>
        </li>
        <li class="app-nav__item">
          <a
            href="mailto:ryan.landman@gmail.com"
            class="app-nav__link"
          >
            email
          </a>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap");
@import "styles/reset";

html {
  cursor: $cursorDefault;
}

body {
  font-family: "Major Mono Display", monospace;
  color: slategray;
  background-color: $colorBackground;

  *::selection {
    background-color: $colorPrimary;
    color: $colorBackground;
    border-top: 1px solid $colorBackground;
  }

}

.app-nav__list {
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;
  font-size: 0.8rem;
  justify-content: flex-start;
  align-items: center;

  @include screen(sm) {
    padding: 0 2rem;
    font-size: 1rem;
  }
}

.app-nav__item {
  &:not(:last-child) {
    padding-right: 0.7rem;
    margin-right: 0.7rem;
    border-right: 1px solid gainsboro;

    @include screen(sm) {
      padding-right: 1rem;
      margin-right: 1rem;
    }
  }
}

.app-nav__link {
  display: block;
  padding: 0.5rem 0;
  transition: color 100ms linear;

  &:hover {
    color: $colorPrimary;
  }

  &:focus {
    @include focusDefault;
  }

  &.router-link-exact-active {
    color: $colorPrimary;
  }
}

.app-container {
  padding-right: 1.5rem;
  padding-left: 1.5rem;

  @include screen(md) {
    max-width: 90%;
    padding-right: 2rem;
    padding-left: 2rem;
    margin-right: auto;
    margin-left: auto;
  }

  @include screen(lg) {
    max-width: 80%;
  }
}

.app-cta {
  display: flex;
  padding: 1rem 2rem;
  margin-top: 2.5rem;
  font-size: 1rem;
  color: $colorPrimary;
  background-color: white;
  transition: {
    property: (transform, box-shadow);
    duration: 100ms;
    timing-function: linear;
  }
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  justify-content: center;
  align-items: center;

  @include screen(sm) {
    display: inline-flex;
    justify-content: flex-start;
  }

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2),
      0 10px 10px -5px rgba(0, 0, 0, 0.08);
  }

  &:focus {
    @include focusDefault;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2),
      0 10px 10px -5px rgba(0, 0, 0, 0.08);
  }
}
</style>
