<template>
  <div
    id="modalExamFiter"
    class="modal fade modal_ac_manage_exam"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">상세검색</h5>
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
          <!-- 반이름 검색 -->
          <div class="search_class">
            <div class="date_box inline_block">
              {{ filterSearchDate.date_range_start }} -
              {{ filterSearchDate.date_range_end }}
            </div>
            <button
              class="btn icons_calendar_off"
              @click="$emit('filter-modal-open')"
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
          </div>
          <!-- /.반이름 검색 -->
          <div class="cnts_section">
            <!-- STEP1 -->
            <div class="class_section">
              <div class="tit_area">
                <div class="tit">반</div>
                <div class="step">Step 1</div>
              </div>
              <div class="list_section">
                <div class="input-group input-search">
                  <input
                    type="text"
                    placeholder="반 이름 검색"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button class="btn icons_search_off" type="button"></button>
                  </div>
                </div>
                <div class="list_area">
                  <ul>
                    <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="classAll"
                          type="checkbox"
                          class="custom-control-input"
                          :checked="tagList.classList.length === 0"
                          @click="$emit('all-check', 'classList')"
                        />
                        <label class="custom-control-label" for="classAll">
                          전체
                        </label>
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
                    <!-- <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkA03"
                          type="checkbox"
                          class="custom-control-input"
                          :checked="tagList.includes('심화B반')"
                          @input="$emit('add-tag', '심화B반')"
                        />
                        <label class="custom-control-label" for="chkA03"
                          >심화B반</label
                        >
                      </div>
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
            <!-- /.STEP1 -->
            <!-- STEP2 -->
            <div class="class_section">
              <div class="tit_area">
                <div class="tit">과목</div>
                <div class="step">Step 2</div>
              </div>
              <div class="list_section">
                <div class="input-group input-search">
                  <input
                    type="text"
                    placeholder="과목 검색"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button class="btn icons_search_off" type="button"></button>
                  </div>
                </div>
                <div class="list_area">
                  <ul>
                    <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="subjectAll"
                          type="checkbox"
                          class="custom-control-input"
                          :checked="tagList.subjectList.length === 0"
                          @click="$emit('all-check', 'subjectList')"
                        />
                        <label class="custom-control-label" for="subjectAll"
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
                          @input="$emit('add-tag', item, 'subjectList', $event)"
                        />
                        <label
                          class="custom-control-label"
                          :for="`subject${idx}`"
                          >{{ item }}</label
                        >
                      </div>
                    </li>
                    <!-- <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkB03"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chkB03"
                          >국어</label
                        >
                      </div>
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
            <!-- /.STEP2 -->
            <!-- STEP3 -->
            <div class="class_section">
              <div class="tit_area">
                <div class="tit">강좌</div>
                <div class="step">Step 3</div>
              </div>
              <div class="list_section">
                <div class="input-group input-search">
                  <input
                    type="text"
                    placeholder="강좌 이름 검색"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button class="btn icons_search_off" type="button"></button>
                  </div>
                </div>
                <div class="list_area">
                  <ul>
                    <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="courseAll"
                          type="checkbox"
                          class="custom-control-input"
                          :checked="tagList.courseList.length === 0"
                          @click="$emit('all-check', 'courseList')"
                        />
                        <label class="custom-control-label" for="courseAll"
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
                          @input="$emit('add-tag', item, 'courseList', $event)"
                        />
                        <label
                          class="custom-control-label"
                          :for="`course${idx}`"
                          >{{ item }}</label
                        >
                      </div>
                    </li>
                    <!-- <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkC03"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chkC03"
                          >영어리딩기초</label
                        >
                      </div>
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
            <!-- /.STEP3 -->
            <!-- STEP4 -->
            <div class="class_section">
              <div class="tit_area">
                <div class="tit">시험</div>
                <div class="step">Step 4</div>
              </div>
              <div class="list_section">
                <div class="input-group input-search">
                  <input
                    type="text"
                    placeholder="시험 유형 검색"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button class="btn icons_search_off" type="button"></button>
                  </div>
                </div>
                <div class="list_area">
                  <ul>
                    <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="examAll"
                          type="checkbox"
                          class="custom-control-input"
                          :checked="tagList.examList.length === 0"
                          @click="$emit('all-check', 'examList')"
                        />
                        <label class="custom-control-label" for="examAll"
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
                    <!-- <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkD03"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chkD03"
                          >퀴즈(6)</label
                        >
                      </div>
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
            <!-- /.STEP4 -->
            <!-- STEP5 -->
            <div class="class_section">
              <div class="tit_area">
                <div class="tit">학생</div>
                <div class="step">+ 옵션</div>
              </div>
              <div class="list_section">
                <div class="input-group input-search">
                  <input
                    type="text"
                    placeholder="학생 이름 검색"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button class="btn icons_search_off" type="button"></button>
                  </div>
                </div>
                <div class="list_area">
                  <ul>
                    <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="studentAll"
                          type="checkbox"
                          class="custom-control-input"
                          :checked="tagList.studentList.length === 0"
                          @click="$emit('all-check', 'studentList')"
                        />
                        <label class="custom-control-label" for="studentAll"
                          >전체</label
                        >
                      </div>
                    </li>
                    <li v-for="(item, idx) in filterList.student" :key="idx">
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          :id="`student${idx}`"
                          type="checkbox"
                          class="custom-control-input"
                          :checked="tagList.studentList.includes(item)"
                          @input="$emit('add-tag', item, 'studentList', $event)"
                        />
                        <label
                          class="custom-control-label"
                          :for="`student${idx}`"
                          >{{ item }}</label
                        >
                      </div>
                    </li>
                    <!-- <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkA03"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chkA03"
                          >홍길순</label
                        >
                      </div>
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
            <!-- /.STEP5 -->
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn_crud_point"
            data-dismiss="modal"
            @click="$emit('complete')"
          >
            검색
          </button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
        </div>
      </div>
    </div>

    <DatePickerModal
      :open="filterOpen.open"
      :range="filterRange"
      @select-range="$emit('filter-select-range', $event)"
      @close="$emit('filter-close')"
      @confirm="$emit('filter-confirm')"
    />
  </div>
</template>

<script>
import DatePickerModal from '@/components/common/modal/attendance/DatePickerModal.vue'
export default {
  name: 'ExamFilterModal',
  components: {
    DatePickerModal,
  },
  props: {
    tagList: {
      type: Object,
      default: () => {},
    },
    filterList: {
      type: Object,
      default: () => {},
    },
    filterOpen: {
      type: Object,
      default: () => {},
    },
    filterRange: {
      type: Object,
      default: () => {},
    },
    filterSearchDate: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
