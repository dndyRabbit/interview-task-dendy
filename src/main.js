import { createApp } from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import store from "./store/store.js";

const app = createApp(App);

app.use(BootstrapVue);
app.use(IconsPlugin);
app.use(router);
app.use(store);

app.mount("#app");
