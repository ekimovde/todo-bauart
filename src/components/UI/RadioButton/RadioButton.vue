<template>
  <div class="radio-button" @click="$emit('onClick', id)">
    <div class="radio-button__external">
      <div class="radio-button__internal" v-if="status" />
    </div>
  </div>
</template>

<script>
import "./RadioButton.scss";

export default {
  name: "RadioButton",
  props: {
    status: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
