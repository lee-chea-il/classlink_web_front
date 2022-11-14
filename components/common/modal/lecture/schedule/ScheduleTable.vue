<template>
  <table class="table">
    <TableColGroup />
    <thead>
      <tr>
        <th
          class="weeks sun"
          style="
            border: none;
            background: #f8f8fc;
            border-top: 1px solid #dee2e6;
          "
        />
        <th class="weeks sun">
          <div class="tit_week" style="border-left: 1px solid #dfe0e4">
            일<br />08
          </div>
        </th>
        <th class="weeks">
          <div class="tit_week">월<br />08</div>
        </th>
        <th class="weeks">
          <div class="tit_week">화<br />08</div>
        </th>
        <th class="weeks">
          <div class="tit_week">수<br />08</div>
        </th>
        <th class="weeks">
          <div class="tit_week">목<br />08</div>
        </th>
        <th class="weeks">
          <div class="tit_week">금<br />08</div>
        </th>
        <th class="weeks sat">
          <div class="tit_week">토<br />08</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, idx) in hourData" :key="idx" class="line_box">
        <td class="weeks" style="border: none; background: #f8f8fc">
          <div class="half-hour table_time">
            <div>
              {{ idx === 0 || idx % 6 === 0 ? `${item}:00` : '' }}
            </div>
          </div>
        </td>
        <!-- <td class="weeks"><div :class="isTrue(idx)" /></td> -->
        <CustomTableCell :currentIdx="idx" :sameIdx="start" :targetIdx="target" />
        <CustomTableCell :currentIdx="idx" :sameIdx="start" :targetIdx="target" />
        <CustomTableCell :currentIdx="idx" :sameIdx="start" :targetIdx="target" />
        <CustomTableCell :currentIdx="idx" :sameIdx="start" :targetIdx="target" />
        <CustomTableCell :currentIdx="idx" :sameIdx="start" :targetIdx="target" />
        <CustomTableCell :currentIdx="idx" :sameIdx="start" :targetIdx="target" />
        <CustomTableCell :currentIdx="idx" :sameIdx="start" :targetIdx="target" />
      </tr>
    </tbody>
  </table>
</template>

<script>
import CustomTableCell from '../custom/CustomTableCell.vue'
import TableColGroup from './TableColGroup.vue'

export default {
  name: 'ScheduleTable',
  components: { TableColGroup, CustomTableCell },
  props: {
    hourData: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      start: 1,
      target: 4,
    }
  },
}
</script>

<style scoped>
.table {
  width: 100%;
  height: 100%;
  margin: 0;
}

.weeks {
  padding: 0 !important;
}

.table_time {
  position: relative;
  border-top: 0 !important;
}
.table_time > div {
  position: absolute;
  top: -10px;
  left: 9px;
  font-size: 14px;
  text-align: center;
  width: 34px;
}
</style>
