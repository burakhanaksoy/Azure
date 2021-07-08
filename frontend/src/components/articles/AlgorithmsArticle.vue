<template>
  <div class="mavonEditor">
    <mavon-editor
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