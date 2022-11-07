<template>
  <div class="info_section">
    <div class="cont">
      <span class="title">파일 이름</span>
      <span>{{ fileInfo.name }}</span>
    </div>
    <div class="cont">
      <div class="title">설명</div>
      <span>{{ fileInfo.desc }}</span>
    </div>
    <div class="line"></div>

    <div class="cont02">
      <div class="title">자료 구분</div>
      <span class="title03-1">{{ fileInfo.fileDivision }}</span>
    </div>
    <div class="cont02">
      <div class="title">콘텐츠 유형</div>
      <span class="title04-1">{{ fileInfo.fileType }}</span>
    </div>
    <div class="cont02">
      <div class="title">공개 여부</div>
      <span class="title05-1">{{
        fileInfo.isOpenEducation ? 'ON' : 'OFF'
      }}</span>
    </div>
    <div class="cont02">
      <div class="title">과목</div>
      <span class="title06-1">{{ fileInfo.subject }}</span>
    </div>
    <div class="cont02">
      <div class="title">경로</div>
      <span class="title07-1">{{ fileInfo.savePath }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoSection',
  props: {
    fileInfo: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
