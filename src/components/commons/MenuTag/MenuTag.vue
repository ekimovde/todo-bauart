<template>
  <div class="menu-tag" @click.stop="">
    <ul class="menu-tag__list">
      <li class="menu-tag__item" v-for="item in tagList" :key="item.id">
        <Tag :item="item" :type="type" :tags="tags" />

        <div class="menu-tag__btn">
          <i
            class="bx bx-pencil menu-tag__icon menu-tag__icon_edit"
            @click="onClickEdit(item)"
          ></i>
          <i
            class="bx bx-trash menu-tag__icon menu-tag__icon_del"
            @click="onRemoveTag(item.id)"
          />
        </div>
      </li>
    </ul>

    <Modal
      title="Edit hashtag"
      v-if="showEditModal"
      @closeModal="(showEditModal = !showEditModal), (errorName = '')"
    >
      <div slot="body" class="modal__info">
        <form @submit.prevent="">
          <div class="modal__input">
            <Input
              :value="newTag.tag"
              placeholder="Name"
              :error="errorName"
              @value="newTag.tag = $event"
            />
          </div>

          <div class="modal__color">
            <ColorMenu
              :activeColor="newTag.color"
              @clickColor="newTag.color = $event"
            />
          </div>

          <div class="modal__btn">
            <i
              class="bx bx-trash modal__icon"
              @click="showEditModal = !showEditModal"
            />
            <Button title="Create" color="green" @click="onSubmitEditTag" />
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import "./MenuTag.scss";
import Tag from "@/components/UI/Tag/Tag";
import Modal from "@/components/commons/Modal/Modal";
import Button from "@/components/UI/Button/Button";
import ColorMenu from "@/components/commons/ColorMenu/ColorMenu";
import Input from "@/components/commons/Input/Input";

export default {
  name: "MenuTag",
  components: {
    Tag,
    Modal,
    Button,
    ColorMenu,
    Input,
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

      this.newTag.id = item.id;
      this.newTag.tag = item.tag;
      this.newTag.color = item.color;
    },

    onSubmitEditTag() {
      this.$store.dispatch("setEditTag", this.newTag);

      this.showEditModal = false;
    },

    onRemoveTag(id) {
      this.$store.dispatch("setRemoveTagById", id);
    },
  },
};
</script>
