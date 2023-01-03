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
          <div class="reassign_tit">
            {{ studentInfo.mem_name }} 학생을 재배정하시겠습니까?
          </div>

          <ul class="class_box">
            <li
              v-for="(item, idx) in studentInfo.all_lecture_info"
              :key="idx"
              class="class_name"
            >
              <span class="custom-control custom-checkbox form-inline checked">
                <input
                  :id="`csm_${item.csm_idx}`"
                  type="checkbox"
                  class="custom-control-input"
                  :checked="item.check_ban"
                  @input="$emit('check-class', $event)"
                />
                <label
                  class="custom-control-label"
                  :for="`csm_${item.csm_idx}`"
                ></label> </span
              ><span>{{ item.csm_name }}</span>
            </li>
          </ul>

          <div class="reassign_info">
            <i class="icons_information"></i>
            전체해제 버튼을 누른 후 재배정을 누르면 ‘배정X’반으로 이동합니다.
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
