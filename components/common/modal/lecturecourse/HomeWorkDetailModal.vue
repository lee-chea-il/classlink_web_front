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
              <div class="file_name">성격심리학 강의계획서.hwp</div>
            </div>

            <div class="content_area">
              <!-- <input type="textarea" class="content_area" /> -->
              <div class="notice_content">
                {{ homeWork.contents }}
              </div>
              <div class="box">
                <div class="thumbnail">
                  <i class="icons_thumbnail"></i>
                </div>
              </div>
            </div>
          </div>
          <!-- div class="modal-body" -->
          <!-- [개발참조] 강의계획서 열람 시 출력되는 버튼
					미리보기에는 출력되지않음 -->
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
    }
  },
  created() {},
}
</script>
<style scoped></style>
