<template>
  <div class="divide_section">
    <!-- 왼쪽 영역 -->
    <div class="divide_area left">
      <!-- 탭 컨텐츠 -->
      <EducationTabMenu />

      <LeftTreeTab
        ref="education"
        :institutionData="institutionData"
        :franchiseData="franchiseData"
        :identity="identity"
        :pageType="pageType"
        @open-data="$emit('open-data', $event)"
        @copyDataCallBack="$emit('copyDataCallBack', $event)"
        @download-data="$emit('download-data', $event)"
        @update-data="$emit('update-data', $event)"
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
      />
      <!-- /.탭 컨텐츠 -->
    </div>
    <!-- /.오른쪽 영역 -->
  </div>
</template>

<script>
import MyTabMenu from '~/components/common/MyTabMenu.vue'
import EducationTabMenu from '~/components/common/EducationTabMenu.vue'
import LeftTreeTab from '~/components/common/MainLeftTreeTab.vue'
import RightTreeTab from '~/components/common/MainRightTreeTab.vue'
export default {
  name: 'TreeSection',
  components: {
    MyTabMenu,
    EducationTabMenu,
    LeftTreeTab,
    RightTreeTab,
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
      default: 'teacher',
    },
    pageType: {
      type: String,
      default: '',
    },
    myDataList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
