<template>
  <div class="tab-pane active">
    <!-- [개발참조]가맹한 프랜차이즈 없을때 -->
    <div
      v-if="franchiseList.length === 0 && franchiseWaitingList.length === 0"
      class="page_nodata"
    >
      <p>
        현재 가맹한 프랜차이즈가 없습니다.<br />
        가입을 요청해 보세요.
      </p>
      <button class="btn btn_regi_franchise" @click="$emit('open-signup')">
        프랜차이즈 가입하기
      </button>
    </div>
    <div v-else class="cards_section">
      <div v-for="(item, idx) in franchiseList" :key="idx" class="card">
        <div class="logo" :style="`background-image: url(${item?.fram_img})`">
          <!-- <img src="@/assets/images/sample_franchise_logo01.png" alt="" /> -->
        </div>
        <div class="academy">{{ item?.fra_name }}</div>
      </div>

      <div
        v-for="(item, idx) in franchiseWaitingList"
        :key="`o-${idx}`"
        class="card standby"
      >
        <div class="standby_txt">승인 대기 중</div>
        <div class="logo" :style="`background-image: url(${item?.fram_img})`">
          <!-- <img src="@/assets/images/sample_franchise_logo01.png" alt="" /> -->
        </div>
        <div class="academy">{{ item?.fra_name }}</div>
      </div>
      <!-- [개발참조] 승인대기중 의 예 class="card standby" -->
      <!-- <div class="card standby">
              <div class="standby_txt">승인 대기 중</div>
              <div class="logo"></div>
              <div class="academy">학원명학원명</div>
            </div> -->
      <!-- [개발참조] 프랜차이즈 가입 추가 class="card standby" -->
      <div class="card signup">
        <div class="logo" :style="`background-image: url(${thumbnail})`"></div>
        <div class="academy">
          <button
            type="button"
            class="btn signup"
            @click="$emit('open-signup')"
          >
            + 프랜차이즈 가입 추가
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconThumbnail from '@/assets/images/icons/icon_thumbnail_blue.svg'
export default {
  name: 'AffiliatedListBox',
  props: {
    franchiseList: {
      type: Array,
      default: () => [],
    },
    franchiseWaitingList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      thumbnail: iconThumbnail,
    }
  },
}
</script>

<style></style>
