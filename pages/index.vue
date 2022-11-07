<template>
  <!-- <Tutorial /> -->
  <!-- header -->
  <div class="main" >
    <EducationHeader />
    <!-- //header -->
    <!-- container -->
    <div id="content" class="content">
      <div class="content_area">
        <div class="page_myhome myhome_teacher">
          <div class="row">
            <div class="col-lg-3">
              <!-- 오늘의 강의 -->
              <div class="today_study">
                <h4 class="title">오늘의 강의</h4>
                <div class="cnts">
                  <div v-if="todayLectureList.length == 0" class="nothing_txt">
                    새로운 소식이 없습니다.
                  </div>
                  <CustomSwiper
                    v-else
                    :dataList="todayLectureList"
                    :isHorizontal="false"
                  />
                </div>
              </div>
              <!-- /.오늘의 강의 -->
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-lg-7">
                  <div class="row">
                    <div class="col-12">
                      <!-- 학습함 -->
                      <div class="learned_box">
                        <div class="title_area">
                          <h4 class="title">학습함</h4>
                          <span class="num">999+</span>
                          <a href="javascript:;" class="more">
                            <i class="icons_plus_circle_on"></i> 더보기
                          </a>
                        </div>
                        <div class="cnts">
                          <ul
                            id="pills-tab"
                            class="nav nav-pills"
                            role="tablist"
                          >
                            <li class="nav-item" role="presentation">
                              <button
                                id="pills-tab"
                                class="nav-link active"
                                data-toggle="pill"
                                data-target="#learned_box_tab01"
                                type="button"
                                role="tab"
                                aria-controls="pills"
                                aria-selected="true"
                              >
                                전체
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                id="pills-tab"
                                class="nav-link"
                                data-toggle="pill"
                                data-target="#learned_box_tab02"
                                type="button"
                                role="tab"
                                aria-controls="pills"
                                aria-selected="false"
                              >
                                질문
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                id="pills-tab"
                                class="nav-link"
                                data-toggle="pill"
                                data-target="#learned_box_tab03"
                                type="button"
                                role="tab"
                                aria-controls="pills"
                                aria-selected="false"
                              >
                                과제
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                id="pills-tab"
                                class="nav-link"
                                data-toggle="pill"
                                data-target="#learned_box_tab04"
                                type="button"
                                role="tab"
                                aria-controls="pills"
                                aria-selected="false"
                              >
                                노트
                              </button>
                            </li>
                          </ul>
                          <div id="pills-tabContent" class="tab-content">
                            <div
                              id="learned_box_tab01"
                              class="tab-pane fade show active"
                              role="tabpanel"
                              aria-labelledby="pills-tab"
                            >
                              <div class="list_area">
                                <!-- [개발참조] : 등록된 것이 없을 때
                                <div class="nothing_txt">
                                  새로운 소식이 없습니다.
                                </div> -->
                                <ul>
                                  <li>
                                    <span class="type">질문</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.글이길어지면글이길어지면글이길어지면글이길어지면</span
                                    >
                                    <i class="icons_new"></i>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                  <li>
                                    <span class="type">과제</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.</span
                                    >
                                    <i class="icons_new"></i>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                  <li>
                                    <span class="type">노트</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.글이길어지면글이길어지면글이길어지면글이길어지면
                                    </span>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                  <li>
                                    <span class="type">질문</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.글이길어지면글이길어지면글이길어지면글이길어지면
                                    </span>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              id="learned_box_tab02"
                              class="tab-pane fade"
                              role="tabpanel"
                              aria-labelledby="pills-tab"
                            >
                              <div class="list_area">
                                <!-- [개발참조] : 등록된 것이 없을 때
                                <div class="nothing_txt">
                                  새로운 소식이 없습니다.
                                </div> -->
                                <ul>
                                  <li>
                                    <span class="type">질문</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.글이길어지면글이길어지면글이길어지면글이길어지면</span
                                    >
                                    <i class="icons_new"></i>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              id="learned_box_tab03"
                              class="tab-pane fade"
                              role="tabpanel"
                              aria-labelledby="pills-tab"
                            >
                              <div class="list_area">
                                <!-- [개발참조] : 등록된 것이 없을 때
                                <div class="nothing_txt">
                                  새로운 소식이 없습니다.
                                </div> -->
                                <ul>
                                  <li>
                                    <span class="type">과제</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.</span
                                    >
                                    <i class="icons_new"></i>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              id="learned_box_tab04"
                              class="tab-pane fade"
                              role="tabpanel"
                              aria-labelledby="pills-tab"
                            >
                              <div class="list_area">
                                <!-- [개발참조] : 등록된 것이 없을 때
                                <div class="nothing_txt">
                                  새로운 소식이 없습니다.
                                </div> -->
                                <ul>
                                  <li>
                                    <span class="type">노트</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.글이길어지면글이길어지면글이길어지면글이길어지면
                                    </span>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /.학습함 -->
                    </div>
                    <div class="col-12">
                      <!-- 공지사항 -->
                      <div class="notice">
                        <div class="title_area">
                          <h4 class="title">공지사항</h4>
                          <!-- <span class="num">999+</span> 필요시 사용 -->
                          <a href="javascript:;" class="more">
                            <i class="icons_plus_circle_on"></i> 더보기
                          </a>
                        </div>
                        <div class="cnts">
                          <ul
                            id="pills-tab"
                            class="nav nav-pills"
                            role="tablist"
                          >
                            <li class="nav-item" role="presentation">
                              <button
                                id="pills-tab"
                                class="nav-link active"
                                data-toggle="pill"
                                data-target="#notice_tab01"
                                type="button"
                                role="tab"
                                aria-controls="pills"
                                aria-selected="true"
                              >
                                전체
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                id="pills-tab"
                                class="nav-link"
                                data-toggle="pill"
                                data-target="#notice_tab02"
                                type="button"
                                role="tab"
                                aria-controls="pills"
                                aria-selected="false"
                              >
                                클래스링크
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                id="pills-tab"
                                class="nav-link"
                                data-toggle="pill"
                                data-target="#notice_tab03"
                                type="button"
                                role="tab"
                                aria-controls="pills"
                                aria-selected="false"
                              >
                                교육기관 공지
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                id="pills-tab"
                                class="nav-link"
                                data-toggle="pill"
                                data-target="#notice_tab04"
                                type="button"
                                role="tab"
                                aria-controls="pills"
                                aria-selected="false"
                              >
                                반 공지
                              </button>
                            </li>
                          </ul>
                          <div id="pills-tabContent" class="tab-content">
                            <div
                              id="notice_tab01"
                              class="tab-pane fade show active"
                              role="tabpanel"
                              aria-labelledby="pills-tab"
                            >
                              <div class="list_area">
                                <!-- [개발참조] : 등록된 것이 없을 때
                                <div class="nothing_txt">
                                  등록된 공지사항이 없습니다.
                                </div> -->
                                <ul>
                                  <li>
                                    <span class="type">질문</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.글이길어지면글이길어지면글이길어지면글이길어지면</span
                                    >
                                    <i class="icons_new"></i>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                  <li>
                                    <span class="type">과제</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.</span
                                    >
                                    <i class="icons_new"></i>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                  <li>
                                    <span class="type">노트</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.글이길어지면글이길어지면글이길어지면글이길어지면
                                    </span>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                  <li>
                                    <span class="type">질문</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.글이길어지면글이길어지면글이길어지면글이길어지면
                                    </span>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              id="notice_tab02"
                              class="tab-pane fade"
                              role="tabpanel"
                              aria-labelledby="pills-tab"
                            >
                              <div class="list_area">
                                <!-- [개발참조] : 등록된 것이 없을 때
                                <div class="nothing_txt">
                                  등록된 공지사항이 없습니다.
                                </div> -->
                                <ul>
                                  <li>
                                    <span class="type">질문</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.글이길어지면글이길어지면글이길어지면글이길어지면</span
                                    >
                                    <i class="icons_new"></i>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              id="notice_tab03"
                              class="tab-pane fade"
                              role="tabpanel"
                              aria-labelledby="pills-tab"
                            >
                              <div class="list_area">
                                <!-- [개발참조] : 등록된 것이 없을 때
                                <div class="nothing_txt">
                                  등록된 공지사항이 없습니다.
                                </div> -->
                                <ul>
                                  <li>
                                    <span class="type">과제</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.</span
                                    >
                                    <i class="icons_new"></i>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              id="notice_tab04"
                              class="tab-pane fade"
                              role="tabpanel"
                              aria-labelledby="pills-tab"
                            >
                              <div class="list_area">
                                <!-- [개발참조] : 등록된 것이 없을 때
                                <div class="nothing_txt">
                                  등록된 공지사항이 없습니다.
                                </div> -->
                                <ul>
                                  <li>
                                    <span class="type">노트</span>
                                    <span class="subject"
                                      >청담어학원 영어심화 리스닝
                                      질문드려요.글이길어지면글이길어지면글이길어지면글이길어지면
                                    </span>
                                    <span class="date">2022.01.01</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /.공지사항 -->
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="row">
                    <div class="col-12">
                      <div class="calendar_section">
                        <!-- 캘린더 영역 -->
                        <div class="calendar">
                          <div class="date_area">
                            <i class="icons_arrow_circle_l_off"></i>
                            <span class="date">12월 31일 월요일</span>
                            <i class="icons_arrow_circle_r_off"></i>
                          </div>
                          <div class="calendar_data">
                            <table
                              class="calendar_table"
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <thead>
                                <tr class="week_tit">
                                  <th>S</th>
                                  <th>M</th>
                                  <th>T</th>
                                  <th>W</th>
                                  <th>T</th>
                                  <th>F</th>
                                  <th>S</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="week first">
                                  <td class="calendar-day">
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
                                  </td>
                                  <td class="calendar-day">
                                    <span class="daynum">5</span>
                                  </td>
                                  <td class="calendar-day">
                                    <span class="daynum">6</span>
                                  </td>
                                  <td class="calendar-day">
                                    <span class="daynum">7</span>
                                  </td>
                                </tr>
                                <tr class="week second">
                                  <td class="calendar-day">
                                    <span class="daynum">8</span>
                                  </td>
                                  <td class="calendar-day">
                                    <span class="daynum">9</span>
                                  </td>
                                  <td class="calendar-day">
                                    <span class="daynum">10</span>
                                  </td>
                                  <td class="calendar-day today">
                                    <!-- 오늘 날짜 : today -->
                                    <span class="daynum">11</span>
                                  </td>
                                  <td class="calendar-day">
                                    <span class="daynum">12</span>
                                  </td>
                                  <td class="calendar-day">
                                    <span class="daynum">13</span>
                                  </td>
                                  <td class="calendar-day">
                                    <span class="daynum">14</span>
                                  </td>
                                </tr>
                                <tr class="week third">
                                  <td class="calendar-day">
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
                                  <td class="calendar-day active">
                                    <!-- 선택한 날짜 : active -->
                                    <span class="daynum">20</span>
                                  </td>
                                  <td class="calendar-day">
                                    <span class="daynum">21</span>
                                  </td>
                                </tr>
                                <tr class="week fourth">
                                  <td class="calendar-day">
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
                                  <td class="calendar-day">
                                    <span class="daynum">28</span>
                                  </td>
                                </tr>
                                <tr class="week last">
                                  <td class="calendar-day">
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
                                  <td class="calendar-day calendar-other-month">
                                    <span class="daynum">4</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <!-- /.캘린더 영역-->
                        <!-- 선택일자 스케쥴 -->
                        <div class="schedule">
                          <div class="date">2022년 01월 01일 월</div>
                          <div class="list_area">
                            <!-- [개발참조] : 등록된 것이 없을 때
                            <div class="nothing_txt">
                              오늘의 일정이 없습니다.
                            </div> -->
                            <ul>
                              <li>
                                <div class="time">2:00</div>
                                <div class="lesson_info">
                                  <div class="subject">
                                    영어심화 리스닝
                                    글이길어지면글이길어지면글이길어지면글이길어지면
                                  </div>
                                  <div class="lesson">
                                    <span>영어</span
                                    ><span class="divid"></span>
                                    <span>심화 A반</span
                                    ><span class="divid"></span>
                                    <span class="teacher">홍길동 선생님</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="time">2:00</div>
                                <div class="lesson_info">
                                  <div class="subject">
                                    영어심화 리스닝
                                    글이길어지면글이길어지면글이길어지면글이길어지면
                                  </div>
                                  <div class="lesson">
                                    <span>영어</span
                                    ><span class="divid"></span>
                                    <span>심화 A반</span
                                    ><span class="divid"></span>
                                    <span class="teacher">홍길동 선생님</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="time">2:00</div>
                                <div class="lesson_info">
                                  <div class="subject">
                                    영어심화 리스닝
                                    글이길어지면글이길어지면글이길어지면글이길어지면
                                  </div>
                                  <div class="lesson">
                                    <span>영어</span
                                    ><span class="divid"></span>
                                    <span>심화 A반</span
                                    ><span class="divid"></span>
                                    <span class="teacher">홍길동 선생님</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <!-- /.선택일자 스케쥴 -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <!-- 강의코스 -->
                  <div class="lecture_course">
                    <h4 class="title">강의코스</h4>
                    <div class="cnts">
                      <div
                        v-if="lectureCourseList.length == 0"
                        class="nothing_txt"
                      >
                        새로운 소식이 없습니다.
                      </div>
                      <CustomSwiper v-else :dataList="lectureCourseList" />
                    </div>
                  </div>
                  <!-- /.강의코스 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- //container -->
