<template>
  <tr :class="`week ${weekType}`">
    <AssignmentCalendarDay
      v-for="(item,index) in numberList"
      ref="daysList"
      :key="`key_${item.num}`"
      :dayNum="item.num"
      :prev="item.prev"
      :next="item.next"
      :isSun="(index===0)?true:false"
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
  },
  methods:{
    linkActive(dragData,dayData){
      const dayIdx=parseInt(dayData.id.split('_')[1])%7
      this.$refs.daysList[dayIdx].setData(dragData)
    }
  }
}
</script>

<style></style>
