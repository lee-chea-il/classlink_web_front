<template>
  <div class="today_study">
    <h4 class="title">오늘의 강의</h4>
    <div class="cnts">
      <div v-if="todayLectureList.length == 0" class="nothing_txt">
        새로운 소식이 없습니다.
      </div>
      <!-- Swiper -->
      <CustomSwiper v-else :dataList="todayLectureList" :isHorizontal="false" />
    </div>
  </div>
</template>
<script>
import CustomSwiper from '@/components/common/custom/CustomSwiper.vue'
export default {
  name: 'TodaysLecture',
  components: { CustomSwiper },
  props: {
    todayLectureList: {
      type: Array,
      default: null,
    },
  },
}
</script>
<style scoped></style>
