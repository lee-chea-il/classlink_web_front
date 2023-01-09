<template>
  <div class="tab-content depth03 ac_manage_frc ac_manage_course">
    <div class="tab-pane active">
      <!-- [개발참조]수강하는 강의코스가 없을때  -->
      <div v-if="lectureCourseList === null" class="page_nodata">
        <p>수강하는 강의 코스가 없습니다.</p>
        <button
          class="btn btn_regi_franchise"
          data-toggle="modal"
          data-target="#modalFrcsignup"
        >
          프랜차이즈 가입하기
        </button>
      </div>
      <div v-else>
        <div class="course_line">
          <div class="dropdown form-inline">
            <button
              class="btn dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              {{
                selectFlag === 0
                  ? '모든 코스'
                  : selectFlag === 1
                  ? '운영중인 코스'
                  : '종료된 코스'
              }}
            </button>
            <div class="dropdown-menu">
              <div class="dropdown-item cursor" @click="selectAllCourse">
                모든 코스
              </div>
              <div class="dropdown-item cursor" @click="selectTrueCourse">
                운영중인 코스
              </div>
              <div class="dropdown-item cursor" @click="selectfalseCourse">
                종료된 코스
              </div>
            </div>
          </div>

          <div class="input-group input-search form-inline">
            <input
              type="text"
              class="form-control"
              placeholder="반/강의이름/선생님 검색"
              @input="onChangeInput"
              @keyup.enter="searchCourse"
            />
            <div class="input-group-append">
              <button
                class="btn icons_search_off"
                type="button"
                @click="searchCourse"
              ></button>
            </div>
          </div>
        </div>

        <div class="course_center">
          <div class="cards_section">
            <div class="cards_section02">
              <!-- [개발참조] 반이 5개 이상일때는 강좌이름에 class="course_more"을 붙이기 -->
              <!-- [개발참조]주담임 색상 class="card course_bgcolor01" -->
              <a v-for="(item, idx) in lectureCourseList" :key="idx">
                <div
                  class="card course_bgcolor01 cursor"
                  @click="onClickLecture(item.lec_idx)"
                >
                  <div
                    class="course_tit"
                    :class="item.class_info.length > 4 ? 'course_more' : ''"
                  >
                    {{ item.lec_title }}
                  </div>
                  <div
                    v-for="(
                      time_item, time_idx
                    ) in item.lecture_time_list.slice(0, 2)"
                    :key="`time_${time_idx}`"
                    class="course_time"
                  >
                    {{ setLectureDay(time_item) }}
                  </div>
                  <div
                    v-for="(sub_item, sub_idx) in item.class_info"
                    :key="sub_idx"
                    class="course_info"
                  >
                    {{ sub_item.csm_name }} | {{ sub_item.mem_name }} 선생님
                  </div>
                </div>
              </a>
            </div>
            <div v-if="subTeacherCourseList.length > 0" class="cards_section02">
              <a v-for="(item, idx) in subTeacherCourseList" :key="idx">
                <div class="card course_bgcolor02">
                  <div
                    class="course_tit"
                    :class="item.class_info.length > 4 ? 'course_more' : ''"
                  >
                    {{ item.lec_title }}
                  </div>
                  <div
                    v-for="(
                      time_item, time_idx
                    ) in item.lecture_time_list.slice(0, 2)"
                    :key="`time_${time_idx}`"
                    class="course_time"
                  >
                    {{ setLectureDay(time_item) }}
                  </div>
                  <div
                    v-for="(sub_item, sub_idx) in item.class_info"
                    :key="sub_idx"
                    class="course_info"
                  >
                    {{ sub_item.csm_name }} | {{ sub_item.mem_name }} 선생님
                  </div>
                </div>
              </a>
            </div>
            <!-- [개발참조] 종료된코스 예 class="card standby" -->
            <div v-if="endLectureCourseList.length > 0" class="standby_set">
              <div class="standby_font">종료된 코스</div>
              <div class="standby_set02">
                <div
                  v-for="(item, idx) in endLectureCourseList"
                  :key="idx"
                  class="card standby"
                >
                  <div
                    class="course_tit"
                    :class="item.class_info.length > 4 ? 'course_more' : ''"
                  >
                    {{ item.lec_title }}
                  </div>
                  <div
                    v-for="(
                      time_item, time_idx
                    ) in item.lecture_time_list.slice(0, 2)"
                    :key="`time_${time_idx}`"
                    class="course_time"
                  >
                    {{ setLectureDay(time_item) }}
                  </div>
                  <div
                    v-for="(sub_item, sub_idx) in item.class_info"
                    :key="sub_idx"
                    class="course_info"
                  >
                    {{ sub_item.csm_name }} | {{ sub_item.mem_name }} 선생님
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 설명 모달 -->
    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
  </div>
