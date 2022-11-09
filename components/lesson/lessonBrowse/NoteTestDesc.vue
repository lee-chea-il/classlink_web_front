<template>
  <div>
    <div v-for="(test, idx) in reference.noteTestList" :key="idx">
      <div v-if="idx === currentIdx" class="quiz_sec01 row">
        <div class="left_area02 left col-lg-6">
          <CustomTitle title="유형" value="쪽지시험" />
          <CustomTitle title="정답" :value="test.answer" />
          <CustomTitle title="난이도" :value="setDificultade(test)" />
          <CustomTitle title="제한시간" :value="test.limitTime" />
        </div>
        <div class="right_area02 right col-lg-6">
          <div class="row">
            <label for="" class="col-5 col-lg-5 col-sm-4 font">해설</label>
            <div class="col">
              <input
                id=""
                type="checkbox"
                class="custom-control-input"
                :checked="test.isCommentary"
              />
              <label class="custom-control-label check" for="checkbox01"
                >정답 및 해설 노출</label
              >
            </div>
          </div>
          <div class="row">
            <input
              type="text"
              placeholder="입력한 해설"
              :value="test.commentary"
              class="form-control form-inline"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="div_line01"></div>

    <CustomTitle title="파일 이름" :value="reference.name" />
    <CustomTitle title="설명" :value="reference.desc" />
  </div>
</template>

<script>
import CustomTitle from '../custom/CustomTitle.vue'

export default {
  name: 'NoteTestDesc',
  components: { CustomTitle },
  props: {
    reference: {
      type: Object,
      default: () => {},
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setType(item) {
      if (item.quizType === 0) {
        return 'OX 퀴즈'
      } else if (item.quizType === 1) {
        return '주관식 단답형'
      } else {
        return '단답형'
      }
    },
    setAnswer(item) {
      return item.oxAnswer === 0 ? 'O' : 'X'
    },
    setDificultade(item) {
      return item.dificultade === 1
        ? '상'
        : item.dificultade === 2
        ? '중'
        : '하'
    },
  },
}
</script>
