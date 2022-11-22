<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <NavBox
        title1="선생님관리"
        title2="학생 관리"
        title3="반 관리"
        title4="시험관리"
        url1="/management/operation/teachermanagement"
        url2="/management/operation/studentmanagement"
        url3="/management/operation/teachermanagement"
        url4="/management/operation/exammanagement"
      />

      <div class="tab-content depth03 ac_manage_exam">
        <div class="tab-pane active">
          <!-- 필터영역 -->
          <div class="search_section">
            <div class="box01">
              <div class="row">
                <div class="keyword_area left_area">
                  <div class="keyword_area_01">
                    <span class="keyword01">
                      <span class="keyword01-1">내가 한 질문</span
                      ><span class="x"></span>
                    </span>
                    <span class="keyword01">
                      <span class="keyword01-1">내가 한 질문</span
                      ><span class="x"></span>
                    </span>
                  </div>
                </div>
                <div class="right_area">
                  <div class="date_box inline_block">
                    {{ studentSearchDate.date_range_start }} -
                    {{ studentSearchDate.date_range_end }}
                  </div>
                  <button
                    class="btn icons_calendar_off"
                    @click="openDatePickerModalDesc"
                  ></button>
                  <div class="input-group input-search form-inline">
                    <input
                      type="text"
                      placeholder="학생 이름, 반 검색"
                      class="form-control"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>
                  <button
                    class="btn btn_filter"
                    data-toggle="modal"
                    data-target="#modalExamFiter"
                  >
                    상세
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- /.필터영역 -->
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="left_area">
              <div class="dropdown form-inline">
                <select class="btn dropdown-toggle">
                  <option value="" class="dropdown-item">전체</option>
                  <option value="" class="dropdown-item">레슨 높은 순</option>
                  <option value="" class="dropdown-item">레슨 낮은 순</option>
                  <option value="" class="dropdown-item">점수 높은 순</option>
                  <option value="" class="dropdown-item">점수 낮은 순</option>
                </select>
                <!-- <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  전체
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">레슨 높은 순</a>
                  <a class="dropdown-item" href="#">레슨 낮은 순</a>
                  <a class="dropdown-item" href="#">점수 높은 순</a>
                  <a class="dropdown-item" href="#">점수 낮은 순</a>
                </div> -->
              </div>
            </div>
          </div>
          <!-- /.검색 영역 -->
          <!-- 테이블 영역 -->
          <div class="search_result">
            <table class="table table-borderless">
              <!-- 	<colgroup>
								<col width="10%">
								<col width="10%">
								<col width="12%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="18%">
								<col width="10%">
							</colgroup> -->
              <thead>
                <tr>
                  <th class="th01">반</th>
                  <th class="th02">이름</th>
                  <th class="th03">강좌</th>
                  <th class="th04">레슨</th>
                  <th class="th05">유형</th>
                  <th class="th06">점수</th>
                  <th class="th07">반평균</th>
                  <th class="th08">응시일</th>
                  <th class="th09">응시인원</th>
                </tr>
              </thead>
            </table>
            <div class="tbl_overflow">
              <table class="table table-borderless">
                <!-- 	<colgroup>
									<col width="10%">
									<col width="10%">
									<col width="12%">
									<col width="10%">
									<col width="10%">
									<col width="10%">
									<col width="10%">
									<col width="18%">
									<col width="10%">
								</colgroup> -->
                <tbody>
                  <tr v-for="(item, idx) in examList" :key="idx">
                    <td class="td01">{{ item.class }}</td>
                    <td class="td02">{{ item.name }}</td>
                    <td class="td03">{{ item.course }}</td>
                    <td class="td04">{{ item.lesson }}</td>
                    <td class="td05">{{ item.type }}</td>
                    <td class="td06">
                      <a
                        href="javascript;:"
                        data-toggle="modal"
                        data-target="#modalExamResult01"
                        @click="onClickSelectExam(item)"
                        >{{ item.score }}</a
                      >
                    </td>
                    <td class="td07">
                      <a
                        href="javascript;:"
                        data-toggle="modal"
                        data-target="#modalClassAverage01"
                        @click="onClickSelectExam(item)"
                        >{{ item.average }}</a
                      >
                    </td>
                    <td class="td08">
                      <span>{{ item.date }}</span> <span>{{ item.time }}</span>
                    </td>
                    <td class="td09">
                      {{ item.personnel }}/{{ item.totalPersonnel }}
                    </td>
                  </tr>

                  <!-- <tr>
                    <td>심화A반</td>
                    <td>홍길동</td>
                    <td>영어리딩심화</td>
                    <td>레슨1</td>
                    <td>쪽지시험</td>
                    <td>
                      <a
                        href="javascript;:"
                        data-toggle="modal"
                        data-target="#modalExamResult01"
                        >100</a
                      >
                    </td>
                    <td>
                      <a
                        href="javascript;:"
                        data-toggle="modal"
                        data-target="#modalClassAverage01"
                        >70</a
                      >
                    </td>
                    <td><span>2022.01.01</span> <span>00:00:00</span></td>
                    <td>9/99</td>
                  </tr> -->
                </tbody>
              </table>
            </div>
          </div>
          <!-- /.테이블 영역 -->
        </div>
      </div>
    </div>

    <ExamFilterModal />
    <ExamResult :selectedExamInfo="selectedExamInfo" :openDetail="openDetail" />
    <ClassAverage :selectedExamInfo="selectedExamInfo" />
    <DatePickerModal
      :open="datePickerModalDesc.open"
      :range="range"
      @select-range="selectRange"
      @close="onCloseDatePickerModalDesc"
      @confirm="onClickConfirmBtn"
    />
  </div>
