<template>
  <!-- 왼쪽 영역 -->
  <div class="left_area">
    <div class="info_area left">
      <div class="row">
        <div class="pp_area">
          <div
            class="profile_photo"
            :style="
              userInfo.mem_img == null
                ? {
                    'background-image': `url(${sample_photo})`,
                  }
                : {
                    'background-image': `url(${memImageUrl})`,
                  }
            "
          ></div>
        </div>
        <div class="info_area02">
          <div class="form-group row">
            <label for="" class="info_area_title col-form-label">ID</label>
            <div class="col">{{ userInfo.mem_id }}</div>
          </div>
          <div class="form-group row">
            <label for="" class="info_area_title col-form-label"
              >비밀번호</label
            >
            <div class="col">
              <button
                class="btn btn_crud_default"
                @click="$emit('click-updatePw')"
              >
                비밀번호 변경
              </button>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="info_area_title col-form-label">이름</label>
            <div class="col">{{ userInfo.mem_name }}</div>
          </div>
          <div class="form-group row">
            <label for="" class="info_area_title col-form-label">닉네임</label>
            <div class="col">{{ userInfo.mem_nickname }}</div>
          </div>
          <div class="form-group row">
            <label for="" class="info_area_title col-form-label"
              >신분목록</label
            >
            <div class="col">
              <span>{{ identityNames }}</span>
            </div>
          </div>
          <div class="form-group row">
            <label for="" class="info_area_title col-form-label">직위</label>
            <div class="col">{{ positionNames }}</div>
          </div>
          <div class="form-group row">
            <label for="" class="info_area_title col-form-label">연락처</label>
            <div class="col">{{ userInfo.mem_phone }}</div>
          </div>
          <div class="form-group row">
            <label for="" class="info_area_title col-form-label">이메일</label>
            <div class="col">{{ userInfo.mem_email }}</div>
          </div>
          <div class="form-group row">
            <label for="" class="info_area_title col-form-label">상태</label>
            <div class="col">
              <button
                class="btn btn_activated none_cursor"
                :class="userInfo.mem_status === 'R' ? 'active' : ''"
              >
                {{ userInfo.mem_status === 'R' ? '활성화' : '비활성화' }}
              </button>
              <!-- <button class="btn btn_activated">비활성화</button> -->
            </div>
          </div>
          <div
            v-if="
              $store.state.common.user.fra_code !== null ||
              $store.state.common.loginIdentity === 'T'
            "
            class="form-group row"
          >
            <label for="" class="info_area_title col-form-label"
              >알림 팝업</label
            >
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
          <!--알림 팝업은 기관장 개설전, 선생님일 때는 hide-->
          <!-- <div class="form-group row">
            <label for="" class="info_area_title col-form-label">알림 팝업</label>
            <div class="col">
              <button
                class="btn btn_activated"
                :class="myInfo.alarm ? 'active' : ''"
                @click="onClickAlarmBtn"
              >
                ON
              </button>
              <button
                class="btn btn_activated"
                :class="!myInfo.alarm ? 'active' : ''"
                @click="onClickAlarmBtn"
              >
                OFF
              </button>
            </div>
          </div> -->
          <!--알림 팝업-->
        </div>
      </div>
    </div>
  </div>
  <!-- /.왼쪽 영역 -->
</template>
<script>
export default {
  name: 'MyInfoLeft',
  props: {
    myInfo: { type: Object, default: null },
    user: {
      type: Object,
      default: () => {},
    },
    userInfo: {
      type: Object,
      default: () => {},
    },
    identityNames: {
      type: String,
      default: '',
    },
    positionNames: {
      type: String,
      default: '',
    },
    memImageUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      sample_photo: require('@/assets/images/sample_profile_photo.jpg'),
    }
  },
  methods: {
    onClickAlarmBtn() {
      this.$emit('alarmBtn-click')
    },
  },
}
</script>
<style scoped>
.profile_photo {
  background-size: cover;
  background-position: center;
  border: 0.4px solid rgb(193 193 193) !important;
}
.none_cursor {
  cursor: default !important;
}
</style>
