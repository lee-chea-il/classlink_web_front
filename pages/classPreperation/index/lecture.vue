<template>
  <div>
    <PageHeader title="강좌 리스트" />
    <div class="tab-content depth03 ac_manage_lec">
      <!-- [개발참조] 데이터가 없는 경우 -->
      <NoListSection v-if="lectureList.length == 0" />
      <!-- /.데이터가 없는 경우 -->
      <!-- 데이터 있을 경우 -->
      <LectureList v-else />
      <!-- /.데이터 있을 경우 -->
    </div>

    <CreateLectureModal />
    <CurriculumAssignmentModal />
    <SelectCurriculumModal />
    <SelectScheduleModal />
    <SelectCurriculumListModal />
  </div>
</template>

<script>
import CreateLectureModal from '~/components/common/modal/lecture/CreateLectureModal.vue'
import CurriculumAssignmentModal from '~/components/common/modal/lecture/CurriculumAssignmentModal.vue'
import SelectCurriculumListModal from '~/components/common/modal/lecture/SelectCurriculumListModal.vue'
import SelectCurriculumModal from '~/components/common/modal/lecture/SelectCurriculumModal.vue'
import SelectScheduleModal from '~/components/common/modal/lecture/SelectScheduleModal.vue'
import PageHeader from '~/components/common/PageHeader.vue'
import LectureList from '~/components/lecture/LectureList.vue'
import NoListSection from '~/components/lecture/NoListSection.vue'

export default {
  name: 'LecturePage',
  components: {
    PageHeader,
    CreateLectureModal,
    CurriculumAssignmentModal,
    SelectCurriculumModal,
    SelectScheduleModal,
    SelectCurriculumListModal,
    NoListSection,
    LectureList,
  },
  data() {
    return {
      lectureList: [{ name: '강의 1' }],
    }
  },
}
</script>

<style></style>
