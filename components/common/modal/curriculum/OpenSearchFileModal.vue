<template>
  <Transition name="modal">
    <div
      v-if="open"
      id="modalStoragepath"
      class="modal modal_ac_manage_dtr double modal-mask"
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
            <ul id="myTab" class="nav nav-tabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  id="grade-tab"
                  class="nav-link active"
                  data-toggle="tab"
                  data-target="#tab01"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  교육기관
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  id="class-tab"
                  class="nav-link"
                  data-toggle="tab"
                  data-target="#tab02"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  프랜차이즈
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  id="class-tab"
                  class="nav-link"
                  data-toggle="tab"
                  data-target="#tab03"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  내자료
                </button>
              </li>
            </ul>
            <div id="myTabContent" class="tab-content path_list">
              <!-- 탭01 내용 -->
              <div
                id="tab01"
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
              <!-- /.탭01 내용 -->
              <!-- 탭02 내용 -->
              <div
                id="tab02"
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
              <!-- /.탭02 내용 -->
              <!-- 탭02 내용 -->
              <div
                id="tab03"
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
              <!-- /.탭02 내용 -->
            </div>
            <!-- /.탭 컨텐츠 -->
            <div class="select_path">
              <span class="tit">선택폴더</span>
              <span>{{ openFileInfo.path }}</span>
            </div>
            <div class="file_name">
              <div class="form-group">
                <label for="inputOpenPath" class="tit savePathLabel"
                  >파일명</label
                >
                <input
                  id="inputOpenPath"
                  type="text"
                  class="form-control form-inline savePathInput"
                  placeholder="파일을 선택해 주세요"
                  :value="openFileInfo.data.name"
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
import CustomOpenFileListTreeView from '@/components/common/custom/CustomOpenFileListTreeView.vue'

export default {
  name: 'OpenSearchFileModal',
  components: {
    ModalHeader,
    CustomOpenFileListTreeView,
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
  },
  data() {
    return {
      openFileInfo: {
        path: '',
        type: '',
        data: {},
      },
    }
  },
  methods: {
    fileClickInsti(pathInfo,fileInfo) {
      this.openFileInfo.path = pathInfo
      this.openFileInfo.data=fileInfo
      this.openFileInfo.type = 'institution'
    },
    fileClickFran(pathInfo,fileInfo) {
      this.openFileInfo.path = pathInfo
      this.openFileInfo.data=fileInfo
      this.openFileInfo.type = 'franchise'
    },
    fileClickMyData(pathInfo,fileInfo) {
      this.openFileInfo.path = pathInfo
      this.openFileInfo.data=fileInfo
      this.openFileInfo.type = 'curriculum'
    },
    saveOpenFileInfo() {
      this.openFileInfo.fileName = $('#inputOpenPath').val()
      this.$emit('open-file-info', this.openFileInfo)
    },
  },
}
</script>

<style scoped>
.background {
  background: #eee;
}
.savePathLabel {
  text-align: left;
  padding: 10px 0;
  font-size: 14px;
  color: #a7a9ac;
}
.savePathInput {
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
  background-color: #a2a2a2 !important;
}
#modalStoragepath .vtl-node-main:hover {
  background-color: #f0f0f0;
}
</style>