</template>
<script>
import EducationHeader from '@/components/education/EducationHeader.vue'
import CustomSwiper from '@/components/common/custom/CustomSwiper.vue'
export default {
  name: 'IndexPage',
  components: { EducationHeader, CustomSwiper },
  data() {
    return {
      todayLectureList: [
        {
          academy: '일산어학원',
          time: '09:00 ~ 12:00',
          subject: '영어심화리딩',
          lessonTitle: '영어',
          lessonClass: '심화 A반',
          teacher: '홍길동 선생님',
        },
        {
          academy: '김포어학원',
          time: '09:00 ~ 12:00',
          subject: '수학심화리딩',
          lessonTitle: '수학',
          lessonClass: '심화 B반',
          teacher: '임꺽정 선생님',
        },
        {
          academy: '광주어학원',
          time: '09:00 ~ 12:00',
          subject: '과학심화리딩',
          lessonTitle: '과학',
          lessonClass: '심화 C반',
          teacher: '임창정 선생님',
        },
        {
          academy: '한남어학원',
          time: '09:00 ~ 12:00',
          subject: '체육심화리딩',
          lessonTitle: '체육',
          lessonClass: '심화 D반',
          teacher: '전현무 선생님',
        },
        {
          academy: '마포어학원',
          time: '09:00 ~ 12:00',
          subject: '음악심화리딩',
          lessonTitle: '음악',
          lessonClass: '심화 E반',
          teacher: '김종국 선생님',
        },
        {
          academy: '홍대어학원',
          time: '09:00 ~ 12:00',
          subject: '사회심화리딩',
          lessonTitle: '사회',
          lessonClass: '심화 F반',
          teacher: '유재석 선생님',
        },
        {
          academy: '잠실어학원',
          time: '09:00 ~ 12:00',
          subject: '국어심화리딩',
          lessonTitle: '국어',
          lessonClass: '심화 G반',
          teacher: '사투리 선생님',
        },
      ],
      lectureCourseList: [
        {
          academy: '일산어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '영어심화리딩',
          lessonTitle: '영어',
          lessonClass: '심화 A반',
          teacher: '홍길동 선생님',
        },
        {
          academy: '김포어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '수학심화리딩',
          lessonTitle: '수학',
          lessonClass: '심화 B반',
          teacher: '임꺽정 선생님',
        },
        {
          academy: '광주어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '과학심화리딩',
          lessonTitle: '과학',
          lessonClass: '심화 C반',
          teacher: '임창정 선생님',
        },
        {
          academy: '한남어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '체육심화리딩',
          lessonTitle: '체육',
          lessonClass: '심화 D반',
          teacher: '전현무 선생님',
        },
        {
          academy: '마포어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '음악심화리딩',
          lessonTitle: '음악',
          lessonClass: '심화 E반',
          teacher: '김종국 선생님',
        },
        {
          academy: '홍대어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '사회심화리딩',
          lessonTitle: '사회',
          lessonClass: '심화 F반',
          teacher: '유재석 선생님',
        },
        {
          academy: '잠실어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '국어심화리딩',
          lessonTitle: '국어',
          lessonClass: '심화 G반',
          teacher: '사투리 선생님',
        },
      ],
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    },
  },
}
</script>

