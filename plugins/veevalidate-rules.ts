import { defineRule } from "vee-validate";

export default defineNuxtPlugin((nuxtApp) => {
  defineRule('required', (value, [type]) => {
    if (!value || !value.length) {
      let msg = 'This field is required';
      if(type=='id'){
        msg = '아이디는 필수 입력입니다.';
      }else if(type=='pwd'){
        msg = '패스워드는 필수 입력입니다.';
      }
      return msg;
    }
    return true;
  });

  defineRule('email', value => {
    if (!value || !value.length) {
      return true;
    }
    if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
      return 'This field must be a valid email';
    }
    return true;
  });

  defineRule('minLength', (value, [limit]) => {
    if (!value || !value.length) {
      return true;
    }
    if (value.length < limit) {
      return `This field must be at least ${limit} characters`;
    }
    return true;
  });
  
  defineRule('minMax', (value, [min, max]) => {
    if (!value || !value.length) {
      return true;
    }
    const numericValue = Number(value);
    if (numericValue < min) {
      return `This field must be greater than ${min}`;
    }
    if (numericValue > max) {
      return `This field must be less than ${max}`;
    }
    return true;
  });
  /*
  defineRule('confirmed', (value, [target], ctx) => {
    if (value === ctx.form[target]) {
      return true;
    }
    return 'Passwords must match';
  });*/
});
