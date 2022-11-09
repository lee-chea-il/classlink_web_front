<template>
  <Transition name="modal">
    <div
      v-show="open"
      class="modal double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="쪽지시험 미리보기" @close="$emit('close')" />

          <div id="modalPreviewTest" class="modal-body">
            <div class="preview_quiz row">
              <!-- 위 영역   -->
              <LeftField :testList="testList" />
              <!-- /. 위 영역 -->

              <!-- 오른쪽영역 -->
              <RightField
                :testList="testList"
                :currentIdx="currentPageIdx"
                @pagination="setPagination"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import LeftField from '~/components/reference/noteTestPreview/LeftField.vue'
import RightField from '~/components/reference/noteTestPreview/RightField.vue'

export default {
  name: 'NoteTestPreviewModal',
  components: { ModalHeader, LeftField, RightField },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    testList: { type: Array, default: () => [] },
    currentPageIdx: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    setPagination(e, idx) {
      this.$emit('pagination', e, idx)
    },
  },
}
</script>
