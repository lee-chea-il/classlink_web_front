<template>
  <div class="right_section">
    <div v-for="(item, idx) in quizList" :key="idx">
      <div v-if="idx === currentIdx" class="info_area">
        <div class="row">
          <div class="quiz_area04">
            <div class="tit">
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  id="rad01"
                  type="radio"
                  name="radA01"
                  class="custom-control-input"
                  :checked="item.quizType === 0"
                  disabled
                />
                <label class="custom-control-label" for="rad01">OX 유형</label>
              </div>
            </div>
            <QuizCustomCheckbox title="O" :className="item.oxAnswer" :idx="0" />
            <div class="cnt">
              <QuizCustomCheckbox
                title="X"
                :className="item.oxAnswer"
                :idx="1"
              />
            </div>
          </div>

          <QuizBrowsePreview @preview="setPreview" />
          <QuizTitle :quiz="item" />
          <QuizArea :quiz="item" />
          <QuizElse :quiz="item" />
        </div>
      </div>
      <div v-if="idx === currentIdx" class="comment_area">
        <div class="tit_area">
          <div class="tit">해설</div>
          <div class="check">
            <div class="custom-control custom-checkbox form-inline">
              <input
                id="checkbox01"
                type="checkbox"
                class="custom-control-input"
                checked
              />
              <label class="custom-control-label" for="checkbox01"
                >정답 및 해설 노출</label
              >
            </div>
          </div>
        </div>
        <div class="cnt_area">
          <textarea id="" rows="3" placeholder="입력한 해설"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuizCustomCheckbox from '../commom/QuizCustomCheckbox.vue'
import QuizArea from './QuizArea.vue'
import QuizBrowsePreview from './QuizBrowsePreview.vue'
import QuizElse from './QuizElse.vue'
import QuizTitle from './QuizTitle.vue'

export default {
  name: 'QuizRightSection',
  components: {
    QuizBrowsePreview,
    QuizTitle,
    QuizArea,
    QuizElse,
    QuizCustomCheckbox,
  },
  props: {
    quizList: {
      type: Array,
      default: () => [],
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setPreview(e, idx) {
      this.$emit('preview', e, idx)
    },
  },
}
</script>

<style></style>
