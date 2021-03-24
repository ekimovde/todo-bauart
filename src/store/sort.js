export default {
  state: {
    sortTag: "",
  },
  mutations: {
    changeSortTag(state, tag) {
      state.sortTag = tag;
    },
  },
  actions: {
    setSortTag({ commit }, tag) {
      commit("changeSortTag", tag);
    },
  },
  getters: {
    getSortTag(state) {
      return state.sortTag;
    },
  },
};
