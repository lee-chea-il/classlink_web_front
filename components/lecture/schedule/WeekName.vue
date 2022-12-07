<template>
  <thead>
    <tr>
      <th
        class="weeks sun"
        style="border: none; background: #f8f8fc; border-top: 1px solid #dee2e6"
      />

      <th
        v-for="(day, idx) in toWeekArray"
        :key="idx"
        class="weeks"
        :class="{ sun: idx === 0, firstDay: idx === 0, sat: idx === 6 }"
      >
        <div class="tit_week">
          {{ weekDay[idx] }}<br />{{ day.replace(/(\d+\-)(\d+\-)(\d+)/, '$3') }}
        </div>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'WeekName',
  props: {
    toWeekArray: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      weekDay: ['일', '월', '화', '수', '목', '금', '토'],
    }
  },
}
</script>

<style scoped>
.weeks {
  padding: 0 !important;
}
.firstDay {
  border-left: 1px solid #dfe0e4;
}
</style>
