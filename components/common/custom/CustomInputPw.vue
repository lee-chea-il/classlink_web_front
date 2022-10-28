<template>
  <ValidationProvider v-slot="{ errors, classes }" :rules="rules">
    <div class="form-group">
      <label v-if="name === '비밀번호'" for="name">{{ name }}</label>
      <input
        :id="id"
        :value="inputValue"
        :name="name"
        :type="!isPwEyeOn ? 'password' : 'text'"
        :placeholder="placeholder"
        class="form-control"
        :class="isError ? 'is-invalid' : classes"
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
      <!-- [개발참조]:class="disabled"제거시 활성 -->
    </div>
    <div v-if="isError && inputValue !== ''" class="invalid_text">
      비밀번호가 일치하지 않습니다.F
    </div>
    <div class="invalid_text">{{ errors[0] }}</div>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'CustomInputPw',
  components: { ValidationProvider },
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
    isPwEyeOn: {
      default: false,
      type: Boolean,
    },
  },
  
}
</script>
<style scoped>
.i {
  position: absolute;
  z-index: 100;
  cursor: pointer;
  bottom: 12px;
  right: 10px;
}
</style>
