<template>
  <td>
    <span v-for="(building, index) in itemInfo.buildingList" :key="index">
      <u
        class="build_name"
        data-toggle="modal"
        data-target="#modalBuildingImg"
        data-dismiss="modal"
        @click="$emit('select-building', building)"
        >{{ building.name }}
      </u>
      <span v-if="deleteSlash(itemInfo, building)" class="icon_sl">/</span>
    </span>
  </td>
</template>

<script>
export default {
  name: 'BuildingList',
  props: {
    itemInfo: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    deleteSlash(item, building) {
      return item.building[item.building.length - 1].id !== building.id
    },
  },
}
</script>

<style></style>
