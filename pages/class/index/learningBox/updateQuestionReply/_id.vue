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
      <UpdateReplyBox
        :answer.sync="answer"
        :answerFileList="answerFileList"
        :editorOptions="editorOptions"
        :editorToolbar="editorToolbar"
        @update-answer="putUpdateAnswer"
      />
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
import UpdateReplyBox from '@/components/learningBox/UpdateReplyBox.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
export default {
  name: 'QuestionReply',
  components: {
    UpdateReplyBox,
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
