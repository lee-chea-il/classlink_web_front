<template>
  <div
    id="modalReassignstudent"
    class="modal fade double"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">학생 재배정</h5>
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
          {{ studentInfo.name }} 학생을 재배정하시겠습니까?

          <div class="class_box">
            <div class="class_first">
              <div
                v-for="(item, idx) in classList"
                :key="idx"
                class="class_name"
              >
                <div class="custom-control custom-checkbox form-inline checked">
                  <input
                    :id="item"
                    type="checkbox"
                    class="custom-control-input"
                    :checked="studentInfo.class.includes(item)"
                    @input="$emit('check-class', $event)"
                  />
                  <label class="custom-control-label" :for="item"></label>
                </div>
                <span>{{ item }}</span>
              </div>
            </div>

            <div class="class_second">
              <div class="class_name">
                <div class="custom-control custom-checkbox form-inline checked">
                  <input
                    id="chk06"
                    type="checkbox"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="chk06"></label>
                </div>
                <span>심화 A반</span>
              </div>

              <div class="class_name">
                <div class="custom-control custom-checkbox form-inline checked">
                  <input
                    id="chk06"
                    type="checkbox"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="chk06"></label>
                </div>
                <span>심화 A반</span>
              </div>

              <div class="class_name">
                <div class="custom-control custom-checkbox form-inline checked">
                  <input
                    id="chk06"
                    type="checkbox"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="chk06"></label>
                </div>
                <span>심화 A반</span>
              </div>

              <div class="class_name">
                <div class="custom-control custom-checkbox form-inline checked">
                  <input
                    id="chk06"
                    type="checkbox"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="chk06"></label>
                </div>
                <span>심화 A반</span>
              </div>

              <div class="class_name">
                <div class="custom-control custom-checkbox form-inline checked">
                  <input
                    id="chk06"
                    type="checkbox"
                    class="custom-control-input"
                    checked
                  />
                  <label class="custom-control-label" for="chk06"></label>
                </div>
                <span>심화 A반</span>
              </div>
            </div>
            <div class="content">
              <i class="icons_information"></i>
              전체해제 버튼을 누른 후 재배정을 누르면 ‘배정X’반으로 이동합니다.
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn_crud_point" data-dismiss="modal">
            재배정
          </button>
          <button class="btn btn_crud_default" @click="$emit('reset-check')">
            전체해제
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResetAssignmentModal',
  props: {
    classList: {
      type: Array,
      default: () => [],
    },
    studentInfo: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style scoped></style>
