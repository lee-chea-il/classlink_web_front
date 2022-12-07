<template>
  <td
    v-if="isSchedule === 1"
    class="weeks is_time"
    :style="getBg"
    :rowspan="rowSpanIdx"
  >
    <div :class="isTrue(idx)" />
    <button
      class="btn icons_minus_circle_alph"
      @click="$emit('delete-schedule', weekName, weekData)"
    ></button>
  </td>

  <td v-else-if="isSchedule === 2" class="none"></td>

  <td v-else class="weeks">
    <div :class="isTrue(idx)" />
  </td>
</template>

<script>
export default {
  name: 'CustomTableCell',
  props: {
    currentTime: { type: Number, default: 0 },
    weekName: { type: String, default: '' },
    scheduleWeekList: { type: Object, default: () => {} },
    idx: { type: Number, default: 0 },
  },
  computed: {
    weekData() {
      const filterItem = this.scheduleWeekList[this.weekName]?.find(
        (time) =>
          time?.startTime <= this.currentTime &&
          this.currentTime < time?.endTime
      )
      return filterItem
    },
    getBg() {
      return { background: this.weekData?.bgColor }
    },
    isSchedule() {
      if (this.weekData) {
        const {
          startTime,
          // startDay, endDay
        } = this.weekData
        // console.log(startDay, endDay)
        const start = Number(startTime.replace(':', ''))
        const isTime = this.currentTime === start
        if (isTime) return 1
        else return 2
      } else return 3
    },
    rowSpanIdx() {
      const { startTime, endTime } = this.weekData
      return this.setEnd(endTime) - this.setStart(startTime)
    },
  },
  methods: {
    isTrue(idx) {
      if (idx % 6 === 0) return 'half-hour lined'
      else return 'half-hour'
    },
    getMin(item) {
      return item.substr(2, 4) === '30'
    },
    decimal(item) {
      return (Number(item) + 20) / 50
    },
    essence(item) {
      return Number(item) / 50
    },
    setStart(item) {
      if (this.getMin(item)) return this.decimal(item)
      else return this.essence(item)
    },
    setEnd(item) {
      if (this.getMin(item)) return this.decimal(item)
      else return this.essence(item)
    },
  },
}
</script>

<style scoped>
td.none {
  display: none;
}
.is_time {
  position: relative;
}

.icons_minus_circle_alph {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
