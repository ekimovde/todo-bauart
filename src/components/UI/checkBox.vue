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
  </div>
</template>

<script>
export default {
  name: "check-box",
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

<style lang="scss">
@import "@/assets/styles/variables.scss";

.check-box {
  @extend %flex-center-center;

  .check-box_custom {
    opacity: 0;
    z-index: -1;

    + {
      label {
        display: inline-block;
        align-items: center;
        position: relative;
        user-select: none;
        cursor: pointer;
        width: 20px;
        height: 20px;
        border: 2px solid #cccccc;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before {
          content: "";
          display: block;
          position: absolute;
          box-sizing: border-box;
          width: 12px;
          height: 12px;
          flex-shrink: 0;
          flex-grow: 0;
          border-radius: 50px;
        }
      }
    }

    /* стили при наведении курсора на checkbox */
    &:not(:disabled) {
      &:not(:checked) {
        + {
          label {
            &:hover {
              &::before {
                border-color: $green;
              }
            }
          }
        }
      }
    }

    /* стили для активного чекбокса (при нажатии на него) */
    &:not(:disabled) {
      &:active {
        + {
          label {
            &::before {
              background-color: $green;
              border-color: $green;
            }
          }
        }
      }
    }

    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    &:focus {
      &:not(:checked) {
        + {
          label {
            &::before {
              border-color: $green;
            }
          }
        }
      }
    }

    /* стили для чекбокса, находящегося в состоянии checked */
    &:checked {
      + {
        label {
          &::before {
            border-color: $green !important;
            background-color: $green;
          }
        }
      }
    }

    /* стили для чекбокса, находящегося в состоянии disabled */
    &:disabled {
      + {
        label {
          &::before {
            background-color: $green;
          }
        }
      }
    }
  }
}
</style>
