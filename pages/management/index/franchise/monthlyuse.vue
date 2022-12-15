<template>
  <div id="content" class="content">
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
        <div class="tab-pane active">
          <!-- [개발참조]가맹한 프랜차이즈 없을때  -->
          <div v-if="academyList.length === 0" class="page_nodata">
            <p>현재 가맹한 프랜차이즈가 없어 이용내역이 없습니다.</p>
          </div>
          <div v-else class="info_txt">
            항목을 선택하면 해당 프랜차이즈 월별 이용 현황을 볼 수 있습니다.

            <div class="cards_section">
              <div
                v-for="(item, idx) in academyList"
                :key="idx"
                class="card"
                @click="onClickMoveAcademyDetailList(item.id)"
              >
                <div
                  class="logo"
                  :style="`background-image: url(${image})`"
                ></div>
                <div class="academy">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/images/sample_franchise_logo01.png'
export default {
  name: 'Monthlyuse',
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

      image: img,
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
