<template>
  <ValidationProvider v-slot="{ errors, classes }" :rules="rules">
    <div
      class="form-group"
      :class="isBtn || isIdCheckBtn || isCheckBox ? 'form-inlinebox' : ''"
    >
      <label for="name">{{ name }}</label>

      <input
        :id="id"
        :value="inputValue"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        class="form-control"
        :class="
          (isError ? 'is-invalid' : classes,
          isBtn || isIdCheckBtn || isCheckBox ? 'form-inline' : '')
        "
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
      <button
        v-if="isIdCheckBtn"
        class="btn btn_crud_point button"
        :class="classes['is-valid'] ? '' : 'disabled'"
      >
        중복체크
      </button>
      <div
        v-if="isCheckBox"
        class="custom-control custom-checkbox"
        :class="classes['is-valid'] ? '' : 'disabled'"
      >
        <input
          id="checkbox01"
          type="checkbox"
          class="custom-control-input"
          :checked="nickNameCheck"
          @input="$emit('change-check', $event)"
        />
        <label class="custom-control-label" for="checkbox01">이름과 동일</label>
      </div>
    </div>
    <div v-if="isError && inputValue !== ''" class="invalid_text">
      비밀번호가 일치하지 않습니다.
    </div>
    <div
      :class="
        String(errors[0]).includes('2글자') ||
        String(errors[0]).includes('주세요')
          ? 'form_ruletext'
          : 'invalid_text'
      "
    >
      {{ errors[0] }}
    </div>
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
    isIdCheckBtn: {
      default: false,
      type: Boolean,
    },
    isCheckBox: {
      default: false,
      type: Boolean,
    },
    nickNameCheck: {
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
