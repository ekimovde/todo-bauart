import axios from "axios";

export default {
  state: {
    taskList: [],
    loading: false,
  },
  mutations: {
    changeTaskList(state, payload) {
      state.taskList = payload;
    },

    changeLoading(state, payload) {
      state.loading = payload;
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
    async setTaskList({ commit }) {
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

    async setEditTagFromTask({ state }, { idTag, newTag }) {
      let tasks = state.taskList;

      tasks.forEach((task) => {
        for (let i = 0; i < task.tags.length; i++) {
          if (task.tags[i].id !== idTag) continue;

          task.tags[i].tag = newTag.tag;
          task.tags[i].color = newTag.color;

          return task;
        }
      });

      await axios
        .put("https://todo-20206-default-rtdb.firebaseio.com/task/.json", tasks)
        .then((data) => {
          if (data.status === 200) console.log("Тег успешно изменен!");
        })
        .catch((error) => console.log(error));
    },

    async setRemoveTagFromTask({ state }, nameTag) {
      let tasks = state.taskList;

      tasks.forEach((task) => {
        for (let i = 0; i < task.tags.length; i++) {
          if (task.tags[i].tag !== nameTag) continue;

          task.tags.splice(i, 1);

          return task;
        }
      });

      await axios
        .put("https://todo-20206-default-rtdb.firebaseio.com/task/.json", tasks)
        .then((data) => {
          if (data.status === 200) console.log("Тег успешно удален!");
        })
        .catch((error) => console.log(error));
    },
  },
};
