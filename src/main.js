import Vue, { createApp } from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import AxiosAPI from "./services/Axios";
import Toasted from "vue-toasted";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import store from "./store/store.js";

const app = createApp(App);

Vue.devtools = true;

app.use(Toasted);
app.use(BootstrapVue);
app.use(IconsPlugin);
app.use(router);
app.use(store);
AxiosAPI.init();

app.mount("#app");
