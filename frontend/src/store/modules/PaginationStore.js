const PaginationStore = {
  state: {
    currentPage: 1,
    posts: [],
    displayedPosts: [],
    rows: 0,
  },
  mutations: {
    SET_CURRENTPAGE(state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    changePage(context, page) {
      context.commit("SET_CURRENTPAGE", page);
    },
    async paginate({ commit, state }, { currentPage }) {
      const start = (currentPage - 1) * 3;
      const posts = state.posts.slice(start, start + 3);
      commit("SET_DISPLAYED_POSRS", posts);
    },
  },
  getters: {
    rows(state) {
      return state.rows;
    },
    posts(state) {
      return state.posts;
    },
    displayedPosts(state) {
      return state.displayedPosts;
    },
    currentPage(state) {
      return state.currentPage;
    },
  },
};

export default PaginationStore;
