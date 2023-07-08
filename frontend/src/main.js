import "./assets/styles/normalize.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import Chart from "./components/Chart.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/home", component: Home },
  { path: "/login", component: Chart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount("#app");
