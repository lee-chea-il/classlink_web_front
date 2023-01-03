<template>
  <div class="tab-content depth03 ac_manage_notice ac_manage_classplan">
    <div class="tab-pane active">
      <!-- 검색 영역 -->
      <div class="search_section">
        <div class="left_area">
          <span class="course_tit">{{ lectureInfo.lec_title }}</span>
          <span class="course_con"
            >{{ lectureInfo.csm_name_list }} / {{ lectureInfo.mem_name }} 선생님
          </span>
        </div>
        <div class="right_area">
          <nuxt-link to="/class/lecturecourse" class="btn btn_crud_default"
            >코스목록 보기</nuxt-link
          >
          <button class="btn btn_crud_danger" @click="$emit('delete-plan')">
            삭제
          </button>
          <div class="input-group input-search form-inline form-search">
            <input
              type="text"
              class="form-control"
              placeholder="검색어 입력"
              @input="$emit('change-input', $event)"
              @keyup.enter="$emit('search-plan')"
            />
            <div class="input-group-append">
              <button
                class="btn icons_search_off"
                type="button"
                @click="$emit('search-plan')"
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
      <div v-if="syllabusList.length === 0" class="page_nodata">
        등록된 강의계획서가 없습니다.
      </div>

      <div v-else class="table_section">
        <table class="table">
          <colgroup>
            <col width="5%" />
            <col width="45%" />
            <col width="10%" />
            <col width="" />
            <col width="10%" />
            <col width="" />
          </colgroup>
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
              <th>읽은 수/전체</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="searchFlag === 0">
            <tr v-for="(item, idx) in syllabusList" :key="idx" class="cursor">
              <td>
                <div class="custom-control custom-checkbox form-inline">
                  <input
                    :id="item.lep_idx"
                    name="chk"
                    type="checkbox"
                    class="custom-control-input"
                    :checked="
                      deleteIdxList
                        .map((x) => x.lep_idxs)
                        .includes(item.lep_idx)
                    "
                    @input="$emit('select-plan', $event, item.mem_idx)"
                  />
                  <label
                    class="custom-control-label"
                    :for="item.lep_idx"
                  ></label>
                </div>
              </td>
              <td @click="$emit('click-plan', item.lec_idx, item.lep_idx)">
                <div class="classplan_tit">
                  {{ item.lep_title }}
                </div>
              </td>
              <td @click="$emit('click-plan', item.lec_idx, item.lep_idx)">
                {{ item.mem_name }}
              </td>
              <td @click="$emit('click-plan', item.lec_idx, item.lep_idx)">
                {{ item.lep_registration_date }}
              </td>
              <td @click="$emit('click-plan', item.lec_idx, item.lep_idx)">
                {{ item.lep_repeat_yn ? '공개' : '비공개' }}
              </td>
              <td @click="$emit('click-plan', item.lec_idx, item.lep_idx)">
                {{ item.lep_view_cnt }}/{{ lectureInfo.student_count }}
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
            <li class="page-item cursor">
              <a class="page-link" @click="$emit('click-direction', 'minus')">
                <span class="previous"></span>
              </a>
            </li>
            <li
              v-for="(item, idx) in endPageNumber"
              :key="idx"
              class="page-item cursor"
            >
              <a
                class="page-link"
                :class="item === currentPage ? 'active' : ''"
                @click="$emit('click-page', item)"
                >{{ item }}</a
              >
            </li>
            <li class="page-item cursor">
              <a class="page-link" @click="$emit('click-direction', 'plus')">
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
  name: 'LecturePlan',
  props: {
    syllabusList: {
      type: Array,
      default: () => [],
    },
    allCheckBoxFlag: {
      type: Boolean,
      default: false,
    },
    lectureStudentCount: {
      type: Number,
      default: 0,
    },
    lectureInfo: {
      type: Object,
      default: () => {},
    },
    deleteIdxList: {
      type: Array,
      default: () => [],
    },
    endPageNumber: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    onClickCheckBox({ target: { id } }) {
      console.log(id)
    },
  },
}
</script>
<style scoped>
.cursor {
  cursor: pointer;
}
</style>
