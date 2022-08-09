<template>
  <span :style="avatarStyle" />
</template>

<script>
const ROWS = 3;
const COLS = 6;

export default {
  props: {
    size: {
      type: [Number, String],
      default: 48,
    },
    rounded: {
      type: [Number, String],
      default: 0,
    },
    toyNumber: {
      type: [Number, String],
      default: 1,
      validator(value) {
        return value >= 1 && value <= 18;
      },
    },
  },
  computed: {
    posX() {
      return (this.toyNumber - 1) % COLS;
    },
    posY() {
      return Math.floor((this.toyNumber - 1) / COLS);
    },
    avatarStyle() {
      return {
        display: "inline-block",
        width: this.size + "px",
        height: this.size + "px",
        backgroundImage: "url(/Banner.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: this.size * COLS + "px " + this.size * ROWS + "px",
        margin: "8px",
        borderRadius: this.rounded + "px",
        backgroundPositionX: `-${this.posX * this.size}px`,
        backgroundPositionY: `-${this.posY * this.size}px`,
      };
    },
  },
};
</script>
