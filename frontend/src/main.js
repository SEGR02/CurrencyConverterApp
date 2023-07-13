import "./assets/styles/normalize.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory, VueRouter } from "vue-router";
import App from "./App.vue";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount("#app");
