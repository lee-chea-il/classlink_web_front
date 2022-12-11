<template>
  <div
    id="modalLectureRegi04"
    class="modal fade modal_ac_manage_lec"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="background_close" />
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <ModalHeader :title="modalTitle" />
        <div class="modal-body">
          <div class="title">커리큘럼 배정</div>
          <div class="cnts_section">
            <AssignmentList
              ref="curriculumList"
              :dataList="curriculumData"
              listType="assignment"
              @drag-start="dragStart"
              @drag-end="dragEnd"
            />
            <AssignmentCalendar
              ref="calendar"
              @select-curriculum-data="sendSelectCurriculumData"
            />
          </div>
        </div>
        <div v-if="identity !== 'teacher'" class="modal-footer">
          <button
            class="btn btn_crud_default"
            data-dismiss="modal"
            data-toggle="modal"
            data-target="#modalLectureRegi03"
          >
            이전
          </button>
          <button class="btn btn_crud_point" data-dismiss="modal">개설</button>
        </div>

        <ModalBtnBox v-else submitTxt="저장" />
      </div>
    </div>
  </div>
</template>

<script>
import ModalBtnBox from '../../ModalBtnBox.vue'
import ModalHeader from '../../ModalHeader.vue'
import AssignmentList from '@/components/lecture/assignment/AssignmentList.vue'
import AssignmentCalendar from '@/components/lecture/assignment/AssignmentCalendar.vue'

export default {
  name: 'CurriculumAssignmentModal',
  components: { ModalHeader, ModalBtnBox, AssignmentList, AssignmentCalendar },
  props: {
    modalTitle: {
      type: String,
      default: '',
    },
    identity: {
      type: String,
      default: '',
    },
    curriculumList:{
      type: Array,
      default: () => [],
    }
  },
  data(){
    return {
      curriculumData:[
        {
          name: '마포 학원',
          children: [
            {
              name: '국어',
              children: [
                {
                  name: '1단원',
                  children: [
                    {
                      name: '화법과 작문1.link',
                      type: 'institution',
                      dbIdx: 1,
                    },
                    {
                      name: '화법과 작문2.link',
                      type: 'institution',
                      dbIdx: 2,
                    },
                    {
                      name: '화법과 작문3.link',
                      type: 'institution',
                      dbIdx: 3,
                    },
                    {
                      name: '화법과 작문4.link',
                      type: 'institution',
                      dbIdx: 4,
                    },
                  ],
                },
                {
                  name: '2단원',
                  children: [
                    {
                      name: '법과 작문1.link',
                      type: 'institution',
                      dbIdx: 5,
                    },
                    {
                      name: '법과 작문2.link',
                      type: 'institution',
                      dbIdx: 6,
                    },
                    {
                      name: '법과 작문3.link',
                      type: 'institution',
                      dbIdx: 7,
                    },
                    {
                      name: '법과 작문4.link',
                      type: 'institution',
                      dbIdx: 8,
                    },
                  ],
                },
              ],
            },
            {
              name: '수학',
              children: [
                {
                  name: '1단원',
                  children: [
                    {
                      name: '삼각함수1.link',
                      type: 'institution',
                      dbIdx: 1,
                    },
                    {
                      name: '삼각함수2.link',
                      type: 'institution',
                      dbIdx: 2,
                    },
                    {
                      name: '삼각함수3.link',
                      type: 'institution',
                      dbIdx: 3,
                    },
                    {
                      name: '삼각함수4.link',
                      type: 'institution',
                      dbIdx: 4,
                    },
                  ],
                },
                {
                  name: '2단원',
                  children: [
                    {
                      name: '2차 방정식1.link',
                      type: 'institution',
                      dbIdx: 5,
                    },
                    {
                      name: '2차 방정식2.link',
                      type: 'institution',
                      dbIdx: 6,
                    },
                    {
                      name: '2차 방정식3.link',
                      type: 'institution',
                      dbIdx: 7,
                    },
                    {
                      name: '2차 방정식4.link',
                      type: 'institution',
                      dbIdx: 8,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      myDatas:{},
    }
  },
  methods: {
    dragStart(){
      this.$refs.calendar.$refs.assignmentDragArea.showHideDragArea(true)
    },
    dragEnd(){
      this.$refs.calendar.$refs.assignmentDragArea.showHideDragArea(false)
    },
    sendSelectCurriculumData(data){
      console.log(data)
      this.$emit('select-curriculum-data',data)
    }
  },
}
</script>

<style scoped>
.background_close {
  background: none;
}
</style>
