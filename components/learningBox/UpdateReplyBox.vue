<template>
  <div class="tab-pane active">
    <ValidationObserver v-slot="{ invalid }">
      <div class="setting_section">
        <div class="left_section">
          <ValidationProvider v-slot="{ errors }" rules="required">
            <div class="subject_area">
              <span class="title">제목</span>
              <input
                id="lep_title"
                v-model="syncAnswer.qbaTitle"
                type="text"
                name="제목"
                rules="required"
                placeholder="제목을 입력해주세요."
                class="form-control form-inline"
              />
              <span class="content">작성자는 자동으로 기록에 남습니다.</span>
              <div
                v-if="errors[0] !== ''"
                class="invalid_text text_position_title"
              >
                {{ errors[0] }}
              </div>
            </div>
          </ValidationProvider>
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
              <tr v-if="answerFileList === null">
                <td colspan="6">
                  <span class="exp_txt">마우스로 파일을 끌어오세요</span>
                </td>
              </tr>

              <tr v-for="(item, idx) in answerFileList" v-else :key="idx">
                <td>
                  <div class="custom-control custom-checkbox form-inline">
                    <input
                      :id="`file${idx}`"
                      type="checkbox"
                      class="custom-control-input"
                    />
                    <label
                      class="custom-control-label"
                      :for="`file${idx}`"
                    ></label>
                  </div>
                </td>
                <td class="table001">{{ item.qbat_file }}</td>
                <td></td>
                <td>4MB</td>
                <td>대용량첨부</td>
                <td>~22/08/01(30일간)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- <VueEditor
      id="quiz_editor"
      v-model="syncAnswer.qbaDescription"
      :editorToolbar="editorToolbar"
      :editorOptions="editorOptions"
      :useCustomImageHandler="true"
    /> -->
      <ValidationProvider v-slot="{ errors }" rules="contents_required">
        <VueEditor
          id="quiz_editor"
          v-model="syncAnswer.qbaDescription"
          :editorOptions="editorOptions"
          :editorToolbar="editorToolbar"
          :useCustomImageHandler="true"
          @image-added="handleImageAdded"
        />
        <div v-if="errors[0] !== ''" class="invalid_text text_position">
          {{ errors[0] }}
        </div>
      </ValidationProvider>

      <div class="btn_area">
        <button
          class="btn btn_crud_point"
          :disabled="invalid"
          @click="$emit('update-answer')"
        >
          완료
        </button>
        <NuxtLink to="/class/learningBox/question" class="btn btn_crud_default"
          >취소</NuxtLink
        >
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { api } from '~/services'
export default {
  name: 'UpdateReplyBox',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    answer: {
      type: Object,
      default: () => {},
    },
    answerFileList: {
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
        this.$emit('update:answer', value)
      },
    },
  },
  methods: {
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append('file', file)

      api
        .postFile(formData)
        .then(({ data: { data } }) => {
          const img = `${process.env.VUE_APP_FILE_URL}${data.savedNm}`
          Editor.insertEmbed(cursorLocation, 'image', img)
          resetUploader()
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="postcss" scoped>
/deep/.quillWrapper {
  margin-top: 15px !important;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 0.4px solid rgba(167, 169, 172, 0.4);
  border-radius: 5px !important;
}
/deep/.ql-toolbar,
/deep/.ql-container {
  border-width: 0 !important;
}
/deep/.ql-toolbar {
  border-bottom: 0.4px solid rgba(167, 169, 172, 0.4) !important;
}
/deep/.ql-editor {
  min-height: 400px;
  font-size: 15px;
}
</style>
<style scoped>
#upload-input {
  visibility: hidden;
}
.cursor {
  cursor: pointer;
}
.box_padding {
  padding: 3px 50px 10px 50px !important;
}
.text_position {
  margin-top: 0px;
}
.text_position_title {
  margin-top: 0px;
  padding-left: 95px;
}
</style>
