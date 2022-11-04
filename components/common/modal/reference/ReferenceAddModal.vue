<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDataRegiModi"
      class="modal modal_ac_manage_dtr modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
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
              @click="$emit('close')"
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
                :reference="reference"
              />
            </div>
          </div>
          <div class="modal-footer">
            <!-- [개발참조] 자료등록일때 출력되는 버튼 -->
            <button class="btn btn_crud_point">등록</button>
            <button
              id="close"
              class="btn btn_crud_default"
              data-dismiss="modal"
              @click="$emit('close')"
            >
              취소
            </button>
            <!-- [개발참조] 자료수정일때 출력되는 버튼 -->
            <!-- 	<button class="btn btn_crud_point">완료</button>
					<button class="btn btn_crud_default" data-dismiss="modal">취소</button> -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ReferenceAddLeftField from '@/components/reference/ReferenceAddLeftField.vue'
import ReferenceRightModal from '@/components/reference/ReferenceRightModal.vue'
export default {
  name: 'ReferenceAddModal',
  components: { ReferenceAddLeftField, ReferenceRightModal },
  props: {
    open: Boolean,
    uploadType: {
      type: String,
      default: '',
    },
    uploadFile: {
      type: [Object, File],
      default: () => {},
    },
    reference: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
