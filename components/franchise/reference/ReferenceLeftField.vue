<template>
  <div class="right_area">
    <div class="regi_area left">
      <div class="form-group row">
        <label for="" class="data_title">파일 이름</label>
        <div class="col">
          <CustomModalInput
            id="title"
            name="파일 이름"
            placeholder="파일 이름 입력"
            rules="min:2|required|max_title"
            type="text"
            :inputValue="reference.title"
            @change-input="$emit('change-input', $event)"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="data_title">과목</label>
        <div class="col">
          <CustomSelect
            :inputValue="reference.subject"
            @change-input="$emit('change-input', $event)"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="data_title">설명</label>
        <div class="col">
          <CustomTextarea
            id="description"
            name="설명"
            placeholder="설명 입력"
            rules="min:2|required|end_desc"
            type="text"
            :inputValue="reference.description"
            @change-input="$emit('change-input', $event)"
          />
        </div>
      </div>

      <CustomKeywordBox
        :pushKeyword="pushKeyword"
        :keyword="reference.keyword"
        rules="max_keyword"
        @change-keyword="$emit('change-keyword', $event)"
        @set-keyword="$emit('set-keyword', $event)"
        @delete-keyword="$emit('delete-keyword', $event)"
      />
      <div class="form-group row">
        <label for="" class="data_title">등록자</label>
        <div class="col">
          <CustomModalInput
            id="worker"
            name="등록자"
            placeholder="등록자 입력"
            rules="min:2|required"
            type="text"
            :inputValue="reference.registrant_name"
            @change-input="$emit('change-input', $event)"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="data_title">저장 경로</label>
        <CustomBtnInput
          id="saveFolder"
          name="저장경로"
          placeholder="저장할 폴더를 선택해 주세요"
          rules="min:2|required"
          type="text"
          :inputValue="uploadInfo?.saveFolderPath"
          :target="target"
          @open-save-path="$emit('open-save-path', $event)"
        />
      </div>

      <CheckboxGroup
        :public_open_yn="reference.public_open_yn"
        :open_yn="reference.open_yn"
        :pageRoot="pageRoot"
        @change-input="$emit('change-input', $event)"
      />
      <br />

      <ThumbnailBox
        v-if="pageRoot === 'world'"
        :imgValue="reference.thumbnail"
        @change-input="$emit('change-input', $event)"
        @delete-thumbnail="$emit('delete-thumbnail')"
      />
    </div>
  </div>
</template>

<script>
import CustomSelect from '../common/custom/CustomSelect.vue'
import CustomBtnInput from '../common/custom/CustomBtnInput.vue'
import CustomKeywordBox from '../common/custom/CustomKeywordBox.vue'
import CheckboxGroup from '../common/custom/CheckboxGroup.vue'
import ThumbnailBox from '../common/ThumbnailBox.vue'
import CustomModalInput from '@/components/common/custom/CustomModalInput.vue'
import CustomTextarea from '~/components/common/custom/CustomTextarea.vue'
export default {
  name: 'ReferenceLeftField',
  components: {
    CustomModalInput,
    CustomSelect,
    CustomBtnInput,
    CustomKeywordBox,
    CheckboxGroup,
    ThumbnailBox,
    CustomTextarea,
  },
  props: {
    reference: { type: Object, default: () => {} },
    pushKeyword: { type: String, default: '' },
    target: { type: String, default: '' },
    pageRoot: { type: String, default: '' },
    uploadInfo: { type: Object, default: () => {} },
  },
}
</script>

<style scroped>
.select {
  width: 100%;
  padding: 4px;
  border-radius: 5px;
  border-color: rgba(167, 169, 172, 0.4);
}

.span {
  cursor: pointer;
}

#modalDataRegiModi .form-group label,
#modalDataRegiQuiz .form-group label,
#modalDataRegiNote .form-group label {
  line-height: 39px;
}
</style>
