<template>
  <!-- Modal -->
  <div id="show-modal" class="modal" :class="{'is-active': active}" v-show="data.data">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Detaylar</p>
        <button class="delete" aria-label="close" v-on:click="$emit('close')"></button>
      </header>
      <section class="modal-card-body is-paddingless">
        <table v-if="data.meta" class="table">
          <tbody>
            <tr v-for="field in data.meta.fields" v-bind:key="field.name">
              <th>{{ field.title }}</th>
              <td v-if="field.type == 'text' || field.type == 'textarea' || field.type == 'date'">
                <div v-if="field.editor || field.render == 'html'" v-html="data.data[field.name]"></div>
                <div v-else>{{ data.data[field.name] }}</div>
              </td>
              <td class="gallery" v-if="field.type == 'image'">
                <div class="columns" v-if="Array.isArray(data.data[field.name])">
                  <img
                    v-for="image in data.data[field.name]"
                    v-bind:key="image"
                    :src="image"
                    class="column"
                  />
                </div>
                <div v-else>
                  <img :src="data.data[field.name]" />
                </div>
              </td>
              <td v-if="field.type == 'select'">
                <div v-if="field.multiple || Array.isArray(data.data[field.name])">
                  <!-- Burası çok karmaşık oldu düzeltilmesi lazım -->
                  <div v-for="option in data.data[field.name]" v-bind:key="option.value">
                    <div
                      v-for="subOption in field.options.filter(function(opt) { return opt.value == option.value || opt.value == option; })"
                      v-bind:key="subOption"
                    >{{ subOption.label }}</div>
                  </div>
                </div>
                <div
                  v-else
                  v-for="option in field.options.filter(function(opt) { return opt.value == data.data[field.name] })"
                  v-bind:key="option.value"
                >{{ option.label }}</div>
              </td>
              <td v-if="field.type == 'checkbox'">{{ data.data[field.name] }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer class="modal-card-foot">
        <button class="button" v-on:click="$emit('close')">Kapat</button>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["api-url"],
  data: function() {
    return {
      active: false,
      data: []
    };
  },
  mounted: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      axios.get(this.apiUrl).then(response => this.setData(response.data));
    },
    setData: function(data) {
      this.data = data;
      this.openModal();
    },
    openModal: function() {
      this.active = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  img {
    padding: 10px;
    max-height: 200px;
  }
}
</style>