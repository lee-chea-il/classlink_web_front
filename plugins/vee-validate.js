import { configure, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules' // Available Rules에서 제공하는 모든 rule, 추천하지 않는 방식
import { messages } from 'vee-validate/dist/locale/ko.json'
import {
  required,
  digits,
  numeric,
  email,
  confirmed,
} from 'vee-validate/dist/rules'

// rules setting
Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  })
  extend('limit', (value, params) => {
    const [min, max] = params
    if ((value && value.length < min) || value.length > max) {
      return `{_field_} 은(는) ${min}자 ~ ${max}자로 입력해 주세요.`
    }
    return true
  })

  extend('max', (value, args) => {
    if (value.length > Number(args[0])) {
      return `{_field_} 은(는) ${args}자 이하로 입력해 주세요.`
    }
    return true
  })
  // 기존에 존재하던 required는 message만 변경
  extend('required', {
    ...required,
    message: '{_field_} 은(는) 필수 정보입니다.',
  })

  extend('required-select', {
    ...required,
    message: '{_field_} 은(는) 반드시 선택해야 합니다.',
  })

  extend('numeric', {
    ...numeric,
    message: '{_field_} 은(는) 숫자로만 구성되어야 합니다.',
  })
  extend('digits', {
    ...digits,
    message: '{_field_} 은(는) 6자리 여야 합니다.',
  })

  extend('email', {
    ...email,
    message: '잘못 입력된 이메일 주소 입니다.',
  })

  extend('account', (value) => {
    const pattern = /^[a-z]+[a-z0-9]{6,16}$/
    if (!pattern.test(value)) {
      return '6 ~ 15자 이하, 영문 대/소문자, 숫자를 조합해주세요.'
    }
    return true
  })

  extend('password', (value) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    if (!passwordRegex.test(value)) {
      return '6 ~ 20자 이하, 영문 대/소문자, 숫자, 특수문자 중 2가지를 조합해주세요.'
    }
    return true
  })

  extend('confirmed', {
    ...confirmed,
    message: '비밀번호와 비밀번호확인이 일치하지 않습니다.',
  })

  extend('attendance', (value) => {
    const pattern = /^[0-9]{5}$/
    if (!pattern.test(value)) {
      return '출결번호는 5자리 숫자로 입력하세요.'
    }
    return true
  })

  extend('phone', (value) => {
    const pattern = /^([0-9-]){13}$/
    if (!pattern.test(value)) {
      return '연락처는 11자리 숫자로 입력하세요.'
    }
    return true
  })

  // editor에 유효성 검사 추가
  extend('edit_required', {
    ...required,
    message: '문제를 입력해주세요.',
  })

  extend('start_limit', (value) => {
    const newValue = value.replace(/<[^>]*>?/g, '')
    if (newValue.length < Number(10)) {
      return `문제를 10자 이상 입력해 주세요.`
    }
    return true
  })

  extend('end_limit', (value) => {
    const newValue = value.replace(/<[^>]*>?/g, '')
    if (newValue.length > Number(500)) {
      return `문제를 500자 이하로 입력해 주세요.`
    }
    return true
  })

  extend('end_limit_desc', (value) => {
    const newValue = value.replace(/<[^>]*>?/g, '')
    if (newValue.length > Number(300)) {
      return `보기를 300자 이하로 입력해 주세요.`
    }
    return true
  })

  // 퀴즈에 유효성 검사 추가
  extend('required_quiz', {
    ...required,
    message: '{_field_}을 입력해주세요.',
  })
})

// config setting
const config = {
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
  bails: true,
  skipOptional: true,
  mode: 'aggressive',
  useConstraintAttrs: true,
}
configure(config)
