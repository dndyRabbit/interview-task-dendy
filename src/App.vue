<template>
  <TheLoader v-if="showLoading" />
  <Sprinkle />

  <Topnav />
  <Sprinkle2 />
  <Circle />
  <b-container>
    <b-row>
      <b-col cols="12" style="margin-top: 38px; background: transparent">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Circle from "./components/Circle.vue";
import Topnav from "./components/Topnav.vue";
import TheLoader from "./components/TheLoader.vue";
import Sprinkle from "./components/Sprinkle.vue";
import Sprinkle2 from "./components/Sprinkle2.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      showLoading: (state) => state.loading,
    }),
  },
  mounted() {
    if (
      window.localStorage.getItem("access_token") === null &&
      this.$route.path === "/"
    ) {
      console.log("THIS IS FROM HOME TO ROUTE");
      this.$router.push("/auth"); // redirect to home, for example
    } else {
      console.log("fail");
    }
  },
  components: {
    Topnav,
    Circle,
    TheLoader,
    Sprinkle,
    Sprinkle2,
  },
};
</script>
