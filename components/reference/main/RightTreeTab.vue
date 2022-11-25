<template>
  <div id="myTabContent" class="tab-content">
    <!-- 탭 내용01 -->
    <div
      id="mydata"
      class="tab-pane fade show active"
      role="tabpanel"
      aria-labelledby="grade-tab"
    >
      <Treeview
        ref="curriculum"
        :expanded="true"
        :dataList="myData"
        identity="master"
        :pidNum="2000"
        @open-data="$emit('open-data', $event)"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @download-data="$emit('download-data', $event)"
        @update-data="$emit('update-data', $event)"
        @drop="$emit('drop', $event)"
      />
      <br />
      <br />
    </div>
    <!-- /.탭 내용01 -->
  </div>
</template>

<script>
import Treeview from '~/components/common/MainTreeView.vue'

export default {
  name: 'RightTreeTab',
  components: { Treeview },
  props: {
    myData: {
      type: Array,
      default: () => [],
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
