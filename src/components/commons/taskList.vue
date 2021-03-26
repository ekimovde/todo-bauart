<template>
  <div class="task-list">
    <task-item v-for="item in taskList" :key="item.id" :item="item" />
  </div>
</template>

<script>
import taskItem from "@/components/UI/taskItem";

export default {
  name: "task-list",
  components: {
    taskItem,
  },
  props: {
    taskList: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style lang="scss"></style>
