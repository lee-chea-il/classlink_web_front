<template>
  <div id="content" class="content">
    <div class="content_area">
      <div class="tab-content depth03 ac_manage_frc ac_manage_course">
        <div class="tab-pane active">
          <!-- [개발참조]수강하는 강의코스가 없을때  -->
          <div v-if="lectureCourseList.length === 0" class="page_nodata">
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
                  모든 코스
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
                  placeholder="과목/커리큘럼/선생님 검색"
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
              <div v-if="selectFlag === 0" class="cards_section">
                <a
                  v-for="(item, idx) in lectureCourseList"
                  :key="idx"
                  :class="item.state ? 'cursor' : 'stanby_lecture'"
                  @click="onClickLecture(item.id)"
                >
                  <div
                    class="card"
                    :class="
                      !item.state
                        ? 'standby'
                        : `course_bgcolor0${bgColorList[idx]}`
                    "
                  >
                    <div class="course_tit">{{ item.subject }}</div>
                    <div class="course_time">{{ item.time }}</div>
                    <div class="course_info">
                      {{ item.lessonTitle }} | {{ item.lessonClass }} |
                      {{ item.teacher }}
                    </div>
                  </div>
                </a>
              </div>
              <div v-else class="cards_section">
                <a
                  v-for="(item, idx) in selectLectureList"
                  :key="idx"
                  class="cursor"
                  @click="onClickLecture(idx)"
                >
                  <div
                    class="card"
                    :class="
                      !item.state
                        ? 'standby'
                        : `course_bgcolor0${bgColorList[idx]}`
                    "
                  >
                    <div class="course_tit">{{ item.subject }}</div>
                    <div class="course_time">{{ item.time }}</div>
                    <div class="course_info">
                      {{ item.lessonTitle }} | {{ item.lessonClass }} |
                      {{ item.teacher }}
                    </div>
                  </div>
                </a>
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
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
export default {
  name: 'LectureCourse',
  components: { ModalDesc },
  data() {
    return {
      // 강의코스
      lectureCourseList: [
        {
          id: 0,
          academy: '일산어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '영어심화리딩',
          lessonTitle: '영어',
          lessonClass: '심화 A반',
          teacher: '홍길동 선생님',
          state: true,
        },
        {
          id: 1,
          academy: '김포어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '수학심화리딩',
          lessonTitle: '수학',
          lessonClass: '심화 B반',
          teacher: '임꺽정 선생님',
          state: true,
        },
        {
          id: 2,
          academy: '광주어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '과학심화리딩',
          lessonTitle: '과학',
          lessonClass: '심화 C반',
          teacher: '임창정 선생님',
          state: true,
        },
        {
          id: 3,
          academy: '한남어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '체육심화리딩',
          lessonTitle: '체육',
          lessonClass: '심화 D반',
          teacher: '전현무 선생님',
          state: true,
        },
        {
          id: 4,
          academy: '마포어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '음악심화리딩',
          lessonTitle: '음악',
          lessonClass: '심화 E반',
          teacher: '김종국 선생님',
          state: true,
        },
        {
          id: 5,
          academy: '홍대어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '사회심화리딩',
          lessonTitle: '사회',
          lessonClass: '심화 F반',
          teacher: '유재석 선생님',
          state: true,
        },
        {
          id: 6,
          academy: '잠실어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '국어심화리딩',
          lessonTitle: '국어',
          lessonClass: '심화 G반',
          teacher: '사투리 선생님',
          state: true,
        },
        {
          id: 7,
          academy: '일산어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '영어심화리딩',
          lessonTitle: '영어',
          lessonClass: '심화 A반',
          teacher: '홍길동 선생님',
          state: true,
        },
        {
          id: 8,
          academy: '김포어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '수학심화리딩',
          lessonTitle: '수학',
          lessonClass: '심화 B반',
          teacher: '임꺽정 선생님',
          state: true,
        },
        {
          id: 9,
          academy: '광주어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '과학심화리딩',
          lessonTitle: '과학',
          lessonClass: '심화 C반',
          teacher: '임창정 선생님',
          state: true,
        },
        {
          id: 10,
          academy: '한남어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '체육심화리딩',
          lessonTitle: '체육',
          lessonClass: '심화 D반',
          teacher: '전현무 선생님',
          state: false,
        },
        {
          id: 11,
          academy: '마포어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '음악심화리딩',
          lessonTitle: '음악',
          lessonClass: '심화 E반',
          teacher: '김종국 선생님',
          state: false,
        },
        {
          id: 12,
          academy: '홍대어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '사회심화리딩',
          lessonTitle: '사회',
          lessonClass: '심화 F반',
          teacher: '유재석 선생님',
          state: false,
        },
        {
          id: 13,
          academy: '잠실어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '국어심화리딩',
          lessonTitle: '국어',
          lessonClass: '심화 G반',
          teacher: '사투리 선생님',
          state: false,
        },
      ],
      bgColors: ['course_bgcolor01', 'course_bgcolor02', 'course_bgcolor03'],
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
  created() {
    const array = []
    for (let i = 0; i < this.lectureCourseList.length; i++) {
      if (i < 4) {
        array.push(1)
      } else if (i >= 4 && i < 8) {
        array.push(2)
      } else if (i >= 8 && i < 12) {
        array.push(3)
      } else if (i >= 12 && i < 16) {
        array.push(1)
      }
    }
    this.bgColorList = array
  },
  methods: {
    selectTrueCourse() {
      this.selectFlag = 1
      const array = []
      for (let i = 0; i < this.lectureCourseList.length; i++) {
        if (this.lectureCourseList[i].state) {
          array.push(this.lectureCourseList[i])
        }
      }
      this.selectLectureList = array
      console.log(this.selectLectureList)
    },
    selectfalseCourse() {
      this.selectFlag = 1
      const array = []
      for (let i = 0; i < this.lectureCourseList.length; i++) {
        if (!this.lectureCourseList[i].state) {
          array.push(this.lectureCourseList[i])
        }
      }
      this.selectLectureList = array
    },
    selectAllCourse() {
      this.selectFlag = 0
    },

    // 코스 검색
    onChangeInput({ target: { value } }) {
      this.searchText = value
    },
    searchCourse() {
      if (this.searchText.length < 2) {
        this.openModalDesc('검색 실패', '검색어는 2글자 이상 입력해주세요.')
        return false
      }

      const result = this.lectureCourseList.filter((elem) => {
        return (
          elem.lessonTitle.includes(this.searchText) ||
          elem.subject.includes(this.searchText) ||
          elem.teacher.includes(this.searchText)
        )
      })
      if (result.length === 0) {
        this.openModalDesc('검색 실패', '일치하는 강의 코스가 없습니다.')
        return false
      } else {
        this.selectFlag = 4
        this.selectLectureList = result
      }
    },

    // router event
    onClickLecture(id) {
      console.log(id)
      this.$router.push(`lecturecourse/lecturedetail/${id}`)
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
