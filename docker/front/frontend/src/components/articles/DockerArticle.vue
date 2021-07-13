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
};
</script>

<style scoped>
</style>