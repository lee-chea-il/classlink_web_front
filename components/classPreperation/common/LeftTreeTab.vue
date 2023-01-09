<template>
  <div id="myTabContent" class="tab-content">
    <!-- 탭 내용01 -->
    <div
      id="institute"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="grade-tab"
    >
      <TreeView
        ref="institution"
        treeViewType="ID"
        :editable="identity == 'institution' ? true : false"
        :identity="identity"
        :pidNum="0"
        :dataList="insData"
        :isHideDownload="pageType === 'reference' ? true : false"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @open-data="$emit('open-data', $event)"
        @update-data="$emit('update-data', $event)"
        @download-data="$emit('download-data', $event)"
        @un-active="$emit('un-active')"
        @get-savepath="$emit('get-savepath', $event)"
        @tree-view-id="$emit('tree-view-id')"
        @delete-data="$emit('delete-data', $event)"
        @tree-view-copy="$emit('tree-view-copy', $event)"
      />
    </div>
    <!-- /.탭 내용01 -->
    <!-- 탭 내용02 -->
    <div
      v-show="$store.state.common.user.fra_code"
      id="franchise"
      class="tab-pane fade"
      role="tabpanel"
      aria-labelledby="class-tab"
    >
      <TreeView
        ref="franchise"
        treeViewType="FD"
        :editable="identity == 'institution' ? true : false"
        :identity="identity"
        :pidNum="1000"
        :dataList="franchiseData"
        :isHideDownload="pageType === 'reference' ? true : false"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @open-data="$emit('open-data', $event)"
        @update-data="$emit('update-data', $event)"
        @download-data="$emit('download-data', $event)"
        @un-active="$emit('un-active')"
        @get-savepath="$emit('get-savepath', $event)"
        @tree-view-fd="$emit('tree-view-fd')"
        @delete-data="$emit('delete-data', $event)"
        @tree-view-copy="$emit('tree-view-copy', $event)"
      />
    </div>
    <!-- /.탭 내용02 -->
    <!-- 탭 내용03 -->
    <div
      v-if="pageType === 'reference'"
      id="open"
      class="tab-pane fade"
      role="tabpanel"
      aria-labelledby="class-tab"
    >
      <TreeView
        ref="open"
        treeViewType="OD"
        :dataList="openData"
        :editable="identity == 'institution' ? true : false"
        :identity="identity"
        :pidNum="1000"
        :isHideDownload="pageType === 'reference' ? true : false"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @open-data="$emit('open-data', $event)"
        @update-data="$emit('update-data', $event)"
        @download-data="$emit('download-data', $event)"
        @un-active="$emit('un-active')"
        @get-savepath="$emit('get-savepath', $event)"
        @tree-view-od="$emit('tree-view-od')"
        @delete-data="$emit('delete-data', $event)"
        @tree-view-copy="$emit('tree-view-copy', $event)"
      />
    </div>
    <!-- /.탭 내용03 -->
  </div>
</template>

<script>
import TreeView from '~/components/common/MainTreeView.vue'

export default {
  name: 'MainLeftTreeTab',
  components: {
    TreeView,
  },
  props: {
    openData: { type: Array, default: () => [] },
    identity: { type: String, default: '' },
    pageType: { type: String, default: '' },
    insData: { type: Array, default: () => [] },
    franchiseData: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
#institute > .vtl {
  height: 349px;
}
#franchise > .vtl {
  height: 349px;
}
#open > .vtl {
  height: 349px;
}
#mydata > .vtl {
  height: 349px;
}
.main > ul {
  display: none;
}
</style>
