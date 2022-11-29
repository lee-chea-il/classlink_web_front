<template>
  <div
    id="modalLectureRegi02"
    class="modal fade modal_ac_manage_lec"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <Header :title="modalTitle" />
        <div class="modal-body">
          <div class="cnts_section">
            <!-- 왼쪽 SECTION -->
            <LeftSection
              ref="leftSection"
              :teacherList="teacherList"
              :curriculumList="curriculumList"
              @remove-active="removeActiveStyle"
              @plus-event-click="plusEventClick"
            />
            <!-- 왼쪽 SECTION -->

            <!-- 오른쪽 SECTION -->
            <RightSection
              ref="rightSection"
              :dataList="myCurriculumList"
              @remove-active="removeActiveStyle"
            />
            <!-- 오른쪽 SECTION -->
          </div>
        </div>
        <ReverseBtnBox
          v-if="identity !== 'teacher'"
          prevTarget="#modalLectureRegi"
          nextTarget="#modalLectureRegi03"
        />
        <ModalBtnBox v-else submitTxt="저장" />
      </div>
    </div>
  </div>
</template>

<script>
import ReverseBtnBox from '../../ReverseBtnBox.vue'
import ModalBtnBox from '../../ModalBtnBox.vue'
import LeftSection from '~/components/lecture/selectCurriculum/SelectCurriculumLeftSection.vue'
import RightSection from '~/components/lecture/selectCurriculum/SelectCurriculumRightSection.vue'
import Header from '~/components/common/ModalHeader.vue'
let isAddActiveStype = false
export default {
  name: 'SelectCurriculumModal',
  components: { LeftSection, RightSection, Header, ReverseBtnBox, ModalBtnBox },
  props: {
    modalTitle: {
      type: String,
      default: '',
    },
    curriculumList: {
      type: Array,
      default: () => [],
    },
    teacherList: {
      type: Array,
      default: () => [],
    },
    identity: {
      type: String,
      default: '',
    },
    myCurriculumList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    plusEventClick(copyData) {
      isAddActiveStype = true
      this.$refs.rightSection.$refs.myCurriculum.pasteData(copyData)
    },
    removeActiveStyle() {
      if (isAddActiveStype) {
        isAddActiveStype = false
        this.$refs.leftSection.$refs.curriculum.resetActiveStyle()
        this.$refs.rightSection.$refs.myCurriculum.resetActiveStyle()
      }
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
