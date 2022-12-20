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

      <div class="tab-content depth03 ac_manage_frc">
        <div class="tab-pane active">
          <!-- [개발참조]가맹한 프랜차이즈 없을때 -->
          <div
            v-if="
              franchiseList.length === 0 && franchiseWaitingList.length === 0
            "
            class="page_nodata"
          >
            <p>
              현재 가맹한 프랜차이즈가 없습니다.<br />
              가입을 요청해 보세요.
            </p>
            <button
              class="btn btn_regi_franchise"
              @click="onOpenFranchiseSignUpModal"
            >
              프랜차이즈 가입하기
            </button>
          </div>
          <div v-else class="cards_section">
            <div v-for="(item, idx) in franchiseList" :key="idx" class="card">
              <div
                class="logo"
                :style="`background-image: url(${item?.fram_img})`"
              >
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
              <div
                class="logo"
                :style="`background-image: url(${item?.fram_img})`"
              >
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
              <div
                class="logo"
                :style="`background-image: url(${thumbnail})`"
              ></div>
              <div class="academy">
                <button
                  type="button"
                  class="btn signup"
                  @click="onOpenFranchiseSignUpModal"
                >
                  + 프랜차이즈 가입 추가
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FranchiseSignupModal
      :open="openFranchiseSignUpModal.open"
      :codeSearch.sync="codeSearch"
      :searchFranchise="searchFranchise"
      @search="getFranchiseSearchCode"
      @close="onCloseFranchiseSignUpModal"
    />
  </div>
</template>

<script>
import FranchiseSignupModal from '@/components/common/modal/franchise/FranchiseSignUpModal.vue'
import iconThumbnail from '@/assets/images/icons/icon_thumbnail_blue.svg'
import apiFranchise from '@/services/apiFranchise'
export default {
  name: 'List',
  components: {
    FranchiseSignupModal,
  },
  data() {
    return {
      franchiseList: [],
      franchiseWaitingList: [],

      searchFranchise: null,

      mem_idx: this.$store.state.common.user.mem_idx,

      codeSearch: '',

      openFranchiseSignUpModal: {
        open: false,
      },
      // 프랜차이즈 가입추가 이미지
      thumbnail: iconThumbnail,
    }
  },
  // watch: {
  // franchiseList: {
  //   handler() {
  //     this.getFranchiseList()
  //   },
  //   immediate: true,
  // },
  // franchiseWaitingList: {
  //   handler() {
  //     this.getFranchiseList()
  //   },
  //   immediate: true,
  // },
  // },
  mounted() {
    this.getFranchiseList()
  },
  methods: {
    // 프랜차이즈 리스트 api
    async getFranchiseList() {
      await apiFranchise
        .getFranchiseList(this.mem_idx)
        .then(({ data: { data } }) => {
          console.log(data)
          this.franchiseList = data.franchiseList
          this.franchiseWaitingList = data.franchiseWaitingList
        })
        .catch((err) => {
          console.log(err)
        })
    },

    onOpenFranchiseSignUpModal() {
      this.openFranchiseSignUpModal.open = true
    },
    onCloseFranchiseSignUpModal() {
      this.openFranchiseSignUpModal.open = false
    },

    async getFranchiseSearchCode() {
      await apiFranchise
        .getFranchiseSearchCode(this.codeSearch)
        .then(({ data }) => {
          console.log(data)
          this.searchFranchise = data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
