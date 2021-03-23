<template>
  <div class="task-list">
    <TaskItem v-for="item in taskList" :key="item.id" :item="item" />
  </div>
</template>

<script>
import "./TaskList.scss";
import TaskItem from "@/components/UI/TaskItem/TaskItem";

export default {
  name: "TaskList",
  components: {
    TaskItem,
  },
  props: {
    taskList: {
      type: Array,
      required: false,
    },
  },
};
</script>
