<template>
  <div>
    <div v-for="(test, idx) in reference.noteTestList" :key="idx">
      <div v-if="idx === currentIdx" class="quiz_sec01 row">
        <div class="left_area02 left col-lg-6">
          <CustomTitle title="유형" value="쪽지시험" />
          <CustomTitle title="정답" :value="test.correct_no" />
          <CustomTitle title="난이도" :value="setDificultade(test)" />
          <CustomTitle title="제한시간" :value="test.limit_time" />
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

    <div class="div_line01"></div>
    <div class="row name" style="margin-top: 10px">
      <label for="" class="col-3 col-lg-3 col-sm-2">파일 이름</label>
      <div class="col">
        <span>{{ reference.name }}</span>
      </div>
    </div>

    <div class="row">
      <label for="" class="col-3 col-lg-3 col-sm-2">설명</label>
      <div class="col">
        <span>{{ reference.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTitle from '../common/custom/CustomTitle.vue'

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
      if (item.type === 0) {
        return 'OX 퀴즈'
      } else if (item.type === 1) {
        return '주관식 단답형'
      } else {
        return '단답형'
      }
    },
    setAnswer(item) {
      return item.oxAnswer === 0 ? 'O' : 'X'
    },
    setDificultade(item) {
      return item.level === 1 ? '상' : item.level === 2 ? '중' : '하'
    },
  },
}
</script>
