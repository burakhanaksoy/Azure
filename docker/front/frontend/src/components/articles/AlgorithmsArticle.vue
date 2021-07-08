<template>
  <!-- <div class="markdown" v-html="markdown"></div> -->
  <div class="mavonEditor">
    <mavon-editor
      :toolbars="markdownOptions"
      :defaultOpen="preview"
      :subfield="false"
      :toolbarsFlag="false"
      v-model="message"
    />
  </div>
</template>

<script>
// import marked from "marked";
import algorithmText from "../../../utils/articles/algorithms.txt";
export default {
  name: "AlgorithmsArticle",
  components: {},
  props: {
    articleName: String,
  },

  data: function () {
    return {
      goBackClicked: false,
      message: algorithmText,
      markdownOption: {
        bold: true, // 粗体
      },
    };
  },

  watch: {},

  methods: {
    goBack: function () {
      this.goBackClicked = true;
    },
  },

  computed: {
    // markdown: function () {
    //   return marked(`${this.message}`);
    // },
    // handbook: function () {
    //   return mavonEditor(`${this.message}`);
    // },
  },
};
</script>

<style scoped>
</style>