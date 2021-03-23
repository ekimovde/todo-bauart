<template>
  <input
    type="text"
    class="input"
    :class="{ input_error: error }"
    :placeholder="placeholder"
    @input="onChangeInput"
    v-model="value"
  />
</template>

<script>
import "./Input.scss";

export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    error: {
      type: String,
      required: false,
    },
    nameTag: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onChangeInput() {
      this.$emit("value", this.value);
    },
  },
};
</script>
