<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDatafilterResult"
      class="modal modal_ac_manage_dtr modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">자료 검색 결과</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal_datafilter_result">
              <!-- 모달 내용 구분 class-->
              <div class="search_section">
                <div class="left_area">
                  <button
                    class="btn btn_crud_default copy"
                    data-dismiss="modal"
                    @click="$emit('copy')"
                  >
                    복사
                  </button>
                </div>
                <div class="right_area">
                  <div class="input-group input-search form-inline">
                    <input
                      type="text"
                      placeholder="검색어 입력"
                      class="form-control"
                      name="word"
                      :value="searchData.word"
                      @input="$emit('change-word', $event)"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                      ></button>
                    </div>
                  </div>
                  <button
                    class="btn btn_filter"
                    @click="$emit('open-filter', 'prev')"
                  >
                    필터
                  </button>
                </div>
              </div>

              <div class="table_area">
                <div class="table_thead">
                  <table class="tb">
                    <thead>
                      <tr>
                        <th>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chk01"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chk01"
                            ></label>
                          </div>
                        </th>
                        <th class="th01">파일이름</th>
                        <th class="th02">경로</th>
                        <th></th>
                        <th></th>
                        <th class="th03">과목</th>
                        <th class="th04">키워드</th>
                        <th class="th05">보기</th>
                        <th class="th06">위치</th>
                        <th></th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div class="table_tbody">
                  <table class="tb">
                    <tbody>
                      <!-- class="bg" -->
                      <tr
                        v-for="(reference, idx) in filterItem(resultSearchList)"
                        :key="idx"
                        :class="{ bg: idx % 2 !== 0 }"
                      >
                        <td>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chk02"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chk02"
                            ></label>
                          </div>
                        </td>
                        <td>
                          <div class="title">
                            {{ reference.name }}
                          </div>
                        </td>
                        <td>
                          <div class="path">
                            {{ reference.savePath }}
                          </div>
                        </td>
                        <td>
                          <div class="subject">{{ reference.subject }}</div>
                        </td>
                        <td>
                          <div class="keyword">
                            <span
                              v-for="(title, index) in reference.keyword"
                              :key="index"
                              >{{ title }}
                            </span>
                            <!-- {{ reference.keyword }} -->
                          </div>
                        </td>
                        <td><i class="icons_zoom_off"></i></td>
                        <td>
                          <button
                            class="btn btn_crud_default"
                            data-dismiss="modal"
                          >
                            이동
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="result">
                총 <span>{{ filterItem(resultSearchList).length }}</span
                >개의 검색 결과가 있습니다
              </div>
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
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <span class="next"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'SearchResultModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    searchData: {
      type: Object,
      default: () => {},
    },
    resultSearchList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setType(item) {
      if (item.uploadType === 'video' || item.uploadType === 'youtube') {
        return '동영상'
      } else if (item.uploadType === 'pdf' || item.uploadType === 'url') {
        return '문서'
      } else if (item.uploadType === 'quiz') {
        return '퀴즈'
      } else {
        return '쪽지시험'
      }
    },
    filterItem(list) {
      const filter = this.searchData

      if (
        filter.word?.length ||
        filter.type !== null ||
        filter.subject !== null ||
        filter.subject?.categor !== null
      ) {
        const newItem = list.filter((item) => {
          const isTitle = item.name.includes(filter.word)
          const isKeyword = item.keyword.includes(filter.word)
          const isSubject = filter.subject.includes(item.subject)
          const isDivision = filter.type.includes(item.fileDivision)
          const isCategory = filter.category.includes(this.setType(item))
          return isTitle || (isKeyword && isSubject && isDivision && isCategory)
        })
        return newItem
      } else {
        return list
      }
    },
  },
}
</script>

<style></style>
