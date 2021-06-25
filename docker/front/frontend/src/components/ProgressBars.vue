<template>
  <center>
    <div class="container">
      <div
        :techList="techList"
        v-for="tech in techList"
        :key="tech.id"
        class="row justify-content-md-center"
      >
        <div class="col-xs-6 col-md-2">
          <span class="tech-name">{{ tech.name }}</span>
          <span class="progress-percentage">(%{{ tech.val }})</span>
        </div>
        <div class="col-xs-6 col-md-2 pt-2" style="margin-right: 0rem">
          <div v-b-hover="handleHover">
            <div v-if="isHovered">
              <b-progress
                :value="tech.val"
                :variant="colorChart[tech.variant]"
                :striped="true"
                style="width: 10rem"
              ></b-progress>
            </div>
            <div v-else>
              <b-progress
                :value="tech.val"
                :variant="colorChart[tech.variant]"
                :striped="false"
                style="width: 10rem"
              ></b-progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  </center>
</template>

<script>
export default {
  name: "ProgressBars",
  props: {
    techList: Array,
  },
  data: function () {
    return {
      colorChart: {
        good: "success",
        bad: "danger",
        mid: "warning",
      },
      isHovered: false,
    };
  },
  methods: {
    stripeOn: function () {
      this.isStriped = true;
    },
    stripeOff: function () {
      this.isStriped = false;
    },
    handleHover(hovered) {
      this.isHovered = hovered;
    },
  },
  watch: {},
};
</script>

<style scoped>
.tech-name {
  font-size: 20px;
  font-weight: bold;
}
.progress-percentage {
  font-size: 15px;
  margin-left: 5px;
  margin-right: 0;
}
</style>
