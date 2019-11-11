import Vue from "vue";
import VueRouter from "vue-router";
import jQuery from "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
window.$ = window.Jquery = jQuery;

import App from "./App.vue";
import Inicio from "./pages/Inicio.vue";
import CadastrarItem from "./pages/CadastrarItem.vue";
import ItemsList from "./pages/ItemsList.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", redirect: "/inicio" },
  { path: "/inicio", component: Inicio },
  { path: "/cadastrar_item", component: CadastrarItem },
  { path: "/items", component: ItemsList }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
