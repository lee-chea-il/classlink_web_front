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
              :isCreate="isCreate"
              @select-answer="$emit('select-answer', currentIdx, $event)"
              @delete-example="setDeleteExample"
            />
            <!-- /.문제의 보기  -->
            <!-- [개발참조] 보기 4까지 생성되었을 때는 추가 버튼 보이지 않음 -->
            <div
              v-if="noteTestList[currentIdx].ask_view?.length < 4"
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
                :class="{ active: item.level === '상' }"
                @click="$emit('change-level', idx, '상')"
              >
                상
              </button>
              <button
                class="btn btn_activated"
                :class="{ active: item.level === '중' }"
                @click="$emit('change-level', idx, '중')"
              >
                중
              </button>
              <button
                class="btn btn_activated"
                :class="{ active: item.level === '하' }"
                @click="$emit('change-level', idx, '하')"
              >
                하
              </button>
            </div>
          </div>
          <div class="quiz_area">
            <div class="tit time">문제당 제한시간</div>
            <NoteTestInput
              rules="required_quiz"
              idProp="limit_time"
              nameProp="제한시간"
              :idx="idx"
              :value="item.limit_time"
              placeholder="제한시간(분)"
              @change-item="setChangeInput"
            />
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
            <ValidationProvider
              v-slot="{ errors }"
              :rules="item.isCommentary ? 'required_quiz' : ''"
            >
              <div class="cnt_area">
                <textarea
                  id="commentary"
                  class="textarea"
                  name="해설"
                  :value="item.commentary"
                  :disabled="!item.isCommentary"
                  rows="4"
                  placeholder="입력한 해설"
                  @input="$emit('change-item', $event, idx)"
                ></textarea>
              </div>
              <div class="error_message">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import CustomDescEditor from '../common/custom/CustomDescEditor.vue'
import NoteTestInput from '../common/custom/NoteTestInput.vue'

export default {
  name: 'ExampleList',
  components: {
    CustomDescEditor,
    NoteTestInput,
    ValidationProvider,
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
    isCreate: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setDeleteExample(idx, targetIdx) {
      this.$emit('delete-example', idx, targetIdx)
    },
    setChangeInput(e, idx) {
      this.$emit('change-item', e, idx)
    },
  },
}
</script>

<style scoped>
.tit.time {
  font-size: 12px !important;
}

.error_message {
  margin: 8px 0 0 8px !important;
  font-size: 10.5px;
  color: #fb5353;
  text-align: left;
}

.textarea {
  padding: 10px;
}
</style>
