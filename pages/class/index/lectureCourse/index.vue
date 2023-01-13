<template>
  <div class="tab-content depth03 ac_manage_frc ac_manage_course">
    <div class="tab-pane active">
      <!-- [개발참조]수강하는 강의코스가 없을때  -->
      <!-- <div v-if="lectureCourseList.length === 0" class="page_nodata">
        <p>수강하는 강의 코스가 없습니다.</p>
        <button
          class="btn btn_crud_point"
          data-toggle="modal"
          data-target="#modalLectureRegi"
        >
          강좌 만들기
        </button>
      </div> -->
      <div>
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
              <div class="cards_section02-1">
                <a
                  v-for="(item, idx) in lectureCourseListOne"
                  :key="idx"
                  @click="onClickLecture(item.lec_idx)"
                >
                  <div class="card course_bgcolor01">
                    <!-- [개발참조] 반이 5개 이상일때는 강좌이름에 class="course_more"을 붙이기 -->
                    <!-- [개발참조]주담임 색상 class="card course_bgcolor01" -->
                    <div
                      class="course_tit"
                      :class="
                        item.sub_teacher_list.length + item.class_list.length >
                        3
                          ? 'course_more'
                          : ''
                      "
                    >
                      {{ item.lec_title }}
                    </div>
                    <div class="course_time">월수금 2:00 - 3:00</div>
                    <div class="course_time">월수금 2:00 - 3:00</div>
                    <div class="course_info">{{ item.mem_name }} 선생님</div>
                    <div
                      v-if="item.sub_teacher_list !== null"
                      class="course_info"
                    >
                      ({{ setNameArray(item.sub_teacher_list) }})
                    </div>
                    <div
                      v-for="(class_item, class_idx) in item.class_list"
                      :key="class_idx"
                      class="course_info"
                    >
                      {{ class_item.csm_name }}
                    </div>
                  </div>
                </a>
              </div>
              <div class="cards_section02-1">
                <a
                  v-for="(item, idx) in lectureCourseListTwo"
                  :key="idx"
                  @click="onClickLecture(item.lec_idx)"
                >
                  <div class="card course_bgcolor01">
                    <div
                      class="course_tit"
                      :class="
                        item.sub_teacher_list.length + item.class_list.length >
                        3
                          ? 'course_more'
                          : ''
                      "
                    >
                      {{ item.lec_title }}
                    </div>
                    <div class="course_time">월수금 2:00 - 3:00</div>
                    <div class="course_info">{{ item.mem_name }} 선생님</div>
                    <div
                      v-if="item.sub_teacher_list !== null"
                      class="course_info"
                    >
                      ({{ setNameArray(item.sub_teacher_list) }})
                    </div>
                    <div
                      v-for="(class_item, class_idx) in item.class_list"
                      :key="class_idx"
                      class="course_info"
                    >
                      {{ class_item.csm_name }}
                    </div>
                  </div>
                </a>
              </div>
              <div class="cards_section02-1">
                <a
                  v-for="(item, idx) in lectureCourseListThree"
                  :key="idx"
                  @click="onClickLecture(item.lec_idx)"
                >
                  <div class="card course_bgcolor01">
                    <div
                      class="course_tit"
                      :class="
                        item.sub_teacher_list.length + item.class_list.length >
                        3
                          ? 'course_more'
                          : ''
                      "
                    >
                      {{ item.lec_title }}
                    </div>
                    <div class="course_time">월수금 2:00 - 3:00</div>
                    <div class="course_info">{{ item.mem_name }} 선생님</div>
                    <div
                      v-if="item.sub_teacher_list !== null"
                      class="course_info"
                    >
                      ({{ setNameArray(item.sub_teacher_list) }})
                    </div>
                    <div
                      v-for="(class_item, class_idx) in item.class_list"
                      :key="class_idx"
                      class="course_info"
                    >
                      {{ class_item.csm_name }}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="cards_section03">
              <a
                v-for="(item, idx) in subTeacherCourseList"
                :key="idx"
                @click="onClickLecture(item.lec_idx)"
              >
                <!-- [개발참조]부담임 색상 class="card course_bgcolor02" -->
                <div class="card course_bgcolor02">
                  <div
                    class="course_tit"
                    :class="
                      item.sub_teacher_list.length + item.class_list.length > 3
                        ? 'course_more'
                        : ''
                    "
                  >
                    {{ item.lec_title }}
                  </div>
                  <div class="course_time">월수금 2:00 - 3:00</div>
                  <div class="course_info">{{ item.mem_name }} 선생님</div>
                  <div
                    v-if="item.sub_teacher_list !== null"
                    class="course_info"
                  >
                    ({{ setNameArray(item.sub_teacher_list) }})
                  </div>
                  <div
                    v-for="(class_item, class_idx) in item.class_list"
                    :key="class_idx"
                    class="course_info"
                  >
                    {{ class_item.csm_name }}
                  </div>
                </div>
              </a>
            </div>

            <!-- [개발참조] 종료된코스 예 class="card standby" -->
            <div v-if="endLectureCourseList.length > 0" class="standby_font">
              종료된 코스
            </div>
            <div class="cards_section03">
              <a v-for="(item, idx) in endLectureCourseList" :key="idx">
                <div class="card standby course_more02">
                  <div
                    class="course_tit"
                    :class="
                      item.sub_teacher_list.length + item.class_list.length > 3
                        ? 'course_more'
                        : ''
                    "
                  >
                    {{ item.lec_title }}
                  </div>
                  <div class="course_time">월수금 2:00 - 3:00</div>
                  <div class="course_time">월수금 2:00 - 3:00</div>
                  <div class="course_info">{{ item.mem_name }} 선생님</div>
                  <div
                    v-if="item.sub_teacher_list !== null"
                    class="course_info"
                  >
                    ({{ setNameArray(item.sub_teacher_list) }})
                  </div>
                  <div
                    v-for="(class_item, class_idx) in item.class_list"
                    :key="class_idx"
                    class="course_info"
                  >
                    {{ class_item.csm_name }}
                  </div>
                </div>
              </a>
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
      loginIdentity: 'T',
      insCode: '',
      userIdx: 0,
      // 강의코스'
      lectureCourseList: [],
      lectureCourseListOne: [],
      lectureCourseListTwo: [],
      lectureCourseListThree: [],
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
  created() {},
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
        identity_type: this.loginIdentity,
      }
      await apiLectureCourse
        .getLectureCourse(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.lectureCourseList = []
          this.subTeacherCourseList = []
          this.endLectureCourseList = []
          this.lectureCourseListOne = []
          this.lectureCourseListTwo = []
          this.lectureCourseListThree = []
          // 주담임 코스 목록
          if (data.course_list !== null) {
            this.lectureCourseList = data.course_list
            // 신분별 줄 나눔
            if (this.loginIdentity === 'T') {
              if (this.lectureCourseList.length < 9) {
                this.lectureCourseListOne = this.lectureCourseList.slice(0, 4)
                this.lectureCourseListTwo = this.lectureCourseList.slice(4)
              } else {
                const index = Math.ceil(this.lectureCourseList.length / 2)
                this.lectureCourseListOne = this.lectureCourseList.slice(
                  0,
                  index
                )
                this.lectureCourseListTwo = this.lectureCourseList.slice(index)
              }
            } else if (this.lectureCourseList.length < 13) {
              this.lectureCourseListOne = this.lectureCourseList.slice(0, 4)
              this.lectureCourseListTwo = this.lectureCourseList.slice(4, 8)
              this.lectureCourseListThree = this.lectureCourseList.slice(8)
            } else {
              const index = Math.ceil(this.lectureCourseList.length / 3)
              const sub_index = Math.ceil(
                (this.lectureCourseList.length - index) / 2
              )
              this.lectureCourseListOne = this.lectureCourseList.slice(0, index)
              this.lectureCourseListTwo = this.lectureCourseList.slice(
                index,
                index + sub_index
              )
              this.lectureCourseListThree = this.lectureCourseList.slice(
                index + sub_index
              )
            }
          }
          // 부담임 코스 목록
          if (data.course_list_subteacher !== null) {
            this.subTeacherCourseList = data.course_list_subteacher
          }
          // 종료된 코스 목록
          if (data.course_list_end !== null) {
            this.endLectureCourseList = data.course_list_end
          }
          console.log(this.lectureCourseList)
          console.log(this.endLectureCourseList)
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

    // 부담임 이름 목록
    setNameArray(array) {
      if (array !== null) {
        const names = []
        for (const x of array) {
          names.push(x.mem_name)
        }
        return names.join(', ')
      }
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
