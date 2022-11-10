<template>
  <div>
    <div v-for="(item, idx) in noteTestList" :key="idx">
      <div v-if="idx === currentIdx" class="info_area">
        <div class="row">
          <div class="quiz_area02">
            <!-- 문제의 보기  -->
            <CustomDescEditor
              :itemList="noteTestList[currentIdx]"
              :currentIdx="currentIdx"
              @select-answer="$emit('select-answer', currentIdx, $event)"
              @delete-example="setDeleteExample"
            />
            <!-- /.문제의 보기  -->
            <!-- [개발참조] 보기 4까지 생성되었을 때는 추가 버튼 보이지 않음 -->
            <div
              v-if="noteTestList[currentIdx].exampleList.length < 4"
              class="example"
            >
              <button
                class="btn icons_plus_circle_off"
                @click="$emit('add-example', currentIdx)"
              ></button>
            </div>
          </div>
          <div class="quiz_area">
            <div class="tit">난이도</div>
            <div class="cnt">
              <button
                class="btn btn_activated"
                :class="{ active: item.dificultade === 0 }"
                @click="$emit('change-dificultade', idx, 0)"
              >
                상
              </button>
              <button
                class="btn btn_activated"
                :class="{ active: item.dificultade === 1 }"
                @click="$emit('change-dificultade', idx, 1)"
              >
                중
              </button>
              <button
                class="btn btn_activated"
                :class="{ active: item.dificultade === 2 }"
                @click="$emit('change-dificultade', idx, 2)"
              >
                하
              </button>
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
          <div class="quiz_area02 comment_area">
            <div class="tit_area">
              <div class="tit">해설</div>
              <div class="check">
                <div class="custom-control custom-checkbox form-inline">
                  <input
                    id="isCommentary"
                    name="isCommentary"
                    type="checkbox"
                    class="custom-control-input"
                    :value="item.isCommentary"
                    :checked="item.isCommentary"
                    @input="$emit('change-item', $event, idx)"
                  />
                  <label class="custom-control-label" for="isCommentary"
                    >정답 및 해설 노출</label
                  >
                </div>
              </div>
            </div>
            <div class="cnt_area">
              <textarea
                id="commentary"
                name="commentary"
                :value="item.commentary"
                rows="3"
                placeholder="입력한 해설"
                @input="$emit('change-item', $event, idx)"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomDescEditor from '@/components/reference/CustomDescEditor.vue'

export default {
  name: 'ExampleList',
  components: {
    CustomDescEditor,
  },
  props: {
    noteTestList: {
      type: Array,
      default: () => [],
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setDeleteExample(idx, targetIdx) {
      this.$emit('delete-example', idx, targetIdx)
    },
  },
}
</script>

<style></style>
