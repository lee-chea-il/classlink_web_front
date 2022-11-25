<template>
  <div>
    <ValidationProvider v-slot="{ errors, classes }" :rules="rules">
      <input
        :id="id"
        :name="name"
        :value="inputValue"
        :type="type"
        :placeholder="placeholder"
        class="form-control"
        :class="
          (isError ? 'is-invalid' : classes,
          isIdCheckBtn
            ? 'form-inline'
            : isBirthdayBtn
            ? 'form_calendar datePicker'
            : '')
        "
        :maxlength="id === 'phone' ? '13' : ''"
        autocomplete="off"
        @input="$emit('change-input', $event)"
      />
      <button
        v-if="isIdCheckBtn"
        class="btn btn_crud_default"
        :class="isStudentInput ? 'btn-custom2' : 'btn-custom'"
      >
        중복체크
      </button>
      <button
        v-if="isBirthdayBtn"
        class="btn icons_calendar_off"
        @click="$emit('click-birthday')"
      ></button>
      <div
        v-if="isCheckBox"
        class="custom-control custom-checkbox custom-sm top"
        :class="classes['is-valid'] ? '' : 'disabled'"
      >
        <input
          id="nickname_chk"
          type="checkbox"
          class="custom-control-input"
          :checked="nickNameCheck"
          @input="$emit('change-input', $event)"
        />
        <label class="custom-control-label" for="nickname_chk"
          >이름과 동일</label
        >
      </div>
      <div
        v-if="isStudentInput"
        class="invalid_text text-set"
        :class="isIdCheckBtn ? 'idcheck-msg' : ''"
      >
        {{ errors[0] }}
      </div>
      <div v-else class="invalid_text" :class="isIdCheckBtn ? 'text-mt' : ''">
        {{ errors[0] }}
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'CustomModalInput',
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
    isIdCheckBtn: {
      default: false,
      type: Boolean,
    },
    isCheckBox: {
      default: false,
      type: Boolean,
    },
    isBirthdayBtn: {
      default: false,
      type: Boolean,
    },
    nickNameCheck: {
      default: false,
      type: Boolean,
    },
    isStudentInput: {
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
.form-group {
  margin-bottom: 0;
}
.top {
  top: -10px;
}
.btn-custom {
  width: 54px !important;
  margin-top: 13px;
  white-space: normal;
  line-height: 14px !important;
}
.text-mt {
  margin-top: -1px;
}
.text-set {
  height: 20px;
  margin-top: -32px !important;
}
.text-idcheck {
  margin-top: -22px !important;
  line-height: 12px;
}
.idcheck-msg {
  margin-top: -7px !important;
  line-height: 12px;
  height: 6px !important;
}
.btn-custom2 {
  width: 58px !important;
  margin-top: 12px;
  white-space: normal;
  line-height: 14px !important;
}
</style>
