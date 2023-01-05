<template>
  <div>
    <!-- <div v-if="askingboxList.length === 0" class="tab-pane active">
        [개발참조] 데이터가 없는 경우
        <div class="page_nodata">
          <div class="txt">질문이 없습니다.</div>
          <button
            class="btn btn_crud_point"
            data-toggle="modal"
            data-target="#modalLectureRegi"
          >
            강좌 만들기
          </button>
        </div>
        /.데이터가 없는 경우
      </div> -->
    <div class="tab-pane active">
      <!-- 검색 영역 -->
      <!-- [개발참조] 필터링한 목록이 없는 경우 출력됨 -->
      <div v-if="filterList.length === 0" class="search_section">
        <button class="btn btn_crud_danger" @click="$emit('qa-delete')">
          삭제
        </button>
        <div class="right_area">
          <div class="input-group input-search form-inline form-lec">
            <input
              v-model="syncSearch"
              type="text"
              placeholder="키워드 검색"
              class="form-control"
            />
            <div class="input-group-append">
              <button class="btn icons_search_off" type="button"></button>
            </div>
          </div>
          <button class="btn btn_filter" @click="$emit('open-quefilter')">
            필터
          </button>
          <button
            class="btn btn_crud_default filter_lift"
            :disabled="filterList.length === 0"
            @click="$emit('delete-quefilter')"
          >
            필터 해제
          </button>
        </div>
      </div>

      <!-- [개발참조] 필터링한 목록이 있는 경우 출력됨 -->
      <div v-else class="search_section">
        <div class="left_area">
          <div class="row">
            <div class="keyword_area left_area">
              <div class="keyword_area_01">
                <span v-for="(item, idx) in 19" :key="idx" class="keyword01">
                  <span class="keyword01-1">내가 한 질문</span
                  ><span class="x cursor"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="right_area">
          <button class="btn btn_crud_danger" @click="$emit('qa-delete')">
            삭제
          </button>
          <div class="input-group input-search form-inline form-lec">
            <input
              v-model="syncSearch"
              type="text"
              placeholder="키워드 검색"
              class="form-control"
              @keyup.enter="$emit('search-question')"
            />
            <div class="input-group-append" @click="$emit('search-question')">
              <button class="btn icons_search_off" type="button"></button>
            </div>
          </div>
          <button class="btn btn_filter" @click="$emit('open-quefilter')">
            필터
          </button>
          <button
            class="btn btn_crud_default filter_lift"
            :disabled="filterList.length === 0"
            @click="$emit('delete-quefilter')"
          >
            필터 해제
          </button>
        </div>
      </div>
      <!-- 검색 영역 -->
      <!-- 테이블 영역 -->
      <div class="table_section">
        <table class="table">
          <thead>
            <tr>
              <th>
                <div class="custom-control custom-checkbox form-inline">
                  <input
                    id="chkAll"
                    :checked="allCheck"
                    type="checkbox"
                    class="custom-control-input"
                    @input="$emit('click-allcheck')"
                  />
                  <label class="custom-control-label" for="chkAll"></label>
                </div>
              </th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>강좌</th>
              <th>공개여부</th>
              <th>조회</th>
            </tr>
          </thead>
          <tbody v-for="(item, idx) in askingboxList" :key="idx">
            <tr :class="item.type === 1 ? 'que_reply' : ''">
              <td>
                <div class="custom-control custom-checkbox form-inline">
                  <input
                    :id="`question${idx}`"
                    type="checkbox"
                    class="custom-control-input"
                    :checked="
                      checkList.some(
                        (e) => e.qtb_idxs === item.questionvo.qtb_idx
                      )
                    "
                    @input="
                      $emit(
                        'check-question',
                        item.questionvo.qtb_idx,
                        item.questionvo.smem_idx
                      )
                    "
                  />
                  <label
                    class="custom-control-label"
                    :for="`question${idx}`"
                  ></label>
                </div>
              </td>
              <td
                class="cursor"
                @click="$emit('open-question', item.questionvo.qtb_idx)"
              >
                <div class="study_qustion">
                  {{ item.questionvo.qtb_title }}
                </div>
              </td>
              <td>
                {{
                  item.questionvo.qtb_writer_public_yn
                    ? item.questionvo.mem_name
                    : '비공개'
                }}
              </td>
              <td>
                {{
                  item.questionvo.qtb_registration_date
                    .substr(0, 10)
                    .replaceAll('-', '.')
                }}
              </td>
              <td>{{ item.questionvo.icu_title }}</td>
              <td>
                {{ item.questionvo.qtb_open_yn ? '공개' : '비공개' }}
              </td>
              <td>{{ item.questionvo.qtb_view_cnt }}</td>
            </tr>
            <tr
              v-for="(items, id) in item.answervo"
              :key="id"
              class="que_reply"
            >
              <td>
                <div class="custom-control custom-checkbox form-inline">
                  <input
                    :id="`answer${idx}${id}`"
                    type="checkbox"
                    class="custom-control-input"
                    :checked="
                      answerCheckList.some((e) => e.qba_idxs === items.qba_idx)
                    "
                    @input="$emit('check-answer', items.qba_idx, items.mem_idx)"
                  />
                  <label
                    class="custom-control-label"
                    :for="`answer${idx}${id}`"
                  ></label>
                </div>
              </td>
              <td
                class="study_qustion"
                @click="$emit('open-reply', items.qba_idx)"
              >
                └─ {{ items.qba_title }}
              </td>
              <td>{{ items.mem_name }} 선생님</td>
              <td>
                {{
                  items.qba_registration_date.substr(0, 10).replaceAll('-', '.')
                }}
              </td>
              <td>{{ items.icu_title === null ? '-' : items.icu_title }}</td>
              <td>
                {{ items.qba_open_yn ? '공개' : '비공개' }}
              </td>
              <td>
                {{ items.qba_view_cnt === null ? 0 : items.qba_view_cnt }}
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
              <a class="page-link cursor" @click="$emit('prev-page')">
                <span class="previous"></span>
              </a>
            </li>
            <li v-for="(item, idx) in endPage" :key="idx" class="page-item">
              <a
                class="page-link cursor"
                :class="{ active: currentPage === item }"
                @click="$emit('current-page', item)"
                >{{ item }}</a
              >
            </li>
            <li class="page-item">
              <a class="page-link cursor" @click="$emit('next-page')">
                <span class="next"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- /.페이징 영역 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    filterList: {
      type: Array,
      default: () => [],
    },
    search: {
      type: String,
      default: '',
    },
    allCheck: {
      type: Boolean,
      default: false,
    },
    checkList: {
      type: Array,
      default: () => [],
    },
    askingboxList: {
      type: Array,
      default: () => [],
    },
    answerCheckList: {
      type: Array,
      default: () => [],
    },
    endPage: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    syncSearch: {
      get() {
        return this.search
      },
      set(value) {
        this.$emit('update:search', value)
      },
    },
  },
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
.table tbody + tbody {
  border-top: 0;
}
</style>
