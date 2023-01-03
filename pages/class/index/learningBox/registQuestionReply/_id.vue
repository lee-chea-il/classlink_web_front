<template>
  <div>
    <!--  3Depth -->
    <ul class="nav nav-tabs depth03">
      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          :class="{ active: $route.fullPath.includes('/registquestionreply') }"
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

    <ModalDesc
      :open="modalDesc.open"
      :title="modalDesc.title"
      :desc="modalDesc.desc"
      @close="onCloseModalDesc"
    />
  </div>
</template>

<script>
import { apiLeaningBox } from '~/services'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
export default {
  name: 'Reply',
  components: {
    ModalDesc,
  },
  data() {
    return {
      questionData: {
        content: '',
      },

      ins_code: this.$store.state.common.user.ins_code,
      fra_code: this.$store.state.common.user.fra_code,
      qtbIdx: Number(this.$route.params.id),
      openYN: Boolean(this.$route.query.open_yn),
      cstmIdx: Number(this.$route.query.cstm_idx),
      icuIdx: Number(this.$route.query.icu_idx),

      answer: {
        qbaTitle: '',
        qbaDescription: '',
      },

      // 첨부파일 목록
      fileList: [],

      // 모달
      modalDesc: {
        open: false,
        title: '',
        desc: '',
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
    // 답변 등록
    async postRegistAnswer() {
      // const file = {
      //   qbat_file: "string",
      //   qbat_size: 0
      // }

      const payload = {
        answerFileList: this.fileList,
        cstm_idx: this.cstmIdx,
        fileCheck: this.fileList.length !== 0,
        icu_idx: this.icuIdx,
        ins_code: this.ins_code,
        qba_description: this.answer.qbaDescription,
        qba_title: this.answer.qbaTitle,
        qtb_idx: this.qtbIdx,
      }
      console.log(payload)
      console.log(this.$route.query.open_yn)

      if (this.answer.qbaTitle !== '' && this.answer.qbaDescription !== '') {
        await apiLeaningBox
          .postRegistAnswer(payload)
          .then(() => {
            this.$router.push(`/class/learningBox/question`)
            this.openModalDesc('등록 성공', '답변을 등록했습니다.')
          })
          .catch((err) => {
            console.log(err)
            this.openModalDesc('등록 실패', '답변 등록을 실패했습니다.')
          })
      } else {
        this.openModalDesc('등록 실패', '답변을 작성해주세요.')
      }
    },

    // 모달
    openModalDesc(tit, msg) {
      this.modalDesc = {
        open: true,
        title: tit,
        desc: msg,
      }
    },
    onCloseModalDesc() {
      this.modalDesc.open = false
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
