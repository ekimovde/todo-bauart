<template>
  <div id="app">
    <v-navbar />

    <router-view />
  </div>
</template>

<script>
import "@/assets/styles/main.scss";
import vNavbar from "@/components/UI/vNavbar";

export default {
  name: "App",
  components: {
    vNavbar,
  },
};
</script>
