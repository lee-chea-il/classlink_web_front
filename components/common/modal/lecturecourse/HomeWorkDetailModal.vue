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
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="과제 열람" @close="$emit('close')" />

          <div class="modal-body">
            <div class="title_area row">
              <span class="notice_tit">제목</span>
              <span class="notice_title">{{ homeWork.title }}</span>
              <span class="notice_day02">{{ homeWork.created_at }}</span>
              <span class="notice_writer">{{ homeWork.writer }}</span>
            </div>

            <div class="file_info">
              <span class="file_icon"></span>
              일반 첨부파일 1개(10KB)
              <span class="save">모두 저장</span>
              <div class="file_name">성격심리학 과제파일.hwp</div>
            </div>
            <VueEditor
              :value="homeWork.contents"
              :editorOptions="editorOptions"
              disabled
            />
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point" @click="$emit('update')">
              수정
            </button>
            <button class="btn btn_crud_default" data-dismiss="modal">
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
  name: 'HomeWorkDetailModal',
  components: { ModalHeader },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      homeWork: {
        id: 0,
        course_id: 0,
        title: '성격심리학 레슨1 과제입니당',
        writer: '이성국 선생님',
        created_at: '2022.07.10',
        open: false,
        views: 3,
        contents: '성격심리학 레슨1 과제입니다. 지금 당장 제출하세요.',
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
  created() {},
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
