<template>
  <div class="divide_section">
    <!-- 왼쪽 영역 -->
    <div class="divide_area left">
      <!-- 탭 컨텐츠 -->
      <EducationTabMenu :isOpenData="openData.length > 0" />
      <LeftTreeTab
        ref="education"
        :institutionData="institutionData"
        :franchiseData="franchiseData"
        :openData="openData"
        :identity="identity"
        :pageType="pageType"
        @open-data="$emit('open-data', $event)"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @download-data="$emit('download-data', $event)"
        @update-data="$emit('update-data', $event)"
        @un-active="unActive"
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
        :myDataList="myDataList"
        :pageType="pageType"
        @open-data="$emit('open-data', $event)"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @download-data="$emit('download-data', $event)"
        @update-data="$emit('update-data', $event)"
        @update-my-tree="$emit('update-my-tree', $event)"
        @un-active="unActive"
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
    identity: {
      type: String,
      default: 'teacher',
    },
    pageType: {
      type: String,
      default: '',
    },
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
    myDataList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    unActive() {
      console.log('feafefaw')
      this.$refs.education.$refs.institution.unActiveAll()
      this.$refs.education.$refs.franchise.unActiveAll()
      this.$refs.education.$refs.open.unActiveAll()
      this.$refs.myData.$refs.curriculum.unActiveAll()
    },
  },
}
</script>

<style></style>
