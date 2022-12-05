<template>
  <ValidationProvider v-slot="{ errors, classes }" :rules="rules">
    <div
      class="form-group form-mb"
      :class="
        isBtn || isIdCheckBtn || isCheckBox
          ? 'form-inlinebox'
          : isAddressBtn
          ? 'form-inlinebox form-inline form-mb'
          : ''
      "
    >
      <label
        for="name"
        :style="
          name === '인증번호' || name === '교육기관 상세 주소'
            ? {
                display: 'none',
              }
            : {}
        "
        >{{ name }}</label
      >

      <input
        :id="id"
        :value="inputValue"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        class="form-control"
        :maxlength="id === 'phone' ? '13' : ''"
        :class="
          (isError ? 'is-invalid' : classes,
          isBtn || isIdCheckBtn || isCheckBox || isAddressBtn
            ? 'form-inline'
            : '')
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
        @click="$emit('click-idCheck')"
      >
        중복체크
      </button>
      <button
        v-if="isAddressBtn"
        class="btn btn_crud_default"
        @click="$emit('click-address', $event)"
        @click.prevent
      >
        주소 검색
      </button>
      <div
        v-if="isCheckBox"
        class="custom-control custom-checkbox check-ml"
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
    <div class="invalid_text" :class="isEduInfo ? 'invalid_pl' : ''">
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
    isEduInfo: {
      default: false,
      type: Boolean,
    },
    isAddressBtn: {
      default: false,
      type: Boolean,
    },
    authlabel: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    clickAddressBtn() {
      console.log('이거머야')
    },
  },
}
</script>

<style scoped>
button {
  white-space: nowrap;
}
.invalid_pl {
  padding: 0 60px;
}
.form-mb {
  margin-bottom: 0 !important;
}
.check-ml {
  margin-left: 3px !important;
}
.hide-label {
  display: block !important;
}
.form-inlinebox {
  width: 100%;
}
</style>
