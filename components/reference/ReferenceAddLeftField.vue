<template>
  <div class="right_area">
    <div class="regi_area left">
      <div class="form-group row">
        <label for="" class="data_title">파일 이름</label>
        <div class="col">
          <CustomModalInput
            id="name"
            name="파일 이름"
            placeholder="파일 이름 입력"
            rules="min:2|required"
            type="text"
            :inputValue="reference.name"
            @change-input="$emit('change-input', $event)"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="data_title">과목</label>
        <div class="col">
          <CustomSelect
            :input="reference.subject"
            @input="$emit('change-input', $event)"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="data_title">설명</label>
        <div class="col">
          <CustomModalInput
            id="desc"
            name="설명"
            placeholder="설명 입력"
            rules="min:2|required"
            type="text"
            :inputValue="reference.desc"
            @change-input="$emit('change-input', $event)"
          />
        </div>
      </div>

      <CustomKeywordBox
        :pushKeyword="pushKeyword"
        :keyword="reference.keyword"
        @changePushKeyword="$emit('changePushKeyword', $event)"
        @set-keyword="$emit('set-keyword', $event)"
      />

      <div class="form-group row">
        <label for="" class="data_title">등록자</label>
        <div class="col">
          <CustomModalInput
            id="registrant"
            name="등록자"
            placeholder="등록자 입력"
            rules="min:2|required"
            type="text"
            :inputValue="reference.registrant"
            @change-input="$emit('change-input', $event)"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="" class="data_title">저장 경로</label>
        <CustomBtnInput
          id="savePath"
          name="저장경로"
          placeholder="저장할 폴더를 선택해 주세요"
          rules="min:2|required"
          type="text"
          :inputValue="reference.savePath"
          :target="target"
          @change-input="$emit('change-input', $event)"
          @open-save-path="$emit('open-save-path', $event)"
        />
      </div>

      <CheckboxGroup
        :isOpenEducation="reference.isOpenEducation"
        :isContinueRegister="reference.isContinueRegister"
        @change-input="$emit('isOpenEducation', $event)"
      />
    </div>
  </div>
</template>

<script>
import CustomSelect from '../common/custom/CustomSelect.vue'
import CustomBtnInput from '../common/custom/CustomBtnInput.vue'
import CustomKeywordBox from './commom/CustomKeywordBox.vue'
import CheckboxGroup from './commom/CheckboxGroup.vue'
import CustomModalInput from '@/components/common/custom/CustomModalInput.vue'
export default {
  name: 'ReferenceAddLeftField',
  components: {
    CustomModalInput,
    CustomSelect,
    CustomBtnInput,
    CustomKeywordBox,
    CheckboxGroup,
  },
  props: {
    reference: {
      type: Object,
      default: () => {},
    },
    pushKeyword: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
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
</style>
