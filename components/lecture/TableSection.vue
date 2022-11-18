<template>
  <div class="table_section">
    <table class="table">
      <thead>
        <tr>
          <th>
            <div class="custom-control custom-checkbox form-inline">
              <input id="chkAll" type="checkbox" class="custom-control-input" />
              <label class="custom-control-label" for="chkAll"></label>
            </div>
          </th>
          <th>개설 날짜</th>
          <th>강좌</th>
          <th>정담임/부담임</th>
          <th>반</th>
          <th>커리큘럼</th>
          <th>수업시간</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(lecture, idx) in lectureList" :key="idx">
          <td>
            <div class="custom-control custom-checkbox form-inline">
              <input
                :id="`check${idx}`"
                type="checkbox"
                class="custom-control-input"
              />
              <label class="custom-control-label" :for="`check${idx}`"></label>
            </div>
          </td>
          <td>{{ lecture.createdAt }}</td>
          <td>{{ lecture.name }}</td>
          <CustomSpan :dataList="lecture.teacher" />
          <CustomSpan :dataList="lecture.className" />
          <td>
            <div class="lec_curi">
              {{ lecture.curriculum }}
            </div>
          </td>
          <td>
            <div class="lec_time">
              {{ lecture.classTime }}
            </div>
          </td>
          <td>
            <i
              class="btn icons_pencil_off"
              data-toggle="modal"
              data-target="#modalLectureRegi"
            ></i>
          </td>
          <td>
            <i class="icons_x_circle_off"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CustomSpan from './custom/CustomSpan.vue'
export default {
  name: 'TableSection',
  components: { CustomSpan },
  props: {
    lectureList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
