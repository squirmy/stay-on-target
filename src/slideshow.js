import Vue from 'vue';
import title from '@/slides/Title';
import objective from '@/slides/Objective';

const slides = [
  title,
  objective,
];

const state = new Vue({
  data: {
    current: 0,
  },
  computed: {
    currentSlide() {
      return slides[this.current];
    },
  },
});

export default {
  state,

  previous() {
    const next = Math.max(0, state.current - 1);
    state.current = next;
  },

  next() {
    const next = Math.min(slides.length - 1, state.current + 1);
    state.current = next;
  },
};
