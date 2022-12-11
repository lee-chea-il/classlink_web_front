<template>
  <td :class="{'calendar-day':true,'calendar-other-month':(prev||next),'sun':isSun}">
    <span class="daynum">{{dayNum}}</span>
    <button
      v-show="(dayData.length>2)"
      class="btn over_num"
      data-toggle="modal"
      data-target="#modalLectureRegi05"
      @click="sendSelectCurriculumData"
    >
      {{`+${dayData.length}`}}
    </button>
    <div
      v-for="(item,index) in dayData.slice(0,3)"
      :key="`day_key_${index}`"
      class="curi_box"
    >
      <span
        v-if="(index<3)"
        class="tit"
      >
        {{item.name}}
      </span>
      <button
        :id="`removeIdx_${index}`"
        class="btn icons_minus_circle_alph btn_del"
        @click="removeData"
      ></button>
    </div>
  </td>
</template>

<script>
export default {
  name: 'AssignmentCalendarDay',
  props: {
    dayNum:{
      type:Number,
      default:1
    },
    idx:{
      type:Number,
      default:0
    },
    isSun:{
      type:Boolean,
      default: false,
    },
    prev:{
      type:Boolean,
      default: false,
    },
    next:{
      type:Boolean,
      default: false,
    },
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  data(){
    return {
      dayData:this.dataList,
    }
  },
  methods:{
    setData(data){
      this.dayData.push(data)
    },
    removeData(e){
      const idx=parseInt(e.target.id.split('_')[1])
      this.dayData.splice(idx,1)
    },
    sendSelectCurriculumData(){
      this.$emit('select-curriculum-data',{day:this.idx,dayData:this.dayData})
    }
  }
}
</script>

<style></style>
