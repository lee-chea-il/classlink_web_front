<template>
  <div>
    <div class="sum_info">
      선택된 선생님 <span>{{ teacherList.length }}</span
      >명
    </div>
    <div class="list_area02">
      <ul>
        <li v-for="(teacher, idx) in teacherList" :key="idx">
          <span class="text">{{ teacher.name }}</span>
          <i class="icons_minus_circle_off" @click="$emit('delete', idx)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherList',
  props: {
    teacherList: {
      type: [Array, Object],
      default: () => [],
    },
  },
}
</script>

<style></style>
