<template>
  <div>
    <div v-for="(item, idx) in quizList" :key="idx" class="info_area">
      <div v-if="currentIdx === idx" class="row">
        <div class="quiz_area">
          <div class="tit">
            <div class="custom-control custom-radio custom-control-inline">
              <input
                id="isOx"
                type="radio"
                :name="isCreate ? 'quizType' : 'quizType1'"
                :value="0"
                class="custom-control-input"
                :checked="item.quizType === 0"
                @click="$emit('select-type', $event, idx, 0)"
              />
              <label class="custom-control-label" for="isOx">OX 유형</label>
            </div>
          </div>
          <div class="cnt">
            <button
              class="btn btn_activated"
              :disabled="item.quizType !== 0"
              :class="{ active: item.oxAnswer === 0 }"
              @click="$emit('select-ox', idx, 0)"
            >
              O
            </button>
            <button
              class="btn btn_activated"
              :disabled="item.quizType !== 0"
              :class="{ active: item.oxAnswer === 1 }"
              @click="$emit('select-ox', idx, 1)"
            >
              X
            </button>
          </div>
        </div>
        <div class="quiz_area">
          <div class="tit w-100">난이도</div>
          <div class="cnt">
            <button
              class="btn btn_activated"
              :class="{ active: item.dificultade === 0 }"
              @click="$emit('select-dificultade', idx, 0)"
            >
              상
            </button>
            <button
              class="btn btn_activated"
              :class="{ active: item.dificultade === 1 }"
              @click="$emit('select-dificultade', idx, 1)"
            >
              중
            </button>
            <button
              class="btn btn_activated"
              :class="{ active: item.dificultade === 2 }"
              @click="$emit('select-dificultade', idx, 2)"
            >
              하
            </button>
          </div>
        </div>
        <div class="quiz_area">
          <div class="tit">
            <div class="custom-control custom-radio custom-control-inline">
              <input
                id="isShortAnswer"
                type="radio"
                :name="isCreate ? 'quizType' : 'quizType1'"
                :value="1"
                class="custom-control-input"
                :checked="item.quizType === 1"
                @click="$emit('select-type', $event, idx, 1)"
              />
              <label class="custom-control-label" for="isShortAnswer"
                >주관식 단답형</label
              >
            </div>
          </div>
          <QuizInput
            rules="required_quiz"
            idProp="subjectiveAnswer"
            nameProp="정답"
            :idx="idx"
            :value="item.subjectiveAnswer"
            :disabled="item.quizType !== 1"
            placeholder="정답 입력"
            @change-item="setChangeInput"
          />
        </div>
        <div class="quiz_area">
          <div class="tit">문제당 제한시간</div>
          <QuizInput
            rules="required_quiz"
            idProp="limitTime"
            nameProp="제한시간"
            :idx="idx"
            :value="item.limitTime"
            placeholder="제한시간(초)"
            @change-item="setChangeInput"
          />
        </div>
        <div class="quiz_area">
          <div>
            <div class="custom-control custom-radio custom-control-inline">
              <div class="tit">
                <input
                  id="isSubjective"
                  type="radio"
                  :name="isCreate ? 'quizType' : 'quizType1'"
                  :value="2"
                  class="custom-control-input"
                  :checked="item.quizType === 2"
                  @click="$emit('select-type', $event, idx, 2)"
                />
                <label class="custom-control-label" for="isSubjective"
                  >단답형</label
                >
              </div>
            </div>
          </div>
          <div class="mult">
            <div class="tit stit">정답</div>
            <QuizInput
              rules="required_quiz"
              idProp="shortAnswer"
              nameProp="정답"
              :idx="idx"
              :value="item.shortAnswer"
              placeholder="정답 입력"
              :disabled="item.quizType !== 2"
              @change-item="setChangeInput"
            />
          </div>
          <div class="mult">
            <div class="tit stit">오답</div>
            <QuizInput
              rules="required_quiz"
              idProp="shortWrongAnswer"
              nameProp="오답"
              :idx="idx"
              :value="item.shortWrongAnswer"
              placeholder="오답 입력"
              :disabled="item.quizType !== 2"
              @change-item="setChangeInput"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuizInput from '../common/custom/QuizInput.vue'

export default {
  name: 'QuizFormField',
  components: { QuizInput },
  props: {
    quizList: {
      type: Array,
      default: () => [],
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
    isCreate: { type: Boolean, default: false },
  },
  methods: {
    setChangeInput(e, idx) {
      this.$emit('change-item', e, idx)
    },
  },
}
</script>

<style scoped>
.w-100 {
  width: 118px !important;
}
</style>
