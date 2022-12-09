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
            <div class="title_area row">
              <span class="notice_tit">제목</span>
              <span class="notice_title">컴플레인 이슈사항 공지드립니다.</span>
              <span class="notice_day02">2022.08.02</span>
              <span class="notice_writer">서유진</span>
            </div>

            <div class="file_info">
              <span class="file_icon"></span>
              일반 첨부파일 1개(10KB)
              <span class="save">모두 저장</span>
              <div class="file_name">컴플레인 응대 매뉴얼.hwp</div>
            </div>

            <div class="content_area">
              <div class="notice_content">
                이 부분 답이 왜 3번인지 모르겠습니다.
              </div>
              <div class="box">
                <div class="thumbnail">
                  <i class="icons_thumbnail"></i>
                </div>
              </div>
            </div>
          </div>
          <!-- div class="modal-body" -->
          <div class="modal-footer">
            <NuxtLink to="/class/learningBox/reply" class="btn btn_crud_point"
              >답변하기</NuxtLink
            >
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
  },
}
</script>

<style></style>
