<template>
  <div class="fc_build_regi">
    <span v-for="(building, idx) in buildingList" :key="idx" class="build_box">
      <span class="fc_build_title">{{ building.name }}</span
      ><i
        class="icons_minus_circle_off"
        @click="$emit('delete-building', idx)"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MyBuildingList',
  props: {
    buildingList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.fc_build_regi {
  overflow-x: scroll;
}

#modalBuildChg .build_box {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 147px;
  min-width: 120px;
  width: 100%;
}

#modalBuildChg .icons_minus_circle_off {
  margin: 0;
}
</style>
