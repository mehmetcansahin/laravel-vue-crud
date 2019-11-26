<template>
  <div>
    <label class="label">{{ field.title }}</label>
    <div class="control">
      <v-select
        v-model="selected"
        :options="field.options"
        :multiple="field.multiple == true"
        :disabled="field.disabled"
        :getOptionLabel="getOptionLabel"
      />
      <div v-if="Array.isArray(selected)">
        <input
          type="hidden"
          :name="field.multiple ? field.name + '[]' : field.name"
          v-for="select in selected"
          v-bind:key="select.value"
          :value="select.value"
        />
      </div>
      <div v-else>
        <input type="hidden" :name="field.name" :value="selected.value" />
      </div>
    </div>
    <p class="help" v-show="field.multiple">Birden fazla seçenek seçebilirsiniz.</p>
    <p class="help" v-if="field.note">{{ field.note }}</p>
  </div>
</template>

<script>
import vSelect from "vue-select";
export default {
  props: ["field", "data"],
  components: {
    vSelect
  },
  data: function() {
    return {
      selected: []
    };
  },
  mounted: function() {
    // TODO: burası biraz daha optimize edilmesi lazım
    let selected = this.data[this.field.name];
    if (Array.isArray(selected) && typeof selected[0] != "object") {
      selected = this.field.options.filter(option => {
        return selected.includes(option.value);
      });
    } else if (!Array.isArray(selected)) {
      selected = this.field.options.filter(option => {
        return option.value == selected;
      });
    }
    this.selected = selected;
  },
  methods: {
    getOptionLabel: function(option) {
      let label = option.label;
      if (option.parent != null) {
        label = "+\t" + label;
      }
      return label;
    }
  }
};
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
</style>