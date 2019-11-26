<template>
  <div>
    <label class="label">{{ field.title }}</label>
    <div class="control">
      <flat-pickr
        class="input"
        :name="field.name"
        v-model="data[field.name]"
        :config="config"
        :placeholder="field.title + ' giriniz'"
        :disabled="field.disabled"
      />
    </div>
    <p class="help" v-if="field.note">{{ field.note }}</p>
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/themes/material_blue.css";
import { Turkish } from "flatpickr/dist/l10n/tr.js";

export default {
  props: ["field", "data"],
  components: {
    flatPickr
  },
  data: function() {
    return {
      config: {
        dateFormat: "Y-m-d H:i",
        enableTime: true,
        locale: Turkish
      }
    };
  }
};
</script>