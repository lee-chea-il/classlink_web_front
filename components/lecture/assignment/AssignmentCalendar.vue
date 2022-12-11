<template>
  <div class="class_section right">
    <div class="calendar_type02">
      <!-- 캘린더 영역 -->
      <div class="calendar">
        <div class="move_calendar">
          <i
            class="icons_arrow_square_l"
            @click="prevMonth"
          ></i>
          <span class="date_info">{{`${currentYear}년 ${currentMonth}월`}}</span>
          <i
            class="icons_arrow_square_r"
            @click="nextMonth"
          ></i>
        </div>
        <div class="calendar_data">
          <table
            class="calendar_table"
            cellspacing="0"
            cellpadding="0"
          >
            <thead>
              <tr class="week_tit">
                <th class="sun">일</th>
                <th>월</th>
                <th>화</th>
                <th>수</th>
                <th>목</th>
                <th>금</th>
                <th class="sat">토</th>
              </tr>
            </thead>
            <tbody>
              <AssignmentCalendarWeek
                ref="first"
                weekType="first"
                :numberList="firstNumberList"
              />
              <AssignmentCalendarWeek
                ref="second"
                weekType="second"
                :numberList="secondNumberList"
              />
              <AssignmentCalendarWeek
                ref="third"
                weekType="third"
                :numberList="thirdNumberList"
              />
              <AssignmentCalendarWeek
                ref="fourth"
                weekType="fourth"
                :numberList="fourthNumberList"
              />
              <AssignmentCalendarWeek
                ref="last"
                weekType="last"
                :numberList="lastNumberList"
              />
            </tbody>
          </table>
          <AssignmentDragAreaTreeView
            ref="assignmentDragArea"
            @link-active="linkActive"
          />
        </div>
      </div>
      <!-- /.캘린더 영역-->
    </div>
  </div>
</template>

<script>
import AssignmentCalendarWeek from '@/components/lecture/assignment/AssignmentCalendarWeek.vue'
import AssignmentDragAreaTreeView from '@/components/lecture/assignment/custom/AssignmentDragAreaTreeView.vue'

export default {
  name: 'AssignmentCalendar',
  components: { AssignmentCalendarWeek, AssignmentDragAreaTreeView },
  props: {
    listItem: {
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
      lectureData:{},
      today:null,
      currentYear:2022,
      currentMonth:8,
      currentDate:1,
      firstNumberList:[],
      secondNumberList:[],
      thirdNumberList:[],
      fourthNumberList:[],
      lastNumberList:[],
      monthStartIdx:0,
      monthLastIdx:0
    }
  },
  created() {
    this.today=new Date()
    setTimeout(() => {
      this.setToday()
    },300)
  },
  methods:{
    setToday(){
      this.currentYear=this.today.getFullYear()
      this.currentMonth=this.today.getMonth()+1
      this.currentDate=this.today.getDate()
      this.setMonthInfo()
    },
    setMonthInfo(){
      this.firstNumberList=[]
      this.secondNumberList=[]
      this.thirdNumberList=[]
      this.fourthNumberList=[]
      this.lastNumberList=[]
      const firstDate=new Date(`${this.currentYear}-${this.currentMonth}-01`)
      this.monthStartIdx=firstDate.getDay()
      const lastDate=new Date(this.currentYear,this.currentMonth,0)
      this.monthLastIdx=lastDate.getDay()
      for(let i=0;i<7;i++){
        if(i<this.monthStartIdx){
          const cha=i-this.monthStartIdx
          const tempDate=new Date(`${this.currentYear}-${this.currentMonth}-01`)
          tempDate.setDate(tempDate.getDate()+cha)
          this.firstNumberList[i]={num:tempDate.getDate(),prev:true,next:false}
        }else{
          this.firstNumberList[i]={num:i-this.monthStartIdx+1,prev:false,next:false}
        }
        this.secondNumberList[i]={num:(7-this.monthStartIdx+1+i),prev:false,next:false}
        this.thirdNumberList[i]={num:(this.secondNumberList[i].num+7),prev:false,next:false}
        this.fourthNumberList[i]={num:(this.thirdNumberList[i].num+7),prev:false,next:false}
        if(i>this.monthLastIdx){
          this.lastNumberList[i]={num:(i-this.monthLastIdx),prev:false,next:true}
        }else{
          this.lastNumberList[i]={num:(this.fourthNumberList[i].num+7),prev:false,next:false}
        }
      }
      this.$refs.assignmentDragArea.update(this.monthStartIdx,this.monthLastIdx)
    },
    prevMonth(){
      this.today.setMonth(this.today.getMonth()-1)
      this.setToday()
    },
    nextMonth(){
      this.today.setMonth(this.today.getMonth()+1)
      this.setToday()
    },
    linkActive(dragData,dayData){
      const dayListIdx=parseInt(parseInt(dayData.id.split('_')[1])/7)
      if(dayListIdx===0){
        this.$refs.first.linkActive(dragData,dayData)
      }else if(dayListIdx===1){
        this.$refs.second.linkActive(dragData,dayData)
      }else if(dayListIdx===2){
        this.$refs.third.linkActive(dragData,dayData)
      }else if(dayListIdx===3){
        this.$refs.fourth.linkActive(dragData,dayData)
      }else{
        this.$refs.last.linkActive(dragData,dayData)
      }
    },
  }
}
</script>

<style scoped>
</style>