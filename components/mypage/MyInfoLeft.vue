<template>
  <!-- 왼쪽 영역 -->
  <div class="col-lg-7">
    <div class="info_area left">
      <div class="row">
        <div class="col-lg-4">
          <!-- [개발참조]: 업로드 사진은 <span>의 backgroung-image로 젹용 -->
          <div class="profile_photo">
            <span
              style="background-image: url(../images/sample_profile_photo.jpg)"
            ></span>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="form-group row">
            <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
              >ID</label
            >
            <div class="col">IDIDIDIDIDIDDID</div>
          </div>
          <div class="form-group row">
            <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
              >비밀번호</label
            >
            <div class="col">
              <button
                class="btn btn_crud_default"
                data-toggle="modal"
                data-target="#modalPwchange"
              >
                비밀번호 변경
              </button>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
              >이름</label
            >
            <div class="col">홍길동</div>
          </div>
          <div class="form-group row">
            <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
              >닉네임</label
            >
            <div class="col">홍길동</div>
          </div>
          <div class="form-group row">
            <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
              >신분목록</label
            >
            <div class="col">선생님, 프랜차이즈 관리자</div>
          </div>
          <div class="form-group row">
            <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
              >직위</label
            >
            <div class="col">선생님</div>
          </div>
          <div class="form-group row">
            <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
              >연락처</label
            >
            <div class="col">010-1111-2222</div>
          </div>
          <div class="form-group row">
            <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
              >이메일</label
            >
            <div class="col">example@mail.com</div>
          </div>
          <div class="form-group row">
            <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
              >상태</label
            >
            <div class="col">
              <!-- <button class="btn btn_activated active">활성화</button> -->
              <button class="btn btn_activated">비활성화</button>
            </div>
          </div>
          <!--알림 팝업은 기관장 개설전, 선생님일 때는 hide-->
          <div class="form-group row">
            <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
              >알림 팝업</label
            >
            <div class="col">
              <button class="btn btn_activated active">ON</button>
              <button class="btn btn_activated">OFF</button>
            </div>
          </div>
          <!--알림 팝업-->
        </div>
      </div>
    </div>
  </div>
  <!-- /.왼쪽 영역 -->
</template>
<script>
export default {}
</script>
<style scoped></style>
