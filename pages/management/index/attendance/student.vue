<template>
  <div id="content" class="content">
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item">
          <NuxtLink
            class="nav-link"
            :class="{ active: $route.fullPath.includes('/student') }"
            to="/management/attendance/student"
            >학생 출결</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink
            class="nav-link"
            :class="{ active: $route.fullPath.includes('/class') }"
            to="/management/attendance/class"
            >반 출결</NuxtLink
          >
        </li>
      </ul>

      <div class="tab-content depth03 ac_manage_atd">
        <div class="tab-pane active">
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="right_area">
              <div class="date_box inline_block">2022.08.05 - 2022.08.05</div>
              <button class="btn icons_calendar_off"></button>
              <div class="input-group input-search form-inline">
                <input
                  type="text"
                  class="form-control"
                  placeholder="반, 학생 이름 검색"
                />
                <div class="input-group-append">
                  <button class="btn icons_search_off" type="button"></button>
                </div>
              </div>
              <button class="btn btn_crud_default">내역 다운로드</button>
            </div>
          </div>
          <!-- /.검색 영역 -->
          <!-- 테이블 영역 -->
          <div class="table_section">
            <table class="table">
              <thead>
                <tr>
                  <th>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chkAll"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chkAll"></label>
                    </div>
                  </th>
                  <th>학년</th>
                  <th>이름</th>
                  <th>ID</th>
                  <th>학생 연락처</th>
                  <th>학부모 연락처</th>
                  <th>오늘</th>
                  <th>출결</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chk01"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chk01"></label>
                    </div>
                  </td>
                  <td>1학년</td>
                  <td>홍길동</td>
                  <td>ididid123</td>
                  <td>010-1234-5678</td>
                  <td>010-1234-5678</td>
                  <td>등원</td>
                  <td>
                    <i
                      class="btn icons_zoom_off"
                      data-toggle="modal"
                      data-target="#modalMoreAttendance"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.테이블 영역 -->
          <!-- 페이징 영역 -->
          <div class="pagination_section">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="previous"></span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <span class="next"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <!-- /.페이징 영역 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
