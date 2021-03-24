import axios from "axios";

export default {
  state: {
    tagList: [],
  },
  mutations: {
    changeTagList(state, payload) {
      state.tagList = payload;
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
  },

  getters: {
    getTagList(state) {
      return state.tagList;
    },
  },
};
