<template>
  <div class="home" @click="showMenu = false">
    <div class="home__top">
      <div class="home__input">
        <InputTask
          :error="errorNameTask"
          placeholder="Name Task"
          @value="dataTask.descr = $event"
          @addTask="addNewTask"
        />
      </div>

      <p class="home__error" v-if="errorTag">
        {{ errorTag }}
      </p>

      <div class="home__selected-tags" v-if="dataTask.tags.length">
        <p class="home__text">Выбранные теги:</p>

        <TagList :tagList="dataTask.tags" />
      </div>

      <div class="home__buttons">
        <div class="home__block-btn" @click.stop="">
          <Button
            title="All Hashtags"
            color="blue"
            @click="showMenu = !showMenu"
          />

          <MenuTag
            v-if="showMenu"
            :tagList="tagList"
            type="menu"
            :tags="dataTask.tags"
            @deleteTag="deleteTag($event)"
          />
        </div>

        <div class="home__block-btn">
          <Button
            title="New Hashtag"
            color="green"
            @click="showModal = !showModal"
          />

          <Modal
            title="Create new hashtag"
            v-if="showModal"
            @closeModal="(showModal = !showModal), (errorNameTag = '')"
          >
            <div slot="body" class="modal__info">
              <form @submit.prevent="">
                <div class="modal__input">
                  <Input
                    placeholder="Name"
                    :error="errorNameTag"
                    @value="dataTag.tag = $event"
                  />
                </div>

                <div class="modal__color">
                  <ColorMenu
                    :activeColor="dataTag.color"
                    @clickColor="clickColor($event)"
                  />
                </div>

                <div class="modal__btn">
                  <i
                    class="bx bx-trash modal__icon"
                    @click="showModal = !showModal"
                  />
                  <Button title="Create" color="green" @click="addNewTag" />
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>

      <div class="home__tags" v-if="tagList.length">
        <TagList :tagList="tagList" type="sort" />
      </div>
    </div>

    <div class="home__offer" :class="{ home__offer_loading: loading }">
      <i
        class="bx bx-loader-circle bx-spin bx-flip-vertical home__icon-loading"
        v-if="loading"
      ></i>

      <TaskList :taskList="filterListByTag" v-if="!loading" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "./Home.scss";
import InputTask from "@/components/commons/InputTask/InputTask";
import TagList from "@/components/commons/TagList/TagList";
import TaskList from "@/components/commons/TaskList/TaskList";
import Button from "@/components/UI/Button/Button";
import Modal from "@/components/commons/Modal/Modal";
import Input from "@/components/commons/Input/Input";
import ColorMenu from "@/components/commons/ColorMenu/ColorMenu";
import MenuTag from "@/components/commons/MenuTag/MenuTag";

export default {
  name: "Home",
  components: {
    InputTask,
    TagList,
    TaskList,
    Button,
    Modal,
    Input,
    ColorMenu,
    MenuTag,
  },
  data() {
    return {
      showMenu: false,
      showModal: false,
      dataTag: {
        tag: "",
        color: "yellow",
      },
      dataTask: {
        descr: "",
        tags: [],
        status: false,
      },
      errorNameTag: "",
      errorNameTask: "",
      errorTag: "",
    };
  },
  computed: {
    ...mapState({
      tagList: (state) => state.tag.tagList,
      taskList: (state) => state.task.taskList,
      loading: (state) => state.task.loading,
      sortTagName: (state) => state.sort.sortTag,
    }),

    filterListByTag() {
      let task = this.taskList;
      let tagName = this.sortTagName;

      const sortFunc = (a, b) => {
        if (a.status < b.status) return 1;
        if (a.status > b.status) return -1;
      };

      const filterFunc = (event) => {
        return event.tags.some((tmp) => tmp.tag.includes(tagName));
      };

      if (!tagName.length || tagName === "#") {
        return task.sort(sortFunc);
      }

      return task.filter(filterFunc).sort(sortFunc);
    },
  },
  created() {
    this.$store.dispatch("setTagList");

    this.$store.dispatch("setTaskList");
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

    addNewTask() {
      if (this.dataTask.descr !== "" && this.dataTask.tags.length) {
        this.$store.dispatch("setAddTaskToList", this.dataTask);

        this.errorNameTask = "";
        this.errorTag = "";

        this.dataTask.descr = "";
        this.dataTask.tags = [];
        this.dataTask.status = false;
      } else {
        if (this.dataTask.descr === "") {
          this.errorNameTask = "Вы не ввели текст!";
        } else {
          this.errorNameTask = "";
        }

        if (!this.dataTask.tags.length) {
          this.errorTag = "Вы не выбрали тег!";
        } else {
          this.errorTag = "";
        }
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
