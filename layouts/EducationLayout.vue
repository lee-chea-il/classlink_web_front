<template>
  <div class="main">
    <EduHeader />
    <div id="content" class="content">
      <div class="content_area">
        <Nuxt />
      </div>
    </div>
    <!-- 클래스링크 알림 모달 팝업 -->
    <AlertModal
      :newContentList="newContentList"
      @click-homework="openHomeWorkDetailModal"
      @click-note="openNoteDetailModal"
      @delete-all="onClickAllDelete"
      @click-delete="onClickDeleteBtn"
    />
    <AlertMoreModal
      :newContentList="newContentList"
      :alertDateList="alertDateList"
      @click-homework="openHomeWorkDetailModal"
      @click-note="openNoteDetailModal"
      @delete-all="onClickAllDelete"
      @click-delete="onClickDeleteBtn"
    />
    <!-- 과제 상세 모달 -->
    <HomeWorkDetailModal
      :open="HomeWorkDetailModalDesc.open"
      @update="onClickUpdateHomeWorkBtn"
      @close="onCloseHomeWorkDetailModal"
    />
    <!-- 노트 상세 모달 -->
    <NoteDetailModal
      :open="NoteDetailModalDesc.open"
      :selectData="note"
      @close="onCloseNoteDetailModal"
    />
  </div>
</template>

<script>
import EduHeader from '@/components/education/EduHeader.vue'
import AlertModal from '@/components/common/modal/AlertModal.vue'
import AlertMoreModal from '@/components/common/modal/AlertMoreModal.vue'
import HomeWorkDetailModal from '@/components/common/modal/lecturecourse/HomeWorkDetailModal.vue'
import NoteDetailModal from '@/components/common/modal/myhome/NoteDetailModal.vue'
export default {
  name: 'EducationLayout',
  components: {
    EduHeader,
    AlertModal,
    AlertMoreModal,
    HomeWorkDetailModal,
    NoteDetailModal,
  },
  data() {
    return {
      newContentList: [
        {
          id: 0,
          category: 2,
          subject: '영어기초 노트',
          date: '2022.11.09',
          type: '노트',
          lecture: {
            academy: '일산어학원',
            time: '월수금 09:00 ~ 12:00',
            subject: '영어심화리딩',
            lessonTitle: '영어',
            lessonClass: '심화 A반',
            teacher: '홍길동 선생님',
          },
        },

        {
          id: 1,
          category: 1,
          subject:
            '영어기초 질문드려요 영어심화 질문드려요 영어심화 질문드려요',
          date: '2022.11.08',
          type: '질문',
          lecture: {
            academy: '김포어학원',
            time: '월수금 09:00 ~ 12:00',
            subject: '수학심화리딩',
            lessonTitle: '수학',
            lessonClass: '심화 B반',
            teacher: '임꺽정 선생님',
          },
        },
        {
          id: 2,
          category: 2,
          subject: '영어심화 과제입니다',
          date: '2022.11.08',
          type: '과제',
          lecture: {
            academy: '광주어학원',
            time: '월수금 09:00 ~ 12:00',
            subject: '과학심화리딩',
            lessonTitle: '과학',
            lessonClass: '심화 C반',
            teacher: '임창정 선생님',
          },
        },
        {
          id: 3,
          category: 1,
          subject: '영어심화 질문드려요',
          date: '2022.11.08',
          type: '질문',
          lecture: {
            academy: '일산어학원',
            time: '월수금 09:00 ~ 12:00',
            subject: '영어심화리딩',
            lessonTitle: '영어',
            lessonClass: '심화 A반',
            teacher: '홍길동 선생님',
          },
        },
      ],
      HomeWorkDetailModalDesc: {
        open: false,
      },
      NoteDetailModalDesc: {
        open: false,
      },
      note: {
        id: 0,
        name: '국어학습노트_221117.pdf',
        subject: '국어',
        desc: '등록한 자료 1',
        keyword: ['국어', '수학'],
        registrant: '등록인',
        savePath:
          'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
        isOpenEducation: true,
        isOpenReference: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'pdf',
        uploadType: 'pdf',
        fileVolume: '',
        createAt: '',
        dbIdx: 1,
        type: 'institution',
      },
      alertDateList: [],
    }
  },
  created() {
    for (let i = 0; i < this.newContentList.length; i++) {
      if (this.alertDateList.includes(this.newContentList[i].date)) {
        continue
      } else {
        this.alertDateList.push(this.newContentList[i].date)
      }
    }
  },
  methods: {
    // 과제 상세/미리보기 모달
    openHomeWorkDetailModal() {
      this.HomeWorkDetailModalDesc.open = true
    },
    onCloseHomeWorkDetailModal() {
      this.HomeWorkDetailModalDesc.open = false
    },
    // 과제 수정
    onClickUpdateHomeWorkBtn() {
      this.HomeWorkDetailModalDesc.open = false
      this.$router.push(
        `/class/lecturecourse/Updatehomework/${this.$route.params.id}`
      )
    },
    // 노트 상세 모달
    openNoteDetailModal() {
      this.NoteDetailModalDesc.open = true
    },
    onCloseNoteDetailModal() {
      this.NoteDetailModalDesc.open = false
    },

    // 알림 전체 삭제
    onClickAllDelete() {
      this.newContentList = []
      this.alertDateList = []
    },
    onClickDeleteBtn(id, date) {
      for (let i = 0; i < this.newContentList.length; i++) {
        if (this.newContentList[i].id === id) {
          this.newContentList.splice(i, 1)
        }
      }
      const result = this.newContentList.filter((elem) => {
        return elem.date === date
      })
      if (result.length === 0) {
        for (let i = 0; i < this.alertDateList.length; i++) {
          if (this.alertDateList[i] === date) {
            this.alertDateList.splice(i, 1)
          }
        }
      }
    },
  },
}
</script>

<style></style>
