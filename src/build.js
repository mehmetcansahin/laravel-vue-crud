import Vue from "vue";
import VueCrudTable from "./components/TableComponent.vue";

const Components = {
  VueCrudTable,
};

Vue.component(
  "VueCrudTable",
  require("./components/TableComponent.vue").default
);

export default Components;
