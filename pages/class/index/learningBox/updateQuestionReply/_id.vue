<template>
  <div>
    <!--  3Depth -->
    <ul class="nav nav-tabs depth03">
      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          :class="{ active: $route.fullPath.includes('/updatequestionreply') }"
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
        <VueEditor
          id="quiz_editor"
          v-model="answer.qbaDescription"
          :editorToolbar="editorToolbar"
          :editorOptions="editorOptions"
          :useCustomImageHandler="true"
        />

        <div class="btn_area">
          <button class="btn btn_crud_point" @click="putUpdateAnswer">
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
  name: 'QuestionReply',
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
      qbaIdx: Number(this.$route.params.id),

      answerData: {
        answerList: {
          cstm_idx: 1,
          qba_title: '',
          qba_description: '',
          icu_idx: 1,
          qtb_idx: 1,
        },
        answerFile: {},
      },
      answer: {
        qbaTitle: '',
        qbaDescription: '',
      },

      // 첨부파일 목록
      answerFileList: null,

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
  mounted() {
    this.answerData = JSON.parse(localStorage.getItem('answerData'))
    this.answer.qbaTitle = this.answerData.answerList.qba_title
    this.answer.qbaDescription = this.answerData.answerList.qba_description
    this.answerFileList = this.answerData.answerFile
    console.log('answerData', this.answerData)
  },
  methods: {
    // 답변 수정
    async putUpdateAnswer() {
      const fileList = []
      if (this.answerFileList !== null) {
        for (let i = 0; i < this.answerFileList.length; i++) {
          const file = {
            qbat_file: this.answerFileList[i].qbat_file,
            qbat_size: this.answerFileList[i].qbat_size,
          }
          fileList.push(file)
        }
      }

      const payload = {
        answerFileList: fileList,
        cstm_idx: this.answerData.answerList.cstm_idx,
        icu_idx: this.answerData.answerList.icu_idx,
        ins_code: this.ins_code,
        qba_description: this.answer.qbaDescription,
        qba_idx: this.qbaIdx,
        qba_title: this.answer.qbaTitle,
        qtb_idx: this.answerData.answerList.qtb_idx,
        updateFileCheck: fileList.length !== 0,
      }

      console.log(payload)

      if (this.answer.qbaTitle !== '' && this.answer.qbaDescription !== '') {
        await apiLeaningBox
          .putUpdateAnswer(payload)
          .then(() => {
            this.$router.push(`/class/learningBox/question`)
            this.openModalDesc('수정 성공', '답변을 수정했습니다.')
          })
          .catch((err) => {
            console.log(err)
            this.openModalDesc('수정 실패', '답변 수정을 실패했습니다.')
          })
      } else {
        this.openModalDesc('수정 실패', '답변 수정을 실패했습니다.')
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
