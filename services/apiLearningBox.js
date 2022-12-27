import http from './http'

async function getQuestionList(payload) {
  return await http.get(
    `/api/v1/class/leaningbox/questionbox/questionlist?ins_code=${payload.ins_code}&lec_idx=${payload.lec_idx}`
  )
}

const apiLeaningBox = {
  getQuestionList,
}

export default apiLeaningBox
