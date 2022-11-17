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
      <div class="background_close" @click="$emit('close')"></div>
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">필터</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')"
            >
              <i class="icons_close"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal_datafilter">
              <!-- 모달 내용 구분 class-->
              <div class="filter_box">
                <div class="filter_first">
                  <div class="title filter_name">구분</div>
                  <CustomFilterBox
                    id="checkbox_Type_0"
                    label="전체"
                    :listItem="searchData.type"
                    name="type"
                    :allCheck="true"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_Type_1"
                    label="교육기관"
                    :listItem="searchData.type"
                    name="type"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_Type_2"
                    label="프랜차이즈"
                    :listItem="searchData.type"
                    name="type"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_Type_3"
                    label="공개자료실"
                    :listItem="searchData.type"
                    name="type"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_Type_4"
                    label="내 자료"
                    :listItem="searchData.type"
                    name="type"
                    @click-item="$emit('click-item', $event)"
                  />
                </div>

                <div class="filter_second">
                  <div class="title filter_name">과목</div>
                  <CustomFilterBox
                    id="checkbox_subject_0"
                    label="전체"
                    :listItem="searchData.subject"
                    name="subject"
                    :allCheck="true"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_subject_1"
                    label="국어"
                    :listItem="searchData.subject"
                    name="subject"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_subject_2"
                    label="영어"
                    :listItem="searchData.subject"
                    name="subject"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_subject_3"
                    label="수학"
                    :listItem="searchData.subject"
                    name="subject"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_subject_4"
                    label="기타"
                    :listItem="searchData.subject"
                    name="subject"
                    @click-item="$emit('click-item', $event)"
                  />
                </div>

                <div class="filter_third">
                  <CustomFilterBox
                    id="checkbox_subject_5"
                    label="논술"
                    :listItem="searchData.subject"
                    name="subject"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_subject_6"
                    label="사회"
                    :listItem="searchData.subject"
                    name="subject"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_subject_7"
                    label="과학"
                    :listItem="searchData.subject"
                    name="subject"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_subject_8"
                    label="미술"
                    :listItem="searchData.subject"
                    name="subject"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_subject_9"
                    label="체육"
                    :listItem="searchData.subject"
                    name="subject"
                    @click-item="$emit('click-item', $event)"
                  />
                </div>

                <div class="filter_forth">
                  <div class="title filter_name">유형</div>
                  <CustomFilterBox
                    id="checkbox_category_0"
                    label="전체"
                    :listItem="searchData.category"
                    name="category"
                    :allCheck="true"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_category_1"
                    label="동영상"
                    :listItem="searchData.category"
                    name="category"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_category_2"
                    label="문서"
                    :listItem="searchData.category"
                    name="category"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_category_3"
                    label="퀴즈"
                    :listItem="searchData.category"
                    name="category"
                    @click-item="$emit('click-item', $event)"
                  />
                  <CustomFilterBox
                    id="checkbox_category_4"
                    label="쪽지시험"
                    :listItem="searchData.category"
                    name="category"
                    @click-item="$emit('click-item', $event)"
                  />
                </div>

                <!-- <div class="filter_fifth">
								<div class="title filter_name">키워드</div>
								<input type="text" placeholder="추가할 키워드를 입력해 주세요" class="form-control form-inline filter_control">
							</div> -->
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
import CustomFilterBox from '~/components/reference/commom/CustomFilterBox.vue'

export default {
  name: 'ReferenceFilterModal',
  components: { CustomFilterBox },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    searchData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
