<template>
  <div class="divide_area right">
    <!-- 탭 컨텐츠 -->
    <ul id="myTab" class="nav nav-tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          id="grade-tab"
          class="nav-link active"
          data-toggle="tab"
          data-target="#mydata"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          <span class="icon_mydata"></span>
          내 자료
        </button>
      </li>
    </ul>
    <div id="myTabContent" class="tab-content">
      <!-- 탭 내용01 -->
      <div
        id="mydata"
        class="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="grade-tab"
      >
        <CustomReferenceTreeView
          ref="curriculum"
          :expanded="false"
          :dataList="receiveCurriculumData"
          identity="master"
          :pidNum="2000"
        />
        <br />
        <br />
      </div>
      <!-- /.탭 내용01 -->
    </div>
    <!-- /.탭 컨텐츠 -->
  </div>
</template>

<script>
import CustomReferenceTreeView from '~/components/common/custom/CustomReferenceTreeView.vue'

export default {
  name: 'RightTree',
  components: { CustomReferenceTreeView },
  props: {
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
