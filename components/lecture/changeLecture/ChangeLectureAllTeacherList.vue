<template>
  <div class="list_area">
    <ul>
      <li v-for="(data, idx) in dataList" :key="idx">
        <span class="text">{{ data.name }}</span>
        <i
          class="icons_plus_circle_off more_mu"
          @click="$emit('show-menu', '_' + idx)"
        >
          <div
            :id="`teacher_list_${idx}`"
            class="more_list"
            style="display: none"
          >
            <ul>
              <li data-toggle="modal" @click="$emit('add-teacher', data)">
                정담임
                <i
                  v-show="isActive(data.name, 'teacher')"
                  class="icons_check_circle"
                ></i>
              </li>
              <li data-toggle="modal" @click="$emit('add-spare-teacher', data)">
                부담임
                <i
                  v-show="isActive(data.name, 'spare')"
                  class="icons_check_circle"
                ></i>
              </li>
            </ul>
          </div>
        </i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChangeLectureAllTeacherList',
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    teacher: {
      type: Array,
      default: () => [],
    },
    spare: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    isActive(tmp, targetList) {
      const item = this[targetList].filter((item) => item.name === tmp)
      if (item.length) return true
      else return false
    },
  },
}
</script>

<style></style>
