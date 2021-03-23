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
        <Input placeholder="Search" />
      </div>
    </div>

    <div class="navbar__link">
      <i class="bx bx-user navbar__icon" />

      <i class="bx bx-link-external navbar__icon"></i>
    </div>
  </div>
</template>

<script>
import "./Navbar.scss";
import Input from "@/components/commons/Input/Input";

export default {
  name: "Navbar",
  components: {
    Input,
  },
};
</script>
