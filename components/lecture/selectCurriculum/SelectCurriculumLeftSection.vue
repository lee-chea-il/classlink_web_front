<template>
  <div class="class_section">
    <TeacherSelectBox :teacherList="teacherList" />
    <div class="move_section my_cur">
      <div class="list_section selected">
        <div class="list_area" style="border: none">
          <!-- 탭 컨텐츠 -->
          <ul id="myTab" class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="grade-tab"
                class="nav-link active"
                data-toggle="tab"
                data-target="#grade"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                홍길동 선생님 커리큘럼
              </button>
            </li>
          </ul>
          <div id="myTabContent" class="tab-content">
            <!-- 탭 내용01 -->
            <div
              id="curriculum"
              class="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="grade-tab"
            >
              <CustomSelectLectureTreeView
                ref="curriculum"
                :dataList="curriculumList"
                :editable="false"
                :isPlus="true"
                identity="teacher"
                :pidNum="1050"
                @plus-event-click="plusEventClick"
              />
            </div>
            <!-- /.탭 내용01 -->
          </div>
          <!-- /.탭 컨텐츠 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherSelectBox from '~/components/lecture/selectCurriculum/TeacherSelectBox.vue'
import CustomSelectLectureTreeView from '~/components/common/custom/CustomSelectLectureTreeView.vue'

export default {
  name: 'SelectCurriculumLeftSection',
  components: {
    TeacherSelectBox,
    CustomSelectLectureTreeView
  },
  props: {
    teacherList: {
      type: Array,
      default: () => [],
    },
    curriculumList: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    plusEventClick(node){
      this.$emit('plus-event-click', node)
    }
  }
}
</script>

<style>
.icons_minus_circle_off,
.icons_plus_circle_off {
  margin-left: auto;
}
</style>
