<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalBatchregi"
      class="modal ac_manage_std modal-mask modal-index"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">학생 일괄 등록</h5>
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
            <div class="title01">STEP 1</div>
            <div class="content02">
              엑셀 파일을 다운로드 하여 학생 정보를 입력해주세요.
            </div>
            <div class="content">
              (내용 형식을 수정하면 등록이 불가능합니다.)
            </div>

            <!-- :href="getImgUrl('~/assets/images/mypage/test.xlsx')" -->
            <a
              class="file_down"
              download=""
              ><span class="icon_download"></span>파일 다운로드</a
            >

            <div class="divid_section">
              <div class="title02">STEP 2</div>
              <div class="content03">
                내용 입력된 엑셀 파일을 첨부해 주세요.
              </div>
              <!-- <form
              id="uploadForm"
              action="upload"
              method="post"
              enctype="multipart/form-data"
            > -->
              <input
                id="upload-file"
                type="file"
                name="file"
                accept=".xls,.xlsx"
                style="display: none"
                @change="$emit('selected-file', $event)"
              />
              <input
                id="input00"
                type="text"
                class="form-control form-inline"
                placeholder="엑셀 파일을 업로드하세요."
                :value="uploadFileName"
                readonly
                @click="$emit('upload')"
              />
              <div class="button" @click="$emit('upload')">
                <span class="icon_link"></span>파일 첨부
              </div>
              <!-- </form> -->
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn_crud_point"
              data-toggle="modal"
              data-target="#modalBatchregi02"
            >
              등록
            </button>
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
  name: 'BatchRegistrationModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    uploadFileName: {
      type: String,
      default: null,
    },
  },
  // methods: {
  //   getImgUrl(pic) {
  //     const context = require.context('~/assets/', false, /^(?!.*\.(?:md)$).*/)
  //     return context('./' + pic)
  //   },
  // },
}
</script>
<style scoped>
.modal-index {
  z-index: 999;
}
.form-control:read-only {
  background-color: white;
}
</style>
