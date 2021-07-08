<template>
  <a-pagination
    @change="onChange"
    v-model="currentPage"
    :total="rows"
    :page-size="3"
    show-less-items
  />
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ currentPageFromStore: "currentPage" }),
    currentPage: {
      get() {
        return this.currentPageFromStore;
      },
      set(newPage) {
        return newPage;
      },
    },
  },
  props: {
    rows: Number,
  },
  data() {
    return {};
  },
  methods: {
    onChange(current) {
      this.$store.dispatch("changePage", current);
      
    },
  },
};
</script>