</template>

<script>
import NavBox from '@/components/operation/NavBox.vue'
import ExamFilterModal from '@/components/common/modal/operation/ExamFilterModal.vue'
import ExamResult from '@/components/common/modal/operation/ExamResult.vue'
import ClassAverage from '@/components/common/modal/operation/ClassAverage.vue'
import DatePickerModal from '@/components/common/modal/attendance/DatePickerModal.vue'

export default {
  name: 'TestManagement',
  components: {
    NavBox,
    ExamFilterModal,
    ExamResult,
    ClassAverage,
    DatePickerModal,
  },
  data() {
    return {
      examList: [
        {
          class: '심화A반',
          name: '홍길동',
          course: '영어리딩심화',
          lesson: '레슨1',
          type: '퀴즈',
          score: 100,
          average: 80,
          date: '2022.01.01',
          time: '00:00:00',
          personnel: 9,
          totalPersonnel: 99,
          examResult: {},
        },
        {
          class: '심화B반',
          name: '홍동길',
          course: '영어리딩심화',
          lesson: '레슨2',
          type: '쪽지시험',
          score: 100,
          average: 76,
          date: '2022.11.22',
          time: '00:00:00',
          personnel: 9,
          totalPersonnel: 9,
          examResult: {},
        },
        {
          class: '심화C반',
          name: '홍길순',
          course: '영어리딩심화',
          lesson: '레슨3',
          type: '쪽지시험',
          score: 100,
          average: 70,
          date: '2022.11.29',
          time: '00:00:00',
          personnel: 4,
          totalPersonnel: 15,
          examResult: {},
        },
      ],

      openDetail: null,

      selectedExamInfo: {},

      datePickerModalDesc: {
        open: false,
      },
      studentSearchDate: {
        date_range_start: '2022.11.22',
        date_range_end: '2022.11.29',
      },
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
  methods: {
    // 날짜 지정
    selectRange(e) {
      this.range.start = e.start
      this.range.end = e.end
      // console.log(this.range)
    },
    openDatePickerModalDesc() {
      this.datePickerModalDesc.open = true
    },
    onCloseDatePickerModalDesc() {
      this.datePickerModalDesc.open = false
    },
    changeDateFormat(date) {
      const year = date.getFullYear()
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const day = ('0' + date.getDate()).slice(-2)
      const dateString = year + '.' + month + '.' + day
      return dateString
    },
    onClickConfirmBtn() {
      this.datePickerModalDesc.open = false
      this.studentSearchDate.date_range_start = this.changeDateFormat(
        this.range.start
      )
      this.studentSearchDate.date_range_end = this.changeDateFormat(
        this.range.end
      )
    },

    onClickSelectExam(data) {
      this.selectedExamInfo = data
    },
  },
}
</script>

<style></style>
