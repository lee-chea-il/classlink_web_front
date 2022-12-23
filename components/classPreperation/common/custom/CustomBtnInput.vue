<template>
  <div class="col">
    <ValidationProvider v-slot="{ errors, classes }" :rules="rules">
      <div
        class="form-group"
        :class="isBtn || isIdCheckBtn ? 'form-inlinebox' : ''"
      >
        <input
          :id="id"
          :name="name"
          :value="inputValue"
          :type="type"
          :placeholder="placeholder"
          class="form-control form-inline front_button"
          :class="
            (isError ? 'is-invalid' : classes,
            isBtn || isIdCheckBtn ? 'form-inline' : '')
          "
          autocomplete="off"
          readonly
          @click="$emit('open-save-path', setTarget)"
          @input="$emit('change-input', $event)"
        />
        <button
          class="btn btn_crud_default"
          data-toggle="modal"
          @click="$emit('open-save-path', setTarget)"
        >
          찾아보기
        </button>
      </div>
      <div class="invalid_text">
        {{ errors[0] }}
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'CustomBtnInput',
  components: { ValidationProvider },
  props: {
    id: { default: '', type: String },
    name: { default: '', type: String },
    type: { default: '', type: String },
    auth: { default: false, type: Boolean },
    rules: { default: '', type: String },
    isBtn: { default: false, type: Boolean },
    isError: { default: false, type: Boolean },
    target: { type: String, default: '' },
    inputValue: { default: '', type: String },
    placeholder: { default: '', type: String },
    isIdCheckBtn: { default: false, type: Boolean },
  },
  computed: {
    setTarget() {
      if (this.target === 'quiz') return 'isQuizAddModal'
      else if (this.target === 'noteTest') return 'isNoteTestAddModal'
      else return 'isReferenceAddModal'
    },
  },
}
</script>

<style scoped>
input:disabled {
  background: white;
}

.form-control:disabled,
.form-control[readonly] {
  cursor: pointer;
  background: white;
}
</style>
