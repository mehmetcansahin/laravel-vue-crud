import Vue from "vue";
import VueCrudTable from "./components/TableComponent.vue";

const Components = {
  VueCrudTable
}
Object.keys(Components).forEach(name => {
  	Vue.component(name, require(Components[name]).default);
});

export default Components;