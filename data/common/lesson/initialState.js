export default function initialState() {
  return {
    currentIdx: 0,
    pushKeyword: '',
    modalTitle: '',
    identity: 'teacher',
    isCopyType: '',
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
    userInfo: {},
    // 자료실 모달
    modalDesc: { open: false, title: '', desc: '' },
    isReferenceAddModal: { open: false },
    isQuizAddModal: { open: false },
    isNoteTestAddModal: { open: false },
    isShareViewModal: { open: false, path: '', url: '' },
    isSelectModal: { open: false, prevPage: '' },
    isSavePathModal: { open: false, prevPage: '' },
    lessonViewData: {},
    lessonData: {
      name: '',
      role: '',
      desc: '',
      save_path: '',
      keyword: [],
      public_open_yn: true,
      isContinuedRegist: true,
      createAt: '',
      referenceList: [],
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
                    name: '본사 스프링 시즌용.pack',
                    type: 'institution',
                    dbIdx: 1,
                    title: '2-1반 수업',
                    desc: '2-1반 전체 수업 내용',
                    role: '2-1반 학생들의 평균적인 이해를 도와줄 수 있다.',
                    keyword: ['국어', '수학', '영어', '사회'],
                    isOpen: true,
                    save_path: '수학>대단원>피타고라스',
                    createAt: '2022.05.03',
                    ragistrant: '홍길남',
                    subject: '수학',
                    referenceList: [
                      {
                        id: 1,
                        datatable_type: 'ID',
                        name: '국어학습자료 애니메이션.mp4',
                        category: '01',
                      },
                      {
                        id: 2,
                        datatable_type: 'ID',
                        name: '수학 학습자료.pdf',
                        category: '02',
                      },
                      {
                        id: 3,
                        datatable_type: 'ID',
                        name: '영어 단어 퀴즈.quiz',
                        category: '03',
                      },
                      {
                        id: 4,
                        datatable_type: 'ID',
                        name: '수학 쪽지시험.test',
                        category: '04',
                      },
                      {
                        id: 5,
                        datatable_type: 'ID',
                        name: '사회 쪽지시험 영상.youtube',
                        category: '05',
                      },
                      {
                        id: 6,
                        datatable_type: 'ID',
                        name: '과학 사이트 참고용.url',
                        category: '06',
                      },
                    ],
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
                    id: 1,
                    datatable_type: 'ID',
                    name: '국어학습자료 애니메이션.mp4',
                    category: '01',
                  },
                  {
                    id: 2,
                    datatable_type: 'ID',
                    name: '수학 학습자료.pdf',
                    category: '02',
                  },
                  {
                    id: 3,
                    datatable_type: 'ID',
                    name: '영어 단어 퀴즈.quiz',
                    category: '03',
                  },
                  {
                    id: 4,
                    datatable_type: 'ID',
                    name: '수학 쪽지시험.test',
                    category: '04',
                  },
                  {
                    id: 5,
                    datatable_type: 'ID',
                    name: '사회 쪽지시험 영상.youtube',
                    category: '05',
                  },
                  {
                    id: 6,
                    datatable_type: 'ID',
                    name: '과학 사이트 참고용.url',
                    category: '06',
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
                id: 1,
                datatable_type: 'ID',
                name: '국어학습자료 애니메이션.mp4',
                category: '01',
              },
              {
                id: 2,
                datatable_type: 'ID',
                name: '수학 학습자료.pdf',
                category: '02',
              },
              {
                id: 3,
                datatable_type: 'ID',
                name: '영어 단어 퀴즈.quiz',
                category: '03',
              },
              {
                id: 4,
                datatable_type: 'ID',
                name: '수학 쪽지시험.test',
                category: '04',
              },
              {
                id: 5,
                datatable_type: 'ID',
                name: '사회 쪽지시험 영상.youtube',
                category: '05',
              },
              {
                id: 6,
                datatable_type: 'ID',
                name: '과학 사이트 참고용.url',
                category: '06',
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
                    id: 1,
                    datatable_type: 'ID',
                    name: '국어학습자료 애니메이션.mp4',
                    category: '01',
                  },
                  {
                    id: 2,
                    datatable_type: 'ID',
                    name: '수학 학습자료.pdf',
                    category: '02',
                  },
                  {
                    id: 3,
                    datatable_type: 'ID',
                    name: '영어 단어 퀴즈.quiz',
                    category: '03',
                  },
                  {
                    id: 4,
                    datatable_type: 'ID',
                    name: '수학 쪽지시험.test',
                    category: '04',
                  },
                  {
                    id: 5,
                    datatable_type: 'ID',
                    name: '사회 쪽지시험 영상.youtube',
                    category: '05',
                  },
                  {
                    id: 6,
                    datatable_type: 'ID',
                    name: '과학 사이트 참고용.url',
                    category: '06',
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
                    id: 1,
                    datatable_type: 'ID',
                    name: '국어학습자료 애니메이션.mp4',
                    category: '01',
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
                id: 1,
                datatable_type: 'ID',
                name: '국어학습자료 애니메이션.mp4',
                category: '01',
              },
            ],
          },
        ],
      },
    ],
  }
}
