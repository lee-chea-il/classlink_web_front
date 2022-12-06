<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalLessonView"
      class="modal modal_ac_manage_lesson double modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="레슨 열람" @close="$emit('close')" />
          <div class="modal-body">
            <div class="modal_LessonView">
              <!-- 모달 내용 구분 class-->
              <!-- 2단 분류 컨텐츠 -->
              <div class="divide_section">
                <!-- 왼쪽 영역 -->
                <BrowseLeftField
                  :pageRoot="pageRoot"
                  :lessonItem="lessonItem"
                  @select-reference="$emit('select-reference', $event)"
                />
                <!-- /.왼쪽 영역 -->

                <!-- 오른쪽 영역 -->
                <BrowseRightField
                  :pageRoot="pageRoot"
                  :referenceItem="selectReference"
                  :currentIdx="currentIdx"
                  @pagination="paginationEmit"
                  @quiz-preview="$emit('quiz-preview', $event)"
                  @test-preview="$emit('test-preview', $event)"
                />
                <!-- /.오른쪽 영역 -->
              </div>
              <!-- /.2단 분류 컨텐츠 -->
            </div>
          </div>

          <ModalBtnBox
            :pageRoot="pageRoot"
            submitTxt="수정"
            @submit="$emit('lesson-change', lessonItem)"
            @close="$emit('close')"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../common/ModalHeader.vue'
import ModalBtnBox from '../../common/ModalBtnBox.vue'
import BrowseLeftField from '../lesson/BrowseLeftField.vue'
import BrowseRightField from '../lesson/BrowseRightField.vue'

export default {
  name: 'LessonBrowseModal',
  components: {
    ModalHeader,
    BrowseLeftField,
    BrowseRightField,
    ModalBtnBox,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    currentIdx: {
      type: Number,
      default: 0,
    },
    selectReference: {
      type: Object,
      default: () => {},
    },
    lessonItem: {
      type: [Array, Object],
      default: () => [],
    },
    pageRoot: {
      type: String,
      default: '',
    },
  },
  methods: {
    paginationEmit(item, idx) {
      this.$emit('pagination', item, idx)
    },
  },
}
</script>
