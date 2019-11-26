<template>
  <div>
    <label class="label">{{ field.title }}</label>
    <div class="control">
      <div v-if="field.editor">
        <VueTrix
          :inputId="'editor-' + field.name"
          :inputName="field.name"
          v-model="data[field.name]"
          :placeholder="field.title + ' giriniz'"
          @trix-attachment-add="handleAttachmentAdd"
        />
      </div>
      <div v-else>
        <textarea
          class="textarea"
          :name="field.name"
          v-model="data[field.name]"
          :placeholder="field.title + ' giriniz'"
          :disabled="field.disabled"
        />
      </div>
    </div>
    <p class="help" v-if="field.note">{{ field.note }}</p>
  </div>
</template>

<script>
import VueTrix from "vue-trix";
import axios from "axios";
export default {
  props: ["field", "data"],
  components: {
    VueTrix
  },
  methods: {
    handleAttachmentAdd(event) {
      let file = event.attachment.file;
      let formData = new FormData();
      formData.append("file", file);
      axios
        .post(window.location.origin + "/api/uploadFile", formData)
        .then(function(response) {
          let attributes = {
            url: response.data,
            href: response.data
          };
          event.attachment.setAttributes(attributes);
        });
    }
  }
};
</script>