import Vue from "vue";
import Vuex from "vuex";

import tag from "./tag";
import task from "./task";
import sort from "./sort";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tag,
    task,
    sort,
  },
});
