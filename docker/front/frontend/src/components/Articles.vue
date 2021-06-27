<template>
  <b-container>
    <div
      :articleList="articleList"
      v-for="article in articleList"
      :key="article.id"
    >
      <b-row style="margin-bottom: 1rem">
        <b-col md="10" offset-md="1">
          <b-card bg-variant="white" text-variant="black">
            <b-row no-gutters>
              <b-col md="3">
                <b-card-img
                  :src="article.img_source"
                  alt="Image"
                  style="max-height: 8rem; width: 13rem; object-fit: cover"
                  class="mb-2"
                >
                </b-card-img>
              </b-col>
              <b-col md="9">
                <h3>{{ article.title }}</h3>
                <b-card-text>
                  {{ article.card_text }}
                </b-card-text>
                <b-button
                  :href="article.href"
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
  </b-container>
</template>

<script>
export default {
  name: "Articles",
  props: {
    articleList: Array,
  },
};
</script>

<style scoped></style>
