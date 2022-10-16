<template>
  	<div class="right_section">
		<div id="loginRwrap" class="wrap">
			<div class="title_type2">
				<h2>신분 유형</h2>
			</div>
			<div class="status_section">
				<CustomIdentityBtn :datas='identityDatas[0]' @toggle-radiobox="tooggleRadioBox"/>
				<CustomIdentityBtn :datas='identityDatas[1]' @toggle-radiobox="tooggleRadioBox"/>
			</div>
			<CustomNextBtn @nextBtn-click='nextBtnEvent' :btnAbled='nextBtnable'/>
		</div>
    </div>
</template>

<script setup lang="ts">
	import {ref} from 'vue'
	import CustomNextBtn from './CustomNextBtn.vue'
	import CustomIdentityBtn from './CustomIdentityBtn.vue'

	const nextBtnable = ref(false);
	const identityType = ref('');
	const identityDatas = ref([
		{title:'교육기관장',checked:false,id:'radio_0',class:'btn_status_head'},
		{title:'학생',checked:false,id:'radio_1',class:'btn_status_student'}
	])
	const nextBtnEvent = () => {
		let idType = identityType.value;
		if(idType == '학생'){
			emit("identity-comp",{identityType:identityType});
		}else{
			alert('학생으로 체크');
		}
	}
	const tooggleRadioBox = (cData:any) => {
		nextBtnable.value = true;
		const idx = identityDatas.value.findIndex(
			data => {
				return data.id == cData.id;
			}
		);
		identityType.value = cData.title;
		console.log('identityType.value',identityType.value);
	}
	const emit = defineEmits(['identity-comp'])
</script>

<style scoped>

</style>
