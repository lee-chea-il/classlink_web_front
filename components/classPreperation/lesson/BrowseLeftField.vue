<template>
  <div class="divide_area left">
    <CustomTitle title="제목" :value="lessonItem?.title" />
    <CustomTitle title="설명" :value="lessonItem?.description" />
    <CustomTitle title="교육 목표" :value="lessonItem?.educationgoal" />

    <LessonFileField
      :reference="lessonItem?.referenceList"
      @select-reference="$emit('select-reference', $event)"
    />

    <LessonKeywordField :keyword="lessonItem?.keyword" />
    <CustomData
      title="구분"
      :value="setDatatableType(lessonItem?.datatable_type)"
      :first="true"
    />
    <CustomData
      v-if="pageRoot !== 'world'"
      title="과목"
      :value="lessonItem?.subject"
    />
    <CustomData title="등록자" :value="lessonItem?.registrant_name" />
    <CustomData title="등록일" :value="lessonItem?.registration_date" />
    <CustomData title="저장 경로" :value="uploadInfo?.savePathLesson" />

    <span class="custom-control custom-checkbox form-inline div_cont">
      <input
        id="open_yn"
        type="checkbox"
        class="custom-control-input"
        name="open_yn"
        :value="lessonItem?.open_yn"
        :checked="lessonItem?.open_yn"
        disabled
      />
      <label class="custom-control-label checkbox06" for="isOpen"
        >교육기관에 해당 자료를 공개합니다.</label
      >
    </span>
  </div>
</template>

<script>
import CustomData from '../common/custom/CustomData.vue'
import CustomTitle from '../common/custom/CustomTitle.vue'
import LessonFileField from './LessonFileField.vue'
import LessonKeywordField from './LessonKeywordField.vue'

export default {
  name: 'LessonBrouseLeftField',
  components: {
    LessonFileField,
    LessonKeywordField,
    CustomTitle,
    CustomData,
  },
  props: {
    lessonItem: { type: Object, default: () => {} },
    pageRoot: { type: String, default: '' },
    uploadInfo: { type: Object, default: () => {} },
  },
  methods: {
    setDatatableType(type) {
      if (type === 'IL') return '교육기관'
      else if (type === 'FL') return '프랜차이즈'
      else if (type === 'ML') return '내 자료실'
    },
  },
}
</script>

<style></style>
