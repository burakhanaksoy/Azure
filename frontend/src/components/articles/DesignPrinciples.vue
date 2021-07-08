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
    // markdown: function () {
    //   return marked(`${this.message}`);
    // },
  },
};
</script>

<style scoped>
</style>