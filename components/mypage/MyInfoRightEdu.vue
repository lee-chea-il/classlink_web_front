<template>
  <!-- 오른쪽 영역 -->
  <!--교육기관장-->
  <div class="right_area">
    <div class="info_area right">
      <div class="right_up">
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >교육기관 이름</label
          >
          <div class="col">{{ institutionInfo.ins_name }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >교육기관 연락처</label
          >
          <div class="col">{{ institutionInfo.ins_phone }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label">{{
            myInfo.position === '선생님' ? '소속기관 코드' : '교육기관 코드'
          }}</label>
          <div class="col">{{ institutionInfo.ins_code }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >교육기관 주소</label
          >
          <div class="col">{{ institutionInfo.ins_address1 }}</div>
        </div>
        <div
          class="form-group row"
          :class="myInfo.position === '선생님' ? 'hide' : ''"
        >
          <label for="" class="info_area_title col-form-label"
            >교육기관 정보</label
          >
          <div class="col">
            <button
              v-if="!isInstitutionFlag"
              class="btn btn_crud_default"
              @click="$emit('click-openIns')"
            >
              등록
            </button>
            <button
              v-else
              class="btn btn_crud_default"
              @click="$emit('click-updateIns')"
            >
              수정
            </button>
          </div>
        </div>
      </div>
      <!--프랜차이즈 개설 전-->
      <div class="right_square">
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >프랜차이즈</label
          >
          <div class="col">
            <button class="btn btn_crud_default_w">개설</button>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
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
      <!--프랜차이즈 개설 후-->
      <!-- <div class="right_square">
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >프랜차이즈 이름</label
          >
          <div class="col">{{ franInfo.name }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >프랜차이즈 연락처</label
          >
          <div class="col">{{ franInfo.tel }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >프랜차이즈 코드</label
          >
          <div class="col">{{ franInfo.code }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >프랜차이즈 주소</label
          >
          <div class="col">{{ franInfo.address }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
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
      </div> -->
      <!--/.프랜차이즈 개설 후-->
      <!--알림 팝업은 기관장 개설전, 선생님일 때는 hide-->
      <div class="right_down">
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label">알림 팝업</label>
          <div class="col">
            <button
              class="btn btn_activated"
              :class="userInfo.alarm_yn === 'Y' ? 'active' : ''"
              @click="$emit('alarmBtn-click')"
            >
              ON
            </button>
            <button
              class="btn btn_activated"
              :class="userInfo.alarm_yn === 'N' ? 'active' : ''"
              @click="$emit('alarmBtn-click')"
            >
              OFF
            </button>
          </div>
        </div>
      </div>
      <!--알림 팝업-->
    </div>
  </div>
  <!--선생님-->

  <!-- /.오른쪽 영역 -->
</template>
<script>
export default {
  name: 'MyInfoRightEdu',
  props: {
    userInfo: {
      type: Object,
      default: () => {},
    },
    institutionInfo: {
      type: Object,
      default: () => {},
    },
    myInfo: {
      type: Object,
      default: null,
    },
    eduInfo: {
      type: Object,
      default: () => {},
    },
    franInfo: {
      type: Object,
      default: () => {},
    },
    isInstitutionFlag: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.info_area {
  min-height: 522.2px;
}
</style>
