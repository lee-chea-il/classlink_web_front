<template>
  <Transition name="modal">
    <div
      v-if="open"
      id="modalDataGet"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              커리큘럼 가져오기
            </h5>
            <CustomCloseBtn />
          </div>
          <div class="modal-body">
            <div class="tab-content depth03 ac_manage_dtr">
              <div class="tab-pane active">
                <div class="search_section">
                  <div class="left_area">
                    <button class="btn btn_crud_default">클론 복사</button>
                  </div>
                  <div class="right_area">
                    <button class="btn btn_crud_default">클론 붙여넣기</button>
                  </div>
                </div>

                <div class="divide_section">
                  <div class="divide_area left">
                    <ul id="myTab" class="nav nav-tabs" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button
                          id="grade-tab"
                          class="nav-link active"
                          data-toggle="tab"
                          data-target="#institute"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          교육기관
                        </button>
                      </li>
                    </ul>
                    <div id="myTabContent" class="tab-content">
                      <div
                        id="institute"
                        class="tab-pane fade show active"
                        role="tabpanel"
                        aria-labelledby="grade-tab"
                      >
                        <TreeView
                          ref="institution"
                          :dataList="institutionData"
                          :editable="false"
                          identity="institution"
                          :pidNum="5000"
                          :isHideDownload="false"
                          @un-active="$emit('un-active')"
                          @update-data="
                            $emit('update-data', $event, 'institution')
                          "
                          @copyDataCallBack="$emit('copyDataCallBack', $event)"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="divide_area right">
                    <ul id="myTab" class="nav nav-tabs" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button
                          id="grade-tab"
                          class="nav-link active"
                          data-toggle="tab"
                          data-target="#mydata"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          프랜차이즈
                        </button>
                      </li>
                    </ul>
                    <div id="myTabContent" class="tab-content">
                      <div
                        id="mydata"
                        class="tab-pane fade show active"
                        role="tabpanel"
                        aria-labelledby="grade-tab"
                      >
                        <TreeView
                          ref="franchise"
                          :dataList="franchiseData"
                          :editable="true"
                          identity="institution"
                          :pidNum="6500"
                          :isHideDownload="false"
                          @un-active="$emit('un-active')"
                          @update-data="
                            $emit('update-data', $event, 'franchise')
                          "
                          @copyDataCallBack="copyDataCallBack"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn_crud_point"
              data-dismiss="modal"
              @click="saveEvent"
            >
              저장
            </button>
            <button class="btn btn_crud_default" data-dismiss="modal">
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import CustomCloseBtn from '@/components/common/custom/CustomCloseBtn.vue'
import TreeView from '@/components/common/custom/CustomTreeView.vue'

export default {
  name: 'CopyInsToFranDataModal',
  components: {
    CustomCloseBtn,
    TreeView,
  },
  props: {
    institutionData: {
      type: Array,
      default: () => [],
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      franchiseData: [],
    }
  },
  methods: {
    saveEvent() {
      console.log('saveEvent')
    },
  },
}
</script>

<style scoped></style>
