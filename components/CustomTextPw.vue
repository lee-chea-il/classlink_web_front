<template>
	<div class="form-group">
		<label for="password" class="hide">비밀번호</label>
		<input
			type="password"
			id="password"
			placeholder="비밀번호 입력"
			class="form-control form_password"
			autocomplete="on"
			:value="props.modelValue"
			@input="addInputTxt"
		/>
		<i id="eyeOff" class="icons_eye_off"></i>
		<i id="eyeOn" class="icons_eye_on hide"></i>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		modelValue:{
			type:String,
			required:true
		}
	});
	const emit = defineEmits(['update:modelValue']);
	const addInputTxt = (e) => {
		emit('update:modelValue', e.target.value)
	}
</script>

<style scoped>

</style>
  