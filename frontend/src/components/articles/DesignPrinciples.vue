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
};
</script>

<style scoped>
</style>