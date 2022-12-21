<template>
  <div class="background">
    <div id="pdfSave" class="pdf_save">
      <div v-for="(item, idx) in quizList" :key="idx" class="question_area">
        <div class="qa_title row">
          <div class="qa_title_font">
            쪽지시험 | <span>과목이름</span> | <span>홍미미</span> 선생님
          </div>
          <div class="qa_title_font02">
            <span>{{ idx + 1 }}</span
            >/<span>{{ quizList.length }}</span>
          </div>
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
            <div class="qa_num">
              <div class="qa_num_font">{{ idx + 1 }}</div>
            </div>
            <div class="qa_cnts" v-html="item.problem"></div>
          </div>
        </div>

        <!-- 쪽지시험 - 미리보기 - 답변 이미지없는 경우 -->
        <div v-show="item.type === 0" class="answer_area row">
          <div v-show="item.oxAnswer === 1" class="icon_o"></div>
          <div v-show="item.oxAnswer === 0" class="icon_o_correct"></div>
          <!-- [개발참조] 정답일때 출력되는 아이콘 -->
          <div v-show="item.oxAnswer === 0" class="icon_xx"></div>
          <div v-show="item.oxAnswer === 1" class="icon_xx_correct"></div>
        </div>

        <div v-show="item.type === 1" class="answer_area03 row">
          <div class="aa_question row">
            <div class="aa_number_select">
              <div class="aa_num_font01">정답입력</div>
            </div>
            <div class="aa_result_select">
              <div class="aa_correct">{{ item.subjectiveAnswer }}</div>
            </div>
          </div>
        </div>

        <div v-show="item.type === 2" class="answer_area02 row">
          <div class="aa_question row">
            <!-- [개발참조]문제 선택 시 출력  -->
            <div class="aa_number_select">
              <div class="aa_num_font01">1</div>
            </div>
            <!-- [개발참조]정답일때 출력 : class="aa_num_correct"  -->
            <div class="aa_result_select">
              <div class="aa_correct">{{ item.shortAnswer }}</div>
            </div>
          </div>

          <div class="aa_question row">
            <div class="aa_number">
              <div class="aa_num_font01">2</div>
            </div>
            <!-- [개발참조]오답일때 출력 : class="aa_wrong" -->
            <div class="aa_result">
              <div class="aa_wrong">{{ item.shortWrongAnswer }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrintQuizModal',
  props: {
    quizList: {
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
