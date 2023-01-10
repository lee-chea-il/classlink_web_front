<template>
  <div id="myTabContent" class="tab-content">
    <!-- 탭 내용01 -->
    <div
      id="mydata"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="grade-tab"
    >
      <TreeView
        ref="mydata"
        treeViewType="MD"
        :expanded="true"
        :dataList="myData"
        identity="institution"
        :pidNum="2000"
        :isHideDownload="pageType === 'reference' ? true : false"
        @open-data="$emit('open-data', $event)"
        @update-data="$emit('update-data', $event)"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @copy-item="$emit('copy-item', $event)"
        @download-data="$emit('download-data', $event)"
        @un-active="$emit('un-active')"
        @get-savepath="$emit('get-savepath', $event)"
        @tree-view-md="$emit('tree-view-md')"
        @delete-data="$emit('delete-data', $event)"
        @tree-view-copy="$emit('tree-view-copy', $event)"
      />
    </div>
    <!-- /.탭 내용01 -->
  </div>
</template>

<script>
import TreeView from '~/components/common/MainTreeView.vue'
export default {
  name: 'MainRightTreeTab',
  components: {
    TreeView,
  },
  props: {
    myData: {
      type: Array,
      default: () => [],
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
#mydata > .vtl {
  height: 349px;
}
.main > ul {
  display: none;
}
</style>
