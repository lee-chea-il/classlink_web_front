import http from './http'

// 질문함
// 질문함 리스트
async function getQuestionList(payload) {
  return await http.get(
    `/api/v1/class/leaning-box/qustions?${payload.ins_code}${payload.lec_idx}${payload.current_page}${payload.per_page_num}${payload.keyword}`
  )
}
// 질문 상세 보기
async function getSelQuestionbox(payload) {
  return await http.get(
    `/api/v1/class/leaning-box/question?${payload.ins_code}${payload.qtb_idx}`
  )
}
// 답변 상세 보기
async function getSelAnswer(payload) {
  return await http.get(
    `/api/v1/class/leaning-box/question/answer?${payload.ins_code}${payload.qba_idx}`
  )
}
// 답변 등록
async function postRegistAnswer(payload) {
  return await http.post(`/api/v1/class/leaning-box/question/answer`, payload)
}
// 답변 수정
async function putUpdateAnswer(payload) {
  return await http.put(`/api/v1/class/leaning-box/question/answer`, payload)
}
// 답변 삭제
async function deleteAnswer(payload) {
  return await http.delete(`/api/v1/class/leaning-box/question/answer`, payload)
}
async function deleteQuestion(payload) {
  return await http.delete(`/api/v1/class/leaning-box/question`, payload)
}

const apiLeaningBox = {
  getQuestionList,
  getSelQuestionbox,
  getSelAnswer,
  postRegistAnswer,
  putUpdateAnswer,
  deleteAnswer,
  deleteQuestion,
}

export default apiLeaningBox
