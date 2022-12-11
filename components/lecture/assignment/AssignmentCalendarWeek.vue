<template>
  <tr :class="`week ${weekType}`">
    <AssignmentCalendarDay
      v-for="(item,index) in numberList"
      ref="daysList"
      :key="item.keyId"
      :idx="index"
      :dayNum="item.num"
      :prev="item.prev"
      :next="item.next"
      :dataList="item.data.data"
      :isSun="(index===0)?true:false"
      @select-curriculum-data="sendSelectCurriculumData"
    />
  </tr>
</template>

<script>
import AssignmentCalendarDay from '@/components/lecture/assignment/AssignmentCalendarDay.vue'
export default {
  name: 'AssignmentCalendarWeek',
  components: { AssignmentCalendarDay },
  props: {
    weekType: {
      type: String,
      default:'first'
    },
    numberList: {
      type: Array,
      default: () => [],
    },
    idx:{
      type:Number,
      default:0
    },
  },
  methods:{
    linkActive(dragData,dayData){
      const dayIdx=parseInt(dayData.id.split('_')[1])%7
      this.$refs.daysList[dayIdx].setData(dragData)
    },
    sendSelectCurriculumData(data){
      data.week=this.idx
      this.$emit('select-curriculum-data',data)
    }
  }
}
</script>

<style></style>
