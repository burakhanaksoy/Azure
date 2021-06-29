<template>
  <div class="markdown" v-html="markdown"></div>
</template>

<script>
import marked from "marked";
import designPrinciplesText from "../../../utils/articles/design_principles.txt";
export default {
  name: "DesignPrinciples",
  components: {},
  props: {
    articleName: String,
  },

  data: function () {
    return {
      goBackClicked: false,
      message: designPrinciplesText,
    };
  },

  watch: {},

  methods: {
    goBack: function () {
      this.goBackClicked = true;
    },
  },

  computed: {
    markdown: function () {
      return marked(`${this.message}`);
    },
  },
};
</script>

<style scoped>
</style>