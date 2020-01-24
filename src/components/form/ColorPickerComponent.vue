<template>
<div>
    <label class="label">{{ field.title }}</label>
    <div class="control">
      <input 
        type="color" 
        class="input"
        :name="field.name"
        v-model="data[field.name]" 
        style="width:100%;"
      />
      {{ data[field.name] }}
    </div>
    <p class="help" v-if="field.note">{{ field.note }}</p>
  </div>
</template>

<script>
export default {
  props: ["field", "data"],
};
</script>
