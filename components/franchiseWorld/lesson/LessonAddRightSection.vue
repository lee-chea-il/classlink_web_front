<template>
  <div class="divide_area right">
    <div class="form-group">
      <label for="">제목</label>
      <div class="col">
        <CustomModalInput
          id="name"
          name="제목"
          placeholder="제목을 입력해 주세요"
          rules="min:2|required"
          type="text"
          :inputValue="lessonData.name"
          @change-input="$emit('change-lesson', $event)"
        />
      </div>
    </div>
    <div class="form-group">
      <label for="">설명</label>
      <div class="col">
        <CustomModalInput
          id="desc"
          name="설명"
          placeholder="설명을 입력해 주세요"
          rules="min:2|required"
          type="text"
          :inputValue="lessonData.desc"
          @change-input="$emit('change-lesson', $event)"
        />
      </div>
    </div>

    <div class="form-group">
      <label for="">교육 목표</label>
      <div class="col">
        <CustomModalInput
          id="role"
          name="교육 목표"
          placeholder="교육 목표를 입력해 주세요"
          rules="min:2|required"
          type="text"
          :inputValue="lessonData.role"
          @change-input="$emit('change-lesson', $event)"
        />
      </div>
    </div>
    <div class="form-group">
      <label for="">레슨 자료</label>
      <div class="col">
        <div class="list_box">
          <div class="sum">
            등록 개수:
            {{ treeReference?.length }}개
          </div>
          <div class="list_area">
            <LessonAddTreeView
              ref="myLessonTreeview"
              list-type="lessonList"
              :dataList="lessonData.referenceList"
              :expanded="false"
              :pidNum="20000"
              @moreShowClick="$emit('moreShowClick', $event)"
              @add-reference="$emit('add-reference', $event)"
              @remove-reference="$emit('remove-reference', $event)"
              @un-active="$emit('un-active')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="">저장 경로</label>
      <CustomBtnInput
        id="savepath"
        name="저장경로"
        placeholder="저장할 폴더를 선택해 주세요"
        rules="min:2|required"
        type="text"
        :inputValue="lessonData.savepath"
        @change-input="$emit('change-lesson', $event)"
        @open-save-path="$emit('open-save-path')"
      />
    </div>

    <CustomKeywordArea
      :pushKeyword="pushKeyword"
      :keyword="lessonData.keyword"
      @change-keyword="$emit('change-keyword', $event)"
      @set-keyword="$emit('set-keyword', $event)"
      @delete-keyword="$emit('delete-keyword', $event)"
    />

    <div class="check_sec">
      <span class="custom-control custom-checkbox form-inline">
        <input
          :id="isChange ? 'publicOpenYnItem' : 'publicOpenYn'"
          type="checkbox"
          class="custom-control-input"
          name="publicOpenYn1"
          :value="lessonData.publicOpenYn"
          :checked="lessonData.publicOpenYn"
          @input="$emit('change-lesson', $event)"
        />
        <label
          class="custom-control-label checkbox06"
          :for="isChange ? 'publicOpenYnItem' : 'publicOpenYn'"
          >교육기관에 해당 자료를 공개합니다.</label
        >
      </span>
      <!-- [개발참조] 레슨수정시에는 미출력 -->
      <span
        v-show="modalTitle !== '레슨 수정'"
        class="custom-control custom-checkbox form-inline"
      >
        <input
          id="isContinuedRegist"
          type="checkbox"
          class="custom-control-input"
          name="isContinuedRegist"
          :value="lessonData.isContinuedRegist"
          :checked="lessonData.isContinuedRegist"
          @input="$emit('change-lesson', $event)"
        />
        <label class="custom-control-label checkbox07" for="isContinuedRegist"
          >계속 등록하기</label
        >
      </span>
    </div>
  </div>
</template>

<script>
import CustomKeywordArea from '../common/custom/CustomKeywordArea.vue'
import CustomBtnInput from '../common/custom/CustomLessonBtnInput.vue'
import LessonAddTreeView from '../common/custom/LessonAddTreeView.vue'
import CustomModalInput from '~/components/common/custom/CustomModalInput.vue'
export default {
  name: 'RightSection',
  components: {
    CustomBtnInput,
    LessonAddTreeView,
    CustomModalInput,
    CustomKeywordArea,
  },
  props: {
    isChange: { type: Boolean, default: false },
    pushKeyword: { type: String, default: '' },
    modalTitle: { type: String, default: '' },
    lessonData: { type: Object, default: () => {} },
    referenceList: { type: Array, default: () => [] },
    treeReference: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
.check_sec {
  display: flex !important;
}
</style>
