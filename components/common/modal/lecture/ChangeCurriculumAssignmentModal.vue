<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalLectureRegi04"
      class="modal modal_ac_manage_lec modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="강좌 만들기" @close="$emit('close')" />
          <div class="modal-body">
            <div class="title">커리큘럼 배정</div>
            <div class="cnts_section">
              <!-- 왼쪽 SECTION -->
              <div class="class_section left">
                <div class="move_section my_cur">
                  <div class="list_section selected">
                    <div class="sum_info">
                      선택된 커리큘럼 <span>00</span>개
                    </div>
                    <div class="list_area02">
                      <!-- 탭 내용01 -->
                      <div
                        id="mydata"
                        class="tab-pane fade show active"
                        role="tabpanel"
                        aria-labelledby="grade-tab"
                      >
                        <ul>
                          <li>
                            <!-- 리스트01 -->
                            <div class="list">
                              <i
                                id="show_sublist01"
                                class="btn icons_arrow_r"
                              ></i>
                              <span class="text">국어</span>
                            </div>
                            <!-- 리스트01_sub-->
                            <div id="list_sub01" class="list_sub">
                              <ul>
                                <li>
                                  <i
                                    id="show_sublist01_sub"
                                    class="btn icons_arrow_r"
                                  ></i>
                                  <span class="text">대단원1</span>
                                </li>
                              </ul>
                            </div>
                            <!-- /.리스트01_sub-->
                            <!-- 리스트01_sub_sub-->
                            <div id="list_sub01_sub" class="list_sub_sub">
                              <ul>
                                <li>
                                  <span class="text">소단원1.link</span>
                                </li>
                                <li>
                                  <span class="text">소단원2.link</span>
                                </li>
                              </ul>
                            </div>
                            <!-- /.리스트01_sub_sub-->
                            <!-- /.리스트01 -->
                          </li>
                          <li>
                            <!-- 리스트02 -->
                            <div class="list">
                              <i
                                id="show_sublist02"
                                class="btn icons_arrow_r"
                              ></i>
                              <span class="text">수학</span>
                            </div>
                            <!-- /.리스트02 -->
                          </li>
                        </ul>
                      </div>
                      <!-- /.탭 내용01 -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- 왼쪽 SECTION -->
              <!-- 오른쪽 SECTION -->
              <div class="class_section right">
                <div class="calendar_type02">
                  <!-- 캘린더 영역 -->
                  <div class="calendar">
                    <div class="move_calendar">
                      <i class="icons_arrow_square_l"></i>
                      <span class="date_info">2022년 8월</span>
                      <i class="icons_arrow_square_r"></i>
                    </div>
                    <div class="calendar_data">
                      <table
                        class="calendar_table"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <thead>
                          <tr class="week_tit">
                            <th class="sun">일</th>
                            <th>월</th>
                            <th>화</th>
                            <th>수</th>
                            <th>목</th>
                            <th>금</th>
                            <th class="sat">토</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="week first">
                            <td class="calendar-day sun">
                              <span class="daynum">1</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">2</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">3</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">4</span>
                              <!-- 3개초과 개수 표시 -->
                              <button
                                class="btn over_num"
                                data-toggle="modal"
                                data-target="#modalLectureRegi05"
                              >
                                +3
                              </button>
                              <!-- 커리큘럼 Box -->
                              <div class="curi_box">
                                <span class="tit"
                                  >소단원소단원1소단원1소단원1</span
                                >
                                <button
                                  class="btn icons_minus_circle_alph btn_del"
                                ></button>
                              </div>
                              <!-- 커리큘럼 Box -->
                              <div class="curi_box">
                                <span class="tit"
                                  >소단원소단원1소단원1소단원1</span
                                >
                                <button
                                  class="btn icons_minus_circle_alph btn_del"
                                ></button>
                              </div>
                              <!-- 커리큘럼 Box -->
                              <div class="curi_box">
                                <span class="tit"
                                  >소단원소단원1소단원1소단원1</span
                                >
                                <button
                                  class="btn icons_minus_circle_alph btn_del"
                                ></button>
                              </div>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">5</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">6</span>
                            </td>
                            <td class="calendar-day sat">
                              <span class="daynum">7</span>
                            </td>
                          </tr>
                          <tr class="week second">
                            <td class="calendar-day sun">
                              <span class="daynum">8</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">9</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">10</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">11</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">12</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">13</span>
                            </td>
                            <td class="calendar-day sat">
                              <span class="daynum">14</span>
                            </td>
                          </tr>
                          <tr class="week third">
                            <td class="calendar-day sun">
                              <span class="daynum">15</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">16</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">17</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">18</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">19</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">20</span>
                            </td>
                            <td class="calendar-day sat">
                              <span class="daynum">21</span>
                            </td>
                          </tr>
                          <tr class="week fourth">
                            <td class="calendar-day sun">
                              <span class="daynum">22</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">23</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">24</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">25</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">26</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">27</span>
                            </td>
                            <td class="calendar-day sat">
                              <span class="daynum">28</span>
                            </td>
                          </tr>
                          <tr class="week last">
                            <td class="calendar-day sun">
                              <span class="daynum">29</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">30</span>
                            </td>
                            <td class="calendar-day">
                              <span class="daynum">31</span>
                            </td>
                            <td class="calendar-day calendar-other-month">
                              <span class="daynum">1</span>
                            </td>
                            <td class="calendar-day calendar-other-month">
                              <span class="daynum">2</span>
                            </td>
                            <td class="calendar-day calendar-other-month">
                              <span class="daynum">3</span>
                            </td>
                            <td class="calendar-day sat calendar-other-month">
                              <span class="daynum">4</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- /.캘린더 영역-->
                </div>
              </div>
              <!-- 오른쪽 SECTION -->
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalLectureRegi03"
            >
              이전
            </button>
            <button class="btn btn_crud_point" data-dismiss="modal">
              개설
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'

export default {
  name: 'ChangeCurriculumAssignmentModal',
  components: { ModalHeader },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
