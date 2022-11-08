<template>
  <div
    id="modalMyinfo02"
    class="modal fade modal_myinfo02"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">{{ title }}</h5>
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
          <div class="explainType01">
            파일 업로드 후, 이미지를 자르고 '확인’을 클릭하세요. <br />
            업로드 가능한 이미지 파일 형식 : <span>png, jpg, jpeg</span>
            <br />
            영역은 정방형으로 설정됩니다.
          </div>
          <div class="btn_section">
            <button
              class="btn btn_crud_default btn_sec btn_width"
              @click="$emit('uploadBtn-click')"
            >
              {{
                myInfo.profile_image === '' || myInfo.profile_image === null
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
            <!-- <button class="btn btn_crud_default btn_sec" data-dismiss="modal">
              자르기
            </button> -->
          </div>
          <div
            v-if="myInfo.profile_image === '' || myInfo.profile_image === null"
            class="explainType02"
          >
            <a
              class=""
              data-toggle="modal"
              data-target="#modalMyinfo03"
              @click="$emit('uploadBtn-click')"
            >
              <i class="icons_plus_circle_off"></i> 이미지 불러오기
            </a>
          </div>
          <div v-else class="preview-area">
            <img
              class="preview-img"
              :src="
                uploadImageFile === '' ? myInfo.profile_image : uploadImageFile
              "
            />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point" data-dismiss="modal">저장</button>
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
  name: 'ProfileImageModal',
  props: {
    myInfo: {
      type: Object,
      default: () => {},
    },
    eduInfo: {
      type: Object,
      default: () => {},
    },
    uploadImageFile: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
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
  width: 250px;
  height: 250px;
  object-fit: cover;
}
.edit_title {
  margin-top: 20px;
}
</style>
