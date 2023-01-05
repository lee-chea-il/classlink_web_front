<template>
  <div class="tab-pane active">
    <!-- 필터영역 -->
    <div class="search_section">
      <div class="box01">
        <div class="row">
          <div class="keyword_area left_area">
            <div class="keyword_area_01">
              <span v-for="(item, idx) in filterTag" :key="idx" class="keyword">
                <span class="keyword01-1">{{ item }}</span
                ><span
                  class="x cursor"
                  @click="$emit('delete-filtertag', idx)"
                ></span>
              </span>
            </div>
          </div>
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
                placeholder="학생 이름, 반 검색"
                class="form-control"
              />
              <div class="input-group-append">
                <button class="btn icons_search_off" type="button"></button>
              </div>
            </div>
            <button
              class="btn btn_filter"
              data-toggle="modal"
              data-target="#modalExamFiter"
            >
              상세
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.필터영역 -->
    <!-- 검색 영역 -->
    <div class="search_section">
      <div class="left_area">
        <div class="dropdown form-inline">
          <!-- <select class="btn dropdown-toggle" @change="onChangeSort">
                  <option value="all" class="dropdown-item">전체</option>
                  <option value="highLesson" class="dropdown-item">
                    레슨 높은 순
                  </option>
                  <option value="lowLesson" class="dropdown-item">
                    레슨 낮은 순
                  </option>
                  <option value="highScore" class="dropdown-item">
                    점수 높은 순
                  </option>
                  <option value="lowScore" class="dropdown-item">
                    점수 낮은 순
                  </option>
                </select> -->
          <button
            class="btn dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            {{ sortSelect }}
          </button>
          <div class="dropdown-menu">
            <a
              class="dropdown-item cursor"
              @click="$emit('change-sort', $event)"
              >전체</a
            >
            <a
              class="dropdown-item cursor"
              @click="$emit('change-sort', $event)"
              >레슨 높은 순</a
            >
            <a
              class="dropdown-item cursor"
              @click="$emit('change-sort', $event)"
              >레슨 낮은 순</a
            >
            <a
              class="dropdown-item cursor"
              @click="$emit('change-sort', $event)"
              >점수 높은 순</a
            >
            <a
              class="dropdown-item cursor"
              @click="$emit('change-sort', $event)"
              >점수 낮은 순</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- /.검색 영역 -->
    <!-- 테이블 영역 -->
    <div class="search_result">
      <table class="table table-borderless">
        <!-- 	<colgroup>
								<col width="10%">
								<col width="10%">
								<col width="12%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="10%">
								<col width="18%">
								<col width="10%">
							</colgroup> -->
        <thead>
          <tr>
            <th class="th01">반</th>
            <th class="th02">이름</th>
            <th class="th03">강좌</th>
            <th class="th04">레슨</th>
            <th class="th05">유형</th>
            <th class="th06">점수</th>
            <th class="th07">반평균</th>
            <th class="th08">응시일</th>
            <th class="th09">응시인원</th>
          </tr>
        </thead>
      </table>
      <div class="tbl_overflow">
        <table class="table table-borderless">
          <!-- 	<colgroup>
									<col width="10%">
									<col width="10%">
									<col width="12%">
									<col width="10%">
									<col width="10%">
									<col width="10%">
									<col width="10%">
									<col width="18%">
									<col width="10%">
								</colgroup> -->
          <tbody>
            <tr v-for="(item, idx) in examList" :key="idx">
              <td class="td01">{{ item.class }}</td>
              <td class="td02">{{ item.name }}</td>
              <td class="td03">{{ item.course }}</td>
              <td class="td04">레슨{{ item.lesson }}</td>
              <td class="td05">
                {{
                  item.fileType === 'quiz'
                    ? '퀴즈'
                    : item.fileType === 'test'
                    ? '쪽지시험'
                    : ''
                }}
              </td>
              <td class="td06">
                <a class="cursor" @click="$emit('open-exam', item, item.id)">
                  {{ item.score }}
                </a>
              </td>
              <td class="td07">
                <a
                  class="cursor"
                  @click="$emit('open-average', item, item.id)"
                  >{{ item.average }}</a
                >
              </td>
              <td class="td08">
                <span>{{ item.date }}</span> <span>{{ item.time }}</span>
              </td>
              <td class="td09">
                {{ item.personnel }}/{{ item.totalPersonnel }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- /.테이블 영역 -->
  </div>
</template>

<script>
export default {
  name: 'ExamListBox',
  props: {
    filterTag: {
      type: Array,
      default: () => [],
    },
    studentSearchDate: {
      type: Object,
      default: () => {},
    },
    sortSelect: {
      type: String,
      default: '',
    },
    examList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.ac_manage_exam .keyword {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 28px;
  background: #d1dbff;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.modal-index {
  z-index: 999 !important;
}

.cursor {
  cursor: pointer;
}
</style>
