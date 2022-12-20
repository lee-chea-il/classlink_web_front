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
          <div class="modal-header" @click="$emit('close')">
            <h5 id="exampleModalLabel" class="modal-title">
              {{ title }} 미리보기
            </h5>
            <button type="button" class="close">
              <i class="icons_close"></i>
            </button>
          </div>
          <div v-if="syllabus !== undefined" class="modal-body" div>
            <div class="title_area row">
              <span class="notice_tit">제목</span>
              <span class="notice_title">{{ syllabus.lep_title }}</span>
              <span class="notice_day02">{{ today }}</span>
              <span class="notice_writer">{{
                $store.state.common.user.mem_name
              }}</span>
            </div>

            <div class="file_info">
              <span class="file_icon"></span>
              일반 첨부파일 1개(10KB)
              <span class="save">모두 저장</span>
              <div class="file_name">성격심리학 강의계획서.hwp</div>
            </div>
            <VueEditor
              :value="syllabus.lep_content"
              :editorOptions="editorOptions"
              disabled
            />
          </div>
          <div v-if="homeWork !== undefined" class="modal-body">
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
              <div class="file_name">성격심리학 강의계획서.hwp</div>
            </div>
            <VueEditor
              :value="homeWork.contents"
              :editorOptions="editorOptions"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: 'PreviewModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    lecturePlan: {
      type: Object,
      default: () => {},
    },
    homeWork: {
      type: Object,
      default: () => {},
    },
    syllabus: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      contents: this.previewContents,
      // editor
      editorOptions: {
        modules: {
          toolbar: false,
          imageDrop: false,
          imageEdit: false,
        },
      },
      today: new Date(),
    }
  },
  created() {
    console.log(this.lecturePlan, this.homeWork)
    const year = this.today.getFullYear()
    const month = ('0' + (this.today.getMonth() + 1)).slice(-2)
    const day = ('0' + this.today.getDate()).slice(-2)
    const dateString = year + '-' + month + '-' + day
    this.today = dateString
  },
}
</script>
<style scoped>
.modal-body {
  padding-bottom: 35px;
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
/deep/.ql-editor {
  max-height: 400px;
}
</style>
