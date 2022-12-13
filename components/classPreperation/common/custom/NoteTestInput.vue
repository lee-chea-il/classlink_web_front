<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules">
    <div class="cnt">
      <input
        :id="idProp"
        type="text"
        :placeholder="placeholder"
        class="form-control form-inline"
        :name="nameProp"
        :value="value"
        @input="$emit('change-item', $event, idx)"
      />
    </div>
    <div class="error_message">
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'NoteTestInput',
  components: {
    ValidationProvider,
  },
  props: {
    idx: { type: Number, default: 0 },
    idProp: { type: String, default: '' },
    nameProp: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    rules: { type: String, default: '' },
  },
}
</script>

<style scoped>
.error_message {
  margin: 8px 0 0 86px !important;
  font-size: 10.5px;
  color: #fb5353;
  text-align: left;
}
</style>
