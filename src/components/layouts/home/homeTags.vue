<template>
  <div class="home__tags">
    <tag-list :tagList="tagList" type="sort" />
  </div>
</template>

<script>
import tagList from "@/components/commons/tagList";

export default {
  name: "home-tags",
  components: {
    tagList,
  },
  props: {
    tagList: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.home__tags {
  margin-top: 22px;
}
</style>
