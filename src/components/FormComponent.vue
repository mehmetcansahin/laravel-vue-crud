<template>
  <!-- Modal -->
  <div id="form-modal" class="modal" :class="{'is-active': active}" v-show="data.data">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Form</p>
        <button class="delete" aria-label="close" v-on:click="$emit('close')"></button>
      </header>
      <section class="modal-card-body" v-if="data.data && meta">
        <form id="form-save">
          <div class="field" v-for="field in meta.fields" v-bind:key="field.name">
            <text-component v-if="field.type == 'text'" :field="field" :data="data.data" />
            <date-component v-if="field.type == 'date'" :field="field" :data="data.data" />
            <file-component v-else-if="field.type == 'image'" :field="field" :data="data.data" />
            <textarea-component
              v-else-if="field.type == 'textarea'"
              :field="field"
              :data="data.data"
              :api-url="apiUrl"
              :upload-path="uploadPath"
            />
            <select-component v-else-if="field.type == 'select'" :field="field" :data="data.data" />
            <checkbox-component
              v-else-if="field.type == 'checkbox'"
              :field="field"
              :data="data.data"
            />
            <toggle-component
              v-else-if="field.type == 'toggle'"
              :field="field"
              :data="data.data"
            />
            <color-picker-component
              v-else-if="field.type == 'colorpicker'"
              :field="field"
              :data="data.data"
            />
            <range-component
              v-else-if="field.type == 'range'"
              :field="field"
              :data="data.data"
            />
            <radio-component
              v-else-if="field.type == 'radio'"
              :field="field"
              :data="data.data"
            />
            
          </div>
        </form>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" v-on:click="save()" :disabled="saveDisable">Kaydet</button>
        <button class="button" v-on:click="$emit('close')">Kapat</button>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Noty from "noty";
import TextComponent from "./form/TextComponent";
import DateComponent from "./form/DateComponent";
import FileComponent from "./form/FileComponent";
import TextareaComponent from "./form/TextareaComponent";
import SelectComponent from "./form/SelectComponent";
import CheckboxComponent from "./form/CheckboxComponent";
import ToggleComponent from "./form/ToggleComponent";
import ColorPickerComponent from "./form/ColorPickerComponent";
import RangeComponent from "./form/RangeComponent";
import RadioComponent from "./form/RadioComponent";
export default {
  props: ["api-url", "upload-path", "meta", "create"],
  data: function() {
    return {
      active: false,
      saveDisable: false,
      data: []
    };
  },
  components: {
    TextComponent,
    DateComponent,
    FileComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    ToggleComponent,
    ColorPickerComponent,
    RangeComponent,
    RadioComponent
  },
  mounted: function() {
    if (this.create) {
      this.setCreateData();
    } else {
      this.fetchData();
    }
  },
  methods: {
    setCreateData: function() {
      this.meta.fields.forEach(field => {
        this.data = {
          data: {
            [field.name]: field.name == "id" ? 0 : null
          }
        };
      });
      this.openModal();
    },
    fetchData: function() {
      axios.get(this.apiUrl).then(response => this.setData(response.data));
    },
    setData: function(data) {
      this.data = data;
      this.openModal();
    },
    openModal: function() {
      this.active = true;
    },
    closeModal: function() {
      this.active = false;
    },
    save: function() {
      this.saveDisable = true;
      let url = this.apiUrl;
      let formData = new FormData(document.querySelector("#form-save"));
      if (this.create) {
        url += "/save";
      }
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.status == "success") {
            new Noty({
              layout: "topCenter",
              theme: "sunset",
              timeout: 3000,
              type: "success",
              text: "İşlem başarılı bir şekilde tamamlanmıştır."
            }).show();
            this.$emit('close');
          }
          if (!this.create) {
            this.saveDisable = false;
          }
        })
        .catch(error => {
          if (error.response) {
            let data = error.response.data;
            let message = data.message;
            for (error in data.errors) {
              message += "<br>" + data.errors[error][0];
            }
            new Noty({
              layout: "topCenter",
              theme: "sunset",
              timeout: 3000,
              type: "error",
              text: message
            }).show();
          }
          this.saveDisable = false;
        });
    }
  }
};
</script>
