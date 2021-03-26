<template>
  <div class="tag" v-if="item" @click="onClickTag(item)">
    <div
      class="tag__circle"
      :class="{
        ['tag__circle_' + item.color]: item.color,
      }"
    />

    <span class="tag__text">
      {{ item.tag }}
    </span>
  </div>
</template>

<script>
import "./Tag.scss";

export default {
  name: "Tag",
  props: {
    item: {
      type: Object,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
  methods: {
    onClickTag(item) {
      if (this.type === "menu") {
        this.tags.push({
          id: item.id,
          tag: item.tag,
          color: item.color,
        });
      } else if (this.type === "sort") {
        this.$store.dispatch("setSortTag", item.tag);
      }
    },
  },
};
</script>
