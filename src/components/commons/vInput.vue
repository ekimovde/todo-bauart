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
export default {
  name: "vInput",
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

<style lang="scss">
@import "@/assets/styles/variables.scss";

.input {
  background-color: transparent;
  color: $white;
  font-weight: 300;
  padding: 8px 5px;

  &.input_error {
    &::placeholder {
      color: $red !important;
    }
  }

  &::placeholder {
    font-weight: 300;
    font-size: 16px;
    color: $white;
    opacity: 1;
    border-style: none;
  }

  &:focus-visible {
    border-style: none;
  }
}
</style>
