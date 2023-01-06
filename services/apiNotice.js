import http from './http'

// 학원관리자
// 전체 공지
// 전체 공지 리스트
async function getAllNoticeList(payload) {
  return await http.get(
    `/api/v1/management/notice/notice/list-all${payload.current_page}${payload.filter}${payload.keyword}`
  )
}

const apiNotice = {
  getAllNoticeList,
}

export default apiNotice
