import VueToyFace from "./components/VueToyFace.vue";

const plugin = {
  install(Vue) {
    Vue.component("VueToyFace", VueToyFace);
  },
};

export { VueToyFace };

export default plugin;
