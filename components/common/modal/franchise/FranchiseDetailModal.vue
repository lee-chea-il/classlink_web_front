<template>
  <div
    id="modalFrcdetail"
    class="modal fade modal_ac_manage2_detail"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">상세보기</h5>
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
          <!-- 검색 영역 -->
          <div class="search_section">
            <div class="right_area">
              <div class="input-group input-search form-inline">
                <input
                  type="text"
                  class="form-control"
                  placeholder="학생 이름 검색"
                />
                <div class="input-group-append">
                  <button class="btn icons_search_off" type="button"></button>
                </div>
              </div>
            </div>
          </div>
          <!-- 검색 영역 -->
          <!-- 테이블 영역 -->
          <div class="table_section">
            <table class="table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>학생 이름</th>
                  <th>ID</th>
                  <th>학년</th>
                  <th>누적 접속(횟수)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in data.data" :key="idx">
                  <td>{{ item.id }}</td>
                  <td>{{ item.student_name }}</td>
                  <td>{{ item.identify }}</td>
                  <td>{{ item.year }} 학년</td>
                  <td>{{ item.access_count }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.테이블 영역 -->
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_default" data-dismiss="modal">
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FranchiseDetailModal',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
