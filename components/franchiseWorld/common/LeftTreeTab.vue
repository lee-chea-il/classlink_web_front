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
        :dataList="institutionData"
        :editable="identity == 'institution' ? true : false"
        :identity="identity"
        :pidNum="0"
        :isHideDownload="pageType === 'reference' ? true : false"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @open-data="$emit('open-data', $event)"
        @update-data="$emit('update-data', $event)"
        @download-data="$emit('download-data', $event)"
        @un-active="$emit('un-active')"
        @get-savepath="$emit('get-savepath', $event)"
      />
    </div>
    <!-- /.탭 내용01 -->
    <!-- 탭 내용02 -->
    <div
      id="franchise"
      class="tab-pane fade"
      role="tabpanel"
      aria-labelledby="class-tab"
    >
      <TreeView
        ref="franchise"
        treeViewType="FD"
        :dataList="franchiseData"
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
      />
    </div>
    <!-- /.탭 내용02 -->
    <!-- 탭 내용03 -->
    <div
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
    institutionData: {
      type: Array,
      default: () => [],
    },
    franchiseData: {
      type: Array,
      default: () => [],
    },
    openData: {
      type: Array,
      default: () => [],
    },
    identity: {
      type: String,
      default: '',
    },
    pageType: {
      type: String,
      default: '',
    },
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
