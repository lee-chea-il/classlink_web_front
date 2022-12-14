<template>
  <!-- 왼쪽 영역 -->
  <div class="left_area">
    <div class="info_area left">
      <div class="row">
        <div class="pp_area">
          <!-- [개발참조]: 업로드 사진은 <span>의 backgroung-image로 젹용 -->
          <div
            class="profile_photo"
            :style="
              myInfo.profile_image === '' || myInfo.profile_image === null
                ? {
                    'background-image': `url(${sample_photo})`,
                  }
                : {
                    'background-image': `url(${myInfo.profile_image})`,
                  }
            "
          >
            <!-- <span
              style="background-image: url(../images/sample_profile_photo.jpg)"
            ></span> -->
            <!-- <img :src="myInfo.profile_image" class="profile_img" /> -->
          </div>
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
                data-toggle="modal"
                data-target="#modalPwchange"
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
            <div class="col">{{ myInfo.identity }}</div>
          </div>
          <div class="form-group row">
            <label for="" class="info_area_title col-form-label">직위</label>
            <div class="col">{{ myInfo.position }}</div>
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
                class="btn btn_activated"
                :class="userInfo.mem_status === 'Y' ? 'active' : ''"
              >
                {{ myInfo.state ? '활성화' : '비활성화' }}
              </button>
              <!-- <button class="btn btn_activated">비활성화</button> -->
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
    userInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      sample_photo: require('@/assets/images/sample_profile_photo.jpg'),
    }
  },
  created() {
    console.log(this.myInfo)
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
}
</style>
