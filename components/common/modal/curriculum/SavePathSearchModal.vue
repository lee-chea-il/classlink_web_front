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
          <ModalHeader title="저장 경로" @close="$emit('close')" />

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
                <CustomFolderListTreeView
                  ref="institutionFolderView"
                  :dataList="institutionData"
                  :expanded="true"
                  :pidNum="110"
                  @folder-click="folderClickInsti"
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
                <CustomFolderListTreeView
                  ref="franchiseFolderView"
                  :dataList="franchiseData"
                  :expanded="true"
                  :pidNum="210"
                  @folder-click="folderClickFran"
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
                <CustomFolderListTreeView
                  ref="myDataFolderView"
                  :dataList="myData"
                  :expanded="true"
                  :pidNum="310"
                  @folder-click="folderClickMyData"
                />
              </div>
              <!-- /.탭02 내용 -->
            </div>
            <!-- /.탭 컨텐츠 -->
            <div class="select_path">
              <span class="tit">선택폴더</span>
              <span>{{ folderInfo.path }}</span>
            </div>
            <div class="file_name">
              <div class="form-group">
                <label for="inputSavePath" class="tit savepathLabel"
                  >파일명</label
                >
                <input
                  id="inputSavePath"
                  type="text"
                  class="form-control form-inline savepathInput"
                  placeholder="저장할 파일명을 입력해 주세요"
                  value=""
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn_crud_point"
              data-dismiss="modal"
              @click="saveFilePath"
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
import CustomFolderListTreeView from '@/components/common/custom/CustomFolderListTreeView.vue'

export default {
  name: 'SavePathSearchModal',
  components: {
    ModalHeader,
    CustomFolderListTreeView,
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
      folderInfo: {
        path: '',
        type: '',
        filename: '',
      },
    }
  },
  methods: {
    folderClickInsti(pathInfo) {
      this.folderInfo.path = pathInfo
      this.folderInfo.type = 'institution'
    },
    folderClickFran(pathInfo) {
      this.folderInfo.path = pathInfo
      this.folderInfo.type = 'franchise'
    },
    folderClickMyData(pathInfo) {
      this.folderInfo.path = pathInfo
      this.folderInfo.type = 'curriculum'
    },
    saveFilePath() {
      this.folderInfo.filename = $('#inputSavePath').val()
      this.$emit('save-file-path', this.folderInfo)
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
