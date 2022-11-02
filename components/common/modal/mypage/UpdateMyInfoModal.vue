<template>
    <div
      id="modalMyinfo"
      class="modal fade modal_myinfo"
      tabindex="-1"
      aria-labelledby="modalMyinfo"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="modalMyinfo" class="modal-title">내 정보 수정</h5>
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
            <div class="profile_images_area">
              <button
                type="button"
                class="btn icons_camera_gray"
                data-toggle="modal"
                data-target="#modalMyinfo04"
                data-dismiss="modal"
              ></button>
              <!-- [개발참조]: 업로드 사진은 <span>의 backgroung-image로 젹용 -->
              <div class="profile_photo">
                <span
                  style="
                    background-image: url(../images/sample_profile_photo.jpg);
                  "
                ></span>
                <button
                  type="button"
                  class="btn icons_camera"
                  data-toggle="modal"
                  data-target="#modalMyinfo02"
                  data-dismiss="modal"
                ></button>
              </div>
            </div>
            <div class="divid_section row">
              <!-- 왼쪽 영역 -->
              <div class="col-lg-6">
                <div class="info_area left">
                  <div class="form-group row">
                    <label for="" class="col-4 col-lg-4 col-sm-3 col-form-label"
                      >이름</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="홍길동"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="col-4 col-lg-4 col-sm-3 col-form-label"
                      >닉네임</label
                    >
                    <div class="col">
                      <div class="group">
                        <input
                          type="text"
                          placeholder=""
                          class="form-control"
                          value="홍길동"
                        />
                        <div class="custom-control custom-checkbox custom-sm">
                          <input
                            id="checkbox01"
                            type="checkbox"
                            class="custom-control-input"
                            checked
                          />
                          <label class="custom-control-label" for="checkbox01"
                            >이름과 동일</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.왼쪽 영역 -->
              <!-- 오른쪽 영역 -->
              <div class="col-lg-6">
                <div class="info_area right">
                  <div class="form-group row">
                    <label for="" class="col-4 col-lg-4 col-sm-3 col-form-label"
                      >연락처</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="010-1111-2222"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="" class="col-4 col-lg-4 col-sm-3 col-form-label"
                      >이메일</label
                    >
                    <div class="col">
                      <input
                        type="text"
                        placeholder=""
                        class="form-control"
                        value="example@mail.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn_section">
              <button class="btn btn_crud_point_center" data-dismiss="modal">
                저장하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'UpdateMyInfoModal',
}
</script>
<style scoped>
    
</style>