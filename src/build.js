import Vue from "vue";
import VueCrudTable from "./components/TableComponent.vue";

Vue.component(VueCrudTable, require(VueCrudTable).default);

export default Components;
