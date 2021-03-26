<template>
  <div class="home__buttons">
    <div class="home__block-btn" @click.stop="">
      <v-button
        title="All Hashtags"
        color="blue"
        @click="$emit('clickMenu', !showMenu)"
      />

      <menu-tag
        v-if="showMenu"
        :tagList="tagList"
        type="menu"
        :tags="dataTask.tags"
        @deleteTag="deleteTag($event)"
      />
    </div>

    <div class="home__block-btn">
      <v-button
        title="New Hashtag"
        color="green"
        @click="showModal = !showModal"
      />

      <v-modal
        title="Create new hashtag"
        v-if="showModal"
        @closeModal="(showModal = !showModal), (errorNameTag = '')"
      >
        <div slot="body" class="modal__info">
          <form @submit.prevent="">
            <div class="modal__input">
              <v-input
                placeholder="Name"
                :error="errorNameTag"
                @value="dataTag.tag = $event"
              />
            </div>

            <div class="modal__color">
              <color-menu
                :activeColor="dataTag.color"
                @clickColor="clickColor($event)"
              />
            </div>

            <div class="modal__btn">
              <i
                class="bx bx-trash modal__icon"
                @click="showModal = !showModal"
              />
              <v-button title="Create" color="green" @click="addNewTag" />
            </div>
          </form>
        </div>
      </v-modal>
    </div>
  </div>
</template>

<script>
import vButton from "@/components/UI/vButton";
import menuTag from "@/components/commons/menuTag";
import vModal from "@/components/commons/vModal";
import vInput from "@/components/commons/vInput";
import colorMenu from "@/components/commons/colorMenu";

export default {
  name: "home-buttons",
  components: {
    vButton,
    menuTag,
    vModal,
    vInput,
    colorMenu,
  },
  props: {
    dataTask: {
      type: Object,
      required: false,
    },
    tagList: {
      type: Array,
      required: false,
    },
    showMenu: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      showModal: false,
      errorNameTag: "",
      dataTag: {
        tag: "",
        color: "yellow",
      },
    };
  },
  methods: {
    addNewTag() {
      if (this.dataTag.tag !== "") {
        this.$store.dispatch("setAddTagToList", this.dataTag);

        this.dataTag.tag = "";
        this.dataTag.color = "yellow";

        this.showModal = !this.showModal;
        this.errorNameTag = "";
      } else {
        this.errorNameTag = "Введите текст";
      }
    },

    clickColor(color) {
      this.dataTag.color = color;
    },

    deleteTag(id) {
      this.dataTask.tags = this.dataTask.tags.filter((item) => item.id !== id);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.home__buttons {
  @extend %flex-center;

  .home__block-btn {
    margin-right: 24px;
    position: relative;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
