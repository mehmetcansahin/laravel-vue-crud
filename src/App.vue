<template>
  <div id="app">
    <VueCrudTable
      :api-url="apiUrl"
      :api-token="apiToken"
      :upload-path="uploadPath"
    />
  </div>
</template>

<script>
import VueCrudTable from "./components/TableComponent.vue";
export default {
  name: "app",
  components: {
    VueCrudTable,
  },
  data: function () {
    return {
      apiUrl: process.env.VUE_APP_API_URL,
      apiToken: process.env.VUE_APP_TOKEN,
      uploadPath: process.env.VUE_APP_UPLOAD_PATH,
    };
  },
};
</script>

<style lang="scss">
#app {
  // Fonts
  @import url("https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap");
  font-family: "Red Hat Display", sans-serif;
  padding: 20px;
}
</style>
