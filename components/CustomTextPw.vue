<template>
	<div class="form-group">
		<label for="password" class="hide">비밀번호</label>
		<VField
			:type="!isPwEyeOn?'password':'text'"
			id="password"
			placeholder="비밀번호 입력"
			class="form-control form_password"
			autocomplete="on"
			:value="props.modelValue"
			@input="addInputTxt"
			name="pwd"
			rules="required:pwd"
		/>
		<i id="eyeOff" @click="()=>{isPwEyeOn=true;}" :class="[ !isPwEyeOn?'icons_eye_off':'icons_eye_off hide']"></i>
		<i id="eyeOn" @click="()=>{isPwEyeOn=false;}" :class="[ isPwEyeOn?'icons_eye_on':'icons_eye_on hide']"></i>
		<VErrorMessage name="pwd" class="help is-danger" />
	</div>
</template>

<script setup lang="ts">
	
	const props = defineProps({
		modelValue:{
			type:String,
			required:true
		}
	});
	const isPwEyeOn = ref(false);
	const emit = defineEmits(['update:modelValue']);
	const addInputTxt = (e) => {
		emit('update:modelValue', e.target.value)
	}
	//|confirmed:password
</script>

<style scoped>

</style>
  