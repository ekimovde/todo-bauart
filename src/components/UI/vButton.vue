<template>
  <button
    class="button"
    :class="{ button_blue: color === 'blue', button_green: color === 'green' }"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "v-button",
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.button {
  border-style: none;
  background-color: $backg-grey-light;
  padding: 7px 14px;
  font-size: 15px;
  font-weight: 300;
  color: #000;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &.button_blue {
    color: $blue-text;

    &:hover {
      color: $blue-text-hover;
    }
  }

  &.button_green {
    color: $green-text;

    &:hover {
      color: $green-text-hover;
    }
  }
}
</style>
