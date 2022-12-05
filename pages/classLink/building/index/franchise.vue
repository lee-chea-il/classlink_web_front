<template>
  <div>
    <PageHeader title="프랜차이즈 건물" />
    <div class="tab-content depth03 ac_manage_fran cl_manage_fc">
      <NoList :show="franchiseList.length === 0" />

      <!-- 테이블 영역 -->
      <TableSection
        :show="franchiseList.length > 0"
        :tableHeader="tableHeader"
        :franchiseList="franchiseList"
        :searchData="searchData"
        @change-input="handleChange"
        @select-fran="setSelectFranchise"
        @select-building="setSelectBuilding"
        @change-franchise="changeSelectFranchise"
      />
    </div>

    <!-- 건물 이미지 보기 -->
    <PreviewBuildingImgModal :img="selectBuilding.img" />

    <!-- 빌딩 추가 삭제 -->
    <RegistBuildingModal
      :searchBuilding="searchBuilding"
      :selectFranchise="selectFranchise"
      :buildingList="buildingList"
      @change-input="handleChange"
      @add-building="addBuilding"
      @delete-building="deleteBuilding"
      @select-building="setSelectBuilding"
    />

    <!-- 프랜차이즈 상세 -->
    <ViewFranchiseDetaileModal :selectFranchise="selectFranchise" />

    <!-- 상태변경,가맹변경 모달 -->
    <ChangeStatusModal
      :isChangeStatus="isChangeStatus"
      :selectFranchise="selectFranchise"
    />
  </div>
</template>

<script>
import PageHeader from '~/components/common/PageHeader.vue'
import initialState from '~/data/classLink/franchise/initialState'
import TableSection from '~/components/classLinkAdmin/franchise/TableSection.vue'
import NoList from '~/components/classLinkAdmin/franchise/NoList.vue'
import ChangeStatusModal from '~/components/classLinkAdmin/modal/ChangeStatusModal.vue'
import PreviewBuildingImgModal from '~/components/classLinkAdmin/modal/PreviewBuildingImgModal.vue'
import RegistBuildingModal from '~/components/classLinkAdmin/modal/RegistBuildingModal.vue'
import ViewFranchiseDetaileModal from '~/components/classLinkAdmin/modal/ViewFranchiseDetaileModal.vue'

export default {
  name: 'FranchiseManagement',
  components: {
    PageHeader,
    TableSection,
    NoList,
    ChangeStatusModal,
    PreviewBuildingImgModal,
    RegistBuildingModal,
    ViewFranchiseDetaileModal,
  },
  data() {
    return initialState()
  },
  methods: {
    // 인풋 change event
    handleChange({ target: { name, value, dataset } }) {
      this[dataset.target][name] = value
    },

    // 경고 내용 바꾸기
    setActiveStatus(idx) {
      this.isChangeStatus = idx
    },

    // 프랜차이즈에 건물 추가
    addBuilding(item) {
      const newSet = Array.from(
        new Set([...this.selectFranchise.building, item])
      )
      this.selectFranchise.building = newSet
    },

    // 프랜차이즈에 건물 삭제
    deleteBuilding(idx) {
      this.selectFranchise.building.splice(idx, 1)
    },

    // 프랜차이즈 선택
    setSelectFranchise(fran) {
      this.selectFranchise = JSON.parse(JSON.stringify(fran))
    },

    // 프랜차이즈 변경
    changeSelectFranchise(fran, idx) {
      this.isChangeStatus = idx
      this.selectFranchise = JSON.parse(JSON.stringify(fran))
    },

    // 프랜차이즈의 건물 선택(이미지)
    setSelectBuilding(building) {
      this.selectBuilding = building
    },
  },
}
</script>

<style></style>
