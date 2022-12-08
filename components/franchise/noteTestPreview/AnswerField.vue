<template>
  <div>
    <div class="qa_title row">
      <div class="qa_title_font">
        쪽지시험 | <span>과목이름</span> | <span>홍미미</span> 선생님
      </div>
      <div class="qa_title_font02">
        <span>{{ currentIdx + 1 }}</span
        >/<span>{{ length }}</span>
      </div>
    </div>
    <!-- 쪽지시험 - 미리보기 - 문제 이미지있는 경우 출력 -->
    <div class="question_area04-1">
      <div class="limit_time">
        <span class="limit_time_font"
          >제한시간 : <span>{{ noteTest.limitTime }}</span>
          <span>초</span></span
        >
        <span class="icon_timer"></span>
      </div>
      <div class="qusetion_area04-2">
        <div class="qa_num">
          <div class="qa_num_font">{{ currentIdx + 1 }}</div>
        </div>
        <div
          style="width: 90%; margin: auto"
          class="qa_cnts"
          :class="{ img_field: isImg }"
          v-html="addClassImg(noteTest.problem)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnswerField',
  props: {
    idx: {
      type: Number,
      default: 0,
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
    length: {
      type: Number,
      default: 0,
    },
    noteTest: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isImg() {
      return this.noteTest.problem.includes('<img')
    },
  },
  methods: {
    addClassImg(item) {
      const setP = item.replace(/<p/g, '<p class="set_note_p"')
      return setP.replace(/<img/g, '<img class="fix_img"')
    },
  },
}
</script>

<style scoped>
.img_field {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
