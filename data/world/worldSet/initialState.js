export default function initialState() {
  return {
    identity: 'teacher',
    copyCheckData: [],
    updateType: '',
    dropMenuData:[
      [
        {
          codeNum: 'WDWS004',
          name: '본관',
          data: {
            backImg_url: 'cw/type4/cw_bg.png',
            interactionObjects: [
              {
                nomal_url: 'cw/type4/object/245.png',
                over_url: 'cw/type4/object/over/245.png',
                icon_normal_url: 'cw/type4/icon/245.png',
                icon_dim_url: 'cw/type4/icon/dim/245_dim.png',
                codeNum:'001',
                dbId: '',
                lessonData: {},
                imgIdx: 0,
                left: 38,
                top: 182,
              }
            ],
          },
        },
        {
          codeNum: 'WDWS005',
          name: '스터디 카페',
          data: {
            backImg_url: 'cw/type5/cw_bg.png',
            interactionObjects: [
              {
                nomal_url: 'cw/type5/object/248.png',
                over_url: 'cw/type5/object/over/248.png',
                icon_normal_url: 'cw/type5/icon/248.png',
                icon_dim_url: 'cw/type5/icon/dim/248_dim.png',
                codeNum:'001',
                dbId: '',
                lessonData: {},
                imgIdx: 0,
                left: 265,
                top: 2,
              },
            ],
          },
        },
        {
          codeNum: 'WDWS006',
          name: '강의동 로비',
          data: {
            backImg_url: 'cw/type6/cw_bg.png',
            interactionObjects: [
              {
                nomal_url: 'cw/type6/object/242.png',
                over_url: 'cw/type6/object/over/242.png',
                icon_normal_url: 'cw/type6/icon/242.png',
                icon_dim_url: 'cw/type6/icon/dim/242_dim.png',
                codeNum:'001',
                dbId: '',
                lessonData: {},
                imgIdx: 0,
                left: 265,
                top: 2,
              },
            ],
          },
        },
      ],[
        {
          codeNum: 'WDWS001',
          name: '본관',
          data: {
            backImg_url: 'cw/type4/cw_bg.png',
            interactionObjects: [
              {
                nomal_url: 'cw/type4/object/245.png',
                over_url: 'cw/type4/object/over/245.png',
                icon_normal_url: 'cw/type4/icon/245.png',
                icon_dim_url: 'cw/type4/icon/dim/245_dim.png',
                codeNum:'001',
                dbId: '',
                lessonData: {},
                imgIdx: 0,
                left: 38,
                top: 186,
              },
              {
                nomal_url: 'cw/type4/object/245.png',
                over_url: 'cw/type4/object/over/245.png',
                icon_normal_url: 'cw/type4/icon/245.png',
                icon_dim_url: 'cw/type4/icon/dim/245_dim.png',
                codeNum:'002',
                dbId: '',
                imgIdx: 1,
                left: 184,
                top: 186,
              }
            ],
          },
        },
        {
          codeNum: 'WDWS002',
          name: '스터디 카페',
          data: {
            backImg_url: 'cw/type5/cw_bg.png',
            interactionObjects: [
              {
                nomal_url: 'cw/type5/object/248.png',
                over_url: 'cw/type5/object/over/248.png',
                icon_normal_url: 'cw/type5/icon/248.png',
                icon_dim_url: 'cw/type5/icon/dim/248_dim.png',
                codeNum:'001',
                dbId: '',
                lessonData: {},
                imgIdx: 0,
                left: 13,
                top: 262,
              },
              {
                nomal_url: 'cw/type5/object/248.png',
                over_url: 'cw/type5/object/over/248.png',
                icon_normal_url: 'cw/type5/icon/248.png',
                icon_dim_url: 'cw/type5/icon/dim/248_dim.png',
                codeNum:'002',
                dbId: '',
                imgIdx: 1,
                left: 275,
                top: 262,
              }
            ],
          },
        },
        {
          codeNum: 'WDWS003',
          name: '강의동 로비',
          data: {
            backImg_url: 'cw/type6/cw_bg.png',
            interactionObjects: [
              {
                nomal_url: 'cw/type6/object/242.png',
                over_url: 'cw/type6/object/over/242.png',
                icon_normal_url: 'cw/type6/icon/242.png',
                icon_dim_url: 'cw/type6/icon/dim/242_dim.png',
                codeNum:'001',
                dbId: '',
                lessonData: {},
                imgIdx: 0,
                left: 265,
                top: 2,
              },
              {
                nomal_url: 'cw/type6/object/242.png',
                over_url: 'cw/type6/object/over/242.png',
                icon_normal_url: 'cw/type6/icon/242.png',
                icon_dim_url: 'cw/type6/icon/dim/242_dim.png',
                codeNum:'002',
                dbId: '',
                imgIdx: 1,
                left: 12,
                top: 51,
              }
            ],
          },
        }
      ]
    ],
    testData: {
      subTitle: 'sub1',
      desc: 'desc1',
      savePathInfo: {
        path: '마포 학원 > 국어 > 1단원',
        type: 'institution',
        fileName: 'test',
      },
      cwId: 'WDCS001',
      linkData: [
        { codeNum: '005', referId: 1 },
        { codeNum: '008', referId: 2 },
        { codeNum: '012', referId: 4 },
      ],
      isOpenEducation: true,
      isContinuedRegist: true,
      lessonId:0,
      type: 'institution',
      name: 'test.set'
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
                    subTitle: 'sub1',
                    desc: 'desc1',
                    savePathInfo: {
                      path: '마포 학원 > 국어 > 1단원',
                      type: 'institution',
                      fileName: '수학1',
                    },
                    cwId: 'WDWS001',
                    linkData: [
                      { codeNum: '001', referId: 1 }
                    ],
                    isOpenEducation: true,
                    isContinuedRegist: true,
                    lessonId:0,
                    type: 'institution',
                    name: '수학1.set'
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
                    subTitle: 'sub1',
                    desc: 'desc1',
                    savePathInfo: {
                      path: '서울 학원 > 국어 > 1단원',
                      type: 'institution',
                      fileName: '과학1',
                    },
                    cwId: 'WDWS002',
                    linkData: [
                      { codeNum: '001', referId: 1 }
                    ],
                    isOpenEducation: true,
                    isContinuedRegist: true,
                    lessonId:0,
                    type: 'franchise',
                    name: '과학1.set'
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    receiveWorldSetData: [
      {
        name: '국어',
        children: [
          {
            name: '1단원',
            children: [
              {
                    subTitle: 'sub1',
                    desc: 'desc1',
                    savePathInfo: {
                      path: '마포 학원 > 국어 > 1단원',
                      type: 'institution',
                      fileName: '미생1',
                    },
                    cwId: 'WDWS003',
                    linkData: [
                      { codeNum: '001', referId: 1 }
                    ],
                    isOpenEducation: true,
                    isContinuedRegist: true,
                    lessonId:0,
                    type: 'institution',
                    name: '미생1.set'
                  },
            ],
          },
        ],
      },
    ],
    isShowSavePathModal: false,
    isShowOpenPathModal: false,
    isShowOpenAddModal: false,
    isShowModalDesc: false,
    modalDescMsg: '',
    isCopyType: '',
    receiveInstitutionPackData: [
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
                    name: '2-1반 수학 수업자료.pack',
                    type: 'institution',
                    dbId: 0,
                  },
                  {
                    name: '고등교육 영어자료.pack',
                    type: 'institution',
                    dbId: 1,
                  },
                  {
                    name: '수학적 귀납법 설명자료.pack',
                    type: 'institution',
                    dbId: 2,
                  },
                  {
                    name: '6학년 영재반 수업자료.pack',
                    type: 'institution',
                    dbId: 3,
                  }
                ],
              },
            ],
          },
        ],
      },
    ],
    receiveFranchisePackData: [
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
                    name: '2-1반 수학 수업자료.pack',
                    type: 'franchise',
                    dbId: 0,
                  },
                  {
                    name: '고등교육 영어자료.pack',
                    type: 'franchise',
                    dbId: 1,
                  },
                  {
                    name: '수학적 귀납법 설명자료.pack',
                    type: 'franchise',
                    dbId: 2,
                  },
                  {
                    name: '6학년 영재반 수업자료.pack',
                    type: 'franchise',
                    dbId: 3,
                  }
                ],
              },
            ],
          },
        ],
      },
    ],
    receivePackList: [
      {
        name: '국어',
        children: [
          {
            name: '1단원',
            children: [
              {
                name: '2-1반 수학 수업자료.pack',
                type: 'institution',
                dbId: 0,
              },
              {
                name: '고등교육 영어자료.pack',
                type: 'institution',
                dbId: 1,
              },
              {
                name: '수학적 귀납법 설명자료.pack',
                type: 'franchise',
                dbId: 2,
              },
              {
                name: '6학년 영재반 수업자료.pack',
                type: 'franchise',
                dbId: 3,
              }
            ],
          },
          {
            name: '2단원',
            children: [
              {
                name: '2-1반 수학 수업자료.lesson',
                type: 'curriculum',
                dbId: 0,
              },
              {
                name: '고등교육 영어자료.lesson',
                type: 'institution',
                dbId: 1,
              },
              {
                name: '수학적 귀납법 설명자료.lesson',
                type: 'curriculum',
                dbId: 2,
              },
              {
                name: '6학년 영재반 수업자료.lesson',
                type: 'franchise',
                dbId: 3,
              }
            ],
          },
        ],
      },
    ],
  }
}
