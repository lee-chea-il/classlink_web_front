<template>
  <div class="tab-pane active">
    <div class="setting_section">
      <div class="left_section">
        <div class="subject_area">
          <span class="title">제목</span>
          <input
            v-model="syncAnswer.qbaTitle"
            type="text"
            placeholder="제목을 입력해주세요."
            class="form-control form-inline"
          />
          <span class="content">작성자는 자동으로 기록에 남습니다.</span>
        </div>
        <div class="file_area">
          <span class="title">파일첨부</span>
          <input id="fileSelect" type="file" class="custom-control-input" />
          <label for="fileSelect" class="btn btn_crud_default mypc"
            >내 PC</label
          >
          <button class="btn btn_crud_danger">삭제</button>
        </div>
      </div>
      <div class="right_section row">
        <div class="date_area">
          <span class="box">
            <span class="content02">선택한 과목</span>
          </span>
          <span class="box">
            <span class="content02">선택한 강좌</span>
          </span>
        </div>
        <!-- <div class="target_area">
								<span class="box01">
									<span class="content02">선택한 강좌</span>
								</span>
							</div> -->
      </div>
    </div>
    <div class="file_list">
      <div id="searchTable" class="search_result">
        <table class="table table-borderless">
          <!-- <colgroup>
									<col width="10%" />
									<col width="20%" />
									<col width="20%" />
									<col width="10%" />
									<col width="20%" />
									<col width="20%" />
								</colgroup> -->
          <thead>
            <tr>
              <th scope="col">선택</th>
              <th scope="col">파일이름</th>
              <th scope="col">업로드 상태</th>
              <th scope="col">용량</th>
              <th scope="col">첨부방식(전환)</th>
              <th scope="col">다운로드 가능기간</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="fileList.length === 0">
              <td colspan="6">
                <span class="exp_txt">마우스로 파일을 끌어오세요</span>
              </td>
            </tr>

            <tr v-for="(item, idx) in fileList" v-else :key="idx">
              <td>
                <div class="custom-control custom-checkbox form-inline">
                  <input
                    id="chk01"
                    type="checkbox"
                    class="custom-control-input"
                    maxlength="60"
                  />
                  <label class="custom-control-label" for="chk01"></label>
                </div>
              </td>
              <td class="table001">영어리딩심화.pdf</td>
              <td></td>
              <td>4MB</td>
              <td>대용량첨부</td>
              <td>~22/08/01(30일간)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <VueEditor
      id="quiz_editor"
      v-model="syncAnswer.qbaDescription"
      :editorToolbar="editorToolbar"
      :editorOptions="editorOptions"
      :useCustomImageHandler="true"
    />

    <div class="btn_area">
      <button class="btn btn_crud_point" @click="$emit('regist-answer')">
        완료
      </button>
      <NuxtLink to="/class/learningBox/question" class="btn btn_crud_default"
        >취소</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistReplyBox',
  props: {
    answer: {
      type: Object,
      default: () => {},
    },
    fileList: {
      type: Array,
      default: () => [],
    },
    editorOptions: {
      type: Object,
      default: () => {},
    },
    editorToolbar: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    syncAnswer: {
      get() {
        return this.answer
      },
      set(value) {
        this.$emit('update:value', value)
      },
    },
  },
}
</script>

<style></style>
