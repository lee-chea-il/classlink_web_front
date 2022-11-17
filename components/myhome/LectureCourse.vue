<template>
  <div>
    <div class="lecture_course">
      <h4 class="title">강의코스</h4>
      <div class="cnts">
        <div v-if="lectureCourseList.length == 0" class="nothing_txt">
          새로운 소식이 없습니다.
        </div>
        <!-- Swiper -->
        <CustomSwiper
          v-else
          :dataList="lectureCourseList"
          @click-lecture="onClickLecture"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CustomSwiper from '@/components/common/custom/CustomSwiper.vue'
export default {
  name: 'LectureCourse',
  components: { CustomSwiper },
  props: {
    lectureCourseList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onClickLecture(idx) {
      this.$emit('click-lecture', idx)
    },
  },
}
</script>
<style scoped></style>
