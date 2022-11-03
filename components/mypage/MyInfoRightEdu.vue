<template>
  <!-- 오른쪽 영역 -->
  <div class="col-lg-5">
    <div class="info_area right">
      <div class="right_up">
        <div class="form-group row">
          <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
            >교육기관 이름</label
          >
          <div class="col">{{ eduInfo.name }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
            >교육기관 연락처</label
          >
          <div class="col">{{ eduInfo.tel }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
            >교육기관 코드</label
          >
          <div class="col">{{ eduInfo.code }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
            >교육기관 주소</label
          >
          <div class="col">{{ eduInfo.address }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
            >교육기관 정보</label
          >
          <div class="col">
            <button
              class="btn btn_crud_default"
              data-toggle="modal"
              data-target="#modalInstinfo01"
            >
              수정
            </button>
          </div>
        </div>
      </div>
      <!--프랜차이즈 개설 후-->
      <div class="right_square">
        <div class="form-group row">
          <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
            >프랜차이즈 이름</label
          >
          <div class="col">{{ franInfo.name }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
            >프랜차이즈 연락처</label
          >
          <div class="col">{{ franInfo.tel }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
            >프랜차이즈 코드</label
          >
          <div class="col">{{ franInfo.code }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
            >프랜차이즈 주소</label
          >
          <div class="col">{{ franInfo.address }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="col-4 col-lg-5 col-sm-3 col-form-label"
            >프랜장/기관장</label
          >
          <div class="col">
            <button
              class="btn btn_crud_default_w"
              data-toggle="modal"
              data-target="#modalStatus"
            >
              신분 전환
            </button>
          </div>
        </div>
      </div>
      <!--/.프랜차이즈 개설 후-->
    </div>
  </div>
  <!-- /.오른쪽 영역 -->
</template>
<script>
export default {
  name: 'MyInfoRightEdu',
  props: {
    eduInfo: {
      type: Object,
      default: null,
    },
    franInfo: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style scoped>
.info_area {
  min-height: 522.2px;
}
</style>
