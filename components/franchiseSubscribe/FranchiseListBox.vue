<template>
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
          @click="$emit('open-detail', item.id)"
        >
          <div class="logo" :style="`background-image: url(${image})`"></div>
          <div class="academy">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/images/sample_franchise_logo01.png'
export default {
  name: 'FranchiseListBox',
  props: {
    academyList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      image: img,
    }
  },
}
</script>

<style></style>
