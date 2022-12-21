o
<template>
  <div class="background">
    커리큘럼 배정
    <div id="pdfSaveNoteTest" class="pdf_save">
      <div v-for="(item, idx) in noteTestList" :key="idx" class="question_area">
        <div class="qa_title row">
          <div class="qa_title_font">
            쪽지시험 | <span>과목이름</span> | <span>홍미미</span> 선생님
          </div>
          {{ item }}
          <div class="qa_title_font02"><span>1</span>/<span>10</span></div>
        </div>
        <!-- 쪽지시험 - 미리보기 - 문제 이미지있는 경우 출력 -->
        <div class="question_area04-1">
          <div class="limit_time">
            <span class="limit_time_font"
              >제한시간 : <span>{{ item.limit_time }}</span>
              <span>초</span></span
            >
            <span class="icon_timer"></span>
          </div>
          <div class="qusetion_area04-2">
            <div class="qa_num"><div class="qa_num_font">1</div></div>
            <div class="qa_cnts" v-html="item.problem"></div>
          </div>
        </div>

        <!-- 쪽지시험 - 미리보기 - 답변 이미지없는 경우 -->
        <div class="answer_area04">
          <div
            v-for="(children, index) in noteTestList[idx].exampleList"
            :key="index"
            class="aa_question row"
          >
            <!-- [개발참조]문제 선택 시 출력  -->
            <div class="aa_number_select">
              <div class="aa_num_font01">{{ index + 1 }}</div>
            </div>
            <!--  [개발참조]정답일때 출력 : class="aa_num_correct"  -->
            <div class="aa_result_select">
              <div class="aa_correct" v-html="children.example"></div>
            </div>
          </div>
        </div>
        <!-- div class="question_area" -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrintNoteTestModal',
  props: {
    noteTestList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0%;
  top: 0%;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  z-index: 99;
}
.pdf_save .question_area:not(:first-of-type) {
  padding-top: 18px;
}
</style>
