<template>
  <div
      id="modalMoreReports"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              학습리포트 - <span>홍길동</span>
            </h5>
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
            <div class="modal_morereports">
              <div class="date_area">
                <div class="calendar_date_bluebox">2022.08.07 - 2022.08.13</div>
                <i class="icons_calendar_off mr-2"></i>
              </div>
              <div class="cnts_section">
                <div class="list_section">
                  <div class="title">반</div>
                  <div class="input-group input-search">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="반 이름 검색"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
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
                            checked
                          />
                          <label class="custom-control-label" for="chkMore01all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0101"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0101"
                            >심화A반</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0102"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0102"
                            >심화B반</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0103"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0103"
                            >심화C반</label
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
                      type="text"
                      class="form-control"
                      placeholder="과목 검색"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
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
                            checked
                          />
                          <label class="custom-control-label" for="chkMore02all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0201"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0201"
                            >영어</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0202"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0202"
                            >수학</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0203"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0203"
                            >국어</label
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
                      type="text"
                      class="form-control"
                      placeholder="강좌 이름 검색"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
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
                            checked
                          />
                          <label class="custom-control-label" for="chkMore03all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0301"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0301"
                            >영어리딩기초</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0302"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0302"
                            >영어리딩기초</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0303"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0303"
                            >영어리딩기초</label
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
                      type="text"
                      class="form-control"
                      placeholder="시험 유형 검색"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn icons_search_off"
                        type="button"
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
                            checked
                          />
                          <label class="custom-control-label" for="chkMore04all"
                            >전체</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0401"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0401"
                            >쪽지시험(22)</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0402"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0402"
                            >퀴즈(6)</label
                          >
                        </div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0403"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0403"
                            >정기시험(1)</label
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
            <button
              class="btn btn_crud_point"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modalMoreReports2"
            >
              검색
            </button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'ReportFilterModal',
}
</script>
<style scoped></style>
