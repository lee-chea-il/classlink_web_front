<template>
  <div class="divide_area right">
    <div class="form-group">
      <label for="">제목</label>
      <div class="col">
        <CustomModalInput
          id="title"
          name="제목"
          placeholder="제목을 입력해 주세요"
          rules="min:2|required"
          type="text"
          :inputValue="lessonData.title"
          @change-input="$emit('change-lesson', $event)"
        />
      </div>
    </div>
    <div class="form-group">
      <label for="">설명</label>
      <div class="col">
        <CustomModalInput
          id="description"
          name="설명"
          placeholder="설명을 입력해 주세요"
          rules="min:2|required"
          type="text"
          :inputValue="lessonData.description"
          @change-input="$emit('change-lesson', $event)"
        />
      </div>
    </div>

    <div class="form-group">
      <label for="">교육 목표</label>
      <div class="col">
        <CustomModalInput
          id="educational_goal"
          name="교육 목표"
          placeholder="교육 목표를 입력해 주세요"
          rules="min:2|required"
          type="text"
          :inputValue="lessonData.educational_goal"
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
              :dataList="lessonData.dataroom"
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
        id="save_path"
        name="저장경로"
        placeholder="저장할 폴더를 선택해 주세요"
        rules="min:2|required"
        type="text"
        :inputValue="uploadInfo.savePathLesson"
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
          id="open_yn"
          type="checkbox"
          class="custom-control-input"
          name="open_yn"
          :value="lessonData.open_yn"
          :checked="lessonData.open_yn"
          @input="$emit('change-lesson', $event)"
        />
        <label class="custom-control-label checkbox06" for="open_yn"
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
          :value="isContinuedRegist"
          :checked="isContinuedRegist"
          @input="$emit('change-continue', $event)"
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
    isContinuedRegist: { type: Boolean, default: false },
    pushKeyword: { type: String, default: '' },
    modalTitle: { type: String, default: '' },
    lessonData: { type: Object, default: () => {} },
    treeReference: { type: Array, default: () => [] },
    uploadInfo: { type: Object, default: () => {} },
  },
}
</script>

<style scoped>
.check_sec {
  display: flex !important;
}
</style>
