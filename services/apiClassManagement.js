import http from './http'

// 반관리 리스트
async function getClassList(ins_code, payload) {
  return await http.get(
    `/api/v1/management/operation/class?ins_code=${ins_code}&current_page=${payload.current_page}${payload.show_count}${payload.cond}${payload.search}${payload.tch_idx}`
  )
}

// 반관리 상세
async function getClassDetail(payload) {
  return await http.get(
    `/api/v1/management/operation/class/${payload.csm_idx}?ins_code=${payload.ins_code}${payload.current_page}${payload.search}${payload.filter}${payload.status}${payload.check_std}`
  )
}

// 반관리 등록
async function getSearchTeacher(payload) {
  return await http.get(
    `/api/v1/management/operation/class/reg-class/search-teacher?ins_code=${payload.ins_code}${payload.search}`
  )
}
async function getSearchStudent(payload) {
  return await http.get(
    `/api/v1/management/operation/class/reg-class/search-student?ins_code=${payload.ins_code}${payload.search}`
  )
}
async function postRegistClass(payload) {
  return await http.post(`/api/v1/management/operation/class`, payload)
}

// 반관리 반 삭제
async function deleteClassList(payload) {
  return await http.delete(`/api/v1/management/operation/class`, payload)
}

// 반관리 복사
async function postClassCopy(payload) {
  return await http.post(
    `/api/v1/management/operation/class/copy-class`,
    payload
  )
}

const apiClassManagement = {
  getClassList,
  getClassDetail,
  getSearchTeacher,
  getSearchStudent,
  postRegistClass,
  deleteClassList,
  postClassCopy,
}

export default apiClassManagement
