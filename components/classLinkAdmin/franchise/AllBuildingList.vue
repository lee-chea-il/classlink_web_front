<template>
  <div class="table_section">
    <table class="table">
      <TableHeader :tableHeader="['번호', '건물 이름', '상세', '추가']" />
      <tbody>
        <tr
          v-for="(building, idx) in buildingList"
          :key="idx"
          class="build_regi_default"
        >
          <td>{{ building.id }}</td>
          <td>
            <span class="build_name02">{{ building.name }}</span>
          </td>
          <td>
            <i
              class="btn icons_zoom_off"
              data-toggle="modal"
              data-target="#modalBuildingImg"
              data-dismiss="modal"
              @click="$emit('select-building', building)"
            ></i>
          </td>
          <td>
            <div
              class="icon_plus_circle_disabled"
              @click="$emit('add-building', building)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableHeader from '../common/TableHeader.vue'

export default {
  name: 'AllBuildingList',
  components: { TableHeader },
  props: {
    buildingList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.icon_plus_circle_disabled {
  cursor: pointer;
}
</style>
