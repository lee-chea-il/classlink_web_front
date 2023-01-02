<template>
  <div>
    <!--  3Depth -->
    <ul class="nav nav-tabs depth03">
      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          :class="{ active: $route.fullPath.includes('/question') }"
          to="/class/learningBox/question"
          >질문함</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          :class="{ active: $route.fullPath.includes('/report') }"
          to="/class/learningBox/report"
          >리포트</NuxtLink
        >
      </li>
    </ul>
    <div
      class="tab-content depth03 ac_manage_notice notice_rigi ac_manage_que02"
    >
      <div class="tab-pane active">
        <div class="setting_section">
          <div class="left_section">
            <div class="subject_area">
              <span class="title">제목</span>
              <input
                v-model="answer.qbaTitle"
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
                <!-- <tr>
                  <td colspan="6">
                    <span class="exp_txt">마우스로 파일을 끌어오세요</span>
                  </td>
                </tr> -->

                <tr>
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chk01"
                        type="checkbox"
                        class="custom-control-input"
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

                <tr>
                  <td>
                    <div class="custom-control custom-checkbox form-inline">
                      <input
                        id="chk01"
                        type="checkbox"
                        class="custom-control-input"
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
          v-model="answer.qbaDescription"
          :editorToolbar="editorToolbar"
          :editorOptions="editorOptions"
          :useCustomImageHandler="true"
        />

        <div class="btn_area">
          <button class="btn btn_crud_point" @click="postRegistAnswer">
            완료
          </button>
          <NuxtLink
            to="/class/learningBox/question"
            class="btn btn_crud_default"
            >취소</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiLeaningBox } from '~/services'
export default {
  name: 'Reply',
  data() {
    return {
      questionData: {
        content: '',
      },

      ins_code: this.$store.state.common.user.ins_code,
      fra_code: this.$store.state.common.user.fra_code,
      qtbIdx: Number(this.$route.params.id),

      answer: {
        qbaTitle: '',
        qbaDescription: '',
      },

      // vueEditor
      editorOptions: {
        modules: {
          imageDrop: true,
          imageEdit: true,
        },
      },
      editorToolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' },
        ],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image'],
      ],
    }
  },
  methods: {
    // 질문 상세
    async getSelAnswer() {
      const payload = {
        ins_code: `ins_code=${this.ins_code}`,
        qtb_idx: `&qtb_idx=${this.qtbIdx}`,
      }

      await apiLeaningBox
        .getSelQuestionbox(payload)
        .then(({ data: { data } }) => {
          console.log(data)
          this.questionData = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 답변 등록
    async postRegistAnswer() {
      const payload = {
        answerdto: [
          {
            csm_idx: 0,
            cstm_idx: 0,
            fra_code: this.fra_code,
            icu_idx: 0,
            ins_code: this.ins_code,
            itm_idx: 0,
            mem_idx: 0,
            qba_idx: 0,
            qbat_end_date: '2022-12-29T05:09:45.858Z',
            qbat_file: 'string',
            qbat_size: 0,
            qtb_idx: 0,
            std_idx: 0,
          },
        ],
        fileCheck: true,
        ins_code: 'string',
        qba_description: this.answer.qbaDescription,
        qba_idx: 0,
        qba_open_yn: 'Y',
        qba_title: this.answer.qbaTitle,
        qtb_idx: this.qtbIdx,
      }
      console.log(payload)

      if (this.answer.qbaTitle !== '' && this.answer.qbaDescription === '') {
        await apiLeaningBox
          .postRegistAnswer(payload)
          .then(() => {})
          .catch((err) => {
            console.log(err)
          })
      }
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
.notice_rigi .file_list {
  margin-left: auto;
}
</style>
