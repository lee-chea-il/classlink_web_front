<template>
  <div
    id="modalNoticeData"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">
            열람 기한 및 시간 설정
          </h5>
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
          <div class="notice_time">
            <span class="title">시간 설정</span>
            <span class="dropdown form-inline">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                오전
              </button>
              <span class="dropdown-menu">
                <a class="dropdown-item" href="#">오후</a>
              </span>
            </span>
            <input
              type="text"
              placeholder="09:00"
              value="09:00"
              class="form-control form-inline form-time"
            />
            -
            <div class="dropdown form-inline">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                오전
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">오후</a>
              </div>
            </div>
            <input
              type="text"
              placeholder="11:59"
              value="11:59"
              class="form-control form-inline form-time"
            />
          </div>
          <div class="notice_date">
            <div class="title02">날짜 설정</div>
            <div class="calendar">
              <div class="calendar_box">
                <span class="calendar_text">캘린더 자리</span>
              </div>
            </div>
          </div>
          <div class="check_sec">
            <div class="custom-control custom-checkbox form-inline form-check">
              <input
                id="checkbox01"
                type="checkbox"
                class="custom-control-input"
                checked
              />
              <label class="custom-control-label" for="checkbox01"
                >해당 공지의 열람 기한이 지나도 열람 가능하게 합니다.</label
              >
            </div>
            <div class="custom-control custom-checkbox form-inline form-check">
              <input
                id="checkbox02"
                type="checkbox"
                class="custom-control-input"
                checked
              />
              <label class="custom-control-label" for="checkbox02"
                >해당 공지가 뜰 때 알림을 보냅니다.</label
              >
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">완료</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingNoticeDeadline',
}
</script>

<style></style>
