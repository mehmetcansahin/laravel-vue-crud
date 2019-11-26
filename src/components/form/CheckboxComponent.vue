<template>
  <div>
    <label class="checkbox">
      <input
        type="checkbox"
        :name="field.multiple ? field.name + '[]' : field.name"
        :checked="data[field.name]"
        :multiple="field.multiple == true"
        :disabled="field.disabled"
      />
      {{ field.title }}
    </label>
    <p class="help" v-if="field.note">{{ field.note }}</p>
  </div>
</template>

<script>
export default {
  props: ["field", "data"]
};
</script>