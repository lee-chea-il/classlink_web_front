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
            {{ lessonData.referenceList?.length }}개
          </div>
          <div class="list_area">
            <LessonTreeView
              ref="myLessonTreevie"
              list-type="lessonList"
              :dataList="lessonData.referenceList"
              :expanded="false"
              :pidNum="20000"
              @add-lesson="$emit('add-lesson', $event)"
              @remove-lesson="$emit('remove-lesson', $event)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="">저장 경로</label>
      <CustomBtnInput
        id="savePath"
        name="저장경로"
        placeholder="저장할 폴더를 선택해 주세요"
        rules="min:2|required"
        type="text"
        :inputValue="lessonData.savePath"
        @change-input="$emit('change-lesson', $event)"
      />
    </div>

    <CustomKeywordArea
      :pushKeyword="pushKeyword"
      :keyword="lessonData.keyword"
      @changePushKeyword="$emit('changePushKeyword', $event)"
      @set-keyword="$emit('set-keyword', $event)"
      @delete-keyword="$emit('delete-keyword', $event)"
    />

    <div v-show="!isChange" class="check_sec">
      <span class="custom-control custom-checkbox form-inline">
        <input
          id="checkbox06"
          type="checkbox"
          class="custom-control-input"
          name="isOpenEducation"
          :value="lessonData.isOpenEducation"
          :checked="lessonData.isOpenEducation"
          @input="$emit('change-lesson', $event)"
        />
        <label class="custom-control-label checkbox06" for="checkbox06"
          >교육기관에 해당 자료를 공개합니다.</label
        >
      </span>
      <!-- [개발참조] 레슨수정시에는 미출력 -->
      <span class="custom-control custom-checkbox form-inline">
        <input
          id="checkbox07"
          type="checkbox"
          class="custom-control-input"
          name="isContinuedRegist"
          :value="lessonData.isContinuedRegist"
          :checked="lessonData.isContinuedRegist"
          @input="$emit('change-lesson', $event)"
        />
        <label class="custom-control-label checkbox07" for="checkbox07"
          >계속 등록하기</label
        >
      </span>
    </div>
  </div>
</template>

<script>
import CustomKeywordArea from '../custom/CustomKeywordArea.vue'
import CustomBtnInput from '~/components/lesson/custom/CustomBtnInput.vue'
import LessonTreeView from '~/components/common/custom/CustomLessonTreeView.vue'
import CustomModalInput from '~/components/common/custom/CustomModalInput.vue'
export default {
  name: 'RightSection',
  components: {
    CustomBtnInput,
    LessonTreeView,
    CustomModalInput,
    CustomKeywordArea,
  },
  props: {
    lessonData: { type: Object, default: () => {} },
    pushKeyword: { type: String, default: '' },
    isChange: { type: Boolean, default: false },
  },
}
</script>

<style></style>
