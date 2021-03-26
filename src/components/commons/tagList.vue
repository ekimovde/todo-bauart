<template>
  <div class="tag-list">
    <v-tag :item="tagDefault" v-if="type === 'sort'" type="sort" />
    <v-tag v-for="item in tagList" :key="item.id" :item="item" :type="type" />
  </div>
</template>

<script>
import vTag from "@/components/UI/vTag";

export default {
  name: "tag-list",
  components: {
    vTag,
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

<style lang="scss">
@import "@/assets/styles/variables.scss";

.tag-list {
  @extend %flex-center;
  flex-wrap: wrap;
}
</style>
