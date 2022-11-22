<template>
  <div class="tab-pane active">
    <!-- 컨트롤 버튼 영역 -->
    <div class="search_section">
      <div class="left_area">
        <button class="btn btn_crud_default" @click="$emit('delete')">
          삭제
        </button>
        <div class="info_box">
          활성화 {{ statusTrue }}명 비활성화 {{ statusFalse }}명
        </div>
      </div>
      <div class="right_area">
        <button class="btn btn_crud_point" @click="$emit('click-register')">
          선생님 등록
        </button>
      </div>
    </div>
    <!-- /.컨트롤 버튼 영역 -->
    <!-- 검색 영역 -->
    <div class="search_section">
      <div class="left_area">
        <div class="dropdown form-inline">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            최신 등록순
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">최신 등록순</a>
            <a class="dropdown-item" href="#">이름 오름차순</a>
            <a class="dropdown-item" href="#">이름 내림차순</a>
            <a class="dropdown-item" href="#">학년 오름차순</a>
            <a class="dropdown-item" href="#">학년 내림차순</a>
          </div>
        </div>
        <div class="dropdown form-inline">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            {{ statusFlag === 0 ? '활성화' : '비활성화' }}
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#" @click="$emit('click-status')">{{
              statusFlag === 0 ? '비활성화' : '활성화'
            }}</a>
          </div>
        </div>
      </div>
      <div class="right_area">
        <div class="input-group input-search form-inline">
          <input
            type="text"
            class="form-control"
            placeholder="선생님 이름 검색"
          />
          <div class="input-group-append">
            <button class="btn icons_search_off" type="button"></button>
          </div>
        </div>
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
                  :checked="allCheckBoxFlag"
                  @input="$emit('checked-all', $event)"
                />
                <label class="custom-control-label" for="chkAll"></label>
              </div>
            </th>
            <th>선생님 이름</th>
            <th>닉네임</th>
            <th>ID</th>
            <th>담당 과목</th>
            <th>소속 그룹</th>
            <th>연락처</th>
            <th>상세</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in teacherList" :key="idx">
            <td>
              <div class="custom-control custom-checkbox form-inline">
                <input
                  :id="idx"
                  name="chk"
                  type="checkbox"
                  class="custom-control-input"
                  @input="$emit('select-teacher', $event)"
                />
                <label class="custom-control-label" :for="idx"></label>
              </div>
            </td>
            <td>
              <span>{{ item.name }}</span> 선생님
            </td>
            <td>{{ item.nickname }}</td>
            <td>{{ item.account }}</td>
            <td>{{ item.subject }}</td>
            <td>{{ item.group }}</td>
            <td>{{ item.phone }}</td>
            <td>
              <i class="btn icons_zoom_off" @click="$emit('click-detail')"></i>
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
  name: 'TeacherListBox',
  props: {
    statusTrue: {
      type: Number,
      default: 0,
    },
    statusFalse: {
      type: Number,
      default: 0,
    },
    teacherList: {
      type: Array,
      default: () => [],
    },
    allCheckBoxFlag: {
      type: Boolean,
      default: false,
    },
    statusFlag: {
      type: Number,
      default: 0,
    },
  },
}
</script>
<style scoped></style>
