<template>
  <div class="color-menu">
    <span class="color-menu__text">
      Color
    </span>

    <ul class="color-menu__list">
      <ColorItem
        v-for="(color, index) in colors"
        :key="index"
        :color="color"
        :index="index"
        :activeColor="activeColor"
        @clickColor="$emit('clickColor', $event)"
      />
    </ul>
  </div>
</template>

<script>
import "./ColorMenu.scss";
import ColorItem from "@/components/UI/ColorItem/ColorItem";

export default {
  name: "ColorMenu",
  components: {
    ColorItem,
  },
  props: {
    activeColor: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      active: "yellow",
      colors: ["yellow", "red", "blue", "green", "orange", "dark-blue"],
    };
  },
};
</script>
