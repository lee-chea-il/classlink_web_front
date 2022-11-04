<template>
  <div class="modal-body">
    <div class="explainType01">
      파일 업로드 후, 이미지를 자르고 '확인’을 클릭하세요. <br />
      업로드 가능한 이미지 파일 형식 : <span>png, jpg, jpeg</span>
      <br />
      영역은 정방형으로 설정됩니다.
    </div>
    <div class="btn_section">
      <button class="btn btn_crud_default btn_sec btn_width">
        이미지 불러오기
      </button>
      <input
        id="upload-input"
        type="file"
        accept="image/png, image/jpeg"
        @change="onFileSelected"
      />
      <!-- <button class="btn btn_crud_default btn_sec" data-dismiss="modal">
              자르기
            </button> -->
    </div>
    <div class="explainType02">
      <a
        class=""
        data-toggle="modal"
        data-target="#modalMyinfo03"
        @click="onClickInputButton"
      >
        <i class="icons_plus_circle_off"></i> 이미지 불러오기
      </a>
    </div>
    <div class="preview-area">
      <!-- <img
        class="preview-img"
        :src="uploadImageFile === '' ? myInfo.profile_image : uploadImageFile"
      /> -->
    </div>
  </div>
</template>
<script>
export default { name: 'UploadImageInput' }
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
</style>
