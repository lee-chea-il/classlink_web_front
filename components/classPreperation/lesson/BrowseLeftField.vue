<template>
  <div class="divide_area left">
    <CustomTitle title="제목" :value="lessonItem?.title" />
    <CustomTitle title="설명" :value="lessonItem?.desc" />
    <CustomTitle title="교육 목표" :value="lessonItem?.role" />

    <LessonFileField
      :reference="lessonItem?.referenceList"
      @select-reference="$emit('select-reference', $event)"
    />

    <LessonKeywordField :keyword="lessonItem?.keyword" />
    <CustomData title="구분" :value="lessonItem?.type" :first="true" />
    <CustomData
      v-if="pageRoot !== 'world'"
      title="과목"
      :value="lessonItem?.subject"
    />
    <CustomData title="등록자" :value="lessonItem?.worker" />
    <CustomData title="등록일" :value="lessonItem?.createAt" />
    <CustomData title="저장 경로" :value="uploadInfo?.savePathLesson" />

    <span class="custom-control custom-checkbox form-inline div_cont">
      <input
        id="isOpen"
        type="checkbox"
        class="custom-control-input"
        name="isOpen"
        :value="lessonItem?.isOpen"
        :checked="lessonItem?.isOpen"
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
}
</script>

<style></style>
