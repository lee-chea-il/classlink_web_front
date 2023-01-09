<template>
  <Transition name="modal">
    <div
      v-show="open"
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
            <MovePathHeader
              :identity="identity"
              :idType="tableType === 'ID'"
              :myType="tableType === 'MD'"
            />
            <div id="myTabContent" class="tab-content path_list">
              <!-- 탭01 내용 -->
              <div
                v-if="tableType === 'ID'"
                id="moveTab01"
                class="tab-pane fade"
                :class="{
                  show: tableType === 'ID',
                  active: tableType === 'ID',
                }"
                role="tabpanel"
                aria-labelledby="grade-tab"
              >
                <TreeView
                  ref="institutionFolderView"
                  treeViewType="ID"
                  :dataList="institutionData"
                  :expanded="true"
                  :pidNum="110"
                  @folder-click="folderClickInsti"
                />
              </div>
              <!-- /.탭01 내용 -->
              <!-- 탭02 내용 -->
              <div
                v-if="identity !== 'institution'"
                id="moveTab02"
                class="tab-pane fade"
                :class="{
                  show: tableType === 'FD',
                  active: tableType === 'FD',
                }"
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
              <!-- 탭03 내용 -->
              <div
                v-if="tableType === 'MD'"
                id="moveTab03"
                class="tab-pane fade"
                :class="{
                  show: tableType === 'MD',
                  active: tableType === 'MD',
                }"
                role="tabpanel"
                aria-labelledby="class-tab"
              >
                <TreeView
                  ref="myDataFolderView"
                  treeViewType="MD"
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

          <ModalBtnBox
            submitTxt="저장"
            @submit="saveFilePath"
            @close="$emit('close')"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
// import $ from 'jquery'
import ModalHeader from '../ModalHeader.vue'
import ModalBtnBox from '../ModalBtnBox.vue'
import MovePathHeader from '~/components/common/MovePathHeader.vue'
import TreeView from '~/components/common/SavePathTreeView.vue'

export default {
  name: 'MovePathModal',
  components: {
    ModalHeader,
    MovePathHeader,
    TreeView,
    ModalBtnBox,
  },
  props: {
    institutionData: { type: Array, default: () => [] },
    franchiseData: { type: Array, default: () => [] },
    myData: { type: Array, default: () => [] },
    open: { type: Boolean, default: false },
    type: { type: String, default: '' },
    identity: { type: String, default: 'institution' },
    modalTitle: { type: String, default: '등록' },
    tableType: { type: String, default: 'ID' },
    dataInfo: { type: Object, default: () => {} },
  },
  data() {
    return {
      folderInfo: {
        path: '',
        type: '',
        filename: '',
        id: 0,
      },
    }
  },
  methods: {
    folderClickInsti(pathInfo, data) {
      this.folderInfo.path = pathInfo
      this.folderInfo.id = data.treeViewId
      // this.folderInfo.id = 157
      this.folderInfo.type = 'ID'
    },
    folderClickFran(pathInfo, data) {
      this.folderInfo.path = pathInfo
      this.folderInfo.id = data.treeViewId
      this.folderInfo.type = 'FD'
    },
    folderClickMyData(pathInfo, data) {
      this.folderInfo.path = pathInfo
      this.folderInfo.id = data.treeViewId
      this.folderInfo.type = 'MD'
    },
    saveFilePath() {
      const {
        datatable_type,
        tree: { treeinfo_idx },
      } = this.dataInfo
      const item = this.folderInfo.id
      const payload = {
        datatable_type,
        parent_treeinfo_idx: item,
        treeinfo_idx,
      }
      this.$emit('move-data', payload)
      this.$emit('close')
    },
    isOpenFlag(str, type, myType) {
      if (str === '등록') {
        return true
      } else if (type === myType) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style scoped>
.background {
  background: #eee;
}
</style>
