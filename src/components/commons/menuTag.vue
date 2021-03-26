<template>
  <div class="menu-tag" @click.stop="">
    <ul class="menu-tag__list">
      <li class="menu-tag__item" v-for="item in tagList" :key="item.id">
        <v-tag :item="item" :type="type" :tags="tags" />

        <div class="menu-tag__btn">
          <i
            class="bx bx-pencil menu-tag__icon menu-tag__icon_edit"
            @click="onClickEdit(item)"
          ></i>
          <i
            class="bx bx-trash menu-tag__icon menu-tag__icon_del"
            @click="onRemoveTag(item)"
          />
        </div>
      </li>
    </ul>

    <v-modal
      title="Edit hashtag"
      v-if="showEditModal"
      @closeModal="(showEditModal = !showEditModal), (errorName = '')"
    >
      <div slot="body" class="modal__info">
        <form @submit.prevent="">
          <div class="modal__input">
            <v-input
              :value="newTag.tag"
              placeholder="Name"
              :error="errorName"
              @value="newTag.tag = $event"
            />
          </div>

          <div class="modal__color">
            <color-menu
              :activeColor="newTag.color"
              @clickColor="newTag.color = $event"
            />
          </div>

          <div class="modal__btn">
            <i
              class="bx bx-trash modal__icon"
              @click="showEditModal = !showEditModal"
            />
            <v-button title="Create" color="green" @click="onSubmitEditTag" />
          </div>
        </form>
      </div>
    </v-modal>
  </div>
</template>

<script>
import vTag from "@/components/UI/vTag";
import vModal from "@/components/commons/vModal";
import vButton from "@/components/UI/vButton";
import vInput from "@/components/commons/vInput";
import colorMenu from "@/components/commons/colorMenu";

export default {
  name: "menu-tag",
  components: {
    vTag,
    vModal,
    vButton,
    vInput,
    colorMenu,
  },
  data() {
    return {
      showEditModal: false,
      errorName: "",
      newTag: {
        id: "",
        tag: "",
        color: "",
      },
      idTag: "",
    };
  },
  props: {
    tagList: {
      type: Array,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
  methods: {
    onClickEdit(item) {
      this.showEditModal = true;

      this.idTag = item.id;

      this.newTag.id = item.id;
      this.newTag.tag = item.tag;
      this.newTag.color = item.color;
    },

    onSubmitEditTag() {
      this.$store.dispatch("setEditTag", this.newTag);

      this.$store.dispatch("setEditTagFromTask", {
        idTag: this.idTag,
        newTag: this.newTag,
      });

      this.showEditModal = false;
    },

    onRemoveTag(item) {
      this.$store.dispatch("setRemoveTagById", item.id);

      this.$store.dispatch("setRemoveTagFromTask", item.tag);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.menu-tag {
  width: 325px;
  background-color: $backg-form-white;
  padding: 30px;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 10;

  .menu-tag__list {
    display: flex;
    flex-direction: column;

    .menu-tag__item {
      @extend %flex-center-between;
      margin-bottom: 7px;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        .menu-tag__btn {
          display: block;
        }
      }

      .menu-tag__btn {
        display: none;

        .menu-tag__icon {
          cursor: pointer;
          font-size: 20px;
          margin-right: 17px;

          &:last-child {
            margin-right: 0;
          }

          &.menu-tag__icon_edit {
            color: $green;
          }

          &.menu-tag__icon_del {
            color: $red;
          }
        }
      }
    }
  }
}
</style>
