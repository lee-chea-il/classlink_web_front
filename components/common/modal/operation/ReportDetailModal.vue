<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalMoreReports2"
      class="modal modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              리포트 열람 <span class="info_txt">1/10</span>
            </h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal_morereports02">
              <div class="title_name">
                <span>{{ studentInfo.name }}</span> 학생의 학습 리포트
              </div>
              <div class="contents_section">
                <div class="table_area">
                  <div class="search_result">
                    <table class="table table-borderless">
                      <colgroup>
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">학습 기간</th>
                          <th scope="col">강좌</th>
                          <th scope="col">반</th>
                          <th scope="col">출석률</th>
                          <th scope="col">시험 유형</th>
                          <th scope="col">응시일</th>
                          <th scope="col">점수(%)</th>
                          <th scope="col">반평균(%)</th>
                          <th scope="col">문항별</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, idx) in reportList" :key="idx">
                          <td>{{ item.learningRange }}</td>
                          <td>{{ item.lectureTitle }}</td>
                          <td>{{ item.class }}</td>
                          <td>{{ item.attendancePercent }}</td>
                          <td>{{ item.examType }}</td>
                          <td>{{ item.date }}</td>
                          <td>{{ item.score }}</td>
                          <td>{{ item.classAverage }}</td>
                          <td>{{ item.question }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="graph_area">
                  <div class="reports_graph">
                    <div class="title">학습 리포트</div>
                    <div class="per_num">
                      <span>0</span>
                      <span>25</span>
                      <span>50</span>
                      <span>75<i>100</i></span>
                    </div>

                    <!-- 커리큘럼 그래프 박스 color01 -->
                    <!-- [개발참조] 컬러테마 color01, color02, color03 : class="report_box color01,02,03 -->
                    <div
                      v-for="(item, idx) in reportList"
                      :key="idx"
                      class="report_box"
                      :class="bgList[idx]"
                    >
                      <div class="subject">{{ item.lectureTitle }}</div>
                      <!-- [개발참조] 내평균 위치 표시 = 00% : style="left: 00%;" -->
                      <div class="my_average" :style="`left: ${item.score}%`">
                        {{ item.score }}%
                      </div>
                      <!-- [개발참조] 반평균 텍스트 위치 = 00% : style="left: calc(00% -->
                      <div
                        class="class_average"
                        :style="`left: calc(${item.classAverage}% - 64px)`"
                      >
                        반평균 {{ item.classAverage }}
                      </div>
                      <div class="graph_bg">
                        <!-- [개발참조] 반평균 그래프 채우기 = 00% : style="width: 00%;" -->
                        <span
                          class="class_percent"
                          :style="`width: ${item.classAverage}%`"
                        ></span>
                      </div>
                    </div>
                    <!-- /.커리큘럼 그래프 박스 color01 -->
                  </div>
                  <div class="per_area">
                    <div class="title">백분율</div>
                    <div
                      v-for="(item, idx) in reportList"
                      :key="idx"
                      class="value"
                    >
                      {{ item.score }}
                    </div>
                  </div>
                  <div class="per_area">
                    <div class="title">문항별</div>
                    <div
                      v-for="(item, idx) in reportList"
                      :key="idx"
                      class="value"
                    >
                      {{ item.question }}
                    </div>
                  </div>
                </div>
              </div>
              <!-- 이전다음 버튼 -->
              <div class="data_prev">
                <i class="btn icons_arrow_square_l"></i>
              </div>
              <div class="data_next">
                <i class="btn icons_arrow_square_r"></i>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_default">저장</button>
            <button class="btn btn_crud_default">인쇄</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: 'ReportDetailModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    studentInfo: {
      type: Object,
      default: () => {},
    },
    reportList: {
      type: Array,
      default: () => [],
    },
    bgList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped></style>
