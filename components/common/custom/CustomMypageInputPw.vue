<template>
  <ValidationProvider v-slot="{ errors, classes }" :rules="rules">
    <div
      class="form-group"
      :class="isBtn || isIdCheckBtn ? 'form-inlinebox' : ''"
    >
      <input
        :id="id"
        :name="name"
        :value="inputValue"
        :type="!isPwEyeOn ? 'password' : 'text'"
        :placeholder="placeholder"
        class="form-control"
        :class="
          (isError ? 'is-invalid' : classes,
          isBtn || isIdCheckBtn ? 'form-inline' : '')
        "
        autocomplete="off"
        @input="$emit('change-input', $event)"
      />
      <i
        id="eyeOff"
        class="i"
        :class="!isPwEyeOn ? 'icons_eye_off' : 'icons_eye_off hide'"
        @click="$emit('change-type')"
      ></i>
      <i
        id="eyeOn"
        class="i"
        :class="isPwEyeOn ? 'icons_eye_on' : 'icons_eye_on hide'"
        @click="$emit('change-type')"
      ></i>
    </div>
    <div v-if="isError && inputValue !== ''" class="invalid_text01">
      비밀번호가 일치하지 않습니다.
    </div>
    <div class="invalid_text01">
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'CustomMypageInputPw',
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
    isPwEyeOn: {
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
.invalid_text01 {
  margin-top: -15px !important;
}
.icons_eye_on {
  position: absolute;
  z-index: 10;
  cursor: pointer;
  top: 15px;
  right: 23px;
}
.icons_eye_off {
  position: absolute;
  z-index: 10;
  cursor: pointer;
  top: 16px;
  right: 23px;
}
</style>
