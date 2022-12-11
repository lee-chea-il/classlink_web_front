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
                v-for="(item,index) in ['first','second','third','fourth','last']"
                :key="`week_${index}`"
                ref="weeks"
                :weekType="item"
                :numberList="numberList[index]"
                :idx="index"
                @select-curriculum-data="sendSelectCurriculumData"
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
  data(){
    return {
      lectureData:{},
      today:null,
      currentYear:2022,
      currentMonth:8,
      currentDate:1,
      numberList:[[],[],[],[],[]],
      monthStartIdx:0,
      monthLastIdx:0
    }
  },
  created() {
    this.today=new Date()
    this.resetDate()
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
    resetDate(){
      this.numberList=[[],[],[],[],[]]
      for(let i=0;i<5;i++){
        for(let j=0;j<7;j++){
          this.numberList[i][j]={num:1,prev:false,next:false,data:{data:[],linkIdx:-1}}
        }
      }
    },
    setMonthInfo(){
      this.resetDate()
      const firstDate=new Date(`${this.currentYear}-${this.currentMonth}-01`)
      this.monthStartIdx=firstDate.getDay()
      const lastDate=new Date(this.currentYear,this.currentMonth,0)
      this.monthLastIdx=lastDate.getDay()
      let cNum
      let tCnt=0
      const keyId=this.currentYear+'_'+this.currentMonth+'_'
      for(let i=0;i<7;i++){
        if(i<this.monthStartIdx){
          const cha=i-this.monthStartIdx
          const tempDate=new Date(`${this.currentYear}-${this.currentMonth}-01`)
          tempDate.setDate(tempDate.getDate()+cha)
          this.numberList[0][i]={keyId:keyId+tCnt,num:tempDate.getDate(),prev:true,next:false,data:{data:[]}}
        }else{
          cNum=i-this.monthStartIdx+1
          this.numberList[0][i]={keyId:keyId+tCnt,num:cNum,prev:false,next:false,data:this.getData(cNum)}
        }
        cNum=7-this.monthStartIdx+1+i
        this.numberList[1][i]={keyId:keyId+tCnt,num:cNum,prev:false,next:false,data:this.getData(cNum)}

        cNum=this.numberList[1][i].num+7
        this.numberList[2][i]={keyId:keyId+tCnt,num:cNum,prev:false,next:false,data:this.getData(cNum)}

        cNum=this.numberList[2][i].num+7
        this.numberList[3][i]={keyId:keyId+tCnt,num:cNum,prev:false,next:false,data:this.getData(cNum)}

        if(i>this.monthLastIdx){
          this.numberList[4][i]={keyId:keyId+tCnt,num:(i-this.monthLastIdx),prev:false,next:true,data:{data:[]}}
        }else{
          cNum=this.numberList[3][i].num+7
          this.numberList[4][i]={keyId:keyId+tCnt,num:cNum,prev:false,next:false,data:this.getData(cNum)}
        }
        tCnt++
      }
      this.$refs.assignmentDragArea.update(this.monthStartIdx,this.monthLastIdx)
    },
    getData(day){
      const cDay=`${this.currentYear}_${this.currentMonth}_${day}`
      if(this.lectureData[cDay]===undefined)this.lectureData[cDay]={data:[],linkIdx:-1}
      return this.lectureData[cDay]
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
      const weekIdx=parseInt(parseInt(dayData.id.split('_')[1])/7)
      const dayIdx=parseInt(dayData.id.split('_')[1])%7
      const cDay=`${this.currentYear}_${this.currentMonth}_${this.numberList[weekIdx][dayIdx].num}`
      this.lectureData[cDay].data.push(dragData)
      console.log(this.lectureData)
    },
    sendSelectCurriculumData(data){
      this.$emit('select-curriculum-data',data)
    }
  }
}
</script>

<style scoped>
</style>