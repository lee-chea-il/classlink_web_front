<template>
  <div class="class_section">
    <div>
      <div class="search_class">
        <CustomSelect
          title="수업을 시작하기"
          desc="전에 알림을 보냅니다."
          name="before_start_class_alarm_time"
          :value="lectureInfo.before_start_class_alarm_time"
          target="lectureInfo"
          @change-input="$emit('change-input', $event)"
        />
      </div>
      <div class="search_class02">
        <CustomSelect
          title="수업을 종료하고"
          desc="후에 수업을 자동으로 끝냅니다."
          name="after_end_class_exit_time"
          :value="lectureInfo.after_end_class_exit_time"
          target="lectureInfo"
          @change-input="$emit('change-input', $event)"
        />
      </div>
    </div>
    <div class="tit">수강할 반</div>
    <div class="move_section">
      <div class="list_section">
        <SearchInput
          placeholder="반 이름"
          :value="searchValue"
          name="class"
          target="searchData"
          @delete-item="$emit('clear-class')"
          @change-input="$emit('change-input', $event)"
        />

        <ClassList
          :listItem="classList"
          :add="true"
          @click-item="$emit('add-class', $event)"
        />
      </div>
      <div class="list_section">
        <div class="sum_info">
          선택된 반 <span>{{ lectureInfo.classroom.length }}</span
          >개
        </div>
        <ClassList
          :listItem="lectureInfo.classroom"
          :add="false"
          @click-item="$emit('delete-class', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '../custom/CustomSelect.vue'
import SearchInput from '../custom/SearchInput.vue'
import ClassList from '~/components/lecture/ClassList.vue'

export default {
  name: 'RightSection',
  components: { ClassList, CustomSelect, SearchInput },
  props: {
    classList: { type: Array, default: () => [] },
    lectureInfo: { type: Object, default: () => {} },
    searchValue: { type: String, default: '' },
  },
}
</script>

<style></style>
