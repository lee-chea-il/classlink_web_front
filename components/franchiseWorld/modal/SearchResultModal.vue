<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDatafilterResult"
      class="modal modal_ac_manage_dtr modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <ModalHeader title="자료 검색 결과" @close="$emit('close')" />
          <div class="modal-body">
            <div class="modal_datafilter_result">
              <!-- 모달 내용 구분 class-->
              <SearchSection
                :value="searchData.word"
                :checkList="checkList"
                @copy="$emit('copy')"
                @change-word="$emit('change-word', $event)"
                @open-filter="$emit('open-filter', 'prev')"
              />

              <SearchTable
                :filterItem="filterItem"
                :checkList="checkList"
                @check-handler="$emit('check-handler', $event)"
                @detail-view="$emit('detail-view', $event)"
              />

              <ListLengthItem :length="filterItem.length" />

              <PaginationBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../common/ModalHeader.vue'
import SearchSection from '../search/SearchSection.vue'
import SearchTable from '../search/SearchTable.vue'
import ListLengthItem from '../search/ListLengthItem.vue'
import PaginationBox from '../search/PaginationBox.vue'

export default {
  name: 'SearchResultModal',
  components: {
    ModalHeader,
    SearchSection,
    SearchTable,
    ListLengthItem,
    PaginationBox,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    searchData: {
      type: Object,
      default: () => {},
    },
    filterItem: {
      type: Array,
      default: () => [],
    },
    checkList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
