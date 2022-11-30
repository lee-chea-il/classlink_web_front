<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalMoreReports"
      class="modal modal-mask modal-index"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              학습리포트 - <span>{{ studentInfo.name }}</span>
            </h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal_morereports">
              <div class="date_area">
                <div class="calendar_date_bluebox">
                  {{ dateRange.start }} - {{ dateRange.end }}
                </div>
                <i
                  class="icons_calendar_off mr-2"
                  @click="$emit('click-calendar')"
                ></i>
              </div>
              <div class="cnts_section">
                <div class="list_section">
                  <div class="title">반</div>
                  <div class="input-group input-search">
                    <input
                      id="classSearchText"
                      type="text"
                      class="form-control"
                      placeholder="반 이름 검색"
                      @input="$emit('change-input', $event)"
                      @keyup.enter="$emit('search-filter', 'classSearchText')"
                    />
                    <div class="input-group-append">
                      <button
                        id="classSearchText"
                        class="btn icons_search_off"
                        type="button"
                        @click="$emit('search-filter', 'classSearchText')"
                      ></button>
                    </div>
                  </div>

                  <div class="list_area">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore01all"
                            type="checkbox"
                            class="custom-control-input"
                            :checked="tagList.classList.length === 0"
                            @click="$emit('all-check', 'classList')"
                          />
                          <label class="custom-control-label" for="chkMore01all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li v-for="(item, idx) in filterList.class" :key="idx">
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            :id="`class${idx}`"
                            type="checkbox"
                            class="custom-control-input"
                            :data-value="item"
                            :checked="tagList.classList.includes(item)"
                            @input="$emit('add-tag', item, 'classList', $event)"
                          />
                          <label
                            class="custom-control-label"
                            :for="`class${idx}`"
                            >{{ item }}</label
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="list_section">
                  <div class="title">과목</div>
                  <div class="input-group input-search">
                    <input
                      id="subjectSearchText"
                      type="text"
                      class="form-control"
                      placeholder="과목 검색"
                      @input="$emit('change-input', $event)"
                      @keyup.enter="$emit('search-filter', 'subjectSearchText')"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                        @click="$emit('search-filter', 'subjectSearchText')"
                      ></button>
                    </div>
                  </div>
                  <div class="list_area">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore02all"
                            type="checkbox"
                            class="custom-control-input"
                            :checked="tagList.subjectList.length === 0"
                            @click="$emit('all-check', 'subjectList')"
                          />
                          <label class="custom-control-label" for="chkMore02all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li v-for="(item, idx) in filterList.subject" :key="idx">
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            :id="`subject${idx}`"
                            type="checkbox"
                            class="custom-control-input"
                            :checked="tagList.subjectList.includes(item)"
                            @input="
                              $emit('add-tag', item, 'subjectList', $event)
                            "
                          />
                          <label
                            class="custom-control-label"
                            :for="`subject${idx}`"
                            >{{ item }}</label
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="list_section">
                  <div class="title">강좌</div>
                  <div class="input-group input-search">
                    <input
                      id="courseSearchText"
                      type="text"
                      class="form-control"
                      placeholder="강좌 이름 검색"
                      @input="$emit('change-input', $event)"
                      @keyup.enter="$emit('search-filter', 'courseSearchText')"
                    />
                    <div class="input-group-append">
                      <button
                        id="courseSearchText"
                        class="btn icons_search_off"
                        type="button"
                        @click="$emit('search-filter', 'courseSearchText')"
                      ></button>
                    </div>
                  </div>
                  <div class="list_area">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore03all"
                            type="checkbox"
                            class="custom-control-input"
                            :checked="tagList.courseList.length === 0"
                            @click="$emit('all-check', 'courseList')"
                          />
                          <label class="custom-control-label" for="chkMore03all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li v-for="(item, idx) in filterList.course" :key="idx">
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            :id="`course${idx}`"
                            type="checkbox"
                            class="custom-control-input"
                            :checked="tagList.courseList.includes(item)"
                            @input="
                              $emit('add-tag', item, 'courseList', $event)
                            "
                          />
                          <label
                            class="custom-control-label"
                            :for="`course${idx}`"
                            >{{ item }}</label
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="list_section">
                  <div class="title">시험</div>
                  <div class="input-group input-search">
                    <input
                      id="examSearchText"
                      type="text"
                      class="form-control"
                      placeholder="시험 유형 검색"
                      @input="$emit('change-input', $event)"
                      @keyup.enter="$emit('search-filter', 'examSearchText')"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
                        @click="$emit('search-filter', 'examSearchText')"
                      ></button>
                    </div>
                  </div>
                  <div class="list_area">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore04all"
                            type="checkbox"
                            class="custom-control-input"
                            :checked="tagList.examList.length === 0"
                            @click="$emit('all-check', 'examList')"
                          />
                          <label class="custom-control-label" for="chkMore04all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li v-for="(item, idx) in filterList.exam" :key="idx">
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            :id="`exam${idx}`"
                            type="checkbox"
                            class="custom-control-input"
                            :checked="tagList.examList.includes(item)"
                            @input="$emit('add-tag', item, 'examList', $event)"
                          />
                          <label
                            class="custom-control-label"
                            :for="`exam${idx}`"
                            >{{ item }}</label
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point" @click="$emit('click-search')">
              검색
            </button>
            <button class="btn btn_crud_default" @click="$emit('close')">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: 'ReportFilterModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    studentInfo: {
      type: Object,
      default: () => {},
    },
    dateRange: {
      type: Object,
      default: () => {},
    },
    filterList: {
      type: Object,
      default: () => {},
    },
    tagList: {
      type: Object,
      default: () => {},
    },
    searchTextList: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style scoped>
.modal-index {
  z-index: 999;
}
</style>
