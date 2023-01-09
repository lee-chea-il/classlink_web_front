<template>
  <div class="tab-pane active">
    <!-- 검색 영역 -->
    <div class="search_section">
      <div class="right_area">
        <div class="date_box inline_block">
          {{ studentSearchDate.date_range_start }} -
          {{ studentSearchDate.date_range_end }}
        </div>
        <button
          class="btn icons_calendar_off"
          @click="$emit('open-datepicker')"
        ></button>
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
                  :checked="allCheck"
                  @input="$emit('click-allcheck')"
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
          <tr v-for="(item, idx) in studentList" :key="idx">
            <td>
              <div class="custom-control custom-checkbox form-inline">
                <input
                  :id="idx"
                  :checked="selectStudentList.includes(item.id)"
                  type="checkbox"
                  class="custom-control-input"
                  @input="$emit('click-checkbox', item)"
                />
                <label class="custom-control-label" :for="idx"></label>
              </div>
            </td>
            <td>{{ item.student_year }}학년</td>
            <td>{{ item.name }}</td>
            <td>{{ item.identify }}</td>
            <td>{{ item.student_phone }}</td>
            <td>{{ item.parent_phone }}</td>
            <td>{{ item.today }}</td>
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
</template>

<script>
export default {
  name: 'StudentAttendanceListBox',
  props: {
    studentSearchDate: {
      type: Object,
      default: () => {},
    },
    allCheck: {
      type: Boolean,
      default: false,
    },
    studentList: {
      type: Array,
      default: () => [],
    },
    selectStudentList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
