<template>
  <div
    id="modalMoreReports2"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">
            리포트 열람 <span class="info_txt">1/10</span>
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="icons_close"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal_morereports02">
            <div class="title_name"><span>김지원</span> 학생의 학습 리포트</div>
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
                      <tr>
                        <td>22.05.11 - 22.05.21</td>
                        <td>영어리딩심화</td>
                        <td>심화A</td>
                        <td>80%</td>
                        <td>쪽지시험</td>
                        <td>22.05.11</td>
                        <td>80</td>
                        <td>70</td>
                        <td>12/15</td>
                      </tr>
                      <tr>
                        <td>22.05.11 - 22.05.21</td>
                        <td>영어리딩심화</td>
                        <td>심화A</td>
                        <td>80%</td>
                        <td>쪽지시험</td>
                        <td>22.05.11</td>
                        <td>80</td>
                        <td>70</td>
                        <td>12/15</td>
                      </tr>
                      <tr>
                        <td>22.05.11 - 22.05.21</td>
                        <td>영어리딩심화</td>
                        <td>심화A</td>
                        <td>80%</td>
                        <td>쪽지시험</td>
                        <td>22.05.11</td>
                        <td>80</td>
                        <td>70</td>
                        <td>12/15</td>
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
                  <div class="report_box color01">
                    <div class="subject">영어리딩심화</div>
                    <!-- [개발참조] 내평균 위치 표시 = 00% : style="left: 00%;" -->
                    <div class="my_average" style="left: 80%">80%</div>
                    <!-- [개발참조] 반평균 텍스트 위치 = 00% : style="left: calc(00% -->
                    <div class="class_average" style="left: calc(70% - 64px)">
                      반평균 70
                    </div>
                    <div class="graph_bg">
                      <!-- [개발참조] 반평균 그래프 채우기 = 00% : style="width: 00%;" -->
                      <span class="class_percent" style="width: 70%"></span>
                    </div>
                  </div>
                  <!-- /.커리큘럼 그래프 박스 color01 -->

                  <!-- 커리큘럼 그래프 박스 color02 -->
                  <!-- [개발참조] 컬러테마 color01, color02, color03 : class="report_box color01,02,03 -->
                  <div class="report_box color02">
                    <div class="subject">수학 수1</div>
                    <!-- [개발참조] 내평균 위치 표시 = 00% : style="left: 00%;" *없을경우 display:none; -->
                    <div class="my_average" style="left: 00%; display: none">
                      00%
                    </div>
                    <!-- [개발참조] 반평균 텍스트 위치 = 00% : style="left: calc(00% -->
                    <div class="class_average" style="left: calc(50% - 64px)">
                      반평균 50
                    </div>
                    <div class="graph_bg">
                      <!-- [개발참조] 반평균 그래프 채우기 = 00% : style="width: 00%;" -->
                      <span class="class_percent" style="width: 50%"></span>
                    </div>
                  </div>
                  <!-- /.커리큘럼 그래프 박스 color02 -->

                  <!-- 커리큘럼 그래프 박스 color03 -->
                  <!-- [개발참조] 컬러테마 color01, color02, color03 : class="report_box color01,02,03 -->
                  <div class="report_box color03">
                    <div class="subject">국어문법심화</div>
                    <!-- [개발참조] 내평균 위치 표시 = 00% : style="left: 00%;" -->
                    <div class="my_average" style="left: 30%">30%</div>
                    <!-- [개발참조] 반평균 텍스트 위치 = 00% : style="left: calc(00% -->
                    <div class="class_average" style="left: calc(80% - 64px)">
                      반평균 80
                    </div>
                    <div class="graph_bg">
                      <!-- [개발참조] 반평균 그래프 채우기 = 00% : style="width: 00%;" -->
                      <span class="class_percent" style="width: 80%"></span>
                    </div>
                  </div>
                  <!-- /.커리큘럼 그래프 박스 color03 -->
                </div>
                <div class="per_area">
                  <div class="title">학습 리포트</div>
                  <div class="value">80</div>
                  <div class="value">-</div>
                  <div class="value">30</div>
                </div>
                <div class="per_area">
                  <div class="title">학습 리포트</div>
                  <div class="value">12/15</div>
                  <div class="value">-</div>
                  <div class="value">10/12</div>
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
</template>
<script>
export default {
  name: 'ReportDetailModal',
}
</script>
<style scoped></style>
