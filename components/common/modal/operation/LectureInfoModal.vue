<template>
  <div
      id="modalMoreCourse"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">수강 정보</h5>
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
            <div class="table_area">
              <div class="table_thead">
                <table class="tb">
                  <!-- <colgroup>
									<col width="150">
									<col>
									<col width="100">
									<col width="55">
								</colgroup> -->
                  <thead>
                    <tr>
                      <th class="th01">커리큘럼</th>
                      <th class="th02">납부일</th>
                      <th class="th03">수강 시작일</th>
                      <th class="th04">메모</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="table_tbody">
                <table class="tb">
                  <!-- 	<colgroup>
									<col width="150">
									<col>
									<col width="100">
									<col width="55">
								</colgroup> -->
                  <tbody>
                    <tr>
                      <td class="td01">영어리딩심화</td>
                      <td class="td02">
                        <div class="date">
                          <div class="box01 mr-1">2022.08.05</div>
                          <i class="icons_calendar_off mr-1"></i>
                          <div class="btn btn_crud_default disabled">
                            위와 동일
                          </div>
                        </div>
                      </td>
                      <td class="date02">2022.08.05</td>
                      <td class="i td04">
                        <i class="icons_plus_circle_off"></i>
                      </td>
                    </tr>

                    <!-- 메모입력 TR : 메모입력 전 -->
                    <tr class="memo">
                      <td colspan="4" class="memo02">
                        <textarea placeholder="메모입력"></textarea>
                        <button class="btn btn_crud_point" type="button">
                          등록
                        </button>
                      </td>
                    </tr>

                    <!-- 메모입력 TR : 메모입력 후-->
                    <tr class="memo view">
                      <td colspan="4" class="memo02">
                        <div class="box02">
                          홍길동 학생 학원비 납부 관련해서 학부모와 면담 금일
                          진행함.
                        </div>
                        <div class="memo03">
                          최신 업데이트 : <span>2022.08.05</span> 최신 작성자 :
                          <span>서유진 선생님</span>
                        </div>
                      </td>
                      <td>
                        <i class="btn icons_mu_off more_mu">
                          <div class="more_list" style="display: none">
                            <ul>
                              <li>수정</li>
                              <li>삭제</li>
                            </ul>
                          </div>
                        </i>
                      </td>
                    </tr>

                    <tr>
                      <td>영어리딩심화</td>
                      <td>
                        <div class="date">
                          <div class="box01 mr-1">2022.08.05</div>
                          <i class="icons_calendar_off mr-1"></i>
                          <div class="btn btn_crud_default">위와 동일</div>
                        </div>
                      </td>
                      <td class="date02">2022.08.05</td>
                      <td class="i"><i class="icons_plus_circle_off"></i></td>
                    </tr>

                    <tr>
                      <td>영어리딩심화</td>
                      <td>
                        <div class="date">
                          <div class="box01 mr-1">2022.08.05</div>
                          <i class="icons_calendar_off mr-1"></i>
                          <div class="btn btn_crud_default">위와 동일</div>
                        </div>
                      </td>
                      <td class="date02">2022.08.05</td>
                      <td class="i"><i class="icons_plus_circle_off"></i></td>
                    </tr>

                    <tr>
                      <td>영어리딩심화</td>
                      <td>
                        <div class="date">
                          <div class="box01 mr-1">2022.08.05</div>
                          <i class="icons_calendar_off mr-1"></i>
                          <div class="btn btn_crud_default">위와 동일</div>
                        </div>
                      </td>
                      <td class="date02">2022.08.05</td>
                      <td class="i"><i class="icons_plus_circle_off"></i></td>
                    </tr>

                    <tr>
                      <td>영어리딩심화</td>
                      <td>
                        <div class="date">
                          <div class="box01 mr-1">2022.08.05</div>
                          <i class="icons_calendar_off mr-1"></i>
                          <div class="btn btn_crud_default">위와 동일</div>
                        </div>
                      </td>
                      <td class="date02">2022.08.05</td>
                      <td class="i"><i class="icons_plus_circle_off"></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'LectureInfoModal',
}
</script>
<style scoped></style>
