<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalLectureRegi02"
      class="modal modal_ac_manage_lec modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <Header title="강좌 수정" @close="$emit('close')" />
          <div class="modal-body">
            <div class="cnts_section">
              <!-- 왼쪽 SECTION -->
              <LeftSection :teacherList="teacherList" />
              <!-- 왼쪽 SECTION -->

              <!-- 오른쪽 SECTION -->
              <RightSection />
              <!-- 오른쪽 SECTION -->
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn_crud_default" @click="$emit('prev-button')">
              이전
            </button>
            <button class="btn btn_crud_point" @click="$emit('next-button')">
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import Header from '../../ModalHeader.vue'
import LeftSection from '~/components/lecture/selectCurriculum/SelectCurriculumLeftSection.vue'
import RightSection from '~/components/lecture/selectCurriculum/SelectCurriculumRightSection.vue'
export default {
  name: 'ChangeSelectCurriculumModal',
  components: { LeftSection, RightSection, Header },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    curriculumList: {
      type: Array,
      default: () => [],
    },
    teacherList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style scoped>
#institute > .vtl {
  height: 349px;
}
#franchise > .vtl {
  height: 349px;
}
#mydata > .vtl {
  height: 349px;
}
.main > ul {
  display: none;
}
</style>
