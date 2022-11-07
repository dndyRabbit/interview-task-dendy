import { createRouter, createWebHistory } from "vue-router";
import Auth from "./pages/auth.page.vue";
import Home from "./pages/home.page.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/auth", component: Auth },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
