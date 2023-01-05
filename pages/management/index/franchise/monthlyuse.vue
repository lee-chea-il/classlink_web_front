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
            :class="{ active: $route.fullPath.includes('/monthlyuse') }"
            to="/management/franchise/monthlyuse"
            >월별 이용 현황</NuxtLink
          >
        </li>
      </ul>

      <div class="tab-content depth03 ac_manage_frc frc_monthlyusage">
        <FranchiseListBox
          :academyList="academyList"
          @open-detail="onClickMoveAcademyDetailList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FranchiseListBox from '@/components/franchiseSubscribe/FranchiseListBox.vue'
export default {
  name: 'Monthlyuse',
  components: {
    FranchiseListBox,
  },
  data() {
    return {
      academyList: [
        {
          id: 1,
          name: '학원명1',
          affiliation: true,
        },
        {
          id: 2,
          name: '학원명2',
          affiliation: true,
        },
        {
          id: 3,
          name: '학원명3',
          affiliation: true,
        },
        {
          id: 4,
          name: '학원명4',
          affiliation: true,
        },
      ],
    }
  },
  methods: {
    onClickMoveAcademyDetailList(id) {
      console.log(id)
      this.$router.push(`/management/franchise/monthly/${id}`)
    },
  },
}
</script>

<style></style>
