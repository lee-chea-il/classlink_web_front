<template>
  <div
    id="modalDataRegiModi"
    class="modal fade modal_ac_manage_dtr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
          <h5 id="exampleModalLabel" class="modal-title">자료 등록</h5>
          <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
          <!-- <h5 class="modal-title" id="exampleModalLabel">자료 수정</h5> -->
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
          <div class="modal_dataregi row">
            <!-- 모달 내용 구분 class-->
            <!-- 왼쪽 영역 -->
            <ReferenceAddLeftField
              :reference="reference"
              @change-input="$emit('change-input', $event)"
            />
            <!-- /.왼쪽 영역 -->

            <!-- 오른쪽 영역 -->
            <ReferenceRightModal
              :uploadType="uploadType"
              :uploadFile="uploadFile"
            />
          </div>
        </div>
        <div class="modal-footer">
          <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
          <button class="btn btn_crud_point">등록</button>
          <button class="btn btn_crud_default" data-dismiss="modal">
            취소
          </button>
          <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
          <!-- 	<button class="btn btn_crud_point">완료</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReferenceAddLeftField from '@/components/reference/ReferenceAddLeftField.vue'
import ReferenceRightModal from '@/components/reference/ReferenceRightModal.vue'
export default {
  name: 'ReferenceAddModal',
  components: { ReferenceAddLeftField, ReferenceRightModal },
  props: {
    uploadType: {
      type: String,
      default: '',
    },
    uploadFile: {
      type: [Object, File],
      default: null,
    },
    reference: {
      type: Object,
      default: null,
    },
  },

  watch: {
    reference(newValue, oldValue) {
      this.tagify.loadOriginalValues(newValue)
    },
  },
}
</script>
