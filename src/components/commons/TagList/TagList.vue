<template>
  <div class="tag-list">
    <Tag :item="tagDefault" v-if="type === 'sort'" type="sort" />
    <Tag v-for="item in tagList" :key="item.id" :item="item" :type="type" />
  </div>
</template>

<script>
import "./TagList.scss";
import Tag from "@/components/UI/Tag/Tag";

export default {
  name: "TagList",
  components: {
    Tag,
  },
  data() {
    return {
      tagDefault: {
        color: "default",
        tag: "#",
      },
    };
  },
  props: {
    tagList: {
      type: Array,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
  },
};
</script>
