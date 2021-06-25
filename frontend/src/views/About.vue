<template>
  <div class="about">
    <div class="container">
      <div class="row justify-content-center">
        <h1>{{ myName }}</h1>
      </div>
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <img
            class="my-picture-about-page"
            alt="My Picture"
            src="../../utils/photos/about-page-picture.jpg"
          />
          <div class="row justify-content-center" style="">
            <div class="col-md-2 col-xs-12">
              <img
                class="logos"
                src="../../utils/photos/ted-logo.png"
                alt="TED University logo"
              />
            </div>
            <div class="col-md-2 col-xs-12">
              <img
                class="east-china-logo"
                src="../../utils/photos/East_China_Normal_University_logo.svg.png"
                alt="East China Normal University logo"
              />
            </div>
            <div class="col-md-2 col-xs-12">
              <img
                class="logos"
                src="../../utils/photos/Shanghai-Jiao-Tong-University-01.png"
                alt="TED University logo"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <h2 class="background-title">{{ story }}</h2>
          <ul>
            <li>{{ schoolingInfo }}</li>
            <li>{{ schoolingShanghai }}</li>
            <li>{{ hskExam }}</li>
            <li>{{ testing }}</li>
            <li>
              <span class="passion">{{ passion }}</span>
            </li>
            <img
              class="logos"
              src="../../utils/photos/Python-Transparent-Background.png"
              alt="TED University logo"
            />
            <img
              class="logos"
              src="../../utils/photos/java_logo.png"
              alt="TED University logo"
            />
            <hr />
            <li>{{ work }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "About",
  data: function () {
    return {
      myName: this.$t("myName"),
      story: this.$t("story"),
      developerText: this.$t("developer"),
      schoolingInfo: this.$t("story-school"),
      schoolingShanghai: this.$t("story-shanghai"),
      hskExam: this.$t("hsk-exam"),
      testing: this.$t("test-engineering"),
      passion: this.$t("passion"),
      work: this.$t("work"),
    };
  },
  computed: {
    ...mapState({
      lang: "language",
    }),
  },

  watch: {
    lang: function (val) {
      if (val) {
        this.changeView(val);
      }
    },
  },

  methods: {
    changeView: function (val) {
      this.$i18n.locale = val;
      this.myName = this.$t("myName");
      this.story = this.$t("story");
      this.schoolingInfo = this.$t("story-school");
      this.schoolingShanghai = this.$t("story-shanghai");
      this.hskExam = this.$t("hsk-exam");
      this.testing = this.$t("test-engineering");
      this.passion = this.$t("passion");
      this.work = this.$t("work");
    },
  },
};
</script>

<style scoped>
.my-picture-about-page {
  width: 15rem;
  height: 15rem;
  object-fit: contain;
}
.logos {
  width: 83px;
  height: 79px;
  object-fit: cover;
}
.east-china-logo {
  width: 83px;
  height: 85px;
  object-fit: cover;
}
li {
  list-style-type: none;
}
.passion {
  font-weight: bold;
}
</style>
