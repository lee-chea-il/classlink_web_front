<template>
  	<div
	  	class="textInput"
    	:class="{ 'has-error': !!errorMessage, success: meta.valid }"
	>
		<VField
			:type="props.txtType"
			:id="props.txtId"
			:placeholder="props.placeholderTxt"
			:class="(props.txtInLine=='inlink')?'form-control form-inline':'form-control'"
			:name="props.txtName"
			:value="props.modelValue"
			@input="addInputTxt"
			@blur="handleBlur"
		/>
		<VErrorMessage :name="props.txtName" class="invalid_text" />
		<!--<div :class="errorMessage?'invalid_text':'valid_text'" v-show="errorMessage || meta.valid">
			{{ errorMessage || successMessage }}
		</div>-->
	</div>
</template>

<script setup lang="ts">
	import { toRef } from 'vue';
	import { useField } from 'vee-validate';
	const props = defineProps({
		modelValue:{
			type:String,
			required:true
		},
		placeholderTxt:{
			type:String,
			default:''
		},
		txtName:{
			type:String,
			default:'',
			required:true
		},
		txtId:{
			type:String,
			required:true
		},
		txtInLine:{
			type:String,
			default:'no',
			required:false
		},
		txtType:{
			type:String,
			default:'text',
			required:false
		},
		successMessage: {
			type: String,
			default: '',
		},
	});
	const txtName = toRef(props, 'txtName');
	const {
		errorMessage,
		handleBlur,
		meta,
	} = useField(txtName);

	const emit = defineEmits(['update:modelValue']);
	const addInputTxt = (e) => {
		emit('update:modelValue', e.target.value)
	}
</script>

<style scoped>
</style>
