<template>
  <!-- container -->
  <div id="content" class="content">
    <div class="content_area">
      <div class="page_myhome myhome_teacher">
        <div class="row">
          <div class="left_side02">
            <!-- 오늘의 강의 -->
            <Todayslecture :todayLectureList="todayLectureList" />
            <!-- /.오늘의 강의 -->
          </div>
          <div class="right_side">
            <div class="row">
              <div class="right_left">
                <div class="row">
                  <div class="right_left_up">
                    <!-- 학습함 -->
                    <LearningBox
                      :learningBoxTabMenuList="learningBoxTabMenuList"
                      :selectedLearningTab="selectedLearningTab"
                      :learningList="learningList"
                      :selectedLearningList="selectedLearningList"
                      @selected-tab="selectedLearningTabMenu"
                    />
                    <!-- /.학습함 -->
                  </div>
                  <div class="right_left_down">
                    <!-- 공지사항 -->
                    <Notice
                      :noticeTabMenuList="noticeTabMenuList"
                      :selectedNoticeTab="selectedNoticeTab"
                      :noticeList="noticeList"
                      :selectedNoticeList="selectedNoticeList"
                      @selected-tab="selectedNoticeTabMenu"
                    />
                    <!-- /.공지사항 -->
                  </div>
                </div>
              </div>
              <div class="right_right">
                <div class="row">
                  <div class="right_right_all">
                    <Calendar />
                  </div>
                </div>
              </div>
              <div class="right_down03">
                <!-- 강의코스 -->
                <LectureCourse :lectureCourseList="lectureCourseList" />
                <!-- /.강의코스 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- //container -->
</template>
<script>
import Todayslecture from '@/components/myhome/TodaysLecture.vue'
import LearningBox from '@/components/myhome/LearningBox.vue'
import Notice from '@/components/myhome/Notice.vue'
import Calendar from '@/components/myhome/Calendar.vue'
import LectureCourse from '@/components/myhome/LectureCourse.vue'
export default {
  name: 'IndexPage',
  components: {
    Todayslecture,
    LearningBox,
    Notice,
    Calendar,
    LectureCourse,
  },
  layout: 'EducationLayout',
  data() {
    return {
      // 오늘의 강의
      todayLectureList: [
        {
          academy: '일산어학원',
          time: '09:00 ~ 12:00',
          subject: '영어심화리딩',
          lessonTitle: '영어',
          lessonClass: '심화 A반',
          teacher: '홍길동 선생님',
        },
        {
          academy: '김포어학원',
          time: '09:00 ~ 12:00',
          subject: '수학심화리딩',
          lessonTitle: '수학',
          lessonClass: '심화 B반',
          teacher: '임꺽정 선생님',
        },
        {
          academy: '광주어학원',
          time: '09:00 ~ 12:00',
          subject: '과학심화리딩',
          lessonTitle: '과학',
          lessonClass: '심화 C반',
          teacher: '임창정 선생님',
        },
        {
          academy: '한남어학원',
          time: '09:00 ~ 12:00',
          subject: '체육심화리딩',
          lessonTitle: '체육',
          lessonClass: '심화 D반',
          teacher: '전현무 선생님',
        },
        {
          academy: '마포어학원',
          time: '09:00 ~ 12:00',
          subject: '음악심화리딩',
          lessonTitle: '음악',
          lessonClass: '심화 E반',
          teacher: '김종국 선생님',
        },
        {
          academy: '홍대어학원',
          time: '09:00 ~ 12:00',
          subject: '사회심화리딩',
          lessonTitle: '사회',
          lessonClass: '심화 F반',
          teacher: '유재석 선생님',
        },
        {
          academy: '잠실어학원',
          time: '09:00 ~ 12:00',
          subject: '국어심화리딩',
          lessonTitle: '국어',
          lessonClass: '심화 G반',
          teacher: '사투리 선생님',
        },
      ],

      // 강의코스
      lectureCourseList: [
        {
          academy: '일산어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '영어심화리딩',
          lessonTitle: '영어',
          lessonClass: '심화 A반',
          teacher: '홍길동 선생님',
        },
        {
          academy: '김포어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '수학심화리딩',
          lessonTitle: '수학',
          lessonClass: '심화 B반',
          teacher: '임꺽정 선생님',
        },
        {
          academy: '광주어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '과학심화리딩',
          lessonTitle: '과학',
          lessonClass: '심화 C반',
          teacher: '임창정 선생님',
        },
        {
          academy: '한남어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '체육심화리딩',
          lessonTitle: '체육',
          lessonClass: '심화 D반',
          teacher: '전현무 선생님',
        },
        {
          academy: '마포어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '음악심화리딩',
          lessonTitle: '음악',
          lessonClass: '심화 E반',
          teacher: '김종국 선생님',
        },
        {
          academy: '홍대어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '사회심화리딩',
          lessonTitle: '사회',
          lessonClass: '심화 F반',
          teacher: '유재석 선생님',
        },
        {
          academy: '잠실어학원',
          time: '월수금 09:00 ~ 12:00',
          subject: '국어심화리딩',
          lessonTitle: '국어',
          lessonClass: '심화 G반',
          teacher: '사투리 선생님',
        },
      ],

      // 학습함
      learningBoxTabMenuList: [
        { id: 0, title: '전체' },
        { id: 1, title: '질문' },
        { id: 2, title: '과제' },
        { id: 3, title: '노트' },
      ],
      selectedLearningTab: 0,
      learningList: [
        { category: 1, subject: '영어심화 질문드려요', date: '2022.11.08' },
        {
          category: 1,
          subject:
            '영어기초 질문드려요 영어심화 질문드려요 영어심화 질문드려요',
          date: '2022.11.08',
        },
        { category: 2, subject: '영어심화 과제입니다', date: '2022.11.08' },
        { category: 3, subject: '영어기초 노트', date: '2022.11.08' },
      ],
      selectedLearningList: [],

      // 공지사항
      noticeTabMenuList: [
        { id: 0, title: '전체' },
        { id: 1, title: '클래스링크' },
        { id: 2, title: '교육기관 공지' },
        { id: 3, title: '반 공지' },
      ],
      selectedNoticeTab: 0,
      noticeList: [
        { category: 1, subject: '클래스링크 공지', date: '2022.11.08' },
        {
          category: 1,
          subject: '클래스링크의 공지입니다',
          date: '2022.11.08',
        },
        { category: 2, subject: '교육기관 공지', date: '2022.11.08' },
        { category: 3, subject: '반 공지입니다.', date: '2022.11.08' },
      ],
      selectedNoticeList: [],
    }
  },
  methods: {
    // 학습함
    selectedLearningTabMenu(idx) {
      this.selectedLearningTab = idx
      const array = []
      for (let i = 0; i < this.learningList.length; i++) {
        if (this.learningList[i].category === idx) {
          array.push(this.learningList[i])
        }
      }
      this.selectedLearningList = array
    },
    // 공지사항
    selectedNoticeTabMenu(idx) {
      this.selectedNoticeTab = idx
      const array = []
      for (let i = 0; i < this.noticeList.length; i++) {
        if (this.noticeList[i].category === idx) {
          array.push(this.noticeList[i])
        }
      }
      this.selectedNoticeList = array
    },
  },
}
</script>
<style scoped></style>
