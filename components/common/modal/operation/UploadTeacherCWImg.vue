<template>
  <Transition name="modal">
    <div
      v-if="open"
      id="modalMyinfo04"
      class="modal modal_myinfo04 modal-mask index"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              {{ isInsImage ? '교육기관 이미지 등록' : 'CW 이미지 등록' }}
            </h5>
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
            <div class="explainType01">
              파일 업로드 후, 이미지를 자르고 '확인’을 클릭하세요. <br />
              업로드 가능한 이미지 파일 형식 : <span>png, jpg, jpeg</span>
              <br />
              자르기 영역은 가로형으로 설정됩니다.
            </div>
            <div class="btn_section">
              <button
                class="btn btn_crud_default btn_sec btn_width"
                @click="$emit('click-upload')"
              >
                {{
                  imageInfo === '' || imageInfo === null
                    ? '이미지 불러오기'
                    : '이미지 교체하기'
                }}
              </button>
              <input
                id="upload-input"
                type="file"
                accept="image/png, image/jpeg"
                @change="$emit('selected-file', $event)"
              />
            </div>
            <div
              v-if="uploadImageFile === '' && imageInfo === null"
              class="explainType02"
            >
              <a
                class=""
                data-toggle="modal"
                data-target="#modalMyinfo05"
                @click="$emit('click-upload')"
              >
                <i class="icons_plus_circle_off"></i> 이미지 불러오기
              </a>
            </div>
            <div v-else class="preview-area">
              <img
                class="preview-img"
                :src="uploadImageFile === '' ? imageInfo : uploadImageFile"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point" @click="$emit('confirm')">
              저장
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
  name: 'UploadTeacherCWImg',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    teacherInfo: {
      type: Object,
      default: () => {},
    },
    uploadImageFile: {
      type: String,
      default: '',
    },
    register: {
      type: Boolean,
      default: false,
    },
    imageInfo: {
      type: String,
      default: '',
    },
    isInsImage: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.btn_width {
  width: 400px;
}
#upload-input {
  visibility: hidden;
}
.explainType02 {
  width: 400px;
  height: 250px;
  padding: 110px 0 !important;
}
.preview-area {
  width: 400px;
  height: 250px;
  background-color: #f9f9fb;
  margin: 0 auto;
}
.explainType02 a {
  top: 125px;
}
.preview-img {
  width: 400px;
  height: 250px;
  object-fit: cover;
}
.edit_title {
  margin-top: 20px;
}
.index {
  z-index: 999 !important;
}
</style>
