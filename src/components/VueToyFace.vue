<template>
  <span :style="avatarStyle" />
</template>

<script>
const GROUPS = [
  {
    rows: 3,
    cols: 6,
    img: "url('https://user-images.githubusercontent.com/58827166/184355357-0b278997-c163-45cf-a575-19f532b07864.jpg')",
  },
  {
    rows: 3,
    cols: 6,
    img: "url('https://user-images.githubusercontent.com/58827166/184355612-a8b12e00-a815-4456-8892-30836b4d1c2c.jpg')",
  },
];

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
    group: {
      type: [Number, String],
      default: 1,
      validator(value) {
        return value >= 1 && value <= 2;
      },
    },
  },
  computed: {
    currentGroup() {
      return GROUPS[this.group - 1];
    },
    posX() {
      return (this.toyNumber - 1) % this.currentGroup.cols;
    },
    posY() {
      return Math.floor((this.toyNumber - 1) / this.currentGroup.cols);
    },
    avatarStyle() {
      return {
        display: "inline-block",
        width: this.size + "px",
        height: this.size + "px",
        backgroundImage: this.currentGroup.img,
        backgroundRepeat: "no-repeat",
        backgroundSize:
          this.size * this.currentGroup.cols +
          "px " +
          this.size * this.currentGroup.rows +
          "px",
        margin: "8px",
        borderRadius: this.rounded + "px",
        backgroundPositionX: `-${this.posX * this.size}px`,
        backgroundPositionY: `-${this.posY * this.size}px`,
      };
    },
  },
};
</script>
