<template>
  <div class="use_guide_set">
    <div class="use_guide_set02">
      <div v-for="(item, idx) in infoList" :key="idx" class="use_guide">
        <div :class="item.icon"></div>
        <div class="use_guide_font">{{ item.title }}</div>
        <div class="use_guide_sq">
          사용가이드 보기
          <i class="icons_arrow_r"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainGuide',
  data() {
    return {
      infoList: [
        { id: 1, title: '선생님', link: '', icon: 'icon_teacher' },
        { id: 2, title: '교육기관장', link: '', icon: 'icon_inst' },
        { id: 3, title: '학생·학부모', link: '', icon: 'icon_parstu' },
        { id: 4, title: '출결', link: '', icon: 'icon_cal' },
      ],
    }
  },
}
</script>

<style scoped>
.web_only_main .use_guide_set .use_guide_set02 {
  max-width: 700px !important;
  margin: auto !important;
  flex-wrap: wrap !important;
}
</style>
