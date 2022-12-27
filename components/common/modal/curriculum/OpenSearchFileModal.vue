<template>
  <Transition name="modal">
    <div
      v-if="open"
      id="modalStoragepath"
      class="modal modal_ac_manage_dtr double modal-mask curisave"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style="display: block"
    >
      <div class="background_close"></div>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <ModalHeader title="파일 찾기" @close="$emit('close')" />

          <div class="modal-body">
            <!-- 탭 컨텐츠 -->
            <div class="input-group input-search form-inline">
              <input
                v-model="msg"
                type="text"
                class="form-control"
                placeholder="검색어를 입력해주세요"
              >
              <div class="input-group-append">
                <button class="btn icons_x_circle_off" type="button"></button>
                <button class="btn icons_search_off" type="button"></button>
              </div>
            </div>
            <ul id="myTab" class="nav nav-tabs" role="tablist">
              <CustomTabBtn
                v-if="modalType!='franchise'"
                idName="grade"
                :isActive="true"
                dataTarget="findInsTreeViewList"
                ariaControls="home"
                ariaSelected="true"
                tabName="교육기관"
              />
              <CustomTabBtn
                idName="class"
                :isActive="modalType=='franchise'?true:false"
                dataTarget="findFranTreeViewList"
                ariaControls="profile"
                ariaSelected="false"
                tabName="프랜차이즈"
              />
              <CustomTabBtn
                idName="grade"
                dataTarget="findMyTreeViewList"
                ariaControls="profile"
                ariaSelected="false"
                tabName="내자료"
              />
            </ul>
            <div id="myTabContent" class="tab-content path_list">
              <div
                v-if="modalType!='franchise'"
                id="findInsTreeViewList"
                class="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="grade-tab"
              >
                <CustomOpenFileListTreeView
                  ref="institutionFileView"
                  :dataList="institutionData"
                  :expanded="true"
                  :pidNum="5100"
                  @file-click="fileClickInsti"
                />
              </div>
              <div
                v-if="modalType!='franchise'"
                id="findFranTreeViewList"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="class-tab"
              >
                <CustomOpenFileListTreeView
                  ref="franchiseFileView"
                  :dataList="franchiseData"
                  :expanded="true"
                  :pidNum="7100"
                  @file-click="fileClickFran"
                />
              </div>
              <div
                v-else
                id="findFranTreeViewList"
                class="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="class-tab"
              >
                <CustomOpenFileListTreeView
                  ref="franchiseFileView"
                  :dataList="franchiseData"
                  :expanded="true"
                  :pidNum="7100"
                  @file-click="fileClickFran"
                />
              </div>
              <div
                id="findMyTreeViewList"
                class="tab-pane fade"
                role="tabpanel"
                aria-labelledby="class-tab"
              >
                <CustomOpenFileListTreeView
                  ref="myDataFileView"
                  :dataList="myData"
                  :expanded="true"
                  :pidNum="10100"
                  @file-click="fileClickMyData"
                />
              </div>
            </div>
            <div class="select_path">
              <span class="tit">선택폴더</span>
              <span>{{ openFileInfo.path }}</span>
            </div>
            <div class="file_name">
              <div class="form-group">
                <label for="inputOpenPath" class="tit savepathLabel"
                  >파일명</label
                >
                <input
                  id="inputOpenPath"
                  type="text"
                  class="form-control form-inline savepathInput"
                  placeholder="파일을 선택해 주세요"
                  :value="openFileInfo.lesson.name"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn_crud_point"
              data-dismiss="modal"
              @click="saveOpenFileInfo"
            >
              저장
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
import $ from 'jquery'
import ModalHeader from '../../ModalHeader.vue'
import CustomTabBtn from '~/components/curriculum/custom/CustomTabBtn.vue'
import CustomOpenFileListTreeView from '@/components/common/custom/CustomOpenFileListTreeView.vue'

export default {
  name: 'OpenSearchFileModal',
  components: {
    ModalHeader,
    CustomOpenFileListTreeView,
    CustomTabBtn,
  },
  props: {
    institutionData: {
      type: Array,
      default: () => [],
    },
    franchiseData: {
      type: Array,
      default: () => [],
    },
    myData: {
      type: Array,
      default: () => [],
    },
    open: {
      type: Boolean,
      default: false,
    },
    componentId: {
      type: String,
      default: '',
    },
    modalType:{
      type: String,
      default:''
    }
  },
  data() {
    return {
      openFileInfo: {
        path: '',
        type: '',
        lesson: {},
      },
      msg:'aaa',
    }
  },
  methods: {
    fileClickInsti(pathInfo, fileInfo) {
      this.openFileInfo.path = pathInfo
      this.openFileInfo.lesson = fileInfo
      this.openFileInfo.type = 'institution'
    },
    fileClickFran(pathInfo, fileInfo) {
      this.openFileInfo.path = pathInfo
      this.openFileInfo.lesson = fileInfo
      this.openFileInfo.type = 'franchise'
    },
    fileClickMyData(pathInfo, fileInfo) {
      this.openFileInfo.path = pathInfo
      this.openFileInfo.lesson = fileInfo
      this.openFileInfo.type = 'curriculum'
    },
    saveOpenFileInfo() {
      this.openFileInfo.filename = $('#inputOpenPath').val()
      const newObj = {}
      for (const item in this.openFileInfo) {
        newObj[item] = this.openFileInfo[item]
      }
      this.$emit('open-file-info', newObj)
    },
  },
}
</script>

<style scoped>
.background {
  background: #eee;
}
.savepathLabel {
  text-align: left;
  padding: 10px 0;
  font-size: 14px;
  color: #a7a9ac;
}
.savepathInput {
  margin: 0 0 0 30px;
  width: 83%;
}
</style>
<style>
#modalStoragepath .icon_institute {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url(~assets/images/icon_institute.png);
}
#modalStoragepath .icon_fran {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url(~assets/images/icon_fran.png);
}
#modalStoragepath .icon_mydata {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-image: url(~assets/images/icon_mydata.png);
}
#modalStoragepath .vtl-node-main.active {
  background-color: #e7edff !important;
}
#modalStoragepath .vtl-node-main:hover {
  background-color: #e7edff;
}
</style>
