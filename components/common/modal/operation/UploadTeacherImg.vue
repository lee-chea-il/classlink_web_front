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
            <h5 id="exampleModalLabel" class="modal-title">
              프로필 이미지 등록
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
            <div class="explainType01">
              파일 업로드 후, 이미지를 자르고 '확인’을 클릭하세요. <br />
              업로드 가능한 이미지 파일 형식 : <span>png, jpg, jpeg</span>
              <br />
              자르기 영역은 정방형으로 설정됩니다.
            </div>
            <div class="btn_section">
              <button class="btn btn_crud_default btn_sec">
                이미지 불러오기
              </button>
              <button class="btn btn_crud_default btn_sec" data-dismiss="modal">
                자르기
              </button>
            </div>
            <div class="explainType02">
              <a
                class=""
                data-toggle="modal"
                data-target="#modalMyinfo03"
                data-dismiss="modal"
              >
                <i class="icons_plus_circle_off"></i> 이미지 불러오기
              </a>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">저장</button>
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
    name: 'UploadTeacherImg',
}
</script>
<style scoped>
    
</style>