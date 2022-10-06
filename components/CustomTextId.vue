<template>
  	<div class="form-group">
		<label for="userid" class="hide">아이디</label>
		<VField
			type="text"
			id="userid"
			placeholder="아이디 입력"
			class="form-control"
			name="id"
			rules="required:id"
			:value="props.modelValue"
			@input="addInputTxt"
		/>
		<VErrorMessage name="id" class="help is-danger" />
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
