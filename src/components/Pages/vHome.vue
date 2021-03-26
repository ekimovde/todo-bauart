<template>
  <div class="home" @click="showMenu = false">
    <div class="home__top">
      <home-creating :dataTask="dataTask" />

      <home-buttons
        :dataTask="dataTask"
        :tagList="tagList"
        :showMenu="showMenu"
        @clickMenu="showMenu = $event"
      />

      <homeTags v-if="tagList.length" :tagList="tagList" />
    </div>

    <div class="home__offer" :class="{ home__offer_loading: loading }">
      <i
        class="bx bx-loader-circle bx-spin bx-flip-vertical home__icon-loading"
        v-if="loading"
      ></i>

      <task-list :taskList="filterListByTag" v-if="!loading" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import inputTask from "@/components/commons/inputTask";
import taskList from "@/components/commons/taskList";

import homeCreating from "@/components/layouts/home/homeCreating";
import homeButtons from "@/components/layouts/home/homeButtons";
import homeTags from "@/components/layouts/home/homeTags";

export default {
  name: "vHome",
  components: {
    inputTask,
    taskList,
    homeCreating,
    homeButtons,
    homeTags,
  },
  data() {
    return {
      dataTask: {
        descr: "",
        tags: [],
        status: false,
      },
      showMenu: false,
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
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.home {
  width: 100%;
  height: calc(100vh - 96px);
  padding: 51px 76px;
  overflow: auto;

  .home__top {
    margin-bottom: 51px;
    padding-left: 70px;
    padding-right: 30px;

    .home__error {
      margin-bottom: 10px;
      color: $red;
    }

    .home__selected-tags {
      color: $green;
      margin-bottom: 10px;
      @extend %flex-center;

      .home__text {
        margin-bottom: 10px;
        margin-right: 10px;
      }
    }
  }

  .home__offer {
    &.home__offer_loading {
      text-align: center;
    }

    .home__icon-loading {
      font-size: 40px;
      color: $dark-blue;
    }
  }
}
</style>
