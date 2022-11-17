export default function initialState() {
  return {
    identity: 'teacher',
    pushKeyword: '',
    // Modal Flag
    itemPid: 0,
    isQuizPrint: false,
    isNoteTestPrint: false,
    isReferenceAddModal: false,
    isQuizAddModal: false,
    isNoteTestAddModal: false,
    isReferenceBrowseModal: false,
    isQuizBrowseModal: false,
    isNoteTestBrowseModal: false,
    isReferenceChangeModal: false,
    isQuizChangeModal: false,
    isNoteTestChangeModal: false,
    isFilterModal: { open: false, prevPage: '' },
    isSearchListModal: false,
    copyCheckData: [],
    searchData: {
      word: '',
      type: [],
      subject: [],
      category: [],
    },
    isQuizPreviewModal: {
      open: false,
      previewPage: '',
      select: false,
    },
    isNoteTestPreviewModal: {
      open: false,
      previewPage: '',
      select: false,
    },
    isShareViewModal: {
      open: false,
      path: '',
      url: '',
    },
    isSelectModal: {
      open: false,
      previewPage: '',
    },
    isSavePathModal: {
      open: false,
      previewPage: '',
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
                    id: 0,
                    name: '국어학습자료 애니메이션.mp4',
                    subject: '국어',
                    desc: '등록한 자료 1',
                    keyword: ['국어', '수학'],
                    registrant: '등록인',
                    savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
                    isOpenEducation: true,
                    isContinueRegister: true,
                    fileName: '',
                    fileDivision: '교육기관',
                    fileType: 'video/mp4',
                    uploadType: 'video',
                    fileVolume: '',
                    createAt: '',
                    dbIdx: 1,
                    type: 'institution',
                  },
                  {
                    id: 1,
                    name: '수학 학습자료.pdf',
                    subject: '수학',
                    desc: '등록한 자료 2',
                    keyword: ['국어', '수학'],
                    registrant: '등록인',
                    savePath:
                      'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
                    isOpenEducation: true,
                    isContinueRegister: true,
                    fileName: '',
                    fileDivision: '교육기관',
                    fileType: 'application/pdf',
                    uploadType: 'pdf',
                    fileVolume: '',
                    createAt: '',
                    isLeaf: false,
                    dbIdx: 2,
                    type: 'institution',
                  },
                  {
                    id: 2,
                    name: '영어 단어 퀴즈.quiz',
                    subject: '영어',
                    desc: '등록한 자료 1',
                    keyword: ['국어', '수학'],
                    registrant: '등록인',
                    savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
                    isOpenEducation: true,
                    isContinueRegister: true,
                    fileName: '',
                    fileDivision: '교육기관',
                    fileType: 'quiz',
                    uploadType: 'quiz',
                    fileVolume: '',
                    createAt: '',
                    quizList: [
                      {
                        id: 0,
                        problem: '<p>asdfaaaaasdf</p>',
                        oxAnswer: 0,
                        dificultade: 1,
                        limitTime: '3분',
                        quizType: 0,
                        shortAnswer: '123',
                        subjectiveAnswer: '123',
                        shortWrongAnswer: '123',
                      },
                      {
                        id: 2,
                        problem: '<p>asdggggg</p>',
                        dificultade: 0,
                        limitTime: '5분',
                        quizType: 0,
                        oxAnswer: 0,
                        shortAnswer: '234',
                        subjectiveAnswer: '234',
                        shortWrongAnswer: '234',
                      },
                      {
                        id: 3,
                        problem: '<p>234242242424</p>',
                        dificultade: 0,
                        limitTime: '2분',
                        quizType: 0,
                        oxAnswer: 0,
                        shortAnswer: '345',
                        subjectiveAnswer: '345',
                        shortWrongAnswer: '345',
                      },
                      {
                        id: 4,
                        problem: '<p>555555555</p>',
                        dificultade: 0,
                        limitTime: '4분',
                        quizType: 0,
                        oxAnswer: 0,
                        shortAnswer: '456',
                        subjectiveAnswer: '456',
                        shortWrongAnswer: '456',
                      },
                      {
                        id: 5,
                        problem: '<p>asx c</p>',
                        dificultade: 0,
                        limitTime: '5분',
                        quizType: 0,
                        oxAnswer: 0,
                        shortAnswer: '567',
                        subjectiveAnswer: '567',
                        shortWrongAnswer: '567',
                      },
                    ],
                    isLeaf: false,
                    dbIdx: 3,
                    type: 'institution',
                  },
                  {
                    id: 3,
                    name: '사회 쪽지시험 영상.youtube',
                    subject: '사회',
                    desc: '등록한 자료 1',
                    keyword: ['국어', '수학'],
                    registrant: '등록인',
                    savePath: 'https://www.youtube.com/embed/1CYbySbtyF0',
                    isOpenEducation: true,
                    isContinueRegister: true,
                    fileName: '',
                    fileDivision: '교육기관',
                    fileType: 'youtube',
                    uploadType: 'youtube',
                    fileVolume: '',
                    createAt: '',
                    isLeaf: false,
                    dbIdx: 4,
                    type: 'institution',
                  },
                  {
                    id: 4,
                    name: '과학 사이트 참고용.url',
                    subject: '과학',
                    desc: '등록한 자료 1',
                    keyword: ['국어', '수학'],
                    registrant: '등록인',
                    savePath: 'https://sciencelove.com/725',
                    isOpenEducation: true,
                    isContinueRegister: true,
                    fileName: '',
                    fileDivision: '교육기관',
                    fileType: 'test',
                    uploadType: 'url',
                    fileVolume: '',
                    createAt: '',
                    isLeaf: false,
                    dbIdx: 5,
                    type: 'institution',
                  },
                  {
                    id: 5,
                    name: '수학 쪽지시험.test',
                    subject: '수학',
                    desc: '등록한 자료 1',
                    keyword: ['국어', '수학'],
                    registrant: '등록인',
                    savePath: 'https://sciencelove.com/725',
                    isOpenEducation: true,
                    isContinueRegister: true,
                    fileName: '',
                    fileDivision: '교육기관',
                    fileType: 'test',
                    uploadType: 'test',
                    fileVolume: '',
                    createAt: '',
                    noteTestList: [
                      {
                        id: 0,
                        problem: '<p>1번 문제</p>',
                        exampleList: [
                          { id: '', example: '<p>답 1임</p>' },
                          { id: '', example: '<p>답 2임</p>' },
                          { id: '', example: '<p>답 3임</p>' },
                          { id: '', example: '<p>답 4임</p>' },
                        ],
                        dificultade: 0,
                        limitTime: '',
                        answer: 0,
                      },
                      {
                        id: 1,
                        problem: '<p>2번 문제</p>',
                        exampleList: [
                          { id: '', example: '<p>답 5임</p>' },
                          { id: '', example: '<p>답 6임</p>' },
                          { id: '', example: '<p>답 7임</p>' },
                          { id: '', example: '<p>답 8임</p>' },
                        ],
                        dificultade: 2,
                        limitTime: '',
                        answer: 2,
                      },
                    ],
                    isLeaf: false,
                    dbIdx: 6,
                    type: 'institution',
                  },
                ],
              },
              {
                name: '2단원',
                children: [
                  {
                    name: '법과 작문1.link',
                    type: 'institution',
                    dbIdx: 5,
                  },
                  {
                    name: '법과 작문2.link',
                    type: 'institution',
                    dbIdx: 6,
                  },
                  {
                    name: '법과 작문3.link',
                    type: 'institution',
                    dbIdx: 7,
                  },
                  {
                    name: '법과 작문4.link',
                    type: 'institution',
                    dbIdx: 8,
                  },
                ],
              },
            ],
          },
          {
            name: '수학',
            children: [
              {
                name: '1단원',
                children: [
                  {
                    name: '삼각함수1.link',
                    type: 'institution',
                    dbIdx: 1,
                  },
                  {
                    name: '삼각함수2.link',
                    type: 'institution',
                    dbIdx: 2,
                  },
                  {
                    name: '삼각함수3.link',
                    type: 'institution',
                    dbIdx: 3,
                  },
                  {
                    name: '삼각함수4.link',
                    type: 'institution',
                    dbIdx: 4,
                  },
                ],
              },
              {
                name: '2단원',
                children: [
                  {
                    name: '2차 방정식1.link',
                    type: 'institution',
                    dbIdx: 5,
                  },
                  {
                    name: '2차 방정식2.link',
                    type: 'institution',
                    dbIdx: 6,
                  },
                  {
                    name: '2차 방정식3.link',
                    type: 'institution',
                    dbIdx: 7,
                  },
                  {
                    name: '2차 방정식4.link',
                    type: 'institution',
                    dbIdx: 8,
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
                    name: '일산화탄소1.link',
                    type: 'franchise',
                    dbIdx: 1,
                  },
                  {
                    name: '일산화탄소2.link',
                    type: 'franchise',
                    dbIdx: 2,
                  },
                  {
                    name: '일산화탄소3.link',
                    type: 'franchise',
                    dbIdx: 3,
                  },
                  {
                    name: '일산화탄소4.link',
                    type: 'franchise',
                    dbIdx: 4,
                  },
                ],
              },
              {
                name: '2단원',
                children: [
                  {
                    name: '이산화탄소1.link',
                    type: 'franchise',
                    dbIdx: 5,
                  },
                  {
                    name: '이산화탄소2.link',
                    type: 'franchise',
                    dbIdx: 6,
                  },
                  {
                    name: '이산화탄소3.link',
                    type: 'franchise',
                    dbIdx: 7,
                  },
                  {
                    name: '이산화탄소4.link',
                    type: 'franchise',
                    dbIdx: 8,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    receiveCurriculumData: [
      {
        name: '국어',
        children: [
          {
            name: '1단원',
            children: [
              {
                name: '사투리 작문1.link',
                type: 'institution',
              },
              {
                name: '사투리 작문2.link',
                type: 'franchise',
              },
            ],
          },
          {
            name: '2단원',
            children: [
              {
                name: '부산 사투리 작문1.link',
                type: 'curriculum',
              },
              {
                name: '부산 사투리 작문2.link',
                type: 'institution',
              },
              {
                name: '부산 사투리 작문2.link',
                type: 'franchise',
              },
              {
                name: '부산 사투리 작문2.link',
                type: 'institution',
              },
              {
                name: '부산 사투리 작문2.link',
                type: 'franchise',
              },
              {
                name: '네이버란.link',
                type: 'curriculum',
              },
            ],
          },
        ],
      },
    ],
    uploadType: '',
    currentPageIdx: 0,
    uploadFile: {},
    uploadFileName: '',
    selectData: {},
    selectQuizList: [
      {
        id: 0,
        problem: '<p>asdfaaaaasdf</p>',
        oxAnswer: 0,
        dificultade: 1,
        limitTime: '3분',
        quizType: 0,
        shortAnswer: '123',
        subjectiveAnswer: '123',
        shortWrongAnswer: '123',
      },
      {
        id: 2,
        problem: '<p>asdggggg</p>',
        dificultade: 0,
        limitTime: '5분',
        quizType: 1,
        oxAnswer: 0,
        shortAnswer: '234',
        subjectiveAnswer: '234',
        shortWrongAnswer: '234',
      },
      {
        id: 3,
        problem: '<p>234242242424</p>',
        dificultade: 0,
        limitTime: '2분',
        quizType: 2,
        oxAnswer: 0,
        shortAnswer: '345',
        subjectiveAnswer: '345',
        shortWrongAnswer: '345',
      },
      {
        id: 4,
        problem: '<p>555555555</p>',
        dificultade: 0,
        limitTime: '4분',
        quizType: 0,
        oxAnswer: 0,
        shortAnswer: '456',
        subjectiveAnswer: '456',
        shortWrongAnswer: '456',
      },
      {
        id: 5,
        problem: '<p>asx c</p>',
        dificultade: 0,
        limitTime: '5분',
        quizType: 0,
        oxAnswer: 0,
        shortAnswer: '567',
        subjectiveAnswer: '567',
        shortWrongAnswer: '567',
      },
    ],
    selectNoteTestList: [
      {
        id: 0,
        problem: '<p>1번 문제</p>',
        exampleList: [
          { id: '', example: '<p>답 1임</p>' },
          { id: '', example: '<p>답 2임</p>' },
          { id: '', example: '<p>답 3임</p>' },
          { id: '', example: '<p>답 4임</p>' },
        ],
        dificultade: 0,
        limitTime: '',
        answer: 0,
      },
      {
        id: 1,
        problem: '<p>2번 문제</p>',
        exampleList: [
          { id: '', example: '<p>답 5임</p>' },
          { id: '', example: '<p>답 6임</p>' },
          { id: '', example: '<p>답 7임</p>' },
          { id: '', example: '<p>답 8임</p>' },
        ],
        dificultade: 2,
        limitTime: '',
        answer: 2,
      },
    ],
    referenceList: [
      {
        id: 0,
        name: '국어학습자료 애니메이션.mp4',
        subject: '국어',
        desc: '등록한 자료 1',
        keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
        registrant: '등록인',
        savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'video/mp4',
        uploadType: 'video',
        fileVolume: '',
        createAt: '',
        children: [],
      },
      {
        id: 1,
        name: '수학 학습자료.pdf',
        subject: '수학',
        desc: '등록한 자료 2',
        keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
        registrant: '등록인',
        savePath:
          'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'application/pdf',
        uploadType: 'pdf',
        fileVolume: '',
        createAt: '',
        isLeaf: false,
      },
      {
        id: 2,
        name: '영어 단어 퀴즈.quiz',
        subject: '영어',
        desc: '등록한 자료 1',
        keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
        registrant: '등록인',
        savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'quiz',
        uploadType: 'quiz',
        fileVolume: '',
        createAt: '',
        quizList: [
          {
            id: 0,
            problem: '<p>asdfaaaaasdf</p>',
            oxAnswer: 0,
            dificultade: 1,
            limitTime: '3분',
            quizType: 0,
            shortAnswer: '123',
            subjectiveAnswer: '123',
            shortWrongAnswer: '123',
          },
          {
            id: 2,
            problem: '<p>asdggggg</p>',
            dificultade: 0,
            limitTime: '5분',
            quizType: 0,
            oxAnswer: 0,
            shortAnswer: '234',
            subjectiveAnswer: '234',
            shortWrongAnswer: '234',
          },
          {
            id: 3,
            problem: '<p>234242242424</p>',
            dificultade: 0,
            limitTime: '2분',
            quizType: 0,
            oxAnswer: 0,
            shortAnswer: '345',
            subjectiveAnswer: '345',
            shortWrongAnswer: '345',
          },
          {
            id: 4,
            problem: '<p>555555555</p>',
            dificultade: 0,
            limitTime: '4분',
            quizType: 0,
            oxAnswer: 0,
            shortAnswer: '456',
            subjectiveAnswer: '456',
            shortWrongAnswer: '456',
          },
          {
            id: 5,
            problem: '<p>asx c</p>',
            dificultade: 0,
            limitTime: '5분',
            quizType: 0,
            oxAnswer: 0,
            shortAnswer: '567',
            subjectiveAnswer: '567',
            shortWrongAnswer: '567',
          },
        ],
        isLeaf: false,
      },
      {
        id: 3,
        name: '사회 쪽지시험 영상.youtube',
        subject: '사회',
        desc: '등록한 자료 1',
        keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
        registrant: '등록인',
        savePath: 'https://www.youtube.com/embed/1CYbySbtyF0',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'youtube',
        uploadType: 'youtube',
        fileVolume: '',
        createAt: '',
        isLeaf: false,
      },
      {
        id: 4,
        name: '과학 사이트 참고용.url',
        subject: '과학',
        desc: '등록한 자료 1',
        keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
        registrant: '등록인',
        savePath: 'https://sciencelove.com/725',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'test',
        uploadType: 'url',
        fileVolume: '',
        createAt: '',
        isLeaf: false,
      },
      {
        id: 5,
        name: '수학 쪽지시험.test',
        subject: '수학',
        desc: '등록한 자료 1',
        keyword: [{ title: '국어' }, { title: '수학' }, { title: '과학' }],
        registrant: '등록인',
        savePath: 'https://sciencelove.com/725',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'test',
        uploadType: 'test',
        fileVolume: '',
        createAt: '',
        noteTestList: [
          {
            id: 0,
            problem: '<p>1번 문제</p>',
            exampleList: [
              { id: '', example: '<p>답 1임</p>' },
              { id: '', example: '<p>답 2임</p>' },
              { id: '', example: '<p>답 3임</p>' },
              { id: '', example: '<p>답 4임</p>' },
              { id: '', example: '<p>답 5임</p>' },
            ],
            dificultade: 0,
            limitTime: '',
            answer: 0,
          },
          {
            id: 1,
            problem: '<p>2번 문제</p>',
            exampleList: [
              { id: '', example: '<p>답 5임</p>' },
              { id: '', example: '<p>답 6임</p>' },
              { id: '', example: '<p>답 7임</p>' },
              { id: '', example: '<p>답 8임</p>' },
              { id: '', example: '<p>답 9임</p>' },
            ],
            dificultade: 2,
            limitTime: '',
            answer: 2,
          },
        ],
        isLeaf: false,
      },
    ],
    reference: {
      name: '',
      subject: '',
      desc: '',
      keyword: [],
      registrant: '',
      savePath: '',
      isOpenEducation: true,
      isContinueRegister: true,
      fileName: '',
      fileDivision: '',
      fileType: '',
      uploadType: '',
      fileVolume: '',
      createAt: '',
    },
    modalDesc: {
      open: false,
      title: '',
      desc: '',
    },
    urlData: {
      youtube: '',
      page: '',
    },
    quizList: [
      {
        id: 0,
        problem: '',
        oxAnswer: 0,
        dificultade: 1,
        limitTime: 0,
        quizType: 0,
        subjectiveAnswer: '',
        shortAnswer: '',
        shortWrongAnswer: '',
      },
    ],
    noteTestList: [
      {
        id: 0,
        problem: '',
        exampleList: [
          { id: '', example: '' },
          { id: '', example: '' },
          { id: '', example: '' },
          { id: '', example: '' },
        ],
        dificultade: 0,
        limitTime: '',
        answer: 0,
        isCommentary: true,
        commentary: '',
      },
    ],
    resultSearchList: [
      {
        id: 0,
        name: '국어학습자료 애니메이션.mp4',
        subject: '국어',
        desc: '등록한 자료 1',
        keyword: ['국어', '수학'],
        registrant: '등록인',
        savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'video/mp4',
        uploadType: 'video',
        fileVolume: '',
        createAt: '',
        dbIdx: 1,
        type: 'institution',
      },
      {
        id: 1,
        name: '수학 학습자료.pdf',
        subject: '수학',
        desc: '등록한 자료 2',
        keyword: ['국어', '수학'],
        registrant: '등록인',
        savePath:
          'https://studyinthestates.dhs.gov/sites/default/files/Form%20I-20%20SAMPLE.pdf',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'application/pdf',
        uploadType: 'pdf',
        fileVolume: '',
        createAt: '',
        isLeaf: false,
        dbIdx: 2,
        type: 'institution',
      },
      {
        id: 2,
        name: '영어 단어 퀴즈.quiz',
        subject: '영어',
        desc: '등록한 자료 1',
        keyword: ['국어', '수학'],
        registrant: '등록인',
        savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'quiz',
        uploadType: 'quiz',
        fileVolume: '',
        createAt: '',
        quizList: [
          {
            id: 0,
            problem: '<p>asdfaaaaasdf</p>',
            oxAnswer: 0,
            dificultade: 1,
            limitTime: '3분',
            quizType: 0,
            shortAnswer: '123',
            subjectiveAnswer: '123',
            shortWrongAnswer: '123',
          },
          {
            id: 2,
            problem: '<p>asdggggg</p>',
            dificultade: 0,
            limitTime: '5분',
            quizType: 0,
            oxAnswer: 0,
            shortAnswer: '234',
            subjectiveAnswer: '234',
            shortWrongAnswer: '234',
          },
          {
            id: 3,
            problem: '<p>234242242424</p>',
            dificultade: 0,
            limitTime: '2분',
            quizType: 0,
            oxAnswer: 0,
            shortAnswer: '345',
            subjectiveAnswer: '345',
            shortWrongAnswer: '345',
          },
          {
            id: 4,
            problem: '<p>555555555</p>',
            dificultade: 0,
            limitTime: '4분',
            quizType: 0,
            oxAnswer: 0,
            shortAnswer: '456',
            subjectiveAnswer: '456',
            shortWrongAnswer: '456',
          },
          {
            id: 5,
            problem: '<p>asx c</p>',
            dificultade: 0,
            limitTime: '5분',
            quizType: 0,
            oxAnswer: 0,
            shortAnswer: '567',
            subjectiveAnswer: '567',
            shortWrongAnswer: '567',
          },
        ],
        isLeaf: false,
        dbIdx: 3,
        type: 'institution',
      },
      {
        id: 3,
        name: '사회 쪽지시험 영상.youtube',
        subject: '사회',
        desc: '등록한 자료 1',
        keyword: ['국어', '수학'],
        registrant: '등록인',
        savePath: 'https://www.youtube.com/embed/1CYbySbtyF0',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'youtube',
        uploadType: 'youtube',
        fileVolume: '',
        createAt: '',
        isLeaf: false,
        dbIdx: 4,
        type: 'institution',
      },
      {
        id: 4,
        name: '과학 사이트 참고용.url',
        subject: '과학',
        desc: '등록한 자료 1',
        keyword: ['국어', '수학'],
        registrant: '등록인',
        savePath: 'https://sciencelove.com/725',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'test',
        uploadType: 'url',
        fileVolume: '',
        createAt: '',
        isLeaf: false,
        dbIdx: 5,
        type: 'institution',
      },
      {
        id: 5,
        name: '수학 쪽지시험.test',
        subject: '수학',
        desc: '등록한 자료 1',
        keyword: ['국어', '수학'],
        registrant: '등록인',
        savePath: 'https://sciencelove.com/725',
        isOpenEducation: true,
        isContinueRegister: true,
        fileName: '',
        fileDivision: '교육기관',
        fileType: 'test',
        uploadType: 'test',
        fileVolume: '',
        createAt: '',
        noteTestList: [
          {
            id: 0,
            problem: '<p>1번 문제</p>',
            exampleList: [
              { id: '', example: '<p>답 1임</p>' },
              { id: '', example: '<p>답 2임</p>' },
              { id: '', example: '<p>답 3임</p>' },
              { id: '', example: '<p>답 4임</p>' },
            ],
            dificultade: 0,
            limitTime: '',
            answer: 0,
          },
          {
            id: 1,
            problem: '<p>2번 문제</p>',
            exampleList: [
              { id: '', example: '<p>답 5임</p>' },
              { id: '', example: '<p>답 6임</p>' },
              { id: '', example: '<p>답 7임</p>' },
              { id: '', example: '<p>답 8임</p>' },
            ],
            dificultade: 2,
            limitTime: '',
            answer: 2,
          },
        ],
        isLeaf: false,
        dbIdx: 6,
        type: 'institution',
      },
    ],
  }
}
