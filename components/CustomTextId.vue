<template>
  <div class="form-group">
		<label for="userid" class="hide">아이디</label>
		<input
			type="text"
			id="userid"
			placeholder="아이디 입력"
			class="form-control"
			:value="props.modelValue"
			@input="addInputTxt"
		/>
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
