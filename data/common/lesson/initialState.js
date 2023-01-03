export default function initialState() {
  return {
    currentIdx: 0,
    isLoading: false,
    pushKeyword: '',
    modalTitle: '',
    identity: 'teacher',
    isCopyType: '',
    isContinuedRegist: false,
    isLesson: false,
    selectReferenceItem: {},
    viewLessonItem: {},
    isAddLesson: { open: false },
    isChangeLesson: { open: false },
    isLessonBrowse: { open: false, prevPage: '' },
    isReferenceBrowse: { open: false, prevPage: '' },
    isQuizBrowse: { open: false, prevPage: '' },
    isNoteTestBrowse: { open: false, prevPage: '' },
    isQuizPreviewModal: { open: false, prevPage: '', select: false },
    isNoteTestPreviewModal: { open: false, prevPage: '', select: false },
    isSavePath: { open: false, prevPage: '' },
    uploadInfo: {
      registrant: '',
      fileSize: '',
      savePathLesson: '',
      saveFolderPath: '',
    },
    // 자료실 모달
    modalDesc: { open: false, title: '', desc: '' },
    isReferenceAddModal: { open: false },
    isQuizAddModal: { open: false },
    isNoteTestAddModal: { open: false },
    isShareViewModal: { open: false, path: '', url: '' },
    isSelectModal: { open: false, prevPage: '' },
    isSavePathModal: { open: false, prevPage: '' },
    lessonViewData: {},
    initLessonData: {
      title: '',
      educationgoal: '',
      description: '',
      keyword: [],
      open_yn: true,
      datarooms: [],
      fra_code: '',
      ins_code: '',
    },
    lessonData: {
      title: '',
      educationgoal: '',
      description: '',
      keyword: [],
      open_yn: true,
      datarooms: [],
      fra_code: '',
      ins_code: '',
    },
    quizItem: {
      id: 0,
      question: '',
      level: 0,
      limit_time: 0,
      type: 0,
      oxAnswer: 0,
      shortAnswer: '',
      subjectiveAnswer: '',
      shortWrongAnswer: '',
    },
    testItem: {
      id: 0,
      question: '',
      note_exam_ask_views: [
        { id: '', example: '' },
        { id: '', example: '' },
        { id: '', example: '' },
        { id: '', example: '' },
        { id: '', example: '' },
      ],
      level: 0,
      limit_time: '',
      correct_no: 1,
    },
    copyCheckData: [],
    treeReferenceList: [],
    receiveInstitutionLessonData: [
      {
        title: '마포 학원',
        group_yn: true,
        children: [
          {
            title: '국어',
            group_yn: true,
            children: [
              {
                title: '1단원',
                group_yn: false,
                children: [
                  {
                    title: '본사 스프링 시즌용.lesson',
                    lesson_idx: 1,
                    datatable_type: 'IL',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    receiveFranchiseLessonData: [
      {
        title: '서울 학원',
        children: [
          {
            title: '과학',
            children: [
              {
                title: '1단원',
                children: [
                  {
                    lesson_idx: 1,
                    datatable_type: 'FL',
                    title: '1-3반 영어 학습 자료 모음.lesson',
                  },
                  {
                    lesson_idx: 2,
                    datatable_type: 'FL',
                    title: '2-3반 수학 학습 자료 모음.lesson',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    receiveLessonList: [
      {
        title: '국어',
        children: [
          {
            title: '1단원',
            children: [
              {
                lesson_idx: 1,
                datatable_type: 'ML',
                title: '1-3반 영어 학습 자료 모음.lesson',
              },
              {
                lesson_idx: 2,
                datatable_type: 'ML',
                title: '2-3반 수학 학습 자료 모음.lesson',
              },
            ],
          },
        ],
      },
    ],
    receiveInstitutionData: [
      {
        title: '마포 학원',
        children: [
          {
            title: '국어',
            children: [
              {
                title: '1단원',
                children: [
                  {
                    dataroom_idx: 30,
                    datatable_type: 'ID',
                    title: '국어학습자료 애니메이션.mp4',
                    datatype: '01',
                  },
                  {
                    dataroom_idx: 31,
                    datatable_type: 'ID',
                    title: '수학 학습자료.pdf',
                    datatype: '02',
                  },
                  {
                    dataroom_idx: 3,
                    datatable_type: 'ID',
                    title: '영어 단어 퀴즈.quiz',
                    datatype: '03',
                  },
                  {
                    dataroom_idx: 4,
                    datatable_type: 'ID',
                    title: '수학 쪽지시험.test',
                    datatype: '04',
                  },
                  {
                    dataroom_idx: 5,
                    datatable_type: 'ID',
                    title: '사회 쪽지시험 영상.youtube',
                    datatype: '05',
                  },
                  {
                    dataroom_idx: 6,
                    datatable_type: 'ID',
                    title: '과학 사이트 참고용.url',
                    datatype: '06',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    receiveFranchiseData: [
      {
        title: '서울 학원',
        children: [
          {
            title: '과학',
            children: [
              {
                title: '1단원',
                children: [
                  {
                    dataroom_idx: 1,
                    datatable_type: 'FD',
                    title: '국어학습자료 애니메이션.mp4',
                    datatype: '01',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    receiveMyData: [
      {
        title: '국어',
        children: [
          {
            title: '1단원',
            children: [
              {
                dataroom_idx: 1,
                datatable_type: 'MD',
                title: '국어학습자료 애니메이션.mp4',
                datatype: '01',
              },
            ],
          },
        ],
      },
    ],
  }
}
