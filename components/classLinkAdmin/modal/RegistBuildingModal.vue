<template>
  <div
    id="modalBuildChg"
    class="modal fade ac_manage_std"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <ModalHeader title="프랜차이즈 건물 등록 / 변경" />
        <div class="modal-body">
          <MyBuildingList
            :buildingList="selectFranchise.building"
            @delete-building="$emit('delete-building', $event)"
          />

          <div class="building_regi">
            <!-- 검색 영역 -->
            <SearchSection
              :value="searchBuilding.word"
              @change-input="$emit('change-input', $event)"
            />

            <!-- 테이블 영역 -->
            <AllBuildingList
              :buildingList="buildingList"
              @select-building="$emit('select-building', $event)"
              @add-building="$emit('add-building', $event)"
            />
          </div>
        </div>
        <!-- div class="modal-body" -->
        <div class="modal-footer">
          <button class="btn btn_crud_default">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyBuildingList from '../franchise/MyBuildingList.vue'
import AllBuildingList from '../franchise/AllBuildingList.vue'
import SearchSection from '../registBuilding/SearchSection.vue'
import ModalHeader from '~/components/common/ModalHeader.vue'

export default {
  name: 'RegistBuildingModal',
  components: { ModalHeader, MyBuildingList, AllBuildingList, SearchSection },
  props: {
    buildingList: {
      type: Array,
      default: () => [],
    },
    searchBuilding: {
      type: Object,
      default: () => {},
    },
    selectFranchise: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
