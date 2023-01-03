export default function initialState() {
  return {
    bgCnt: 0,
    currentPage: 1,
    isLoading: false,
    currentPageNumber: 1,
    postPerPage: 10,
    postPerPageNum: 10,
    identity: 'master',
    modalTitle: '강좌 등록',
    isCalendar: false,
    isSchedule: false,
    isCurriculemSelect: false,
    isChangeLecture: { open: false },
    isChangeCurriculumAssignment: { open: false },
    isOpenModalDesc: { open: false, title: '', desc: '' },
    isChangeSchedule: { open: false },
    isChangeSelectCurriculum: { open: false },
    isDeleteModal: { open: false, list: false },
    isSnackber: { open: false, message: '' },
    searchData: { word: '', teacher: '', class: '' },
    deleteItem: {},
    range: { start: '', end: '' },
    selectCurriculumInfo: {},
    initLectureInfo: {
      title: '',
      homeroom_teacher: [],
      assistant_teacher: [],
      classroom: [],
      classTime: '',
      curriculum: [],
      createdAt: '',
      image: '',
      before_start_class_alarm_time: '5분',
      after_end_class_exit_time: '5분',
      startDay: '',
      endDay: '',
      scheduleWeekList: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        set: [],
      },
    },
    lectureInfo: {
      title: '',
      homeroom_teacher: [],
      assistant_teacher: [],
      classroom: [],
      classTime: '',
      curriculum: [],
      createdAt: '',
      image: '',
      before_start_class_alarm_time: '5분',
      after_end_class_exit_time: '5분',
      // timeTable: {
      //   before_start_class_alarm_time: '',
      //   after_end_class_exit_time: '',
      // },
      scheduleWeekList: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        set: [],
      },
    },
    initScheduleItem: {
      startTime: '0000',
      endTime: '2400',
      startDay: '',
      endDay: '',
      selectWeekDay: [
        { name: '일', isChecked: false },
        { name: '월', isChecked: false },
        { name: '화', isChecked: false },
        { name: '수', isChecked: false },
        { name: '목', isChecked: false },
        { name: '금', isChecked: false },
        { name: '토', isChecked: false },
      ],
      isRepeat: false,
      bgColor: '#8fa7fb',
    },
    scheduleItem: {},
    weekIdx: {
      일: 'sun',
      월: 'mon',
      화: 'tue',
      수: 'wed',
      목: 'thu',
      금: 'fri',
      토: 'set',
    },
    lectureList: [
      {
        title: '영어 심화 1',
        homeroom_teacher: [{ idx: 1, name: '김지원' }],
        assistant_teacher: [{ idx: 2, name: '박지수' }],
        classroom: [{ idx: 1, name: '1-1A' }],
        classTime: '화,목,금,13~15시',
        curriculum: '영어심화 1A 리딩 교제',
        image: '',
        before_start_class_alarm_time: '5분',
        after_end_class_exit_time: '5분',
        createdAt: '2020-07-10',
        startDay: '2022-11-01',
        endDay: '2022-11-02',
        scheduleWeekList: {
          sun: [],
          mon: [
            {
              startTime: '0100',
              endTime: '0600',
              startDay: '2022-11-01',
              endDay: '2022-11-02',
              selectWeekDay: ['월'],
              isRepeat: false,
              bgColor: '#8fa7fb',
            },
          ],
          tue: [],
          wed: [
            {
              startTime: '0130',
              endTime: '0600',
              startDay: '2022-11-24',
              endDay: '2022-11-25',
              selectWeekDay: ['수'],
              bgColor: '#8fa7fb',
              isRepeat: false,
            },
          ],
          thu: [],
          fri: [],
          set: [],
        },
      },
      {
        title: '과학 심화 1',
        homeroom_teacher: [{ idx: 1, name: '김지원' }],
        assistant_teacher: [{ idx: 2, name: '박지수' }],
        classroom: [{ idx: 2, name: '1-1B' }],
        classTime: '화,목,금,13~15시',
        curriculum: '과학심화 1A 리딩 교제',
        image: '',
        before_start_class_alarm_time: '5분',
        after_end_class_exit_time: '5분',
        createdAt: '2020-07-10',
        startDay: '2022-12-08',
        endDay: '2022-12-09',
        scheduleWeekList: {
          sun: [],
          mon: [
            {
              startTime: '0030',
              endTime: '0900',
              startDay: '2022-11-01',
              endDay: '2022-11-02',
              selectWeekDay: ['월'],
              isRepeat: false,
              bgColor: '#8fa7fb',
            },
          ],
          tue: [],
          wed: [
            {
              startTime: '0100',
              endTime: '0630',
              startDay: '2022-11-24',
              endDay: '2022-11-25',
              selectWeekDay: ['수'],
              bgColor: '#8fa7fb',
              isRepeat: false,
            },
          ],
          thu: [],
          fri: [],
          set: [],
        },
      },
      {
        title: '수학의 정석 1',
        homeroom_teacher: [{ idx: 1, name: '김지원' }],
        assistant_teacher: [{ idx: 2, name: '박지수' }],
        classroom: [{ idx: 3, name: '1-1C' }],
        classTime: '화,목,금,13~15시',
        curriculum: '수학의정석 1A 리딩 교제',
        image: '',
        before_start_class_alarm_time: '5분',
        after_end_class_exit_time: '5분',
        createdAt: '2020-07-10',
        startDay: '2022-12-08',
        endDay: '2022-12-09',
        scheduleWeekList: {
          sun: [
            {
              startTime: '0030',
              endTime: '0900',
              startDay: '2022-11-01',
              endDay: '2022-11-02',
              selectWeekDay: ['일'],
              isRepeat: false,
              bgColor: '#8fa7fb',
            },
          ],
          mon: [],
          tue: [],
          wed: [],
          thu: [],
          fri: [],
          set: [
            {
              startTime: '0100',
              endTime: '0630',
              startDay: '2022-11-24',
              endDay: '2022-11-25',
              selectWeekDay: ['토'],
              bgColor: '#8fa7fb',
              isRepeat: false,
            },
          ],
        },
      },
    ],
    teacherList: [
      { mem_idx: 1, name: '김지원' },
      { mem_idx: 2, name: '박지수' },
      { mem_idx: 3, name: '임한솔' },
      { mem_idx: 4, name: '최유나' },
      { mem_idx: 5, name: '강원영' },
    ],
    classList: [
      { classroom_idx: 1, name: '1-1A' },
      { classroom_idx: 2, name: '1-1B' },
      { classroom_idx: 3, name: '1-1C' },
      { classroom_idx: 4, name: '1-1D' },
      { classroom_idx: 5, name: '1-1E' },
    ],
    curriculumList: [
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
                    name: '화법과 작문1.link',
                    type: 'institution',
                    dbIdx: 1,
                  },
                  {
                    name: '화법과 작문2.link',
                    type: 'institution',
                    dbIdx: 2,
                  },
                  {
                    name: '화법과 작문3.link',
                    type: 'institution',
                    dbIdx: 3,
                  },
                  {
                    name: '화법과 작문4.link',
                    type: 'institution',
                    dbIdx: 4,
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
    checkLectureList: [],
  }
}
