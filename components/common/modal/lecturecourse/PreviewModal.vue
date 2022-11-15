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
          <div class="modal-body">
            <div class="title_area row">
              <span class="notice_tit">제목</span>
              <span class="notice_title">{{ lecturePlan.title }}</span>
              <span class="notice_day02">{{ lecturePlan.created_at }}</span>
              <span class="notice_writer">{{ lecturePlan.writer }}</span>
            </div>

            <div class="file_info">
              <span class="file_icon"></span>
              일반 첨부파일 1개(10KB)
              <span class="save">모두 저장</span>
              <div class="file_name">성격심리학 강의계획서.hwp</div>
            </div>

            <div class="content_area">
              <div class="notice_content">
                {{ lecturePlan.contents }}
              </div>
              <div class="box">
                <div class="thumbnail">
                  <i class="icons_thumbnail"></i>
                </div>
              </div>
            </div>
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
  },
}
</script>
<style scoped>
.modal-body {
  padding-bottom: 35px;
}
</style>
