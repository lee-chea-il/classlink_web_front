<template>
  <div class="table_area">
    <div class="table_tbody">
      <table class="tb">
        <thead>
          <tr>
            <th>
              <div class="custom-control custom-checkbox form-inline">
                <input
                  id="all_check"
                  type="checkbox"
                  class="custom-control-input"
                  @input="$emit('check-handler', $event)"
                />
                <label class="custom-control-label" for="all_check"></label>
              </div>
            </th>
            <th class="th01">파일이름</th>
            <th class="th02">경로</th>
            <th class="th03">과목</th>
            <th class="th04">키워드</th>
            <th class="th05">보기</th>
            <th class="th06">위치</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- class="bg" -->
          <tr
            v-for="(reference, idx) in filterItem"
            :key="idx"
            :class="{ bg: idx % 2 !== 0 }"
          >
            <td>
              <div class="custom-control custom-checkbox form-inline">
                <input
                  :id="`search_checkbox${idx}`"
                  type="checkbox"
                  class="custom-control-input"
                  :value="reference.title"
                  :checked="checkList.includes(reference)"
                  @input="$emit('check-handler', $event)"
                />
                <label
                  class="custom-control-label"
                  :for="`search_checkbox${idx}`"
                ></label>
              </div>
            </td>
            <td>
              <div class="title">
                {{ reference.title }}
              </div>
            </td>
            <td>
              <div class="path">
                {{ reference.path }}
              </div>
            </td>
            <td>
              <div class="subject">{{ reference.subject }}</div>
            </td>
            <td>
              <div class="keyword">
                <span>{{ reference.keyword }} </span>
              </div>
            </td>
            <td>
              <i
                class="icons_zoom_off"
                @click="$emit('detail-view', reference)"
              ></i>
            </td>
            <td>
              <button
                class="btn btn_crud_default"
                data-dismiss="modal"
                @click="$emit('move-data', reference)"
              >
                이동
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchTable',
  props: {
    filterItem: {
      type: Array,
      default: () => [],
    },
    checkList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
