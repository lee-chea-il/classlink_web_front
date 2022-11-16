<template>
  <div
    id="modalNoticeTarget"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">공지 대상 설정</h5>
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
          <div
            v-if="$route.fullPath === '/management/notice/regist/all'"
            class="notice_box"
          >
            <div class="notice_first flex-wrap">
              <div
                class="custom-control custom-checkbox form-inline form-check"
              >
                <input
                  id="checkbox01"
                  type="checkbox"
                  class="custom-control-input"
                  checked
                />
                <label class="custom-control-label" for="checkbox01"
                  >전체</label
                >
              </div>

              <div
                v-for="(item, idx) in target"
                :key="idx"
                class="custom-control custom-checkbox form-inline form-check"
              >
                <input
                  :id="idx"
                  type="checkbox"
                  class="custom-control-input"
                  @input="$emit('target-setting', $event)"
                />
                <label class="custom-control-label" :for="idx">{{
                  item
                }}</label>
              </div>
            </div>
          </div>

          <div v-else class="notice_box overflow-auto">
            <div class="notice_first flex-wrap">
              <div
                class="custom-control custom-checkbox form-inline form-check"
              >
                <input
                  id="checkbox01"
                  type="checkbox"
                  class="custom-control-input"
                  checked
                />
                <label class="custom-control-label" for="checkbox01"
                  >전체</label
                >
              </div>

              <div
                v-for="(item, idx) in 7"
                :key="idx"
                class="custom-control custom-checkbox form-inline form-check"
              >
                <input
                  id="checkbox05"
                  type="checkbox"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="checkbox05"
                  >심화</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point" data-dismiss="modal">완료</button>
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
  name: 'SettingNoticeTarget',
  props: {
    noticeList: {
      type: Object,
      default: () => {},
    },
    target: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
