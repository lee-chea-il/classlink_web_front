<template>
  <div class="form-group">
    <label for="password" class="hide">비밀번호</label>
    <div
      class="textInput"
      :class="{ 'has-error': !!errorMessage, success: meta.valid }"
    >
      <VField
        :type="!isPwEyeOn ? 'password' : 'text'"
        id="password"
        placeholder="비밀번호 입력"
        class="form-control form_password"
        autocomplete="on"
        :value="props.modelValue"
        :name="name"
        rules="required"
        @input="addInputTxt"
        @blur="handleBlur"
      />
      <VErrorMessage name="password" class="invalid_text" />
      <i
        id="eyeOff"
        @click="
          () => {
            isPwEyeOn = true;
          }
        "
        :class="[!isPwEyeOn ? 'icons_eye_off' : 'icons_eye_off hide']"
      ></i>
      <i
        id="eyeOn"
        @click="
          () => {
            isPwEyeOn = false;
          }
        "
        :class="[isPwEyeOn ? 'icons_eye_on' : 'icons_eye_on hide']"
      ></i>
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
const isPwEyeOn = ref(false);
const name = ref("password");
const { errorMessage, handleBlur, meta } = useField(name);

const emit = defineEmits(["update:modelValue"]);
const addInputTxt = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<style scoped>
#eyeOff {
  bottom: 0;
  top: 12px;
}
#eyeOn {
  bottom: 0;
  top: 12px;
}
</style>
