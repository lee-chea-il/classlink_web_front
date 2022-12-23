export default function initialState() {
  return {
    currentPageIdx: 0,
    // category: '',
    pushKeyword: '',
    identity: 'teacher',
    modalTitle: '등록',
    isCopyType: '',
    selectDataType: '',
    userInfo: {},
    // Modal Flag
    isSelectType: false,
    isQuizPrint: false,
    isNoteTestPrint: false,
    isReferenceAddModal: false,
    isQuizAddModal: false,
    isNoteTestAddModal: false,
    isReferenceBrowse: false,
    isQuizBrowse: false,
    isNoteTestBrowse: false,
    isSearchListModal: false,
    isSnackbar: { open: false, message: '' },
    urlData: { youtube: '', page: '' },
    isSelectModal: { open: false, prevPage: '' },
    isFilterModal: { open: false, prevPage: '' },
    isSavePathModal: { open: false, prevPage: '' },
    modalDesc: { open: false, title: '', desc: '', path: '' },
    isShareViewModal: { open: false, path: '', url: '' },
    isQuizPreviewModal: { open: false, prevPage: '', select: false },
    isNoteTestPreviewModal: { open: false, prevPage: '', select: false },
    // Data
    thumbnailItem: {
      data: {},
      image: '',
    },
    uploadInfo: {
      registrant: '',
      fileSize: '',
      saveFolderPath: '',
      youtubePlayTime: '',
    },
    initSearchData: { word: '', type: [], subject: [], category: [] },
    searchData: { word: '', type: [], subject: [], category: [] },
    copyCheckData: [],
    checkList: [],
    quizItem: {
      no: 1,
      question: '',
      level: '상',
      limit_time: '',
      type: 'OX',
      correct: 'O',
      wrong_correct: 'X',
    },
    testItem: {
      no: 0,
      question: '',
      ask_view: [
        { no: 1, question: '' },
        { no: 2, question: '' },
        { no: 3, question: '' },
        { no: 4, question: '' },
      ],
      level: '상',
      limit_time: '',
      answer: 1,
      isCommentary: true,
      commentary: '',
    },
    typeList: [
      { id: 0, name: '전체' },
      { id: 1, name: '교육기관' },
      { id: 2, name: '프랜차이즈' },
      { id: 3, name: '공개자료실' },
      { id: 4, name: '내 자료' },
    ],
    subjectList: [
      { id: 0, name: '전체' },
      { id: 1, name: '국어' },
      { id: 2, name: '영어' },
      { id: 3, name: '수학' },
      { id: 4, name: '기타' },
      { id: 5, name: '논술' },
      { id: 6, name: '사회' },
      { id: 7, name: '과학' },
      { id: 8, name: '미술' },
      { id: 9, name: '체육' },
    ],
    categoryList: [
      { id: 0, name: '전체' },
      { id: 1, name: '동영상' },
      { id: 2, name: '문서' },
      { id: 3, name: '퀴즈' },
      { id: 4, name: '쪽지시험' },
    ],
    initReferenceData: {
      title: '',
      subject: 1,
      description: '',
      keyword: [],
      worker: '',
      save_path: '',
      public_open_yn: true,
      open_yn: true,
      file_name: '',
      datatable_type: '',
      category: '',
      fileSize: '',
      thumbnail: '',
      quiz: [
        {
          no: 1,
          question: '',
          level: '상',
          limit_time: '',
          type: 'OX',
          correct: 'O',
          wrong_correct: '',
        },
      ],
      note_exam: [
        {
          no: 0,
          question: '',
          ask_view: [
            { no: 1, question: '' },
            { no: 2, question: '' },
            { no: 3, question: '' },
            { no: 4, question: '' },
          ],
          level: '상',
          limit_time: '',
          answer: 1,
          isCommentary: true,
          commentary: '',
        },
      ],
    },
    referenceData: {
      title: '',
      subject: 1,
      description: '',
      keyword: [],
      worker: '',
      save_path: '',
      file: '',
      public_open_yn: true,
      open_yn: true,
      file_name: '',
      datatable_type: '',
      name: '',
      category: '',
      thumbnail: '',
      quiz: [
        {
          no: 1,
          question: '',
          level: '상',
          limit_time: '',
          type: 'OX',
          correct: 'O',
          wrong_correct: 'X',
        },
      ],
      note_exam: [
        {
          no: 1,
          question: '',
          ask_view: [
            { no: 1, question: '' },
            { no: 2, question: '' },
            { no: 3, question: '' },
            { no: 4, question: '' },
          ],
          level: '상',
          limit_time: '',
          answer: 1,
          isCommentary: true,
          commentary: '',
        },
      ],
    },
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
                    id: 2,
                    name: '영어 단어 퀴즈.quiz',
                    datatable_type: 'ID',
                    dbIdx: 3,
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
                id: 2,
                name: '영어 단어 퀴즈.quiz',
                datatable_type: 'ID',
                category: '01',
              },
            ],
          },
        ],
      },
    ],
    receiveOpenData: [
      {
        name: '국어',
        children: [
          {
            name: '1단원',
            children: [
              {
                id: 2,
                name: '공개 퀴즈(1).quiz',
                datatable_type: 'ID',
                category: '03',
              },
            ],
          },
        ],
      },
    ],
    referenceList: [
      {
        id: 0,
        name: '국어학습자료 애니메이션.mp4',
        subject: 1,
        description: '등록한 자료 1',
        keyword: ['국어', '수학'],
        worker: '등록인',
        save_path: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        public_open_yn: true,
        open_yn: true,
        file_name: '',
        datatable_type: 'ID',

        category: '01',
        fileSize: '',
        createAt: '',
        dbIdx: 1,
        thumbnail: '',
        type: 'institution',
      },
      {
        id: 1,
        name: '수학 학습자료.pdf',
        subject: 1,
        description: '등록한 자료 2',
        keyword: ['국어', '수학'],
        worker: '등록인',
        save_path:
          'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
        public_open_yn: true,
        open_yn: true,
        file_name: '',
        datatable_type: 'ID',

        category: '02',
        fileSize: '',
        createAt: '',
        isLeaf: false,
        dbIdx: 2,
        thumbnail: '',
        type: 'institution',
      },
      {
        id: 2,
        name: '영어 단어 퀴즈.quiz',
        subject: 1,
        description: '등록한 자료 1',
        keyword: ['국어', '수학'],
        worker: '등록인',
        save_path: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        public_open_yn: true,
        open_yn: true,
        file_name: '',
        datatable_type: 'ID',

        category: '03',
        fileSize: '',
        createAt: '',
        quiz: [
          {
            no: 0,
            question: '<p>asdfaaaaasdf</p>',
            oxAnswer: 0,
            level: 1,
            limit_time: '3분',
            type: 0,
            shortAnswer: '123',
            subjectiveAnswer: '123',
            shortWrongAnswer: '123',
          },
          {
            no: 2,
            question: '<p>asdggggg</p>',
            level: 0,
            limit_time: '5분',
            type: 0,
            oxAnswer: 0,
            shortAnswer: '234',
            subjectiveAnswer: '234',
            shortWrongAnswer: '234',
          },
          {
            no: 3,
            question: '<p>234242242424</p>',
            level: 0,
            limit_time: '2분',
            type: 0,
            oxAnswer: 0,
            shortAnswer: '345',
            subjectiveAnswer: '345',
            shortWrongAnswer: '345',
          },
          {
            no: 4,
            question: '<p>555555555</p>',
            level: 0,
            limit_time: '4분',
            type: 0,
            oxAnswer: 0,
            shortAnswer: '456',
            subjectiveAnswer: '456',
            shortWrongAnswer: '456',
          },
          {
            no: 5,
            question: '<p>asx c</p>',
            level: 0,
            limit_time: '5분',
            type: 0,
            oxAnswer: 0,
            shortAnswer: '567',
            subjectiveAnswer: '567',
            shortWrongAnswer: '567',
          },
        ],
        isLeaf: false,
        dbIdx: 3,
        thumbnail: '',
        type: 'institution',
      },
      {
        id: 3,
        name: '사회 쪽지시험 영상.youtube',
        subject: 1,
        description: '등록한 자료 1',
        keyword: ['국어', '수학'],
        worker: '등록인',
        save_path: '//www.youtube.com/embed/m264zfB87Tc',
        public_open_yn: true,
        open_yn: true,
        file_name: '',
        datatable_type: 'ID',

        category: '05',
        fileSize: '',
        createAt: '',
        isLeaf: false,
        dbIdx: 4,
        thumbnail: '',
        type: 'institution',
      },
      {
        id: 4,
        name: '과학 사이트 참고용.url',
        subject: 1,
        description: '등록한 자료 1',
        keyword: ['국어', '수학'],
        worker: '등록인',
        save_path: 'https://sciencelove.com/725',
        public_open_yn: true,
        open_yn: true,
        file_name: '',
        datatable_type: 'ID',

        category: '06',
        fileSize: '',
        createAt: '',
        isLeaf: false,
        dbIdx: 5,
        thumbnail: '',
        type: 'institution',
      },
      {
        id: 5,
        name: '수학 쪽지시험.test',
        subject: 1,
        description: '등록한 자료 1',
        keyword: ['국어', '수학'],
        worker: '등록인',
        save_path: 'https://sciencelove.com/725',
        public_open_yn: true,
        open_yn: true,
        file_name: '',
        datatable_type: 'ID',

        category: '04',
        fileSize: '',
        createAt: '',
        note_exam: [
          {
            id: 0,
            question: '<p>1번 문제</p>',
            exampleList: [
              { id: '', question: '<p>답 1임</p>' },
              { id: '', question: '<p>답 2임</p>' },
              { id: '', question: '<p>답 3임</p>' },
              { id: '', question: '<p>답 4임</p>' },
            ],
            level: 0,
            limit_time: '',
            answer: 1,
          },
          {
            id: 1,
            question: '<p>2번 문제</p>',
            exampleList: [
              { id: '', question: '<p>답 5임</p>' },
              { id: '', question: '<p>답 6임</p>' },
              { id: '', question: '<p>답 7임</p>' },
              { id: '', question: '<p>답 8임</p>' },
            ],
            level: 2,
            limit_time: '',
            answer: 2,
          },
        ],
        isLeaf: false,
        dbIdx: 6,
        thumbnail: '',
        type: 'institution',
      },
    ],
  }
}
