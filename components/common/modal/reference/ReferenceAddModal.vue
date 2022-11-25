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
          <ModalHeader title="자료 등록" @close="$emit('close')" />

          <div class="modal-body">
            <div class="modal_dataregi row">
              <!-- 모달 내용 구분 class-->
              <!-- 왼쪽 영역 -->
              <ReferenceAddLeftField
                :reference="reference"
                :pushKeyword="pushKeyword"
                @change-input="$emit('change-input', $event)"
                @set-keyword="$emit('set-keyword', $event)"
                @change-keyword="$emit('changePushKeyword', $event)"
                @delete-keyword="$emit('delete-keyword', $event)"
                @open-save-path="$emit('open-save-path', $event)"
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

          <ModalBtnBox @close="$emit('close')" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import ModalBtnBox from '../../ModalBtnBox.vue'
import ReferenceAddLeftField from '~/components/reference/ReferenceAddLeftField.vue'
import ReferenceRightModal from '~/components/reference/ReferenceRightModal.vue'
export default {
  name: 'ReferenceAddModal',
  components: {
    ReferenceAddLeftField,
    ReferenceRightModal,
    ModalHeader,
    ModalBtnBox,
  },
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
    pushKeyword: {
      type: String,
      default: '',
    },
  },
}
</script>
