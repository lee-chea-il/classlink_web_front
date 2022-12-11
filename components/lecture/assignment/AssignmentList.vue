<template>
  <div class="class_section left">
    <div class="move_section my_cur">
      <div class="list_section selected">
        <div class="sum_info">선택된 커리큘럼 <span>{{linkCnt}}</span>개</div>
        <div class="list_area02">
          <AssignmentTreeView
            ref="treeview"
            listType="assignment"
            :dataList="dataList"
            @drag-start="$emit('drag-start')"
            @drag-end="$emit('drag-end')"
          />
          <!-- /.탭 내용01 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AssignmentTreeView from '@/components/lecture/assignment/custom/AssignmentTreeView.vue'
export default {
  name: 'AssignmentList',
  components: { AssignmentTreeView },
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    add: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return {
      linkCnt:0
    }
  },
  methods: {
    /* currentMonthDayInfo(dayInfoList){
      this.$refs.curriculumList.currentMonthDayInfo(dayInfoList)
    } */
  },
}
</script>

<style></style>
