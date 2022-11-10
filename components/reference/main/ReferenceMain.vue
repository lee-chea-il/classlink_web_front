<template>
  <div class="tab-content depth03 ac_manage_dtr">
    <div class="tab-pane active">
      <!-- 컨트롤 버튼 영역 -->
      <SearchSection
        @copy="$emit('copy', $event)"
        @del="$emit('del', $event)"
        @paste="$emit('paste', $event)"
      />
      <!-- /.컨트롤 버튼 영역 -->

      <!-- 2단 분류 컨텐츠 -->
      <div class="divide_section">
        <!-- 왼쪽 영역 -->
        <LeftTree
          ref="left"
          :identity="identity"
          :receiveInstitutionData="receiveInstitutionData"
          :receiveFranchiseData="receiveFranchiseData"
          @click-tree="$emit('click-tree', $event)"
          @callback="$emit('callback', $event)"
        />
        <!-- /.왼쪽 영역 -->

        <!-- 오른쪽 영역 -->
        <RightTree ref="right" :receiveCurriculumData="receiveCurriculumData" />
        <!-- /.오른쪽 영역 -->
      </div>
      <!-- /.2단 분류 컨텐츠 -->
    </div>
  </div>
</template>

<script>
import LeftTree from './LeftTree.vue'
import RightTree from './RightTree.vue'
import SearchSection from '~/components/reference/main/SearchSection.vue'

export default {
  components: { SearchSection, LeftTree, RightTree },
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
    receiveCurriculumData: {
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
