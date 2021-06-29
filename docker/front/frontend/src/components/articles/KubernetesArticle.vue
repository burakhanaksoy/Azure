<template>
  <div class="markdown" v-html="markdown"></div>
</template>

<script>
import marked from "marked";
import kubernetesText from "../../../utils/articles/kubernetes.txt";
export default {
  name: "KubernetesArticle",
  components: {},
  props: {
    articleName: String,
  },

  data: function () {
    return {
      goBackClicked: false,
      message: kubernetesText,
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