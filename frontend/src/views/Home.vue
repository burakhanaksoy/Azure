<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <HelloWorld />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <!-- <h3>{{ techStack }}</h3> -->
        <bars :techList="technologies" />
        <spinner :isActive="spinnerActive" />
        <h4 class="signature">{{ this.signature }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ProgressBars from "@/components/ProgressBars.vue";
import Spinner from "@/components/Spinner.vue";
// import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
    bars: ProgressBars,
    spinner: Spinner,
  },
  data: function () {
    return {
      technologies: [],
      signature: this.$t("signature"),
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
        this.techStack = this.$t("techStack");
        this.signature = this.$t("signature");
      }
    },
  },

  methods: {
    changeView: function (val) {
      this.$i18n.locale = val;
    },

    showSpinner: function () {
      this.spinnerActive = true;
    },

    hideSpinner: function () {
      this.spinnerActive = false;
    },

    fetchSkillData: async function () {
      // Use dockerUrl in production
      // const dockerUrl = "http://burakhan.azurewebsites.net/skills" // For production
      // const dockerUrl = "http://172.16.26.2:8080/skills" // For production
      // const localUrl = "http://127.0.0.1:8000/skills"; // for local development
      // axios
      //   .get(dockerUrl)
      //   .then((values) => {
      //     values.data.forEach((data) => {
      //       this.technologies.push(data);
      //       this.hideSpinner();
      //     });
      //   })
      //   .catch(console.error);
      this.technologies.push(
        { name: "Python", val: 60, variant: "good" },
        { name: "CSS", val: 40, variant: "mid" },
        { name: "HTML", val: 70, variant: "good" },
        { name: "Mongodb", val: 50, variant: "mid" },
        { name: "Linux", val: 35, variant: "bad" },
        { name: "Vue", val: 40, variant: "bad" },
        { name: "JS", val: 30, variant: "bad" },
        { name: "Docker", val: 60, variant: "good" }
      );
      this.hideSpinner();
    },
  },

  created: function () {
    this.showSpinner();
    setTimeout(() => {
      this.fetchSkillData();
    }, 750);
  },
};
</script>

<style scoped>
.signature {
  font-weight: lighter;
  color: rgb(255, 169, 64);
  font-size: 19px;
  margin-top: 1rem;
}
</style>
