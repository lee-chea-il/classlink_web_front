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

      <div class="form-group row">
        <label for="" class="data_title">키워드</label>
        <div id="inputBox" class="col">
          <input
            :id="
              quiz
                ? 'keywordInputQuiz'
                : noteTest
                ? 'keywordInputNoteTest'
                : change
                ? 'keywordChange'
                : 'keywordInput'
            "
            name="keyword"
            placeholder="입력"
            @change="$emit('change-input', $event)"
          />
          <span class="info">키워드는 엔터로 구분할 수 있습니다</span>
        </div>
      </div>

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
          @change-input="$emit('change-input', $event)"
        />
      </div>

      <div class="form-group row check03">
        <div class="cont07">
          <span class="check01">
            <span class="custom-control custom-checkbox form-inline checked">
              <input
                id="chk01"
                type="checkbox"
                class="custom-control-input"
                name="isOpenEducation"
                :value="reference.isOpenEducation"
                :checked="reference.isOpenEducation"
                @input="$emit('change-input', $event)"
              />
              <label
                class="custom-control-label check"
                for="chk01"
              ></label> </span
            ><span>교육기관에 해당 자료를 공개합니다.</span>
          </span>

          <span class="check02">
            <span class="custom-control custom-checkbox form-inline checked">
              <input
                id="chk02"
                type="checkbox"
                class="custom-control-input"
                name="inOpenReferenceRoom"
                :value="reference.inOpenReferenceRoom"
                :checked="reference.inOpenReferenceRoom"
                @input="$emit('change-input', $event)"
              />
              <label
                class="custom-control-label check"
                for="chk02"
              ></label> </span
            ><span>공개자료실에 해당 자료를 공개합니다.</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '../common/custom/CustomSelect.vue'
import CustomBtnInput from '../common/custom/CustomBtnInput.vue'
import CustomModalInput from '@/components/common/custom/CustomModalInput.vue'
export default {
  name: 'ReferenceAddLeftField',
  components: { CustomModalInput, CustomSelect, CustomBtnInput },
  props: {
    reference: {
      type: Object,
      default: null,
    },
    quiz: {
      type: Boolean,
      default: false,
    },
    noteTest: {
      type: Boolean,
      default: false,
    },
    change: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {},
}
</script>

<style scroped>
.select {
  width: 100%;
  padding: 4px;
  border-radius: 5px;
  border-color: rgba(167, 169, 172, 0.4);
}

/* .keywordUl {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.keywordUl li {
  padding: 4px 12px;
  background: #7391fa;
  color: whi;
  margin: 4px;
  border-radius: 12px;
  color: white;
  position: relative;
  cursor: pointer;
}

.keywordUl li::after {
  content: 'x';
  position: absolute;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: whi;
  border-radius: 50%;
  color: white;
  right: -8px;
  top: -13px;
  display: none;
}

.keywordUl li:hover:after {
  display: flex;
} */
</style>
