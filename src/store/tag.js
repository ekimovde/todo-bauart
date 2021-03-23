import axios from "axios";

export default {
  state: {
    tagList: [],
    taskList: [],
    loading: false,
  },
  mutations: {
    changeTagList(state, payload) {
      state.tagList = payload;
    },

    changeTaskList(state, payload) {
      state.taskList = payload;
    },

    changeLoading(state, payload) {
      state.loading = payload;
    },

    changeTagRemoveById(state, id) {
      state.tagList = state.tagList.filter((item) => item.id !== id);
    },

    changeEditTag(state, { id, tag, color }) {
      state.tagList = state.tagList.map((item) => {
        if (item.id === id) {
          return {
            id: id,
            tag: tag,
            color: color,
          };
        } else {
          return {
            id: item.id,
            tag: item.tag,
            color: item.color,
          };
        }
      });
    },

    changeCheckTask(state, { id, descr, tags, status }) {
      state.taskList = state.taskList.map((item) => {
        if (item.id === id) {
          return {
            id: id,
            descr: descr,
            tags: tags,
            status: status,
          };
        } else {
          return {
            id: item.id,
            descr: item.descr,
            tags: item.tags,
            status: item.status,
          };
        }
      });
    },
  },
  actions: {
    async setTagList({ commit }, payload) {
      const data = await axios
        .get("https://todo-20206-default-rtdb.firebaseio.com/tags/.json")
        .then(({ data }) => data)
        .catch((error) => console.log(1, error));

      if (!data) {
        return [];
      }

      const newData = Object.keys(data).map((item) => {
        return {
          id: item,
          tag: data[item].tag,
          color: data[item].color,
        };
      });

      commit("changeTagList", newData);
    },

    async setAddTagToList({ dispatch }, { tag, color }) {
      await axios
        .post("https://todo-20206-default-rtdb.firebaseio.com/tags/.json", {
          tag,
          color,
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

      dispatch("setTagList");
    },

    async setTaskList({ commit }, payload) {
      commit("changeLoading", true);

      const data = await axios
        .get("https://todo-20206-default-rtdb.firebaseio.com/task/.json")
        .then(({ data }) => {
          commit("changeLoading", false);

          return data;
        })
        .catch((error) => console.log(error));

      if (!data) {
        return [];
      }

      const newData = Object.keys(data).map((item) => {
        return {
          id: item,
          descr: data[item].descr,
          tags: data[item].tags,
          status: data[item].status,
        };
      });

      commit("changeTaskList", newData);
    },

    async setAddTaskToList({ dispatch }, { descr, tags, status }) {
      await axios
        .post("https://todo-20206-default-rtdb.firebaseio.com/task/.json", {
          descr,
          tags,
          status,
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

      dispatch("setTaskList");
    },

    async setRemoveTagById({ commit }, id) {
      console.log("Remove:", id);

      await axios
        .delete(
          `https://todo-20206-default-rtdb.firebaseio.com/tags/${id}.json`
        )
        .then((data) => {
          if (data.status === 200) {
            alert("Тег успешно удален!");
          }
        })
        .catch((error) => {
          console.log(error);
        });

      commit("changeTagRemoveById", id);
    },

    async setEditTag({ commit }, { id, tag, color }) {
      await axios
        .put(`https://todo-20206-default-rtdb.firebaseio.com/tags/${id}.json`, {
          tag,
          color,
        })
        .then((data) => {
          if (data.status === 200) {
            commit("changeEditTag", { id, tag, color });
          }
        });
    },

    async setCheckStatusTask({ commit }, { id, descr, tags, status }) {
      await axios
        .put(`https://todo-20206-default-rtdb.firebaseio.com/task/${id}.json`, {
          status,
          descr,
          tags,
        })
        .then((data) => {
          if (data.status === 200) {
            commit("changeCheckTask", { id, descr, tags, status });
          }
        })
        .catch((error) => console.log(error));
    },
  },

  getters: {
    getTagList(state) {
      return state.tagList;
    },

    getTaskList(state) {
      return state.taskList;
    },

    getLoading(state) {
      return state.loading;
    },
  },
};
