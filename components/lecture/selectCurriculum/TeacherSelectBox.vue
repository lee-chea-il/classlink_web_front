<template>
  <div>
    <div class="tit">커리큘럼 선택</div>
    <div class="dropdown form-inline">
      <select id="teacher" name="teacher" class="btn dropdown-toggle">
        <option class="dropdown-item" label="선생님 선택"></option>
        <option v-for="(teacher, idx) in teacherList" :key="idx" value="">
          {{ teacher.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherSelectBox',
  props: {
    teacherList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
