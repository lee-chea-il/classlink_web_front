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
        @open-data="$emit('open-data', $event)"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @download-data="$emit('download-data', $event)"
        @update-data="$emit('update-data', $event)"
        @drop="$emit('drop', $event)"
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
        @open-data="$emit('open-data', $event)"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @download-data="$emit('download-data', $event)"
        @update-data="$emit('update-data', $event)"
        @drop="$emit('drop', $event)"
      />
    </div>
    <!-- /.탭 내용02 -->
  </div>
</template>

<script>
import TreeView from '~/components/common/MainTreeView.vue'

export default {
  name: 'LeftTreeTab',
  components: { TreeView },
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
  height: 300px;
}
.main > ul {
  display: none;
}
</style>
