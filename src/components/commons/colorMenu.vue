<template>
  <div class="color-menu">
    <span class="color-menu__text">
      Color
    </span>

    <ul class="color-menu__list">
      <color-item
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
import colorItem from "@/components/UI/colorItem";

export default {
  name: "color-menu",
  components: {
    colorItem,
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

<style lang="scss">
@import "@/assets/styles/variables.scss";

.color-menu {
  @extend %flex-center;

  .color-menu__text {
    color: $blue-text;
    font-size: 16px;
    margin-right: 30px;
  }

  .color-menu__list {
    @extend %flex-center;
    flex-wrap: wrap;
  }
}
</style>
