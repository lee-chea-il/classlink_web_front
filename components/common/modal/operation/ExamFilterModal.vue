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
              {{ studentSearchDate.date_range_start }} -
              {{ studentSearchDate.date_range_end }}
            </div>
            <button
              class="btn icons_calendar_off"
              @click="openDatePickerModalDesc"
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
                          id="chkA01"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label class="custom-control-label" for="chkA01"
                          >전체</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkA02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chkA02"
                          >심화A반</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkA03"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chkA03"
                          >심화B반</label
                        >
                      </div>
                    </li>
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
                          id="chkB01"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label class="custom-control-label" for="chkB01"
                          >전체</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkB02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chkB02"
                          >수학</label
                        >
                      </div>
                    </li>
                    <li>
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
                    </li>
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
                          id="chkC01"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label class="custom-control-label" for="chkC01"
                          >전체</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkC02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chkC02"
                          >영어리딩기초</label
                        >
                      </div>
                    </li>
                    <li>
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
                    </li>
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
                          id="chkD01"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label class="custom-control-label" for="chkD01"
                          >전체</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkD02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chkD02"
                          >쪽지시험(22)</label
                        >
                      </div>
                    </li>
                    <li>
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
                    </li>
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
                          id="chkA01"
                          type="checkbox"
                          class="custom-control-input"
                          checked
                        />
                        <label class="custom-control-label" for="chkA01"
                          >전체</label
                        >
                      </div>
                    </li>
                    <li>
                      <div class="custom-control custom-checkbox form-inline">
                        <input
                          id="chkA02"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="chkA02"
                          >홍길동</label
                        >
                      </div>
                    </li>
                    <li>
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- /.STEP5 -->
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point">검색</button>
          <button class="btn btn_crud_default">취소</button>
        </div>
      </div>
    </div>

    <DatePickerModal
      :open="datePickerModalDesc.open"
      :range="range"
      @select-range="selectRange"
      @close="onCloseDatePickerModalDesc"
      @confirm="onClickConfirmBtn"
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
  data() {
    return {
      datePickerModalDesc: {
        open: false,
      },
      studentSearchDate: {
        date_range_start: '2022.11.22',
        date_range_end: '2022.11.29',
      },
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
  methods: {
    // 날짜 지정
    selectRange(e) {
      this.range.start = e.start
      this.range.end = e.end
      // console.log(this.range)
    },
    openDatePickerModalDesc() {
      this.datePickerModalDesc.open = true
    },
    onCloseDatePickerModalDesc() {
      this.datePickerModalDesc.open = false
    },
    changeDateFormat(date) {
      const year = date.getFullYear()
      const month = ('0' + (date.getMonth() + 1)).slice(-2)
      const day = ('0' + date.getDate()).slice(-2)
      const dateString = year + '.' + month + '.' + day
      return dateString
    },
    onClickConfirmBtn() {
      this.datePickerModalDesc.open = false
      this.studentSearchDate.date_range_start = this.changeDateFormat(
        this.range.start
      )
      this.studentSearchDate.date_range_end = this.changeDateFormat(
        this.range.end
      )
    },
  },
}
</script>

<style></style>
