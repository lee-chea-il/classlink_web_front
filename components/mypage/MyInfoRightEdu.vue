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
            $store.state.common.loginIdentity === 'T'
              ? '소속기관 코드'
              : '교육기관 코드'
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
          :class="$store.state.common.loginIdentity === 'T' ? 'hide' : ''"
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
        <div
          v-if="$store.state.common.loginIdentity == 'T'"
          class="form-group row"
        >
          <label for="" class="info_area_title col-form-label">알림 팝업</label>
          <div class="col">
            <button
              class="btn btn_activated"
              :class="userInfo.alarm_yn ? 'active' : ''"
              @click="$emit('click-alarm')"
            >
              ON
            </button>
            <button
              class="btn btn_activated"
              :class="!userInfo.alarm_yn ? 'active' : ''"
              @click="$emit('click-alarm')"
            >
              OFF
            </button>
          </div>
        </div>
      </div>
      <!--프랜차이즈 개설 전-->
      <div
        v-if="
          $store.state.common.loginIdentity == 'I' &&
          $store.state.common.user.fra_code === null
        "
        class="right_square"
      >
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >프랜차이즈</label
          >
          <div class="col">
            <button
              class="btn btn_crud_default_w"
              @click="$emit('click-openFran')"
            >
              개설
            </button>
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
      <div
        v-if="
          $store.state.common.loginIdentity == 'I' &&
          $store.state.common.user.fra_code !== null
        "
        class="right_square fran_height"
      >
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >프랜차이즈 이름</label
          >
          <div class="col">{{ franchiseInfo.fra_name }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >프랜차이즈 연락처</label
          >
          <div class="col">{{ franchiseInfo.fra_phone }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >프랜차이즈 코드</label
          >
          <div class="col">{{ franchiseInfo.fra_code }}</div>
        </div>
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label"
            >프랜차이즈 주소</label
          >
          <div class="col">{{ franchiseInfo.fra_address }}</div>
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
      <!--/.프랜차이즈 개설 후-->

      <div
        v-if="
          $store.state.common.loginIdentity == 'I' &&
          $store.state.common.user.fra_code === null
        "
        class="right_down"
      >
        <div class="form-group row">
          <label for="" class="info_area_title col-form-label">알림 팝업</label>
          <div class="col">
            <button
              class="btn btn_activated"
              :class="userInfo.alarm_yn ? 'active' : ''"
              @click="$emit('click-alarm')"
            >
              ON
            </button>
            <button
              class="btn btn_activated"
              :class="!userInfo.alarm_yn ? 'active' : ''"
              @click="$emit('click-alarm')"
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
    franchiseInfo: {
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
.fran_height {
  height: 272px !important;
}
</style>
