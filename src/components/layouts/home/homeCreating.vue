<template>
  <div class="creating-task">
    <div class="home__input">
      <input-task
        :error="errorNameTask"
        placeholder="Name Task"
        @value="dataTask.descr = $event"
        @addTask="addNewTask"
      />
    </div>

    <p class="home__error" v-if="errorTag">
      {{ errorTag }}
    </p>

    <div class="home__selected-tags" v-if="dataTask.tags.length">
      <p class="home__text">Выбранные теги:</p>

      <tag-list :tagList="dataTask.tags" />
    </div>
  </div>
</template>

<script>
import inputTask from "@/components/commons/inputTask";
import tagList from "@/components/commons/tagList";

export default {
  name: "home-creating",
  components: {
    inputTask,
    tagList,
  },
  props: {
    dataTask: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      errorNameTask: "",
      errorTag: "",
    };
  },
  methods: {
    addNewTask() {
      if (this.dataTask.descr !== "" && this.dataTask.tags.length) {
        this.$store.dispatch("setAddTaskToList", this.dataTask);

        this.errorNameTask = "";
        this.errorTag = "";

        this.dataTask.descr = "";
        this.dataTask.tags = [];
        this.dataTask.status = false;
      } else {
        if (this.dataTask.descr === "") {
          this.errorNameTask = "Вы не ввели текст!";
        } else {
          this.errorNameTask = "";
        }

        if (!this.dataTask.tags.length) {
          this.errorTag = "Вы не выбрали тег!";
        } else {
          this.errorTag = "";
        }
      }
    },
  },
};
</script>

<style lang="scss">
.home__input {
  margin-bottom: 17px;
}
</style>
