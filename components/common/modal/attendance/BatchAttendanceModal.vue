<template>
  <Transition name="modal">
    <div
      v-if="open"
      id="modalBatchAttendance"
      class="modal modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">일괄 출결</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal_batchattendance">
              <div class="date_area">
                <div class="class_name">{{ selectedClass.class }}</div>
                <div class="date">{{ date }}</div>
                <div class="dropdown form-inline">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    오후 4:48
                  </button>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">00:00</a>
                    <a class="dropdown-item" href="#">00:00</a>
                    <a class="dropdown-item" href="#">00:00</a>
                  </div>
                </div>
              </div>
              <div class="cnts_section">
                <div class="list_section">
                  <div class="all">
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chkMore01all"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chkMore01all"
                        >전체 등원</label
                      >
                    </div>
                    <span class="ss_txt">00명</span>
                  </div>
                  <div class="list_area">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0101"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0101"
                            >홍길동</label
                          >
                        </div>
                        <div class="times">오후 4:48 하원</div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0102"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0102"
                            >홍길순</label
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
                            >이순길</label
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="btn_area">
                    <button class="btn btn_crud_default">등원하기</button>
                  </div>
                </div>

                <div class="list_section">
                  <div class="all">
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chkMore02all"
                        type="checkbox"
                        class="custom-control-input"
                      />
                      <label class="custom-control-label" for="chkMore02all"
                        >전체 하원</label
                      >
                    </div>
                    <span class="ss_txt">00명</span>
                  </div>
                  <div class="list_area">
                    <ul>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0201"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0201"
                            >홍길동</label
                          >
                        </div>
                        <div class="times">오후 4:48 등원</div>
                      </li>
                      <li>
                        <div class="custom-control custom-checkbox form-inline">
                          <input
                            id="chkMore0202"
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="chkMore0202"
                            >홍길순</label
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
                            >이순길</label
                          >
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="btn_area">
                    <!-- 비활성 : disabled -->
                    <button class="btn btn_crud_default disabled">
                      하원하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'BatchAttendanceModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    selectedClass: {
      type: Object,
      default: () => {},
    },
    date: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
