<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalQueFilter"
      class="modal modal_ac_manage_lec modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">필터</h5>
            <button type="button" class="close" @click="$emit('close')">
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="cnts_section">
              <!-- 1번 SECTION -->
              <div class="class_section">
                <div class="tit">질문</div>
                <div class="move_section">
                  <div class="list_section">
                    <div class="list_area no_search">
                      <ul>
                        <li>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chkMore01all"
                              type="checkbox"
                              class="custom-control-input"
                              checked
                            />
                            <label
                              class="custom-control-label"
                              for="chkMore01all"
                              >전체</label
                            >
                          </div>
                        </li>
                        <li>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="chkMore0101"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              for="chkMore0101"
                              >내게 온 질문</label
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!--/. 1번 SECTION -->
              <!-- 2번 SECTION -->
              <div class="class_section">
                <div class="tit">과목</div>
                <div class="move_section">
                  <div class="list_section">
                    <div class="input-group input-search">
                      <input
                        type="text"
                        placeholder="과목 검색"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn icons_x_circle_off"
                          type="button"
                        ></button>
                        <button
                          class="btn icons_search_off"
                          type="button"
                        ></button>
                      </div>
                    </div>
                    <div class="list_area">
                      <ul>
                        <li>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="subjectAll"
                              type="checkbox"
                              class="custom-control-input"
                              :checked="isTitleCheck.length === 0"
                            />
                            <label class="custom-control-label" for="subjectAll"
                              >전체</label
                            >
                          </div>
                        </li>
                        <li v-for="(item, idx) in isTitle" :key="idx">
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              :id="`subject${idx}`"
                              type="checkbox"
                              class="custom-control-input"
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
                </div>
              </div>
              <!-- /.2번 SECTION -->
              <!-- 3번 SECTION -->
              <div class="class_section">
                <div class="tit">강좌</div>
                <div class="move_section">
                  <div class="list_section">
                    <div class="input-group input-search">
                      <input
                        type="text"
                        placeholder="강좌 검색"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn icons_x_circle_off"
                          type="button"
                        ></button>
                        <button
                          class="btn icons_search_off"
                          type="button"
                        ></button>
                      </div>
                    </div>
                    <div class="list_area">
                      <ul>
                        <li>
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              id="lectureAll"
                              type="checkbox"
                              class="custom-control-input"
                              :checked="icuTitleCheck.length === 0"
                            />
                            <label class="custom-control-label" for="lectureAll"
                              >전체</label
                            >
                          </div>
                        </li>
                        <li v-for="(item, idx) in icuTitle" :key="idx">
                          <div
                            class="custom-control custom-checkbox form-inline"
                          >
                            <input
                              :id="`lecture${idx}`"
                              type="checkbox"
                              class="custom-control-input"
                            />
                            <label
                              class="custom-control-label"
                              :for="`lecture${idx}`"
                              >{{ item }}</label
                            >
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.3번 SECTION -->
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_point">검색</button>
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
  name: 'QueFilterModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    icuTitle: {
      type: Array,
      default: () => [],
    },
    icuTitleCheck: {
      type: Array,
      default: () => [],
    },
    isTitle: {
      type: Array,
      default: () => [],
    },
    isTitleCheck: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