</template>
<script>
import { apiLectureCourse } from '~/services'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
export default {
  name: 'LectureCourse',
  components: { ModalDesc },
  data() {
    return {
      // 유저 정보
      insCode: '',
      userIdx: 0,
      // 강의코스
      lectureCourseList: [],
      endLectureCourseList: [],
      subTeacherCourseList: [],
      bgColorList: [],
      selectLectureList: [],
      searchText: '',
      selectFlag: 0,
      modalDesc: {
        open: false,
        title: '',
        desc: '',
      },
    }
  },
  watch: {
    selectFlag() {
      this.getLectureCourseList()
    },
  },
  mounted() {
    this.insCode = this.$store.state.common.user.ins_code
    this.userIdx = this.$store.state.common.user.mem_idx
    this.getLectureCourseList()
  },
  methods: {
    // 강의 코스 목록 불러오기 api
    async getLectureCourseList() {
      const payload = {
        end_course_check: this.selectFlag,
        ins_code: this.insCode,
        keyword: this.searchText,
        mem_idx: this.userIdx,
      }
      await apiLectureCourse
        .getLectureCourse(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.lectureCourseList = []
          this.endLectureCourseList = []
          this.subTeacherCourseList = []
          if (data.courseList !== null) {
            this.lectureCourseList = data.courseList
          }
          if (data.courseListEnd !== null) {
            this.endLectureCourseList = data.courseListEnd
          }
          if (data.courseListSubTeacher !== null) {
            this.subTeacherCourseList = data.courseListSubTeacher
          }
          console.log(this.lectureCourseList)
          console.log(this.endLectureCourseList)
          console.log(this.subTeacherCourseList)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    selectTrueCourse() {
      this.selectFlag = 1
    },
    selectfalseCourse() {
      this.selectFlag = 2
    },
    selectAllCourse() {
      this.selectFlag = 0
    },

    // 코스 검색
    onChangeInput({ target: { value } }) {
      this.searchText = value
    },
    searchCourse() {
      this.getLectureCourseList()
    },

    // router event
    onClickLecture(id) {
      console.log(id)
      this.$router.push(`lecturecourse/lectureplan/${id}`)
    },

    // 모달 이벤트
    openModalDesc(tit, msg) {
      this.modalDesc = {
        open: true,
        title: tit,
        desc: msg,
      }
    },
    onCloseModalDesc() {
      this.modalDesc.open = false
    },

    // 강좌 요일, 시간
    setLectureDay(data) {
      console.log(data)
      let day = ''
      let startTime = ''
      let endTime = ''
      if (data.lec_mon_yn) {
        day = day + '월'
      }
      if (data.lec_tue_yn) {
        day = day + '화'
      }
      if (data.lec_wed_yn) {
        day = day + '수'
      }
      if (data.lec_thu_yn) {
        day = day + '목'
      }
      if (data.lec_fri_yn) {
        day = day + '금'
      }
      if (data.lec_sat_yn) {
        day = day + '토'
      }
      if (data.lec_sun_yn) {
        day = day + '일'
      }
      startTime = data.lec_time_stime.substr(0, 5)
      endTime = data.lec_time_etime.substr(0, 5)
      return day + ' ' + startTime + ' - ' + endTime
    },
  },
}
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
.stanby_lecture {
  text-decoration: none;
  color: #454545;
}
</style>
