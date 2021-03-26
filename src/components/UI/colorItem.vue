<template>
  <div class="color-item">
    <div
      class="color-item__border"
      :class="{ 'color-item__border_active': color === activeColor }"
    >
      <div
        class="color-item__circle"
        @click="$emit('clickColor', color)"
        :class="{
          ['color-item__circle_' + color]: color,
        }"
        :value="color"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "color-item",
  props: {
    color: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: false,
    },
    activeColor: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.color-item {
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  .color-item__border {
    width: 22px;
    height: 22px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.color-item__border_active {
      border: 2px solid $border-grey-light;
    }

    .color-item__circle {
      width: 14px;
      height: 14px;
      display: block;
      border-radius: 50px;
      cursor: pointer;

      &.color-item__circle_yellow {
        background-color: $yellow;
      }

      &.color-item__circle_red {
        background-color: $red;
      }

      &.color-item__circle_blue {
        background-color: $blue;
      }

      &.color-item__circle_green {
        background-color: $green;
      }

      &.color-item__circle_orange {
        background-color: $orange;
      }

      &.color-item__circle_dark_blue {
        background-color: $dark-blue;
      }
    }
  }
}
</style>
