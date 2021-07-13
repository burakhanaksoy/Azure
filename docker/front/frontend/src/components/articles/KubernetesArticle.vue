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
};
</script>

<style scoped></style>