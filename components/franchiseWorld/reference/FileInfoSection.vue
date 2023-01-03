<template>
  <div class="info_section">
    <CustomTitle title="파일 이름" :value="fileInfo.title" />
    <CustomTitle title="설명" :value="fileInfo.description" />
    <div class="line"></div>

    <CustomSubTitle
      title="자료 구분"
      :value="setDivision(fileInfo.datatable_type)"
    />
    <CustomSubTitle
      v-show="pageRoot !== 'world'"
      title="과목"
      :value="fileInfo.subject"
    />
    <CustomSubTitle
      title="콘텐츠 유형"
      :value="setContentType(fileInfo.datatype)"
    />
    <CustomSubTitle title="공개 여부" :value="setOpen(fileInfo)" />
    <CustomSubTitle title="경로" :value="uploadInfo?.saveFolderPath" />
  </div>
</template>

<script>
import CustomSubTitle from '../common/custom/CustomSubTitle.vue'
import CustomTitle from '../common/custom/CustomTitle.vue'

export default {
  name: 'InfoSection',
  components: { CustomTitle, CustomSubTitle },
  props: {
    fileInfo: { type: Object, default: () => {} },
    uploadInfo: { type: Object, default: () => {} },
    pageRoot: { type: String, default: '' },
  },
  methods: {
    setOpen(item) {
      const education = item.public_open_yn ? '교육기관 ON' : '교육기관 OFF'
      const reference = item.open_yn ? '공개자료실 ON' : '공개자료실 OFF'
      return `${education} / ${reference}`
    },
    setContentType(type) {
      if (type === '01') return '동영상(MP4)'
      else if (type === '02') return '문서(PDF)'
      else if (type === '03') return '퀴즈'
      else if (type === '04') return '쪽지시험'
      else if (type === '05') return 'YOUTUBE'
      else if (type === '06') return 'URL'
      else if (type === '07') return '음악(MP4)'
      else return null
    },
    setDivision(id) {
      if (id === 'ID') return '교육기관'
      else if (id === 'FD') return '프랜차이즈'
      else if (id === 'PD') return '공개 자료실'
      else if (id === 'MD') return '내 자료실'
      else return null
    },
  },
}
</script>

<style scoped>
#modalLessonView .div_cont02 {
  padding: 20px 0;
}
</style>
