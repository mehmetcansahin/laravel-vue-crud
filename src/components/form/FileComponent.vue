<template>
  <div>
    <label class="label">{{ field.title }}</label>
    <div class="control">
      <div class v-if="data[field.name] != null">
        <draggable
          class="columns"
          v-if="Array.isArray(data[field.name])"
          v-model="data[field.name]"
        >
          <div
            class="gallery"
            v-for="(image, index) in data[field.name]"
            :key="index + '-' + image"
            @start="drag=true"
            @end="drag=false"
          >
            <input type="hidden" :name="'images[' + field.name + '][]'" :value="image" />
            <img :src="image" class="column" />
            <div @click="removeItem(index)" class="remove">x</div>
          </div>
        </draggable>
        <div v-else class="gallery">
          <input type="hidden" :name="'images[' + field.name + '][]'" :value="data[field.name]" />
          <a :href="data[field.name]" target="_blank">
            <img :src="data[field.name]" @error="imgError"/>
          </a>
          <div @click="removeItem()" class="remove">x</div>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="file has-name">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            :name="field.multiple ? field.name + '[]' : field.name"
            accept="*"
            :multiple="field.multiple == true"
            @change="fileChange"
          />
          <span class="file-cta">
            <span class="file-icon">
              <i class="material-icons">cloud_upload</i>
            </span>
            <span class="file-label">Dosya Seç</span>
          </span>
          <span class="file-name">Dosya Seçilmedi</span>
        </label>
      </div>
    </div>
    <p class="help" v-show="field.multiple">Birden fazla görsel ekleyebilirsiniz.</p>
    <p class="help" v-if="field.note">{{ field.note }}</p>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: ["field", "data"],
  components: {
    draggable
  },
  methods: {
    removeItem: function(index = null) {
      if (Array.isArray(this.data[this.field.name])) {
        this.data[this.field.name].splice(index, 1);
      } else {
        this.data[this.field.name] = null;
      }
    },
    fileChange() {
      let input = document.querySelector(
        'input[name="' +
          (this.field.multiple ? this.field.name + "[]" : this.field.name) +
          '"]'
      );
      input.parentNode.querySelector(".file-name").textContent =
        input.files.length + " Dosya Seçildi";
    },
    imgError(event){
      event.target.src = "./assets/file.png";
      event.target.style = "width: 50px;height:50px;"
    }
   
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  .remove {
    position: absolute;
    top: 0px;
  }
  img {
    padding: 10px;
    max-height: 200px;
  }
}
</style>