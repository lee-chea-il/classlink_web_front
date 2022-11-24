export default function initialState() {
  return {
    bgCnt: 0,
    identity: 'teacher',
    isCalendar: false,
    isChangeLecture: { open: false },
    isCurriculemSelect: false,
    isSchedule: false,
    isChangeCurriculumAssignment: { open: false },
    isOpenModalDesc: { open: false, title: '', desc: '' },
    isChangeSchedule: { open: false },
    isChangeSelectCurriculum: { open: false },
    myCurriculum: {},
    deleteItem: {},
    isDeleteModal: { open: false, list: false },
    lectureInfo: {
      name: '',
      teacher: [],
      spareTeacher: [],
      className: [],
      classTime: '',
      curriculum: '',
      createdAt: '',
      image: '',
      startAlarmTime: '5분',
      endAlarmTime: '5분',
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
    scheduleItem: {
      startTime: '0000',
      endTime: '',
      startDay: '2022-11-01',
      endDay: '2022-11-02',
      selectWeekDay: [],
      isRepeat: false,
      bgColor: '#8fa7fb',
    },
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
        name: '영어 심화 1',
        teacher: [{ id: 1, name: '김지원' }],
        spareTeacher: [{ id: 2, name: '박지수' }],
        className: [{ id: 1, name: '1-1A' }],
        classTime: '화,목,금,13~15시',
        curriculum: '영어심화 1A 리딩 교제',
        image: '',
        startAlarmTime: '5분',
        endAlarmTime: '5분',
        createdAt: '2020-07-10',
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
              startDay: '2022.11.24',
              endDay: '2022.11.25',
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
        name: '과학 심화 1',
        teacher: [{ id: 1, name: '김지원' }],
        spareTeacher: [{ id: 2, name: '박지수' }],
        className: [{ id: 2, name: '1-1B' }],
        classTime: '화,목,금,13~15시',
        curriculum: '과학심화 1A 리딩 교제',
        image: '',
        startAlarmTime: '5분',
        endAlarmTime: '5분',
        createdAt: '2020-07-10',
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
              startDay: '2022.11.24',
              endDay: '2022.11.25',
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
        name: '수학의 정석 1',
        teacher: [{ id: 1, name: '김지원' }],
        spareTeacher: [{ id: 2, name: '박지수' }],
        className: [{ id: 3, name: '1-1C' }],
        classTime: '화,목,금,13~15시',
        curriculum: '수학의정석 1A 리딩 교제',
        image: '',
        startAlarmTime: '5분',
        endAlarmTime: '5분',
        createdAt: '2020-07-10',
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
              startDay: '2022.11.24',
              endDay: '2022.11.25',
              selectWeekDay: ['토'],
              bgColor: '#8fa7fb',
              isRepeat: false,
            },
          ],
        },
      },
    ],
    teacherList: [
      { id: 1, name: '김지원' },
      { id: 2, name: '박지수' },
      { id: 3, name: '임한솔' },
      { id: 4, name: '최유나' },
      { id: 5, name: '강원영' },
    ],
    classList: [
      { id: 1, name: '1-1A' },
      { id: 2, name: '1-1B' },
      { id: 3, name: '1-1C' },
      { id: 4, name: '1-1D' },
      { id: 5, name: '1-1E' },
    ],
    curriculumList: [
      [
        {
          name: '국어',
          teacher: '김민정',
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
                  name: '서울 사투리 작문1.link',
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
      [
        {
          name: '수학',
          teacher: '최수진',
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
                  name: '서울 사투리 작문1.link',
                  type: 'curriculum',
                },
                {
                  name: '서울 사투리 작문2.link',
                  type: 'institution',
                },
                {
                  name: '서울 사투리 작문2.link',
                  type: 'franchise',
                },
                {
                  name: '서울 사투리 작문2.link',
                  type: 'institution',
                },
                {
                  name: '서울 사투리 작문2.link',
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
    ],
    checkLectureList: [],
  }
}
