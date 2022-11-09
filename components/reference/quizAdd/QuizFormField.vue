<template>
  <div>
    <div v-for="(item, idx) in quizList" :key="item.id" class="info_area">
      <div v-if="currentIdx === idx" class="row">
        <div class="quiz_area">
          <div class="tit">
            <div class="custom-control custom-radio custom-control-inline">
              <input
                id="isOx"
                type="radio"
                name="isOx"
                class="custom-control-input"
                :checked="item.quizType === 0"
                @change="$emit('select-type', idx, 0)"
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
          <div class="tit">난이도</div>
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
                name="isShortAnswer"
                class="custom-control-input"
                :checked="item.quizType === 1"
                @change="$emit('select-type', idx, 1)"
              />
              <label class="custom-control-label" for="isShortAnswer"
                >주관식 단답형</label
              >
            </div>
          </div>
          <div class="cnt">
            <input
              id="subjectiveAnswer"
              type="text"
              placeholder="정답 입력"
              class="form-control form-inline"
              name="subjectiveAnswer"
              :value="item.subjectiveAnswer"
              :disabled="item.quizType !== 1"
              @input="$emit('change-item', $event, idx)"
            />
          </div>
        </div>
        <div class="quiz_area">
          <div class="tit">제한시간</div>
          <div class="cnt">
            <input
              id="limitTime"
              type="text"
              name="limitTime"
              :value="item.limitTime"
              placeholder="문제당 제한시간(초)"
              class="form-control form-inline"
              @input="$emit('change-item', $event, idx)"
            />
          </div>
        </div>
        <div class="quiz_area">
          <div>
            <div class="tit">
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  id="isSubjective"
                  type="radio"
                  name="isSubjective"
                  class="custom-control-input"
                  :checked="item.quizType === 2"
                  @change="$emit('select-type', idx, 2)"
                />
                <label class="custom-control-label" for="isSubjective"
                  >단답형</label
                >
              </div>
            </div>
          </div>
          <div class="mult">
            <div class="tit stit">정답</div>
            <div class="cnt">
              <input
                id="shortAnswer"
                type="text"
                placeholder="정답 입력"
                name="shortAnswer"
                :value="item.shortAnswer"
                class="form-control form-inline"
                :disabled="item.quizType !== 2"
                @input="$emit('change-item', $event, idx)"
              />
            </div>
          </div>
          <div class="mult">
            <div class="tit stit">오답</div>
            <div class="cnt">
              <input
                id="shortWrongAnswer"
                name="shortWrongAnswer"
                :value="item.shortWrongAnswer"
                type="text"
                placeholder="오답 입력"
                class="form-control form-inline"
                :disabled="item.quizType !== 2"
                @input="$emit('change-item', $event, idx)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizFormField',
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
}
</script>

<style></style>
