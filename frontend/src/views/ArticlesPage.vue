<template>
  <div>
    <Articles :articleList="posts" />
    <spinner :isActive="spinnerActive" />
  </div>
</template>

<script>
import Articles from "@/components/Articles.vue";
// import axios from "axios";
import Spinner from "@/components/Spinner.vue";
// import Pagination from "@/components/Pagination.vue";

export default {
  name: "ArticlesPage",
  components: {
    Articles,
    spinner: Spinner,
    // pagination: Pagination,
  },
  data: function () {
    return {
      posts: [],
    };
  },

  watch: {
    lang: function (val) {
      if (val) {
        this.changeView(val);
        this.techStack = this.$t("techStack");
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

    fetchArticles: async function () {
      // Use dockerUrl in production
      // const dockerUrl = "@backend/skills" // For production
      // const localUrl = "http://127.0.0.1:8000/articles"; // for local development

      this.hideSpinner();
      this.posts.push(
        {
          name: "Docker",
          componentName: "docker",
          title: "Extensive Docker Study",
          href: "https://github.com/burakhanaksoy/Docker-Study#readme",
          card_text: "In this article, we will learn Docker together.!",
          img_source: require("../../utils/photos/docker.png"),
          button_text: "Start learning Docker!",
        },
        {
          name: "Design Principles",
          componentName: "designPrinciples",
          title: "Design Principles",
          href: "https://github.com/burakhanaksoy/Design_Principles#readme",
          card_text:
            "We will take an extensive look at the OOP Design Principles.",
          img_source: require("../../utils/photos/design_principles.png"),
          button_text: "Start learning Design Principles!",
        },
        {
          name: "Kubernetes",
          componentName: "kubernetes",
          title: "Kubernetes",
          href: "https://github.com/burakhanaksoy/Kubernetes-Study#readme",
          card_text:
            "In this article, we will take an extensive look at Kubernetes",
          img_source: require("../../utils/photos/kubernetes.png"),
          button_text: "Start learning Kubernetes!",
        },
        {
          name: "Algorithms",
          componentName: "algorithms",
          title: "Algorithms",
          href: "https://github.com/burakhanaksoy/Algoritmalar#readme",
          card_text:
            "In this article, we will take an extensive look at some commong algorithms used in CS",
          img_source: require("../../utils/photos/algorithms.jpeg"),
          button_text: "Take a look!",
        }
      );
    },
  },

  created: function () {
    this.showSpinner();
    setTimeout(() => {
      this.fetchArticles();
    }, 500);
  },
};
</script>

<style scoped>
</style>
