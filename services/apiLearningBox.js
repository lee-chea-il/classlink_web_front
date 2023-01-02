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
// 답변 상세 보기
async function getSelAnswer(payload) {
  return await http.get(
    `/api/v1/class/leaningbox/questionbox/sel-answer?${payload.ins_code}${payload.qba_idx}`
  )
}
// 답변 등록
async function postRegistAnswer(payload) {
  return await http.post(`/api/v1/class/leaningbox/questionbox/answer`, payload)
}

const apiLeaningBox = {
  getQuestionList,
  getSelQuestionbox,
  getSelAnswer,
  postRegistAnswer,
}

export default apiLeaningBox
