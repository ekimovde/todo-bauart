<template>
  <div class="task-item">
    <div class="task-item__btn">
      <check-box
        :status="item.status"
        :id="item.id"
        @onClick="onClickCheckbox($event)"
      />
    </div>

    <p class="task-item__descr">
      {{ item.descr }}
    </p>

    <div class="task-item__tags">
      <tag-list :tagList="item.tags" />
    </div>
  </div>
</template>

<script>
import checkBox from "@/components/UI/checkBox";
import tagList from "@/components/commons/tagList";

export default {
  name: "task-item",
  components: {
    checkBox,
    tagList,
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

<style lang="scss">
@import "@/assets/styles/variables.scss";

.task-item {
  border-bottom: 1px solid #e3e3e3;
  @extend %flex-center;
  padding-bottom: 23px;
  padding-left: 70px;
  padding-right: 30px;
  margin-bottom: 25px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .task-item__btn {
    margin-right: 20px;
  }

  .task-item__descr {
    width: 640px;
    color: #454545;
    font-weight: 300;
    line-height: 25px;
    font-size: 18px;
  }

  .task-item__tags {
    flex-wrap: wrap;
    margin-left: 14px;
  }
}
</style>
