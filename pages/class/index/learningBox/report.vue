<template>
  <div>
    <!--  3Depth -->
    <ul class="nav nav-tabs depth03">
      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          :class="{ active: $route.fullPath.includes('/question') }"
          to="/class/learningBox/question"
          >질문함</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          :class="{ active: $route.fullPath.includes('/report') }"
          to="/class/learningBox/report"
          >리포트</NuxtLink
        >
      </li>
    </ul>
    <div class="tab-content depth03 ac_manage_notice ac_manage_report">
      <ReportListBox @open-reportsFilter="onOpenMoreReportsFilterModal" />
    </div>

    <MoreReportsFilterModal
      :open="openMoreReportsFilterModal.open"
      @close="onCloseMoreReportsFilterModal"
      @more-report-open="onOpenMoreReportsModal"
    />
    <MoreReportsModal
      :open="openMoreReportsModal.open"
      @close="onCloseMoreReportsModal"
    />
  </div>
</template>

<script>
import MoreReportsFilterModal from '@/components/common/modal/learningbox/MoreReportsFilterModal'
import MoreReportsModal from '@/components/common/modal/learningbox/MoreReportsModal'
import ReportListBox from '@/components/learningBox/ReportListBox.vue'
export default {
  name: 'Report',
  components: {
    MoreReportsFilterModal,
    MoreReportsModal,
    ReportListBox,
  },
  data() {
    return {
      openMoreReportsFilterModal: {
        open: false,
      },
      openMoreReportsModal: {
        open: false,
      },
    }
  },
  methods: {
    // 모달
    onOpenMoreReportsFilterModal() {
      this.openMoreReportsFilterModal.open = true
    },
    onCloseMoreReportsFilterModal() {
      this.openMoreReportsFilterModal.open = false
    },
    onOpenMoreReportsModal() {
      this.openMoreReportsFilterModal.open = false
      this.openMoreReportsModal.open = true
    },
    onCloseMoreReportsModal() {
      this.openMoreReportsModal.open = false
    },
  },
}
</script>

<style></style>
