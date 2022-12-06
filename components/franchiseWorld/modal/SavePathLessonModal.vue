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
      <div class="background_close" />
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <ModalHeader title="저장 경로" @close="$emit('close')" />

          <div class="modal-body">
            <!-- 탭 컨텐츠 -->
            <SavePathHeader />
            <div id="myTabContent" class="tab-content path_list">
              <!-- 탭01 내용 -->
              <div
                id="tab01"
                class="tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="grade-tab"
              >
                <TreeView
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
                <TreeView
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
                <TreeView
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
          </div>

          <div class="modal-footer">
            <button class="btn btn_crud_point" @click="saveFilePath">
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
import ModalHeader from '../../common/ModalHeader.vue'
import SavePathHeader from '~/components/common/SavePathHeader.vue'
import TreeView from '~/components/common/SavePathTreeView.vue'

export default {
  name: 'SavePathModal',
  components: {
    ModalHeader,
    SavePathHeader,
    TreeView,
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
  },
  data() {
    return {
      folderInfo: {
        path: '',
        type: '',
        fileName: '',
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
      this.folderInfo.fileName = $('#inputSavePath').val()
      this.$emit('save-file-path', this.folderInfo.path)
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.background {
  background: #eee;
}
</style>
