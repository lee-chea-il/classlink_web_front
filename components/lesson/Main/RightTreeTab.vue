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
        ref="curriculum"
        :expanded="true"
        :dataList="receiveLessonList"
        identity="master"
        :pidNum="2000"
        :isHideDownload="isHideDownload"
        @open-data="setOpenData"
        @update-data="$emit('update-data', $event)"
      />
    </div>
    <!-- /.탭 내용01 -->
  </div>
</template>

<script>
import TreeView from '~/components/common/MainTreeView.vue'
export default {
  name: 'RightTreeTab',
  components: {
    TreeView,
  },
  props: {
    receiveLessonList: {
      type: Array,
      default: () => [],
    },
    isHideDownload: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    setOpenData(e, item) {
      this.$emit('open-data', e, item)
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
