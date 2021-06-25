<template>
  <div v-b-hover="handleHover">
    <b-card
      v-if="isHovered"
      header-bg-variant="white"
      :header="language"
      :title="repo"
      :text="description"
      style="width: 15rem; height: 12rem; cursor: pointer"
      class="mx-3 mt-2 shadow-lg"
      text-variant="black"
      header-text-variant="black"
      bg-variant="info"
      @click="openUrl"
    >
      <b-card-text> {{ description }} </b-card-text>
      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
      <!-- <a href="#" class="card-link">Card link</a> -->
    </b-card>
    <b-card
      v-else
      header-bg-variant="info"
      :header="language"
      :title="repo"
      :text="description"
      style="width: 15rem; height: 12rem; cursor: pointer"
      class="mx-3 mt-2"
      bg-variant="Light"
      text-variant="black"
      header-text-variant="white"
    >
      <b-card-text> {{ description }} </b-card-text>
      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
    </b-card>
  </div>
</template>

<script>
export default {
  name: "GitCards",
  props: {
    repo: String,
    description: String,
    language: String,
    link: String,
  },
  data: function () {
    return {
      isHovered: false,
    };
  },
  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    },
    openUrl: function () {
      window.open(this.link, "_blank");
    },
  },
  //   watch: {
  //     isHovered: function (val) {
  //       console.log(val);
  //     },
  //   },
};
</script>

<style scoped></style>
