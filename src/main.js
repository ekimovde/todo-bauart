import Vue from "vue";
import firebase from "firebase/app";
import "firebase/database";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyAOfe1m1Ipawevav55ybW-lryBgpoxfwzc",
      authDomain: "todo-20206.firebaseapp.com",
      databaseURL: "https://todo-20206-default-rtdb.firebaseio.com",
      projectId: "todo-20206",
      storageBucket: "todo-20206.appspot.com",
      messagingSenderId: "830573555198",
      appId: "1:830573555198:web:96a7ebcd465930298c64af",
      measurementId: "G-49CM3TJXBD",
    };
    firebase.initializeApp(firebaseConfig);
  },
  render: (h) => h(App),
}).$mount("#app");
