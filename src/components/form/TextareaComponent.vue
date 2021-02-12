<template>
  <div>
    <label class="label">{{ field.title }}</label>
    <div class="control">
      <div v-if="field.editor">
        <div class="quill-editor">
          <slot name="toolbar"></slot>
          <div ref="editor"></div>
        </div>
        <input type="hidden" :name="field.name" :value="content" />
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
import Quill from "quill";
import { ImageUpload } from "quill-image-upload";
import ImageResize from "quill-image-resize";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/imageUpload", ImageUpload);

export default {
  props: ["field", "data", "api-url", "upload-path"],
  data: function () {
    return {
      quill: null,
      content: "",
      options: {
        theme: "snow",
        placeholder: this.field.title + " giriniz",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],

            [{ color: [] }, { background: [] }],
            [{ align: [] }],

            ["image", "video"],
            ["clean"],
          ],
          imageUpload: {
            url: this.uploadPath,
            method: "POST",
            name: "image",
            callbackOK: (serverResponse, next) => {
              next(serverResponse);
            },
            callbackKO: () => {
              // console.log(serverError);
            },
            checkBeforeSend: (file, next) => {
              next(file);
            },
          },
          imageResize: {},
        },
      },
    };
  },
  mounted: function () {
    if (this.field.editor) {
      this.content = this.data[this.field.name];
      this.quill = new Quill(this.$refs.editor, this.options);
      this.quill.pasteHTML(this.content);
      if (this.field.disabled) {
        this.quill.enable(false);
      }
      this.quill.on("text-change", () => this.textChange());
    }
  },
  methods: {
    textChange: function () {
      let html = this.$refs.editor.children[0].innerHTML;
      if (html === "<p><br></p>") html = "";
      this.content = html;
    },
  },
};
</script>
<style>
.quill-editor iframe {
  pointer-events: none;
}
</style>