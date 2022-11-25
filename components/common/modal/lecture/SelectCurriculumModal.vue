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
        <Header />
        <div class="modal-body">
          <div class="cnts_section">
            <!-- 왼쪽 SECTION -->
            <LeftSection
              :teacherList="teacherList"
              :curriculumList="curriculumList"
              @plus-event-click="plusEventClick"
            />
            <!-- 왼쪽 SECTION -->

            <!-- 오른쪽 SECTION -->
            <RightSection />
            <!-- 오른쪽 SECTION -->
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn_crud_default"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#modalLectureRegi"
          >
            이전
          </button>
          <button
            class="btn btn_crud_point"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#modalLectureRegi03"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSection from '~/components/lecture/selectCurriculum/SelectCurriculumLeftSection.vue'
import RightSection from '~/components/lecture/selectCurriculum/SelectCurriculumRightSection.vue'
import Header from '~/components/lecture/selectCurriculum/SelectCurriculumHeader.vue'
export default {
  name: 'SelectCurriculumModal',
  components: { LeftSection, RightSection, Header },
  props: {
    curriculumList: {
      type: Array,
      default: () => [],
    },
    teacherList: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    plusEventClick(node){
      
    }
  }
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
