<template>
  <div class="divide_area left">
    <!-- 탭 컨텐츠 -->
    <UlNavigation />

    <div id="myTabContent" class="tab-content">
      <!-- 탭 내용01 -->
      <div
        id="institute"
        class="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="grade-tab"
      >
        <CustomReferenceTreeView
          ref="institution"
          :dataList="receiveInstitutionData"
          :editable="identity == 'master' ? true : false"
          :identity="identity"
          :pidNum="0"
          @file-view="$emit('click-tree', $event)"
          @copyDataCallBack="$emit('callback', $event)"
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
        <CustomReferenceTreeView
          ref="franchise"
          :dataList="receiveFranchiseData"
          :editable="identity == 'master' ? true : false"
          :identity="identity"
          :pidNum="1000"
          @copyDataCallBack="$emit('callback', $event)"
        />
      </div>
      <!-- /.탭 내용02 -->
    </div>

    <!-- /.탭 컨텐츠 -->
  </div>
</template>

<script>
import UlNavigation from '../commom/UlNavigation.vue'
import CustomReferenceTreeView from '~/components/common/custom/CustomReferenceTreeView.vue'

export default {
  name: 'LeftTree',
  components: {
    CustomReferenceTreeView,
    UlNavigation,
  },
  props: {
    identity: {
      type: String,
      default: '',
    },
    receiveInstitutionData: {
      type: Array,
      default: () => [],
    },
    receiveFranchiseData: {
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
