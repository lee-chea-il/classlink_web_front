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
      <RegistReplyBox
        :answer.sync="answer"
        :fileList="fileList"
        :editorOptions="editorOptions"
        :editorToolbar="editorToolbar"
        @regist-answer="postRegistAnswer"
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
import RegistReplyBox from '@/components/learningBox/RegistReplyBox.vue'
import ModalDesc from '@/components/common/modal/ModalDesc.vue'
export default {
  name: 'Reply',
  components: {
    RegistReplyBox,
    ModalDesc,
  },
  data() {
    return {
      questionData: {
        content: '',
      },
      questionInfo: {
        cstm_idx: 0,
        icu_idx: 0,
      },

      ins_code: this.$store.state.common.user.ins_code,
      fra_code: this.$store.state.common.user.fra_code,
      qtbIdx: Number(this.$route.params.id),
      // openYN: Boolean(this.$route.query.open_yn),
      // cstmIdx: Number(this.$route.query.cstm_idx),
      // icuIdx: Number(this.$route.query.icu_idx),

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
  mounted() {
    this.questionInfo = JSON.parse(localStorage.getItem('questionData'))
    console.log(this.questionInfo)
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
        cstm_idx: this.questionInfo.cstm_idx,
        fileCheck: this.fileList.length !== 0,
        icu_idx: this.questionInfo.icu_idx,
        ins_code: this.ins_code,
        qba_description: this.answer.qbaDescription,
        qba_title: this.answer.qbaTitle,
        qtb_idx: this.qtbIdx,
      }
      console.log(payload)

      if (payload.qba_title !== '' && payload.qba_description !== '') {
        if (payload.qba_title.length >= 2) {
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
        }
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
