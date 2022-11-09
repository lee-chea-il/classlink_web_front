<template>
  <div class="info_section">
    <CustomTitle title="파일 이름" :value="fileInfo.name" />
    <CustomTitle title="설명" :value="fileInfo.desc" />
    <div class="line"></div>

    <CustomSubTitle title="자료 구분" :value="fileInfo.fileDivision" />
    <CustomSubTitle title="콘텐츠 유형" :value="fileInfo.fileType" />
    <CustomSubTitle title="공개 여부" :value="setOpen(fileInfo)" />
    <CustomSubTitle title="과목" :value="fileInfo.subject" />
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
  },
  methods: {
    setOpen(item) {
      return item.isOpenEducation ? 'ON' : 'OFF'
    },
  },
}
</script>

<style></style>
