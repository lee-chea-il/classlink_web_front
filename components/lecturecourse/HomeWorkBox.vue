<template>
  <div class="tab-content depth03 ac_manage_notice ac_manage_classplan">
    <div class="tab-pane active">
      <!-- 검색 영역 -->
      <div class="search_section">
        <div class="left_area">
          <span class="course_tit">{{ lectureInfo.lec_title }}</span>
          <span class="course_con">
            {{ lectureInfo.csm_name_list }} /
            {{ lectureInfo.mem_name }} 선생님</span
          >
        </div>
        <div class="right_area">
          <nuxt-link to="/class/lecturecourse" class="btn btn_crud_default"
            >코스목록 보기</nuxt-link
          >
          <button class="btn btn_crud_danger" @click="$emit('delete-homework')">
            삭제
          </button>
          <div class="input-group input-search form-inline form-search">
            <input
              type="text"
              class="form-control"
              placeholder="검색어 입력"
              @input="$emit('change-input', $event)"
              @keyup.enter="$emit('search-homework')"
            />
            <div class="input-group-append">
              <button
                class="btn icons_search_off"
                type="button"
                @click="$emit('search-homework')"
              ></button>
            </div>
          </div>
          <a class="btn btn_crud_point" @click="$emit('click-register')"
            >등록</a
          >
        </div>
      </div>
      <!-- /.검색 영역 -->
      <!-- 테이블 영역 -->
      <!-- [개발참조] 데이터 없을 경우  -->
      <div v-if="taskList.length === 0" class="page_nodata">
        등록된 과제가 없습니다.
      </div>

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
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>공개여부</th>
              <th>조회</th>
              <th>제출 수/전체</th>
              <th>제출 현황</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in taskList" :key="idx">
              <td>
                <div class="custom-control custom-checkbox form-inline">
                  <input
                    :id="item.hwb_idx"
                    name="chk"
                    type="checkbox"
                    class="custom-control-input"
                    :checked="
                      deleteIdxList
                        .map((x) => x.hwb_idxs)
                        .includes(item.hwb_idx)
                    "
                    @input="$emit('select-homework', $event, item.mem_idx)"
                  />
                  <label
                    class="custom-control-label"
                    :for="item.hwb_idx"
                  ></label>
                </div>
              </td>
              <td>
                <div
                  class="classplan_tit"
                  @click="$emit('open-detail', item.hwb_idx)"
                >
                  {{ item.hwb_title }}
                </div>
              </td>
              <td>{{ item.mem_name }}</td>
              <td>{{ item.hwb_registration_date.substr(0, 10) }}</td>
              <td>{{ item.hwb_open_yn ? '공개' : '비공개' }}</td>
              <td>{{ item.hwb_view_cnt }}</td>
              <td>{{ item.submitCount }}/{{ item.studentCount }}</td>
              <td>
                <i
                  class="icons_zoom_off"
                  @click="$emit('click-submission', item)"
                ></i>
              </td>
              <td></td>
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
      <!-- [개발참조] 데이터 없을 경우 출력됨
					<div class="btn_sec">
						<button class="btn btn_crud_point">등록</button>
						<button class="btn btn_crud_default">취소</button>
					</div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeWorkBox',
  props: {
    lectureInfo: {
      type: Object,
      default: () => {},
    },
    taskList: {
      type: Array,
      default: () => [],
    },
    searchFlag: {
      type: Number,
      default: 0,
    },
    searchList: {
      type: Array,
      default: () => [],
    },
    allCheckBoxFlag: {
      type: Boolean,
      default: false,
    },
    deleteIdxList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped></style>
