<template>
  <div id="app">
    <component :is="currentSlide"></component>
  </div>
</template>

<script>
import slideshow from '@/slideshow';

export default {
  name: 'app',

  mounted() {
    window.addEventListener('keyup', this.handleKeyPressed);
  },

  destroyed() {
    window.removeEventListener('keyup', this.handleKeyPressed);
  },

  methods: {
    handleKeyPressed(event) {
      if (event.keyCode === 37) {
        slideshow.previous();
      } else if (event.keyCode === 39) {
        slideshow.next();
      }
    },
  },

  computed: {
    currentSlide() {
      return slideshow.state.currentSlide;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
