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
import "./Button.scss";

export default {
  name: "Button",
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
