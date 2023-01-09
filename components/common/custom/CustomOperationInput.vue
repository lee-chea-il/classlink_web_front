<template>
  <div>
    <ValidationProvider v-slot="{ errors, classes, invalid }" :rules="rules">
      <input
        :id="id"
        :name="name"
        :value="inputValue"
        :type="type"
        :placeholder="placeholder"
        class="form-control"
        :class="
          (isError ? 'is-invalid' : classes,
          isIdCheckBtn || isEmailCheckBtn || isAttNumberCheckBtn
            ? 'form-inline id_form'
            : isBirthdayBtn || isCoursesBtn
            ? 'form_calendar datePicker'
            : '')
        "
        :maxlength="
          id.includes('phone') ? '13' : id === 'std_att_num' ? '5' : ''
        "
        autocomplete="off"
        @input="$emit('change-input', $event)"
      />
      <button
        v-if="isIdCheckBtn"
        class="btn btn_crud_default btn_margin"
        :class="isStudentInput ? 'btn-custom2' : 'btn-custom'"
        :disabled="invalid || isIdCheck"
        @click="$emit('check-id')"
      >
        중복체크
      </button>
      <button
        v-if="isAttNumberCheckBtn"
        class="btn btn_crud_default btn_margin"
        :class="isStudentInput ? 'btn-custom2' : 'btn-custom'"
        :disabled="invalid || isAttNumberCheck"
        @click="$emit('check-sttnumber')"
      >
        중복체크
      </button>
      <button
        v-if="isEmailCheckBtn"
        class="btn btn_crud_default btn_margin"
        :class="isStudentInput ? 'btn-custom2' : 'btn-custom'"
        :disabled="invalid || isEmailCheck"
        @click="$emit('check-email')"
      >
        <!-- :class="isStudentInput ? 'btn-custom2' : 'btn-custom'" -->
        중복체크
      </button>
      <button
        v-if="isBirthdayBtn"
        class="btn icons_calendar_off"
        @click="$emit('click-birthday')"
      ></button>
      <button
        v-if="isCoursesBtn"
        class="btn icons_calendar_off"
        @click="$emit('click-lecturedate')"
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
      <div
        v-if="
          isAttNumberCheckBtn &&
          !isAttNumberCheck &&
          inputValue.length > 0 &&
          !invalid
        "
        class="invalid_text check-margin"
      >
        출결번호 중복확인을 해주세요.
      </div>
      <div
        v-if="
          isEmailCheckBtn && !isEmailCheck && inputValue.length > 0 && !invalid
        "
        class="invalid_text"
        :class="isStudentInput ? 'check-margin' : 'teacher-email-check'"
      >
        이메일 중복확인을 해주세요.
      </div>
      <div
        v-if="isIdCheckBtn && !isIdCheck && inputValue.length > 0 && !invalid"
        class="invalid_text"
        :class="isStudentInput ? 'id-check-margin' : 'teacher-id-check'"
      >
        아이디 중복확인을 해주세요.
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
    isEmailCheckBtn: {
      default: false,
      type: Boolean,
    },
    isEmailCheck: {
      default: false,
      type: Boolean,
    },
    isIdCheck: {
      default: false,
      type: Boolean,
    },
    isAttNumberCheckBtn: {
      default: false,
      type: Boolean,
    },
    isAttNumberCheck: {
      default: false,
      type: Boolean,
    },
    isCoursesBtn: {
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
  margin-top: -7px;
}
.text-set {
  height: 20px;
  margin-top: -32px !important;
}
/* .text-idcheck {
  margin-top: -22px !important;
  line-height: 12px;
} */
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
.id_form {
  width: 66% !important;
  margin-left: 0px !important;
}
.btn_margin {
  margin-top: 0px !important;
  font-size: 12px !important;
}
.check-margin {
  margin-top: -19px;
  margin-bottom: -35px;
}
.id-check-margin {
  margin-top: -30px;
  margin-bottom: -35px;
}
.teacher-id-check {
  margin-top: -12px;
  margin-bottom: -35px;
}
.teacher-email-check {
  margin-top: 1px;
  margin-bottom: -35px;
}
</style>
