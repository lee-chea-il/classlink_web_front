<template>
  <div class="right_area">
    <div class="question_area">
      <div class="qa_title row">
        <div class="qa_title_font">
          퀴즈 | <span>과목이름</span> | <span>홍미미</span> 선생님
        </div>
        <div class="qa_title_font02">
          <span>{{ currentIdx + 1 }}</span
          >/<span>{{ length }}</span>
        </div>
      </div>

      <div v-for="(quiz, idx) in itemList" :key="idx">
        <div v-if="idx === currentIdx" class="question_area04-1">
          <div class="limit_time">
            <span class="limit_time_font"
              >제한시간 : <span>{{ quiz.limit_time }}</span>
              <span>초</span></span
            >
            <span class="icon_timer"></span>
          </div>
          <div>
            <div class="qusetion_area04-2">
              <div class="qa_num">
                <div class="qa_num_font">
                  {{ currentIdx + 1 }}
                </div>
              </div>
              <div
                style="width: 90%; margin: auto"
                class="qa_cnts"
                :class="{ img_field: isImg(quiz.question) }"
                v-html="addClassImg(quiz.question)"
              ></div>
            </div>
          </div>
        </div>

        <div v-if="idx === currentIdx">
          <!-- ox 유형일때 -->
          <div v-if="quiz.type === 'OX'" class="answer_area row">
            <div v-if="quiz.correct === 'O'">
              <div class="icon_o_correct"></div>
              &emsp;&emsp;&emsp;&emsp;
              <div class="icon_xx"></div>
            </div>
            <div v-if="quiz.correct === 'X'">
              <div class="icon_o"></div>
              <div class="icon_xx_correct"></div>
            </div>
          </div>

          <!-- 주관식 단답형일때 -->
          <div v-if="quiz.type === 'EQ'" class="answer_area03 row">
            <div class="aa_question row">
              <div class="aa_number_select">
                <div class="aa_num_font01">정답</div>
              </div>
              <div class="aa_result_select">
                <div class="aa_correct">
                  {{ quiz.correct }}
                </div>
              </div>
            </div>
          </div>

          <!-- 단답형일때 -->
          <div v-if="quiz.type === 'SA'" class="answer_area02 row">
            <div class="aa_question row">
              <!-- [개발참조]문제 선택 시 출력  -->
              <div class="aa_number_select">
                <div class="aa_num_font01">정답</div>
              </div>
              <!-- [개발참조]정답일때 출력 : class="aa_num_correct"  -->
              <div class="aa_result_select">
                <div class="aa_correct">{{ quiz.correct }}</div>
              </div>
            </div>
            <div class="aa_question row">
              <div class="aa_number">
                <div class="aa_num_font01">오답</div>
              </div>
              <div class="aa_result">
                <div class="aa_wrong">
                  {{ quiz.wrong }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewRightSection',
  props: {
    currentIdx: {
      type: Number,
      default: 0,
    },
    itemList: {
      type: Array,
      default: () => [],
    },
    length: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    isImg(quizItem) {
      return quizItem.includes('<img')
    },
    addClassImg(item) {
      const setP = item.replace(/<p/g, '<p class="set_note_p"')
      return setP.replace(/<img/g, '<img class="fix_img"')
    },
  },
}
</script>

<style scoped>
#modalPreviewQuiz .right_area,
#modalPreviewTest .right_area {
  width: 67%;
  margin: 0;
}
.img_field {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
