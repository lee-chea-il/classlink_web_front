<template>
  <select
    :id="name"
    type="text"
    :name="name"
    placeholder=""
    class="form-control form-inline time"
    :value="value"
    @input="$emit('change-time', $event)"
  >
    <option
      v-for="(time, idx) in timeList"
      :key="idx"
      :value="time"
      :disabled="isDisabled(time)"
    >
      {{ time.replace(/(\d\d)(\d\d)/, '$1:$2') }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'TimeSelectBox',
  props: {
    name: { type: String, default: '' },
    value: { type: String, default: '' },
    timeList: { type: Array, default: () => [] },
    targetDate: { type: String, default: '' },
  },
  methods: {
    isDisabled(time) {
      const targetIdx = this.targetDate
      if (targetIdx && this.name === 'startTime') {
        if (time >= this.targetDate) {
          return true
        } else return false
      } else if (time <= this.targetDate) {
        return true
      } else return false
    },
  },
}
</script>
