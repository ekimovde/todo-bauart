<template>
  <div id="app">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import "@/assets/styles/main.scss";
import Navbar from "@/components/UI/Navbar/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
