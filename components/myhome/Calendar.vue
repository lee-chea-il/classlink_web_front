<template>
  <div class="calendar_section">
    <!-- 캘린더 영역 -->
    <div class="calendar">
      <div class="date_area">
        <i class="icons_arrow_circle_l_off"></i>
        <span class="date">12월 31일 월요일</span>
        <i class="icons_arrow_circle_r_off"></i>
      </div>
      <div class="calendar_data">
        <table class="calendar_table" cellspacing="0" cellpadding="0">
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
                영어심화 리스닝 글이길어지면글이길어지면글이길어지면글이길어지면
              </div>
              <div class="lesson">
                <span>영어</span><span class="divid"></span>
                <span>심화 A반</span><span class="divid"></span>
                <span class="teacher">홍길동 선생님</span>
              </div>
            </div>
          </li>
          <li>
            <div class="time">2:00</div>
            <div class="lesson_info">
              <div class="subject">
                영어심화 리스닝 글이길어지면글이길어지면글이길어지면글이길어지면
              </div>
              <div class="lesson">
                <span>영어</span><span class="divid"></span>
                <span>심화 A반</span><span class="divid"></span>
                <span class="teacher">홍길동 선생님</span>
              </div>
            </div>
          </li>
          <li>
            <div class="time">2:00</div>
            <div class="lesson_info">
              <div class="subject">
                영어심화 리스닝 글이길어지면글이길어지면글이길어지면글이길어지면
              </div>
              <div class="lesson">
                <span>영어</span><span class="divid"></span>
                <span>심화 A반</span><span class="divid"></span>
                <span class="teacher">홍길동 선생님</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- /.선택일자 스케쥴 -->
  </div>
</template>
<script>
export default {
  name: 'Calendar',
}
</script>
<style scoped></style>
