<template>
  <div class="tag" v-if="item" @click="onClickTag(item)">
    <div
      class="tag__circle"
      :class="{
        tag__circle_default: item.color === 'default',
        tag__circle_yellow: item.color === 'yellow',
        tag__circle_red: item.color === 'red',
        tag__circle_blue: item.color === 'blue',
        tag__circle_green: item.color === 'green',
        tag__circle_orange: item.color === 'orange',
        'tag__circle_dark-blue': item.color === 'dark-blue',
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
