<template>
  <div>
    <label class="label">{{ field.title }}</label>
    <div class="control">
      <input
        type="hidden"
        class="input"
        :name="field.name"
        v-model="value"
      />
      <toggle-button 
        v-model="value" 
        :labels="{checked: this.field.titleOn, unchecked: this.field.titleOff}" 
        width="100"
        height="30"
      />
    </div>
    <p class="help" v-if="field.note">{{ field.note }}</p>
  </div>
</template>

<script>
import {ToggleButton} from 'vue-js-toggle-button'
export default {
  props: ["field", "data"],
  data: function(){
    var that = this;
      return{
          value: (that.data[that.field.name] == "true" || that.data[that.field.name] == "1") ? true : false,
      };
  },
  components: {
    ToggleButton
  },
};
</script>