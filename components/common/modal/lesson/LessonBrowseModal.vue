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
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="레슨 열람" @close="$emit('close')" />
          <div class="modal-body">
            <div class="modal_LessonView">
              <!-- 모달 내용 구분 class-->
              <!-- 2단 분류 컨텐츠 -->
              <div class="divide_section">
                <!-- 왼쪽 영역 -->
                <LessonBrowseLeftField
                  :lessonItem="lessonItem"
                  @select-reference="$emit('select-reference', $event)"
                />
                <!-- /.왼쪽 영역 -->

                <!-- 오른쪽 영역 -->
                <LessonBrowseRightField
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
          <div class="modal-footer">
            <button
              class="btn btn_crud_default"
              @click="$emit('lesson-change', lessonItem)"
            >
              수정
            </button>
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
import ModalHeader from '../../ModalHeader.vue'
import LessonBrowseLeftField from '~/components/lesson/lessonBrowse/LessonBrowseLeftField.vue'
import LessonBrowseRightField from '~/components/lesson/lessonBrowse/LessonBrowseRightField.vue'

export default {
  name: 'LessonBrowseModal',
  components: {
    ModalHeader,
    LessonBrowseLeftField,
    LessonBrowseRightField,
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
  },
  methods: {
    paginationEmit(item, idx) {
      this.$emit('pagination', item, idx)
    },
  },
}
</script>
