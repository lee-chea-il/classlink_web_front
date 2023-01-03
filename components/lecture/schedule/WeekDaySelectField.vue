<template>
  <div class="section weeks">
    <!-- <CustomToggle day="일" idx="0" @select-day="$emit('select-day', $event)" />
    <CustomToggle day="월" idx="1" @select-day="$emit('select-day', $event)" />
    <CustomToggle day="화" idx="2" @select-day="$emit('select-day', $event)" />
    <CustomToggle day="수" idx="3" @select-day="$emit('select-day', $event)" />
    <CustomToggle day="목" idx="4" @select-day="$emit('select-day', $event)" />
    <CustomToggle day="금" idx="5" @select-day="$emit('select-day', $event)" />
    <CustomToggle day="토" idx="6" @select-day="$emit('select-day', $event)" /> -->
    <CustomToggle
      v-for="(week, idx) in weekDayList"
      :key="idx"
      :day="week.name"
      :idx="idx"
      :isChecked="week.isChecked"
      @select-day="$emit('select-day', week)"
    />
  </div>
</template>

<script>
import CustomToggle from '~/components/lecture/custom/CustomToggle.vue'

export default {
  name: 'WeekDaySelectField',
  components: { CustomToggle },
  props: {
    weekDayList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
