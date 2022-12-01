<template>
  <Transition name="modal">
    <div
      v-show="open"
      id="modalDatafilter"
      class="modal modal_ac_manage_dtr modal-mask"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <ModalHeader title="필터" @close="$emit('close')" />
          <div class="modal-body">
            <div class="modal_datafilter">
              <!-- 모달 내용 구분 class-->

              <div class="filter_box">
                <FilterListBox
                  id="checkbox_type_"
                  className="filter_first"
                  title="구분"
                  name="type"
                  :itemList="typeList"
                  :listData="searchData.type"
                  @click-item="$emit('click-item', $event)"
                />

                <FilterListBox
                  id="checkbox_subject_"
                  className="filter_second"
                  title="과목"
                  name="subject"
                  :itemList="subjectList"
                  :listData="searchData.subject"
                  @click-item="$emit('click-item', $event)"
                />

                <FilterListBox
                  id="checkbox_category_"
                  className="filter_forth"
                  title="유형"
                  name="category"
                  :itemList="categoryList"
                  :listData="searchData.category"
                  @click-item="$emit('click-item', $event)"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn_crud_point"
              @click="$emit('search-list-view')"
            >
              검색
            </button>
            <button
              class="btn btn_crud_default"
              data-dismiss="modal"
              @click="$emit('close')"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ModalHeader from '../../ModalHeader.vue'
import FilterListBox from '~/components/reference/search/FilterListBox.vue'

export default {
  name: 'ReferenceFilterModal',
  components: { FilterListBox, ModalHeader },
  props: {
    open: { type: Boolean, default: false },
    searchData: { type: Object, default: () => {} },
    typeList: { type: Array, default: () => [] },
    subjectList: { type: Array, default: () => [] },
    categoryList: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
#modalDatafilter .modal-body {
  min-height: 260px;
  height: 100%;
}
.filter_box {
  height: 100% !important;
}

#modalDatafilter .modal-footer {
  padding-top: 40px;
}
</style>
