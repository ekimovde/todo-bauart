<template>
  <div class="modal" @click="$emit('closeModal')">
    <div class="modal__content" @click.stop="">
      <div class="modal__header">
        <span class="modal__title"> {{ title }} </span>
      </div>

      <div class="modal__body">
        <slot name="body">
          Not Found
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-modal",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    document.body.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        this.$emit("closeModal");
      }
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.modal {
  @extend %flex-center-center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 0.2s ease;
  z-index: 998;
  background-color: #0000007a;
  color: $white;

  .modal__content {
    position: relative;
    background: $white;
    transition: all 0.2s ease;
    z-index: 999;
    overflow: hidden;
    width: 320px;

    .modal__header {
      padding: 20px 26px;
      border-bottom: 1px solid $border-grey-light;

      .modal__title {
        color: $backg-grey-dark;
        font-weight: 500;
      }
    }

    .modal__body {
      .modal__info {
        padding: 22px 24px 24px 27px;

        .modal__input {
          .input {
            color: $backg-grey-dark;

            &::placeholder {
              color: $grey-text;
            }
          }
        }

        .modal__color {
          margin-top: 17px;
          margin-bottom: 26px;
        }

        .modal__btn {
          @extend %flex-center-right;

          .modal__icon {
            margin-right: 18px;
            color: $red;
            font-size: 22px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
