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
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ValidationObserver v-slot="{ invalid }">
            <ModalHeader
              :title="`자료 ${modalTitle}`"
              @close="$emit('close')"
            />

            <div class="modal-body">
              <div class="modal_dataregi row">
                <!-- 모달 내용 구분 class-->
                <!-- 왼쪽 영역 -->
                <ReferenceLeftField
                  :reference="reference"
                  :pushKeyword="pushKeyword"
                  :pageRoot="pageRoot"
                  @change-input="$emit('change-input', $event)"
                  @set-keyword="$emit('set-keyword', $event)"
                  @change-keyword="$emit('change-keyword', $event)"
                  @delete-keyword="$emit('delete-keyword', $event)"
                  @open-save-path="$emit('open-save-path', $event)"
                  @delete-thumbnail="$emit('delete-thumbnail')"
                />
                <!-- /.왼쪽 영역 -->

                <!-- 오른쪽 영역 -->
                <ReferenceRightField
                  :open="modalTitle === '수정'"
                  :reference="reference"
                  :playTime="playTime"
                  @change-file="$emit('change-file', $event)"
                />
              </div>
            </div>

            <ModalBtnBox
              :invalid="isDisabled(invalid, reference.keyword?.length === 0)"
              :submitTxt="modalTitle"
              @submit="$emit('submit')"
              @close="$emit('close')"
            />
          </ValidationObserver>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import ModalHeader from '../../common/ModalHeader.vue'
import ModalBtnBox from '../../common/ModalBtnBox.vue'
import ReferenceLeftField from '../reference/ReferenceLeftField.vue'
import ReferenceRightField from '../reference/ReferenceRightField.vue'
export default {
  name: 'ReferenceAddModal',
  components: {
    ReferenceLeftField,
    ValidationObserver,
    ReferenceRightField,
    ModalHeader,
    ModalBtnBox,
  },
  props: {
    open: Boolean,
    pageRoot: {
      type: String,
      default: '',
    },
    category: {
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
    modalTitle: { type: String, default: '' },
    playTime: { type: String, default: '' },
  },
  methods: {
    isDisabled(aFlag, bFlag) {
      if (!aFlag && !bFlag) {
        return false
      } else return true
    },
  },
}
</script>

<style></style>
