<template>
  <div class="divide_section">
    <!-- 왼쪽 영역 -->
    <div class="divide_area left">
      <!-- 탭 컨텐츠 -->
      <EducationTabMenu
        :pageType="pageType"
        :isOpenData="openData.length > 0"
      />
      <LeftTreeTab
        ref="education"
        :insData="insData"
        :franchiseData="franchiseData"
        :openData="openData"
        :identity="identity"
        :pageType="pageType"
        @open-data="$emit('open-data', $event)"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @download-data="$emit('download-data', $event)"
        @update-data="$emit('update-data', $event)"
        @un-active="unActive"
        @get-savepath="$emit('get-savepath', $event)"
        @tree-view-id="$emit('tree-view-id')"
        @tree-view-fd="$emit('tree-view-fd')"
        @delete-data="$emit('delete-data', $event)"
        @tree-view-copy="$emit('tree-view-copy', $event)"
      />
      <!-- /.탭 컨텐츠 -->
    </div>
    <!-- /.왼쪽 영역 -->

    <!-- 오른쪽 영역 -->
    <div class="divide_area right">
      <!-- 탭 컨텐츠 -->
      <MyTabMenu title="내 자료" />
      <RightTreeTab
        ref="myData"
        :myData="myData"
        :pageType="pageType"
        @open-data="$emit('open-data', $event)"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @download-data="$emit('download-data', $event)"
        @update-data="$emit('update-data', $event)"
        @un-active="unActive"
        @get-savepath="$emit('get-savepath', $event)"
        @tree-view-md="$emit('tree-view-md')"
        @delete-data="$emit('delete-data', $event)"
        @tree-view-copy="$emit('tree-view-copy', $event)"
      />
      <!-- /.탭 컨텐츠 -->
    </div>
    <!-- /.오른쪽 영역 -->
  </div>
</template>

<script>
import MyTabMenu from './MyTabMenu.vue'
import EducationTabMenu from './EducationTabMenu.vue'
import LeftTreeTab from './LeftTreeTab.vue'
import RightTreeTab from './RightTreeTab.vue'
export default {
  name: 'TreeSection',
  components: {
    MyTabMenu,
    EducationTabMenu,
    LeftTreeTab,
    RightTreeTab,
  },
  props: {
    identity: { type: String, default: 'teacher' },
    pageType: { type: String, default: '' },
    insData: { type: Array, default: () => [] },
    franchiseData: { type: Array, default: () => [] },
    openData: { type: Array, default: () => [] },
    myData: { type: Array, default: () => [] },
  },
  data() {
    return {
      folderInfo: {
        path: '',
        type: '',
        filename: '',
      },
    }
  },
  methods: {
    unActive() {
      this.$refs.education.$refs.institution.unActiveAll()
      this.$refs.education.$refs.franchise.unActiveAll()
      this.$refs.myData.$refs.mydata.unActiveAll()
      this.$refs.education.$refs.open.unActiveAll()
    },
  },
}
</script>

<style></style>
