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
      name: '',
      educationgoal: '',
      description: '',
      keyword: [],
      open_yn: true,
      datarooms: [],
      fra_code: '',
      ins_code: '',
    },
    lessonData: {
      name: '',
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
      exampleList: [
        { id: '', example: '' },
        { id: '', example: '' },
        { id: '', example: '' },
        { id: '', example: '' },
        { id: '', example: '' },
      ],
      level: 0,
      limit_time: '',
      answer: 1,
    },
    copyCheckData: [],
    treeReferenceList: [],
    receiveInstitutionLessonData: [
      {
        name: '마포 학원',
        children: [
          {
            name: '국어',
            children: [
              {
                name: '1단원',
                children: [
                  {
                    name: '본사 스프링 시즌용.lesson',
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
        name: '서울 학원',
        children: [
          {
            name: '과학',
            children: [
              {
                name: '1단원',
                children: [
                  {
                    lesson_idx: 1,
                    datatable_type: 'ID',
                    name: '1-3반 영어 학습 자료 모음.lesson',
                  },
                  {
                    lesson_idx: 2,
                    datatable_type: 'ID',
                    name: '2-3반 수학 학습 자료 모음.lesson',
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
        name: '국어',
        children: [
          {
            name: '1단원',
            children: [
              {
                lesson_idx: 1,
                datatable_type: 'ID',
                name: '1-3반 영어 학습 자료 모음.lesson',
              },
              {
                lesson_idx: 2,
                datatable_type: 'ID',
                name: '2-3반 수학 학습 자료 모음.lesson',
              },
            ],
          },
        ],
      },
    ],
    receiveInstitutionData: [
      {
        name: '마포 학원',
        children: [
          {
            name: '국어',
            children: [
              {
                name: '1단원',
                children: [
                  {
                    dataroom_idx: 1,
                    datatable_type: 'ID',
                    name: '국어학습자료 애니메이션.mp4',
                    datatype: '01',
                  },
                  {
                    dataroom_idx: 2,
                    datatable_type: 'ID',
                    name: '수학 학습자료.pdf',
                    datatype: '02',
                  },
                  {
                    dataroom_idx: 3,
                    datatable_type: 'ID',
                    name: '영어 단어 퀴즈.quiz',
                    datatype: '03',
                  },
                  {
                    dataroom_idx: 4,
                    datatable_type: 'ID',
                    name: '수학 쪽지시험.test',
                    datatype: '04',
                  },
                  {
                    dataroom_idx: 5,
                    datatable_type: 'ID',
                    name: '사회 쪽지시험 영상.youtube',
                    datatype: '05',
                  },
                  {
                    dataroom_idx: 6,
                    datatable_type: 'ID',
                    name: '과학 사이트 참고용.url',
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
        name: '서울 학원',
        children: [
          {
            name: '과학',
            children: [
              {
                name: '1단원',
                children: [
                  {
                    dataroom_idx: 1,
                    datatable_type: 'ID',
                    name: '국어학습자료 애니메이션.mp4',
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
        name: '국어',
        children: [
          {
            name: '1단원',
            children: [
              {
                dataroom_idx: 1,
                datatable_type: 'ID',
                name: '국어학습자료 애니메이션.mp4',
                datatype: '01',
              },
            ],
          },
        ],
      },
    ],
  }
}
