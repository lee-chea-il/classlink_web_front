<template>
  <div class="reading_section modal_dataquiz note_divide">
    <LeftSection
      :noteTestList="selectData.noteTestList"
      :currentIdx="currentIdx"
      @change-number="setChangeNumber"
      @pagination="setPagination"
      @preview="setPreview"
    />

    <div class="right_section">
      <div v-for="(item, idx) in selectData.noteTestList" :key="idx">
        <div v-if="idx === currentIdx" class="info_area">
          <div class="row">
            <div class="col-12">
              <div class="etcbtn_area">
                <button
                  class="btn btn_crud_default btn_first"
                  @click="$emit('preview', 'browse', 'first')"
                >
                  처음부터<br />미리보기
                </button>
                <button
                  class="btn btn_crud_default btn_present"
                  @click="$emit('preview', 'browse')"
                >
                  현재부터<br />미리보기
                </button>
              </div>
            </div>
            <div class="col-12">
              <div class="tit">정답</div>
              <select
                id="answer"
                name="answer"
                class="cnt"
                :value="item.answer"
              >
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
                <option :value="5">5</option>
              </select>
            </div>
            <div class="col-12">
              <div class="tit">난이도</div>
              <div class="cnt difficult">
                <button
                  class="btn btn_activated"
                  disabled
                  :class="{ active: item.dificultade === 0 }"
                >
                  상
                </button>
                <button
                  class="btn btn_activated"
                  disabled
                  :class="{ active: item.dificultade === 1 }"
                >
                  중
                </button>
                <button
                  class="btn btn_activated"
                  disabled
                  :class="{ active: item.dificultade === 2 }"
                >
                  하
                </button>
              </div>
            </div>
            <div class="col-12">
              <div class="tit">제한시간</div>
              <div class="cnt">
                <input
                  type="text"
                  placeholder="문제당 제한시간(초)"
                  class="form-control"
                  disabled
                  :value="item.limitTime"
                />
              </div>
            </div>
            <div class="col-12 comment_area">
              <div class="tit_area">
                <div class="tit">해설</div>
                <div class="check">
                  <div class="custom-control custom-checkbox form-inline">
                    <input
                      id="checkbox01"
                      type="checkbox"
                      class="custom-control-input"
                      :checked="item.isCommentary"
                    />
                    <label class="custom-control-label" for="checkbox01"
                      >정답 및 해설 노출</label
                    >
                  </div>
                </div>
              </div>
              <div class="cnt_area">
                <textarea
                  id=""
                  rows="3"
                  placeholder="입력한 해설"
                  :value="item.commentary"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSection from './LeftSection.vue'

export default {
  name: 'LeftField',
  components: { LeftSection },
  props: {
    selectData: {
      type: Object,
      default: () => {},
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setChangeNumber(e, idx) {
      this.$emit('change-number', e, idx)
    },
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
    },
    setPreview(e, idx) {
      this.$emit('preview', e, idx)
    },
  },
}
</script>

<style></style>
