export default function initialState() {
  return {
    currentPageIdx: 0,
    // datatype: '',
    isDev: false,
    isLoading: true,
    isApiCall: false,
    isUploading: false,
    pushKeyword: '',
    identity: 'teacher',
    modalTitle: '등록',
    isCopyType: '',
    selectDataType: '',
    selectDatatableType: 'ID',
    isCopyMD:false,
    copyMDData:null,
    // Modal Flag
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
    isMovePathModal: { open: false, prevPage: '' },
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
    initSearchData: { word: '', type: [], subject: [], datatype: [] },
    searchData: { word: '', type: [], subject: [], datatype: [] },
    copyCheckData: [],
    checkList: [],
    quizItem: {
      no: 1,
      question: '',
      level: '상',
      limit_time: '',
      type: 'OX',
      correct: 'O',
      wrong: 'X',
    },
    testItem: {
      no: 1,
      question: '',
      note_exam_ask_views: [
        { no: 1, question: '' },
        { no: 2, question: '' },
        { no: 3, question: '' },
        { no: 4, question: '' },
      ],
      level: '상',
      limit_time: '',
      correct_no: 1,
      isCommentary: true,
      explain: '',
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
      save_path: '',
      parent_treeinfo_idx: 0,
      public_open_yn: true,
      open_yn: true,
      file_name: '',
      datatable_type: '',
      datatype: '',
      thumbnail: '',
      registrant_name: '',
    },
    deleteTreeIdx: 0,
    referenceData: {},
    institutionData: [],
    franchiseData: [],
    openData: [],
    myData: [],
    treeMyData: [],
    treeInstitutionData: [],
    treeFranchiseData: [],
    treeOpenData: [],
    moveMyData: [],
    moveInstitutionData: [],
    moveFranchiseData: [],
    moveOpenData: [],
    referenceList: [
      {
        id: 0,
        title: '국어학습자료 애니메이션.mp4',
        subject: 1,
        description: '등록한 자료 1',
        keyword: ['국어', '수학'],
        worker: '등록인',
        save_path: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        public_open_yn: true,
        open_yn: true,
        file_name: '',
        datatable_type: 'ID',
        datatype: '01',
        createAt: '',
        dbIdx: 1,
        thumbnail: '',
        type: 'institution',
      },
    ],
  }
}
