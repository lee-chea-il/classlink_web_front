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
          disabled
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
    target: {
      type: String,
      default: '',
    },
  },
  computed: {
    setTarget() {
      if (this.target === 'quiz') {
        return 'isQuizAddModal'
      } else if (this.target === 'noteTest') {
        return 'isNoteTestAddModal'
      } else if (this.target === 'quizChange') {
        return 'isQuizChange'
      } else if (this.target === 'noteTestChange') {
        return 'isNoteTestChange'
      } else if (this.target === 'referenceChange') {
        return 'isReferenceChange'
      } else {
        return 'isReferenceAddModal'
      }
    },
  },
}
</script>

<style scoped>
input:disabled {
  background: white;
}
</style>
