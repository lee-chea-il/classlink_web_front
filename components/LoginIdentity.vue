<template>
  	<div class="right_section">
		<div id="loginRwrap" class="wrap">
			<div class="title_type2">
				<h2>신분 유형</h2>
			</div>
			<div class="status_section">
				<CustomIdentityBtn :datas='identityDatas[0]' @toggle-radiobox="tooggleRadioBox"/>
				<CustomIdentityBtn :datas='identityDatas[1]' @toggle-radiobox="tooggleRadioBox"/>
				<CustomIdentityBtn :datas='identityDatas[2]' @toggle-radiobox="tooggleRadioBox"/>
				<CustomIdentityBtn :datas='identityDatas[3]' @toggle-radiobox="tooggleRadioBox"/>
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
		{title:'프랜차이즈장',checked:false,id:'radio_1',class:'btn_status_franchise_director'},
		{title:'선생님',checked:false,id:'radio_2',class:'btn_status_teacher'},
		{title:'프랜차이즈 관리자',checked:false,id:'radio_3',class:'btn_status_franchise_administrator'}
	])
	const nextBtnEvent = () => {
		emit("identity-comp",{identityType:identityType});
	}
	const tooggleRadioBox = (cData:any) => {
		nextBtnable.value = true;
		const idx = identityDatas.value.findIndex(
			data => {
				return data.id == cData.id;
			}
		);
		identityType.value = cData.title;
		//console.log('identityType.value',identityType.value);
	}
	const emit = defineEmits(['identity-comp'])
</script>

<style scoped>

</style>
