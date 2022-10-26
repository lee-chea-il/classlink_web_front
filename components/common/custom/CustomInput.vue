<template>
  <ValidationProvider v-slot="{ errors, classes }" :rules="rules">
    <div class="form-group" :class="isBtn ? 'form-inlinebox' : ''">
      <label for="name">{{ name }}</label>

      <input
        :id="id"
        :value="inputValue"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        class="form-control"
        :class="(isError ? 'is-invalid' : classes, isBtn ? 'form-inline' : '')"
        autocomplete="off"
        @input="$emit('change-input', $event)"
      />

      <!-- [개발참조]:class="disabled"제거시 활성 -->
      <button
        v-if="isBtn"
        class="btn btn_crud_point button"
        :class="classes['is-valid'] ? '' : 'disabled'"
      >
        {{ auth ? '확인' : '인증번호 받기' }}
      </button>
    </div>
    <div v-if="isError" class="invalid_text">비밀번호가 일치하지 않습니다.</div>
    <div class="invalid_text">{{ errors[0] }}</div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'CustomInput',
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
  },
}
</script>

<style scoped>
button {
  white-space: nowrap;
}
</style>
