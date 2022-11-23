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
        :expanded="false"
        :dataList="receiveLessonList"
        identity="master"
        :pidNum="2000"
        @open-data="setOpenData"
      />
    </div>
    <!-- /.탭 내용01 -->
  </div>
</template>

<script>
import TreeView from '~/components/lesson/custom/LessonMainTreeView.vue'
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
