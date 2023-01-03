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
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="강의계획서 열람" @close="$emit('close')" />
          <div class="modal-body">
            <div class="title_area row">
              <span class="notice_tit">제목</span>
              <span class="notice_title">{{ syllabus.lep_title }}</span>
              <span class="notice_day02"
                ><span>{{ dateFormat(syllabus.lep_registration_date) }}</span
                >(최종수정일 <span>2022.12.09</span>)
              </span>
              <span class="notice_writer">{{ syllabus.mem_name }}</span>
            </div>

            <div v-if="syllabus.fileList.length !== 0" class="file_info">
              <span class="file_icon"></span>
              일반 첨부파일 {{ syllabus.fileList.length }}개(10KB)
              <span class="save">모두 저장</span>
              <div
                v-for="(item, idx) in syllabus.fileList"
                :key="idx"
                class="file_name"
              >
                {{ item.lpa_file }}
              </div>
            </div>
            <VueEditor
              :value="syllabus.lep_content"
              :editorOptions="editorOptions"
              disabled
            />
          </div>
          <!-- div class="modal-body" -->
          <!-- [개발참조] 강의계획서 열람 시 출력되는 버튼
					미리보기에는 출력되지않음 -->
          <div class="modal-footer">
            <button class="btn btn_crud_point" @click="$emit('update')">
              수정
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
import ModalHeader from '@/components/common/ModalHeader.vue'
export default {
  name: 'LecturePlanDetailModal',
  components: { ModalHeader },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    syllabus: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      lecturePlan: {
        id: 0,
        course_id: 0,
        title: '성격심리학 레슨1 강의계획서0',
        writer: '홍길동 선생님',
        created_at: '2022.07.10',
        open: false,
        views: 3,
        contents: '성격심리학 레슨1 강의계획서입니다. 수업에 참고해 주세요',
      },
      editorOptions: {
        modules: {
          toolbar: false,
          imageDrop: false,
          imageEdit: false,
        },
      },
    }
  },
  methods: {
    dateFormat(date) {
      if (date) {
        return date.substr(0, 10)
      }
    },
  },
}
</script>
<style scoped>
.notice_day02 {
  width: 31% !important;
}
</style>
<style lang="postcss" scoped>
/deep/.quillWrapper {
  margin-top: 15px !important;
  width: 97% !important;
  height: 100%;
  margin: 0 auto;
  border: 0.4px solid rgba(167, 169, 172, 0.4);
  border-radius: 5px !important;
}
/deep/.ql-toolbar,
/deep/.ql-container {
  border-width: 0 !important;
}
/deep/.ql-toolbar {
  border-bottom: 0.4px solid rgba(167, 169, 172, 0.4) !important;
}
/deep/.ql-editor {
  max-height: 400px;
  min-height: 400px;
  font-size: 15px;
}
</style>
