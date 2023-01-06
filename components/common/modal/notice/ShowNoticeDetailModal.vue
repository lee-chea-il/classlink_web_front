<template>
  <Transition name="modal">
    <div
      v-if="show"
      id="modalNoticeView"
      class="modal double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">상세보기</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="title_area row notice_detail">
              <span class="notice_day">{{
                setFilterStatus(
                  data.brd_time_sdate.substr(0, 10),
                  data.brd_time_edate.substr(0, 10)
                )
              }}</span>
              <span class="notice_title">{{ data.brd_title }}</span>
              <span class="notice_day02">
                <span>{{
                  data.brd_registration_date.replaceAll('-', '.').substr(0, 10)
                }}</span>
                (최종수정일<span>2022-12-09</span>)
              </span>
              <span class="notice_writer">{{ data.mem_name }} 선생님</span>
            </div>

            <div class="file_info">
              <span class="file_icon"></span>
              일반 첨부파일 1개(10KB)
              <span class="save">모두 저장</span>
              <div class="file_name">컴플레인 응대 매뉴얼.hwp</div>
            </div>

            <VueEditor
              :value="data.brd_content"
              :editorOptions="editorOptions"
              disabled
            />
          </div>
          <!-- div class="modal-body" -->
          <div class="modal-footer">
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              @click="$emit('close')"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'ShowNoticeDetailModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => {},
    },
    setFilterStatus: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      editorOptions: {
        modules: {
          toolbar: false,
          imageDrop: false,
          imageEdit: false,
        },
      },
    }
  },
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
/deep/.ql-editor {
  max-height: 400px;
}
/deep/.ql-container.ql-snow {
  border: 0;
}
</style>
