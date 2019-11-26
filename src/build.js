import Vue from "vue";
import VueCrudTable from "./components/TableComponent.vue";

const Components = {
  VueCrudTable
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;