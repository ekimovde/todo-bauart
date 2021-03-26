<template>
  <div class="navbar">
    <div class="navbar__info">
      <div class="navbar__text">
        <h3 class="navbar__title">
          Welcome
        </h3>

        <span class="navbar__date">
          19 Sun
        </span>
      </div>

      <div class="navbar__search">
        <i class="bx bx-search navbar__icon"></i>
        <v-input placeholder="Search" />
      </div>
    </div>

    <div class="navbar__link">
      <i class="bx bx-user navbar__icon" />

      <i class="bx bx-link-external navbar__icon"></i>
    </div>
  </div>
</template>

<script>
import vInput from "@/components/commons/vInput";

export default {
  name: "v-navbar",
  components: { vInput },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";

.navbar {
  background-color: $red;
  height: 96px;
  width: 100%;
  color: $white;
  @extend %flex-center-between;
  padding: 36px 72px 32px 108px;

  .navbar__info {
    @extend %flex-center;

    .navbar__text {
      @extend %flex-center;
      margin-right: 180px;

      .navbar__title {
        margin-right: 5px;
      }

      .navbar__date {
        text-transform: uppercase;
        font-weight: 300;
        @extend %flex-center;
        font-size: 20px;

        &::before {
          content: "/";
          display: block;
          margin-right: 5px;
        }
      }
    }

    .navbar__search {
      @extend %flex-center;

      .navbar__icon {
        font-size: 24px;
        margin-right: 13px;
      }
    }
  }

  .navbar__link {
    .navbar__icon {
      font-size: 24px;
      margin-right: 76px;
      cursor: pointer;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
