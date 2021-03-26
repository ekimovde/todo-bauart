<template>
  <div class="task-item">
    <div class="task-item__btn">
      <Checkbox
        :status="item.status"
        :id="item.id"
        @onClick="onClickCheckbox($event)"
      />
    </div>

    <p class="task-item__descr">
      {{ item.descr }}
    </p>

    <div class="task-item__tags">
      <TagList :tagList="item.tags" />
    </div>
  </div>
</template>

<script>
import "./TaskItem.scss";
import Checkbox from "@/components/UI/Checkbox/Checkbox";
import TagList from "@/components/commons/TagList/TagList";

export default {
  name: "TaskItem",
  components: {
    Checkbox,
    TagList,
  },
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
  methods: {
    onClickCheckbox(id) {
      let status = !this.item.status;

      this.$store.dispatch("setCheckStatusTask", {
        id,
        descr: this.item.descr,
        tags: this.item.tags,
        status,
      });
    },
  },
};
</script>
