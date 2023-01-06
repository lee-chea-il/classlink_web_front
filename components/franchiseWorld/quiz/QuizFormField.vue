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
                :name="isCreate ? 'type' : 'type1'"
                value="OX"
                class="custom-control-input"
                :checked="item.type === 'OX'"
                @click="$emit('select-type', $event, idx, 'OX')"
              />
              <label class="custom-control-label" for="isOx">OX 유형</label>
            </div>
          </div>
          <div v-if="item.type === 'OX'" class="cnt">
            <button
              class="btn btn_activated"
              :disabled="item.type !== 'OX'"
              :class="{ active: item.correct === 'O' }"
              @click="$emit('select-ox', idx, 'O')"
            >
              O
            </button>
            <button
              class="btn btn_activated"
              :disabled="item.type !== 'OX'"
              :class="{ active: item.correct === 'X' }"
              @click="$emit('select-ox', idx, 'X')"
            >
              X
            </button>
          </div>
          <div v-else class="cnt">
            <button class="btn btn_activated" disabled>O</button>
            <button class="btn btn_activated" disabled>X</button>
          </div>
        </div>
        <div class="quiz_area">
          <div class="tit w-100">난이도</div>
          <div class="cnt">
            <button
              class="btn btn_activated"
              :class="{ active: item.level === '상' }"
              @click="$emit('select-level', idx, '상')"
            >
              상
            </button>
            <button
              class="btn btn_activated"
              :class="{ active: item.level === '중' }"
              @click="$emit('select-level', idx, '중')"
            >
              중
            </button>
            <button
              class="btn btn_activated"
              :class="{ active: item.level === '하' }"
              @click="$emit('select-level', idx, '하')"
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
                :name="isCreate ? 'type' : 'type1'"
                value="EQ"
                class="custom-control-input"
                :checked="item.type === 'EQ'"
                @click="$emit('select-type', $event, idx, 'EQ')"
              />
              <label class="custom-control-label" for="isShortAnswer"
                >주관식 단답형</label
              >
            </div>
          </div>
          <QuizInput
            v-if="item.type === 'EQ'"
            rules="required_quiz"
            idProp="correct"
            nameProp="정답"
            :idx="idx"
            :value="item.correct"
            :disabled="item.type !== 'EQ'"
            placeholder="정답 입력"
            @change-item="setChangeInput"
          />
          <div v-else class="cnt">
            <input
              type="text"
              placeholder="정답 입력"
              class="form-control form-inline"
              disabled
            />
          </div>
        </div>
        <div class="quiz_area">
          <div class="tit">문제당 제한시간</div>
          <QuizInput
            rules="required_quiz"
            idProp="limit_time"
            nameProp="제한시간"
            :idx="idx"
            :value="item.limit_time"
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
                  :name="isCreate ? 'type' : 'type1'"
                  value="SA"
                  class="custom-control-input"
                  :checked="item.type === 'SA'"
                  @click="$emit('select-type', $event, idx, 'SA')"
                />
                <label class="custom-control-label" for="isSubjective"
                  >단답형</label
                >
              </div>
            </div>
          </div>
          <div v-if="item.type === 'SA'" class="mult">
            <div class="tit stit">정답</div>
            <QuizInput
              rules="required_quiz"
              idProp="correct"
              nameProp="정답"
              :idx="idx"
              :value="item.correct"
              placeholder="정답 입력"
              :disabled="item.type !== 'SA'"
              @change-item="setChangeInput"
            />
          </div>
          <div v-if="item.type === 'SA'" class="mult">
            <div class="tit stit">오답</div>
            <QuizInput
              rules="required_quiz"
              idProp="wrong"
              nameProp="오답"
              :idx="idx"
              :value="item.wrong"
              placeholder="오답 입력"
              :disabled="item.type !== 'SA'"
              @change-item="setChangeInput"
            />
          </div>
          <div v-else>
            <div class="mult">
              <div class="tit stit">정답</div>
              <div class="cnt">
                <input
                  type="text"
                  placeholder="정답 입력"
                  class="form-control form-inline"
                  disabled
                />
              </div>
            </div>
            <div class="mult">
              <div class="tit stit">오답</div>
              <div class="cnt">
                <input
                  type="text"
                  placeholder="오답 입력"
                  class="form-control form-inline"
                  disabled
                />
              </div>
            </div>
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
