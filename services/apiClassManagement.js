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

// 반관리 반 등록/수정 반 선생님 검색
async function getSearchTeacher(payload) {
  return await http.get(
    `/api/v1/management/operation/class/reg-class/search-teacher?ins_code=${payload.ins_code}${payload.search}`
  )
}
// 반관리 반 등록/수정 반 학생 검색
async function getSearchStudent(payload) {
  return await http.get(
    `/api/v1/management/operation/class/reg-class/search-student?ins_code=${payload.ins_code}${payload.search}`
  )
}
// 반관리 등록
async function postRegistClass(payload) {
  return await http.post(`/api/v1/management/operation/class`, payload)
}
// 반관리 수정 상세
async function getUpdClassList(csm_idx, ins_code) {
  return await http.get(
    `/api/v1/management/operation/class/upd-class/${csm_idx}?ins_code=${ins_code}`
  )
}
// 반관리 반 수정
async function putUpdClass(csm_idx, payload) {
  return await http.put(
    `/api/v1/management/operation/class/${csm_idx}`,
    payload
  )
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

// 반관리 반이동 학생이름 검색
async function getMoveClass(payload) {
  return await http.get(
    `/api/v1/management/operation/class/move-class?ins_code=${payload.ins_code}${payload.name_orderby}${payload.search}`
  )
}
// 반관리 반 이동
async function putMoveClass(payload) {
  return await http.put(
    `/api/v1/management/operation/class/move-class`,
    payload
  )
}
// 반관리 배정X 학생 검색
async function getNoAssignStudent(payload) {
  return await http.get(
    `/api/v1/management/operation/class/no-assign-student?ins_code=${payload.ins_code}${payload.search}${payload.sort_check}`
  )
}

const apiClassManagement = {
  getClassList,
  getClassDetail,
  getSearchTeacher,
  getSearchStudent,
  postRegistClass,
  getUpdClassList,
  putUpdClass,
  deleteClassList,
  postClassCopy,
  putMoveClass,
  getMoveClass,
  getNoAssignStudent,
}

export default apiClassManagement
