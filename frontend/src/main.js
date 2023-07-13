import "./assets/styles/normalize.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
];

const router = new VueRouter({
  mode: "",
  base: "https://main--ornate-faloodeh-e23110.netlify.app",
  routes,
});

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount("#app");
