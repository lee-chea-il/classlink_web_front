<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalNoticeView"
      class="modal modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">질문 열람</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="title_area row notice_detail">
              <span class="notice_tit">제목</span>
              <span class="notice_title">{{
                data.selectQuestionBox?.qtb_title
              }}</span>
              <span class="notice_day02"
                ><span>{{
                  data.selectQuestionBox?.qtb_registration_date
                    .substr(0, 10)
                    .replaceAll('-', '.')
                }}</span>
                (최종수정일
                <span>{{
                  data.answerList === null
                    ? '-'
                    : data.selectQuestionBox?.qtb_update_date
                        .substr(0, 10)
                        .replaceAll('-', '.')
                }}</span
                >)
              </span>
              <span class="notice_writer">{{
                data.selectQuestionBox.mem_name
              }}</span>
            </div>

            <div class="file_info">
              <span class="file_icon"></span>
              일반 첨부파일
              {{
                data.questionBoxFile === null
                  ? 0
                  : data.questionBoxFile?.length
              }}개(10KB)
              <span class="save">모두 저장</span>
              <div v-if="data.questionBoxFile !== null" class="file_name">
                <div v-for="(item, idx) in data.questionBoxFile" :key="idx">
                  {{ item.qba_file }}
                </div>
              </div>
            </div>

            <VueEditor
              :value="data.selectQuestionBox?.qtb_description"
              :editorOptions="editorOptions"
              disabled
            />
          </div>
          <!-- div class="modal-body" -->
          <div class="modal-footer">
            <button class="btn btn_crud_point" @click="$emit('move', data)">
              답변하기
            </button>
            <button class="btn btn_crud_default" @click="$emit('close')">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'QuestionViewModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      editorOptions: {
        modules: {
          toolbar: false,
          imageDrop: false,
          imageEdit: false,
        },
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
/deep/.quillWrapper {
  margin-top: 15px !important;
  width: 97% !important;
  height: 100%;
  margin: 0 auto;
  border: 0.4px solid rgba(167, 169, 172, 0.4);
  border-radius: 5px !important;
}
/deep/.ql-editor {
  max-height: 400px;
}
/deep/.ql-container.ql-snow {
  border: 0;
}
</style>
