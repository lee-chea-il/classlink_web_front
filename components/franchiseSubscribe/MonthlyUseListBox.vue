<template>
  <div class="tab-pane active">
    <!-- 검색 영역 -->
    <div class="search_section">
      <div class="right_area">
        <button class="btn btn_crud_default" @click="$emit('move-prev')">
          목록보기
        </button>
      </div>
    </div>
    <!-- 검색 영역 -->
    <!-- 테이블 영역 -->
    <div class="table_section">
      <table class="table">
        <thead>
          <tr>
            <th>번호</th>
            <th>기간</th>
            <th>FC 이름</th>
            <th>기관장 이름</th>
            <th>이용 학생 수</th>
            <th>총 학생 수</th>
            <th>상세</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in monthlyUseList" :key="idx">
            <td>{{ item.id }}</td>
            <td>2022.01.20 - 2022.01.20</td>
            <td>{{ item.fc_name }}</td>
            <td>{{ item.chief_name }}</td>
            <td>{{ item.use_student }}</td>
            <td>{{ item.total_student }}</td>
            <td>
              <i
                class="btn icons_zoom_off"
                @click="$emit('open-FCDetail', item.student)"
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
  name: 'MonthlyUseListBox',
  props: {
    monthlyUseList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
