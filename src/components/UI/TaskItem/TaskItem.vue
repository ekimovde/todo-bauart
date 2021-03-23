<template>
  <div class="task-item">
    <div class="task-item__btn">
      <RadioButton
        :status="item.status"
        :id="item.id"
        @onClick="onClickRadioBtn($event)"
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
import RadioButton from "@/components/UI/RadioButton/RadioButton";
import TagList from "@/components/commons/TagList/TagList";

export default {
  name: "TaskItem",
  components: {
    RadioButton,
    TagList,
  },
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
  methods: {
    onClickRadioBtn(id) {
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
