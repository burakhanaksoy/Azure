<template>
  <div class="markdown" v-html="markdown"></div>
</template>

<script>
import marked from "marked";
import dockerText from "../../../utils/articles/docker.txt";
export default {
  name: "DockerArticle",
  components: {},
  props: {
    articleName: String,
  },

  data: function () {
    return {
      goBackClicked: false,
      message: dockerText,
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