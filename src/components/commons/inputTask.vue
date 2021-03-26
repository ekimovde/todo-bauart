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
export default {
  name: "input-task",
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

<style lang="scss">
@import "@/assets/styles/variables.scss";

.input-task {
  @extend %flex-center;

  .input-task__entry {
    margin-right: 29px;
    position: relative;

    .input-task__input {
      background-color: $backg-grey-light;
      width: 666px;
      padding: 0px 40px 0px 14px;
      height: 34px;

      &::placeholder {
        color: $grey-text;
        display: block;
        font-size: 18px;
        color: #b4b4b4;
        font-weight: 300;
      }

      &.input-task__input_error {
        border: 1px solid $red;
      }
    }

    .input-task__clip {
      color: $red;
      transform: rotate(-90deg);
      font-size: 20px;
      position: absolute;
      top: 7px;
      right: 20px;
      cursor: pointer;
    }
  }

  .input-task__check {
    color: $green;
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
