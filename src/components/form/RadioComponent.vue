<template>
  <div>
    <label class="label">{{ field.title }}</label>
    <div class="control" v-for="(item, index) in field.values" v-bind:key="index">
      <label class="radio">
        <input type="radio" :name="field.name" v-model="data[field.name]" :value="item" />
        {{item}}
      </label>
    </div>
    <p class="help" v-if="field.note">{{ field.note }}</p>
  </div>
</template>

<script>
export default {
  props: ["field", "data"]
};
</script>


