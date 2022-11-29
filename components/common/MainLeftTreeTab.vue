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
        :dataList="institutionData"
        :editable="identity == 'master' ? true : false"
        :identity="identity"
        :pidNum="0"
        :isHideDownload="pageType === 'reference' ? true : false"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @open-data="$emit('open-data', $event)"
        @update-data="$emit('update-data', $event)"
        @download-data="$emit('download-data', $event)"
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
        :dataList="franchiseData"
        :editable="identity == 'master' ? true : false"
        :identity="identity"
        :pidNum="1000"
        :isHideDownload="pageType === 'reference' ? true : false"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @open-data="$emit('open-data', $event)"
        @update-data="$emit('update-data', $event)"
        @download-data="$emit('download-data', $event)"
      />
    </div>
    <!-- /.탭 내용02 -->
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
#mydata > .vtl {
  height: 349px;
}
.main > ul {
  display: none;
}
</style>
