<template>
  <div class="class_section">
    <div class="tit"></div>
    <div class="move_section my_cur">
      <div class="list_section selected">
        <div class="sum_info">선택된 커리큘럼 <span>2</span>개</div>
        <div class="list_area02">
          <!-- 탭 내용01 -->
          <div
            id="mydata"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="grade-tab"
          >
            <CustomSelectLectureTreeView
              ref="myCurriculum"
              :dataList="dataList"
              :editable="false"
              :isPlus="false"
              :isMy="true"
              identity="teacher"
              :pidNum="2050"
              @remove-active="$emit('remove-active')"
            />
          </div>
          <!-- /.탭 내용01 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelectLectureTreeView from '~/components/common/custom/CustomSelectLectureTreeView.vue'

export default {
  name: 'SelectCurriculumRightSection',
  components: {
    CustomSelectLectureTreeView,
  },
  data() {
    return {
      dataList: [],
    }
  },
}
</script>

<style></style>
