<template>
  <div class="right_section">
    <div id="loginRwrap" class="wrap">
      <div class="title_type2">
        <h2>신분 유형</h2>
      </div>
      <div class="status_section">
        <CustomIdentityBtn
          v-for="(item, index) in identityDataList"
          :key="index"
          :dataList="item"
          @toggle_radiobox="setIdentityType"
        />
      </div>
      <!-- [개발참조]:class="disabled"제거시 활성 -->
      <CustomNextBtn :btnAbled="nextBtnAble" @nextBtn-click="nextBtnEvent" />
    </div>
  </div>
</template>

<script>
import CustomNextBtn from '@/components/common/custom/CustomNextBtn.vue'
import CustomIdentityBtn from '@/components/common/custom/CustomIdentityBtn.vue'
export default {
  name: 'SignUpSelect',
  components: { CustomIdentityBtn, CustomNextBtn },
  data() {
    return {
      nextBtnAble: true,
      identityType: '',
      identityDataList: [
        {
          id: 'radio_0',
          title: '교육기관장',
          class: 'btn_status_head',
          checked: true,
        },
        // {
        //   id: 'radio_1',
        //   title: '학생',
        //   class: 'btn_status_student',
        //   checked: false,
        // },
      ],
    }
  },
  methods: {
    nextBtnEvent() {
      const idType = this.identityType
      if (idType === '학생') {
        alert('교육기관장으로 체크')
        // this.identityType = true
      } else {
        this.$router.push('/signup/detail')
      }
    },
    setIdentityType(cData) {
      this.nextBtnAble = true
      this.identityType = cData.title
    },
  },
}
</script>

<style scoped>
.custom-control-label::after {
  left: -1.65rem !important;
}
</style>
