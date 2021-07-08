<template>
  <b-container>
    <div v-if="componentIsActive">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <b-button @click="closeComponent">Back</b-button>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12">
            <spinner :isActive="spinnerActive" />
            <component :is="theComponent" :articleName="articleName" />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="spinnerActive"><spinner :isActive="spinnerActive" /></div>
      <div v-else>
        <div v-for="article in displayedPosts" :key="article.id">
          <b-row style="margin-bottom: 1rem">
            <b-col md="10" offset-md="1">
              <b-card bg-variant="white" text-variant="black">
                <b-row no-gutters>
                  <b-col md="4">
                    <b-card-img
                      :src="article.img_source"
                      alt="Image"
                      style="max-height: 8rem; width: 13rem; object-fit: cover"
                      class="mb-2"
                    >
                    </b-card-img>
                  </b-col>
                  <b-col md="8">
                    <h3>{{ article.title }}</h3>
                    <b-card-text>
                      {{ article.card_text }}
                    </b-card-text>
                    <b-button
                      @click="
                        openComponent(article.componentName, article.name)
                      "
                      variant="primary"
                      target="_blank"
                      >{{ article.button_text }}</b-button
                    >
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <a-pagination
      @change="onChange"
      v-model="currentPage"
      :total="rows"
      :page-size="3"
      show-less-items
      id="pagination"
    />
  </b-container>
</template>

<script>
import DockerArticle from "@/components/articles/DockerArticle.vue";
import KubernetesArticle from "@/components/articles/KubernetesArticle.vue";
import DesignPrinciplesArticle from "@/components/articles/DesignPrinciples.vue";
import AlgorithmsArticle from "@/components/articles/AlgorithmsArticle.vue";
import Spinner from "@/components/Spinner.vue";
import { mapGetters } from "vuex";

export default {
  name: "Articles",
  components: {
    docker: DockerArticle,
    kubernetes: KubernetesArticle,
    designPrinciples: DesignPrinciplesArticle,
    algorithms: AlgorithmsArticle,
    spinner: Spinner,
  },
  props: {
    articleList: Array,
  },

  data: function () {
    return {
      componentIsActive: false,
      theComponent: "",
      articleName: "",
      spinnerActive: false,
      hidePagination: false,
      rows: 0,
      displayedPosts: [],
      posts: this.articleList,
      perPage: 3,
      currentPage: this.currentPageFromStore,
    };
  },
  computed: {
    ...mapGetters({ currentPageFromStore: "currentPage" }),
  },
  methods: {
    openComponent: function (componentName, articleName) {
      this.componentIsActive = true;
      this.showSpinner();
      setTimeout(() => {
        this.theComponent = componentName;
        this.articleName = articleName;
        this.hideSpinner();
      }, 1500);
    },
    closeComponent: function () {
      this.componentIsActive = false;
      this.theComponent = "";
      this.articleName = "";
    },
    showSpinner: function () {
      this.spinnerActive = true;
    },

    hideSpinner: function () {
      this.spinnerActive = false;
    },
    paginate(page) {
      const start = (page - 1) * this.perPage;
      const articles = this.posts.slice(start, start + 3);
      this.displayedPosts = articles;
    },
    onChange: function (current) {
      this.showSpinner();
      this.$store.dispatch("changePage", current);
      setTimeout(() => {
        this.paginate(current);
        this.hideSpinner();
      }, 500);
    },
  },
  watch: {
    componentIsActive(val) {
      this.hidePagination = val;
    },
    hidePagination(val) {
      if (val) {
        document.getElementById("pagination").style = "display: none";
      } else {
        document.getElementById("pagination").style = "display: initial";
      }
    },
    articleList() {
      this.rows = this.articleList.length;
      this.paginate(1);
    },
  },
};
</script>

<style scoped>
</style>
