<template>
  <ValidationProvider v-slot="{ errors, classes }" :rules="rules">
    <div
      class="form-group"
      :class="isBtn || isIdCheckBtn ? 'form-inlinebox' : ''"
    >
      <textarea
        :id="id"
        :name="name"
        :value="inputValue"
        :type="type"
        :placeholder="placeholder"
        class="form-control"
        :data-target="target"
        :class="
          (isError ? 'is-invalid' : classes,
          isBtn || isIdCheckBtn ? 'form-inline' : '')
        "
        rows="3"
        autocomplete="off"
        @input="$emit('change-input', $event)"
      />
    </div>
    <div class="invalid_text">
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'CustomTextarea',
  components: {
    ValidationProvider,
  },
  props: {
    inputValue: {
      default: '',
      type: String,
    },
    id: {
      default: '',
      type: String,
    },
    name: {
      default: '',
      type: String,
    },
    target: {
      default: '',
      type: String,
    },
    placeholder: {
      default: '',
      type: String,
    },
    rules: {
      default: '',
      type: String,
    },
    type: {
      default: '',
      type: String,
    },
    isError: {
      default: false,
      type: Boolean,
    },
    isBtn: {
      default: false,
      type: Boolean,
    },
    auth: {
      default: false,
      type: Boolean,
    },
    isIdCheckBtn: {
      default: false,
      type: Boolean,
    },
  },
}
</script>

<style scoped>
button {
  white-space: nowrap;
}
</style>
