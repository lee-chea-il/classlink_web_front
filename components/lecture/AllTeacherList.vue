<template>
  <div class="list_area">
    <ul>
      <li v-for="(data, idx) in dataList" :key="idx">
        <span class="text">{{ data.name }}</span>
        <i
          class="icons_plus_circle_off more_mu"
          @click="$emit('show-menu', idx)"
        >
          <div
            :id="`teacher_list${idx}`"
            class="more_list"
            style="display: none"
          >
            <ul>
              <li data-toggle="modal" @click="$emit('add-teacher', data)">
                정담임
                <i
                  v-show="data.selectType === 1"
                  class="icons_check_circle"
                ></i>
              </li>
              <li data-toggle="modal" @click="$emit('add-spare-teacher', data)">
                부담임
                <i
                  v-show="data.selectType === 2"
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
  name: 'AllTeacherList',
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
