<template>
  <div
    id="modalNoticeView"
    :class="`modalNoticeView${idx}`"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">상세보기</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="title_area row">
            <span class="notice_day">D-3</span>
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
            <div class="notice_content">{{ content }}</div>
            <div class="box">
              <div class="thumbnail">
                <i class="icons_thumbnail"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- div class="modal-body" -->
        <div class="modal-footer">
          <button class="btn btn_crud_default" data-dismiss="modal">
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowNoticeDetailModal',
  props: {
    content: {
      type: String,
      default: '',
    },
    idx: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
