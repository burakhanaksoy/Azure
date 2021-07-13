<template>
  <div class="mavonEditor">
    <mavon-editor
      defaultOpen="preview"
      :toolbarsFlag="false"
      :subfield="false"
      v-model="message"
    ></mavon-editor>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
</style>