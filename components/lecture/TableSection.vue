<template>
  <div class="table_section">
    <table class="table">
      <thead>
        <tr>
          <th>
            <div class="custom-control custom-checkbox form-inline">
              <input
                id="lecture_all_check"
                type="checkbox"
                class="custom-control-input"
                :checked="lectureList.length === checkList.length"
                @input="$emit('check-item', $event)"
              />
              <label
                class="custom-control-label"
                for="lecture_all_check"
              ></label>
            </div>
          </th>
          <th>개설 날짜</th>
          <th>강좌</th>
          <th>정담임/부담임</th>
          <th>반</th>
          <th>커리큘럼</th>
          <th>수업시간</th>
          <th v-if="identity !== 'teacher'">수정</th>
          <th v-if="identity !== 'teacher'">삭제</th>
          <th v-else>상세</th>
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
                :value="lecture.name"
                :checked="checkList.includes(lecture)"
                @input="$emit('check-item', $event)"
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
          <td v-if="identity !== 'teacher'">
            <i
              class="btn icons_pencil_off"
              @click="$emit('open-lecture', lecture)"
            ></i>
          </td>
          <td v-if="identity !== 'teacher'">
            <i
              class="icons_x_circle_off"
              @click="$emit('delete-item', lecture)"
            ></i>
          </td>
          <td v-show="identity === 'teacher'">
            <i
              class="btn icons_mu_off more_mu"
              @click="$emit('show-menu', idx)"
            >
              <div
                :id="`lecture_more_list_${idx}`"
                class="more_list"
                style="display: none"
              >
                <ul>
                  <li
                    data-toggle="modal"
                    data-target="#modalLectureRegi02
													"
                    data-dismiss="modal"
                  >
                    커리큘럼 선택
                  </li>
                  <li
                    data-toggle="modal"
                    data-target="#modalLectureRegi04
													"
                    data-dismiss="modal"
                  >
                    커리큘럼 배정
                  </li>
                </ul>
              </div>
            </i>
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
    checkList: {
      type: Array,
      default: () => [],
    },
    identity: {
      type: String,
      default: '',
    },
  },
  // methods: {
  //   name() {

  //   }
  // },
}
</script>

<style></style>
