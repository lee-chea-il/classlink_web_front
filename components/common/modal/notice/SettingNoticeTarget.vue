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
          <div class="notice_box">
            <!-- v-if="
              $route.fullPath === '/management/notice/regist/all' ||
              `/management/notice/modify/all/${$route.params.id}`
            " -->
            <div class="notice_first flex-wrap">
              <div
                class="custom-control custom-checkbox form-inline form-check"
              >
                <input
                  id="allcheck01"
                  :checked="allCheck"
                  type="checkbox"
                  class="custom-control-input"
                  @input="$emit('onClickTargetAllCheck')"
                />
                <label class="custom-control-label" for="allcheck01">
                  전체
                </label>
              </div>

              <div
                v-for="(item, idx) in target"
                :key="idx"
                class="custom-control custom-checkbox form-inline form-check"
              >
                <input
                  :id="idx"
                  :checked="noticeList.targetSetting.includes(item)"
                  type="checkbox"
                  class="custom-control-input"
                  @input="$emit('target-setting', item)"
                />
                <label class="custom-control-label" :for="idx">{{
                  item
                }}</label>
              </div>
            </div>
          </div>

          <!-- <div v-else class="notice_box overflow-auto">
            <div class="notice_first flex-wrap">
              <div
                class="custom-control custom-checkbox form-inline form-check"
              >
                <input
                  id="allcheck02"
                  type="checkbox"
                  class="custom-control-input"
                  checked
                />
                <label class="custom-control-label" for="allcheck02"
                  >전체</label
                >
              </div>

              <div
                v-for="(item, idx) in 7"
                :key="idx"
                class="custom-control custom-checkbox form-inline form-check"
              >
                <input :id="idx" type="checkbox" class="custom-control-input" />
                <label class="custom-control-label" :for="idx">심화</label>
              </div>
            </div>
          </div> -->
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point" data-dismiss="modal">
            <!-- @click="$emit('complete')" -->
            완료
          </button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            <!-- @click="$emit('cancel')" -->
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
    targetList: {
      type: Array,
      default: () => [],
    },
    allCheck: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
