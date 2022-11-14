<template>
  <div class="class_section">
    <div>
      <div class="search_class">
        <CustomSelect
          title="수업을 시작하기"
          desc="전에 알림을 보냅니다."
          name="startAlarmTime"
          :lectureInfo="lectureInfo"
          @change-lecture="$emit('change-lecture', $event)"
        />
      </div>
      <div class="search_class02">
        <CustomSelect
          title="수업을 종료하고"
          desc="후에 수업을 자동으로 끝냅니다."
          name="endAlarmTime"
          :lectureInfo="lectureInfo"
          @change-lecture="$emit('change-lecture', $event)"
        />
      </div>
    </div>
    <div class="tit">수강할 반</div>
    <div class="move_section">
      <div class="list_section">
        <div class="input-group input-search">
          <input type="text" placeholder="반 이름" class="form-control" />
          <div class="input-group-append">
            <button class="btn icons_x_circle_off" type="button"></button>
            <button class="btn icons_search_off" type="button"></button>
          </div>
        </div>

        <ClassList
          :listItem="classList"
          :add="true"
          @click-item="$emit('add-class', $event)"
        />
      </div>
      <div class="list_section">
        <div class="sum_info">
          선택된 반 <span>{{ lectureInfo.className.length }}</span
          >개
        </div>
        <ClassList
          :listItem="lectureInfo.className"
          :add="false"
          @click-item="$emit('delete-class', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '../custom/CustomSelect.vue'
import ClassList from '~/components/lecture/ClassList.vue'

export default {
  name: 'RightSection',
  components: { ClassList, CustomSelect },
  props: {
    classList: { type: Array, default: () => [] },
    lectureInfo: { type: Object, default: () => {} },
  },
}
</script>

<style></style>
