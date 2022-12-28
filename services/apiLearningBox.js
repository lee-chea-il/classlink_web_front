import http from './http'

// 질문함
// 질문함 리스트
async function getQuestionList(payload) {
  return await http.get(
    `/api/v1/class/leaningbox/questionbox/questionlist?${payload.ins_code}${payload.lec_idx}${payload.current_page}${payload.per_page_num}${payload.keyword}`
  )
}
// 질문 상세 보기
async function getSelQuestionbox(payload) {
  return await http.get(
    `/api/v1/class/leaningbox/questionbox/sel-questionbox?${payload.ins_code}${payload.qtb_idx}`
  )
}

const apiLeaningBox = {
  getQuestionList,
  getSelQuestionbox,
}

export default apiLeaningBox
