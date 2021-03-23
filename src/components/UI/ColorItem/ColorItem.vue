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
          'color-item__circle_yellow': color === 'yellow',
          'color-item__circle_red': color === 'red',
          'color-item__circle_blue': color === 'blue',
          'color-item__circle_green': color === 'green',
          'color-item__circle_orange': color === 'orange',
          'color-item__circle_dark_blue': color === 'dark-blue',
        }"
        :value="color"
      />
    </div>
  </div>
</template>

<script>
import "./ColorItem.scss";

export default {
  name: "ColorItem",
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
