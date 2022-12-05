export default function initialState() {
  return {
    isChangeStatus: 0,
    selectFranchise: {},
    selectBuilding: {},
    searchData: {
      word: '',
      sortIdx: 1,
    },
    searchBuilding: {
      word: '',
      prevList: [],
    },
    tableHeader: [
      '번호',
      '가입 날짜',
      'FC 이름',
      '대표',
      '건물',
      '상태',
      '상세',
      '더보기',
    ],
    franchiseList: [
      {
        id: 1,
        name: '에듀케이 어학원',
        owner: '김단우',
        phone: '010-1234-2342',
        address: '경기도 이천시 증포동 이섭대천로 1334',
        gender: 1,
        account: 'eduk@naver.com',
        email: 'edukGood@naver.com',
        building: [
          {
            id: 0,
            name: '롯데타워',
            img: 'https://image.ytn.co.kr/general/jpg/2016/1004/201610041101225803_t.jpg',
          },
          {
            id: 1,
            name: '삼성타워',
            img: 'https://w.namu.la/s/a2b23a83949afdefb5d6bbf3c03ede07526197d6a7676778ff295c9ca32ece435c9134e76a6c7876da557387dd9b8b8575469dba36b8ae6c678d5adb3b450eb3d79d85f983eda20a38a76f0e61259b21eacd8016db15601893f76eb780458db8c3d5cc043ec34992cdc01bf92ad792ed',
          },
          {
            id: 2,
            name: '현대타워',
            img: 'https://img.insight.co.kr/static/2019/11/27/700/we291dw7899n9gahm3r8.jpg',
          },
        ],
        status: 1,
        createdAt: '2022-12-01',
        studentCnt: 1000,
        teacherCnt: 20,
      },
    ],
    buildingList: [
      {
        id: 0,
        name: '롯데타워',
        img: 'https://image.ytn.co.kr/general/jpg/2016/1004/201610041101225803_t.jpg',
      },
      {
        id: 1,
        name: '삼성타워',
        img: 'https://w.namu.la/s/a2b23a83949afdefb5d6bbf3c03ede07526197d6a7676778ff295c9ca32ece435c9134e76a6c7876da557387dd9b8b8575469dba36b8ae6c678d5adb3b450eb3d79d85f983eda20a38a76f0e61259b21eacd8016db15601893f76eb780458db8c3d5cc043ec34992cdc01bf92ad792ed',
      },
      {
        id: 2,
        name: '현대타워',
        img: 'https://img.insight.co.kr/static/2019/11/27/700/we291dw7899n9gahm3r8.jpg',
      },
      {
        id: 3,
        name: 'CJ타워',
        img: 'https://img.insight.co.kr/static/2019/11/27/700/we291dw7899n9gahm3r8.jpg',
      },
    ],
  }
}
