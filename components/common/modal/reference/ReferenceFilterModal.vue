<template>
  <div
    id="modalDatafilter"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <ModalHeader title="필터" @close="$emit('close')" />

        <div class="modal-body">
          <div class="modal_datafilter">
            <!-- 모달 내용 구분 class-->
            <div class="filter_box">
              <div class="filter_first">
                <div class="title filter_name">구분</div>
                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box01chk01"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label
                      class="custom-control-label"
                      for="box01chk01"
                    ></label>
                  </div>
                  <span>전체</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box01chk02"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box01chk02"
                    ></label>
                  </div>
                  <span>교육기관</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box01chk03"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box01chk03"
                    ></label>
                  </div>
                  <span>프랜차이즈</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box01chk04"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box01chk04"
                    ></label>
                  </div>
                  <span>공개자료실</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box01chk05"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box01chk05"
                    ></label>
                  </div>
                  <span>내 자료</span>
                </div>
              </div>

              <div class="filter_second">
                <div class="title filter_name">과목</div>
                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box02chk01"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label
                      class="custom-control-label"
                      for="box02chk01"
                    ></label>
                  </div>
                  <span>전체</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box02chk02"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box02chk02"
                    ></label>
                  </div>
                  <span>국어</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box02chk03"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box02chk03"
                    ></label>
                  </div>
                  <span>영어</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box02chk04"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box02chk04"
                    ></label>
                  </div>
                  <span>수학</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box02chk05"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box02chk05"
                    ></label>
                  </div>
                  <span>기타</span>
                </div>
              </div>

              <div class="filter_third">
                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box03chk01"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box03chk01"
                    ></label>
                  </div>
                  <span>논술</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box03chk02"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box03chk02"
                    ></label>
                  </div>
                  <span>국어</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box03chk03"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box03chk03"
                    ></label>
                  </div>
                  <span>영어</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box03chk04"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box03chk04"
                    ></label>
                  </div>
                  <span>수학</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box03chk05"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box03chk05"
                    ></label>
                  </div>
                  <span>기타</span>
                </div>
              </div>

              <div class="filter_forth">
                <div class="title filter_name">유형</div>
                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box04chk01"
                      type="checkbox"
                      class="custom-control-input"
                      checked
                    />
                    <label
                      class="custom-control-label"
                      for="box04chk01"
                    ></label>
                  </div>
                  <span>전체</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box04chk02"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box04chk02"
                    ></label>
                  </div>
                  <span>동영상</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box04chk03"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box04chk03"
                    ></label>
                  </div>
                  <span>문서</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box04chk04"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box04chk04"
                    ></label>
                  </div>
                  <span>퀴즈</span>
                </div>

                <div class="filter_name">
                  <div
                    class="custom-control custom-checkbox form-inline checked"
                  >
                    <input
                      id="box04chk05"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      for="box04chk05"
                    ></label>
                  </div>
                  <span>쪽지시험</span>
                </div>
              </div>

              <div class="filter_fifth">
                <div class="title filter_name">키워드</div>
                <input
                  type="text"
                  placeholder="추가할 키워드를 입력해 주세요"
                  class="form-control form-inline filter_control"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn_crud_point"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#modalDatafilterResult"
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
import ModalHeader from '../../ModalHeader.vue'

export default {
  name: 'ReferenceFilterModal',
  components: { ModalHeader },
}
</script>

<style></style>
