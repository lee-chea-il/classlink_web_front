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

      <div class="tab-content depth03 ac_manage_frc">
        <AffiliatedListBox
          :franchiseList="franchiseList"
          :franchiseWaitingList="franchiseWaitingList"
          @open-signup="onOpenFranchiseSignUpModal"
        />
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
import AffiliatedListBox from '@/components/franchiseSubscribe/AffiliatedListBox.vue'
import { apiFranchiseSubscribe } from '~/services'
export default {
  name: 'List',
  components: {
    FranchiseSignupModal,
    AffiliatedListBox,
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
    }
  },
  mounted() {
    this.getFranchiseList()
  },
  methods: {
    // 프랜차이즈 리스트 api
    async getFranchiseList() {
      await apiFranchiseSubscribe
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

    // 프랜차이즈 가맹코드 검색
    async getFranchiseSearchCode() {
      await apiFranchiseSubscribe
        .getFranchiseSearchCode(this.codeSearch)
        .then(({ data: { data } }) => {
          this.searchFranchise = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
