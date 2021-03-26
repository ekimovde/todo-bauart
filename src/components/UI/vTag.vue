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
export default {
  name: "v-tag",
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

<style lang="scss">
@import "@/assets/styles/variables.scss";

.tag {
  @extend %flex-center;
  margin-right: 19px;
  margin-bottom: 8px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  .tag__circle {
    width: 13px;
    height: 13px;
    border-radius: 50px;
    margin-right: 7px;

    &.tag__circle_default {
      background-color: $default;
    }

    &.tag__circle_yellow {
      background-color: $yellow;
    }

    &.tag__circle_red {
      background-color: $red;
    }

    &.tag__circle_blue {
      background-color: $blue;
    }

    &.tag__circle_green {
      background-color: $green;
    }

    &.tag__circle_orange {
      background-color: $orange;
    }

    &.tag__circle_dark-blue {
      background-color: $dark-blue;
    }
  }

  .tag__text {
    color: $blue-text;

    &:hover {
      color: $blue-text-hover;
    }
  }
}
</style>
