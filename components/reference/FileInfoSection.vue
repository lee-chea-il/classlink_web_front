<template>
  <div class="info_section">
    <CustomTitle title="파일 이름" :value="fileInfo.name" />
    <CustomTitle title="설명" :value="fileInfo.desc" />
    <div class="line"></div>

    <CustomSubTitle title="자료 구분" :value="fileInfo.fileDivision" />
    <CustomSubTitle
      v-show="pageRoot !== 'world'"
      title="과목"
      :value="fileInfo.subject"
    />
    <CustomSubTitle title="콘텐츠 유형" :value="fileInfo.fileType" />
    <CustomSubTitle title="공개 여부" :value="setOpen(fileInfo)" />
    <CustomSubTitle title="경로" :value="fileInfo.savePath" />
  </div>
</template>

<script>
import CustomSubTitle from './commom/CustomSubTitle.vue'
import CustomTitle from './commom/CustomTitle.vue'

export default {
  name: 'InfoSection',
  components: { CustomTitle, CustomSubTitle },
  props: {
    fileInfo: {
      type: Object,
      default: () => {},
    },
    pageRoot: {
      type: String,
      default: '',
    },
  },
  methods: {
    setOpen(item) {
      const education = item.isOpenEducation ? '교육기관 ON' : '교육기관 OFF'
      const reference = item.isOpenReference
        ? '공개자료실 ON'
        : '공개자료실 OFF'
      return `${education} / ${reference}`
    },
  },
}
</script>

<style scoped>
#modalLessonView .div_cont02 {
  padding: 20px 0;
}
</style>
