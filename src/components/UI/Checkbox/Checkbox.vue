<template>
  <div class="check-box" @click="$emit('onClick', id)">
    <input
      type="checkbox"
      class="check-box_custom"
      id="checkbox"
      :name="id"
      :checked="status"
    />
    <label :for="id" class="check-box_label"></label>

    <!-- <div class="radio-button__external">
      <div class="radio-button__internal" v-if="status" />
    </div> -->
  </div>
</template>

<script>
import "./Checkbox.scss";

export default {
  name: "Checkbox",
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
