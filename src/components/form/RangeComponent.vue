<template>
<div>
    <label class="label">{{ field.title }}</label>
    <div class="control">
      <input 
        type="hidden" 
        class="input"
        :name="field.name"
        v-model="data[field.name]" 
        style="width:100%;"
      />
      <vue-range-slider ref="slider" v-model="data[field.name]" class="sliderVue"></vue-range-slider>
    </div>
    <p class="help" v-if="field.note">{{ field.note }}</p>
  </div>
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'
export default {
  props: ["field", "data"],
  components: {
    VueRangeSlider
  }
};
</script>
<style>
  .sliderVue{
    margin-top:50px;
  }
</style>