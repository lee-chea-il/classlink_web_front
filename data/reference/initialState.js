export default function initialState() {
  return {
    currentPageIdx: 0,
    uploadType: '',
    pushKeyword: '',
    identity: 'teacher',
    // Modal Flag
    isQuizPrint: false,
    isNoteTestPrint: false,
    isReferenceAddModal: false,
    isQuizAddModal: false,
    isNoteTestAddModal: false,
    isReferenceBrowse: false,
    isQuizBrowse: false,
    isNoteTestBrowse: false,
    isReferenceChange: false,
    isQuizChange: false,
    isNoteTestChange: false,
    isSearchListModal: false,
    uploadFile: {},
    urlData: { youtube: '', page: '' },
    isSelectModal: { open: false, prevPage: '' },
    isFilterModal: { open: false, prevPage: '' },
    isSavePathModal: { open: false, prevPage: '' },
    modalDesc: { open: false, title: '', desc: '' },
    isShareViewModal: { open: false, path: '', url: '' },
    isQuizPreviewModal: { open: false, prevPage: '', select: false },
    isNoteTestPreviewModal: { open: false, prevPage: '', select: false },
    // Data
    searchData: { word: '', type: [], subject: [], category: [] },
    referenceData: {
      name: '',
      subject: '',
      desc: '',
      keyword: [],
      registrant: '',
      savePath: '',
      saveFolder: '',
      isOpenEducation: true,
      isOpenReference: true,
      fileName: '',
      fileDivision: '',
      fileType: '',
      uploadType: '',
      fileVolume: '',
      createAt: '',
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
    },
    copyCheckData: [],
    checkList: [],
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
                    dbIdx: 1,
                    type: 'institution',
                    name: '국어학습자료 애니메이션.mp4',
                    subject: '국어',
                    desc: '등록한 자료 1',
                    keyword: ['국어', '수학'],
                    registrant: '등록인',
                    savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
                    saveFolder: '12341',
                    isOpenEducation: true,
                    isOpenReference: true,
                    fileName: '',
                    fileDivision: '교육기관',
                    fileType: 'video/mp4',
                    uploadType: 'video',
                    fileVolume: '',
                    createAt: '',
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
                    saveFolder: '',
                    isOpenEducation: true,
                    isOpenReference: true,
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
                    saveFolder: '',
                    isOpenEducation: true,
                    isOpenReference: true,
                    fileName: '',
                    fileDivision: '교육기관',
                    fileType: 'quiz',
                    uploadType: 'quiz',
                    fileVolume: '',
                    createAt: '',
                    noteTestList: [],
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
                    saveFolder: '',
                    isOpenEducation: true,
                    isOpenReference: true,
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
                    saveFolder: '',
                    isOpenEducation: true,
                    isOpenReference: true,
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
                    saveFolder: '',
                    isOpenEducation: true,
                    isOpenReference: true,
                    fileName: '',
                    fileDivision: '교육기관',
                    fileType: 'test',
                    uploadType: 'test',
                    fileVolume: '',
                    createAt: '',
                    quizList: [],
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
            ],
          },
          {
            name: '수학',
            children: [
              {
                name: '1단원',
                children: [
                  {
                    id: 4,
                    name: '과학 사이트 참고용.url',
                    subject: '과학',
                    desc: '등록한 자료 1',
                    keyword: ['국어', '수학'],
                    registrant: '등록인',
                    savePath: 'https://sciencelove.com/725',
                    saveFolder: '',
                    isOpenEducation: true,
                    isOpenReference: true,
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
                    saveFolder: '',
                    isOpenEducation: true,
                    isOpenReference: true,
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
                    subject: '영어',
                    desc: '등록한 자료 1',
                    keyword: ['국어', '수학'],
                    registrant: '등록인',
                    savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
                    saveFolder: '',
                    isOpenEducation: true,
                    isOpenReference: true,
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
                    saveFolder: '',
                    isOpenEducation: true,
                    isOpenReference: true,
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
                subject: '영어',
                desc: '등록한 자료 1',
                keyword: ['국어', '수학'],
                registrant: '등록인',
                savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
                saveFolder: '',
                isOpenEducation: true,
                isOpenReference: true,
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
                saveFolder: '',
                isOpenEducation: true,
                isOpenReference: true,
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
            ],
          },
        ],
      },
    ],
    referenceList: [
      {
        id: 0,
        name: '국어학습자료 애니메이션.mp4',
        subject: '국어',
        desc: '등록한 자료 1',
        keyword: ['국어', '수학'],
        registrant: '등록인',
        savePath: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        saveFolder: '',
        isOpenEducation: true,
        isOpenReference: true,
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
        saveFolder: '',
        isOpenEducation: true,
        isOpenReference: true,
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
        saveFolder: '',
        isOpenEducation: true,
        isOpenReference: true,
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
        saveFolder: '',
        isOpenEducation: true,
        isOpenReference: true,
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
        saveFolder: '',
        isOpenEducation: true,
        isOpenReference: true,
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
        saveFolder: '',
        isOpenEducation: true,
        isOpenReference: true,
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
