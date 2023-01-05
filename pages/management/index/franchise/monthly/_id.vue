<template>
  <div>
    <div class="content_area">
      <!--  3Depth -->
      <ul class="nav nav-tabs depth03">
        <li class="nav-item">
          <NuxtLink
            class="nav-link"
            :class="{ active: $route.fullPath.includes('/list') }"
            to="/management/franchise/list"
            >가맹한 리스트</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink
            class="nav-link"
            :class="{ active: $route.fullPath.includes('/monthly') }"
            to="/management/franchise/monthlyuse"
            >월별 이용 현황</NuxtLink
          >
        </li>
      </ul>

      <div class="tab-content depth03 ac_manage_frc frc_monthlyusage_list">
        <MonthlyUseListBox
          :monthlyUseList="monthlyUseList"
          @move-prev="onMovePrev"
          @open-FCDetail="onOpenFCDetailModal"
        />
      </div>
    </div>

    <FranchiseDetailModal
      :data="openFCDetailModal"
      @close="onCloseFCDetailModal"
    />
  </div>
</template>

<script>
import FranchiseDetailModal from '@/components/common/modal/franchise/FranchiseDetailModal.vue'
import MonthlyUseListBox from '@/components/franchiseSubscribe/MonthlyUseListBox.vue'
export default {
  name: 'MonthlyId',
  components: {
    FranchiseDetailModal,
    MonthlyUseListBox,
  },
  data() {
    return {
      monthlyUseList: [
        {
          id: 1,
          fc_name: '잉글리쉬캐슬',
          chief_name: '홍길동',
          use_student: 2,
          total_student: 4,
          student: [
            {
              id: 1,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 1,
              access_count: 2,
            },
            {
              id: 2,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 3,
              access_count: 9,
            },
            {
              id: 3,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 1,
              access_count: 3,
            },
            {
              id: 4,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 2,
              access_count: 15,
            },
          ],
        },
        {
          id: 2,
          fc_name: '잉글리쉬캐슬',
          chief_name: '홍길동',
          use_student: 2,
          total_student: 4,
          student: [
            {
              id: 1,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 1,
              access_count: 3,
            },
            {
              id: 2,
              student_name: '홍길동',
              identify: 'acbd1234acbd12',
              year: 3,
              access_count: 6,
            },
          ],
        },
      ],

      openFCDetailModal: {
        open: false,
        data: {},
      },
    }
  },
  methods: {
    onMovePrev() {
      this.$router.push('/management/franchise/monthlyuse')
    },

    onOpenFCDetailModal(data) {
      this.openFCDetailModal.open = true
      this.openFCDetailModal.data = data
    },
    onCloseFCDetailModal() {
      this.openFCDetailModal.open = false
      this.openFCDetailModal.data = {}
    },
  },
}
</script>

<style></style>
