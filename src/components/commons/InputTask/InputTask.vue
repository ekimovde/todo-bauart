<template>
  <div class="input-task">
    <div class="input-task__entry">
      <input
        type="text"
        class="input-task__input"
        :class="{ 'input-task__input_error': error }"
        :placeholder="placeholder"
        v-model="value"
        @input="onChangeInput"
      />
      <i class="bx bx-paperclip input-task__clip" />
    </div>

    <i
      class="bx bx-check input-task__check"
      @click="$emit('addTask'), (value = '')"
    />
  </div>
</template>

<script>
import "./InputTask.scss";

export default {
  name: "InputTask",
  props: {
    error: {
      type: String,
      required: false,
    },
    placeholder: {
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
