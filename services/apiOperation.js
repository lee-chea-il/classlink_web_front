import http from './http'

// 선생님 관리
// 선생님 목록
async function getTeacherList(payload) {
  return await http.get(
    `/api/v1/management/operation/teacher?current_page=${payload.current_page}&ins_code=${payload.ins_code}&latest=${payload.latest}&per_page_num=${payload.per_page_num}&search=${payload.search}&status=${payload.status}`
  )
}
// 선생님 상세
async function getTeacherInfo(mem_idx) {
  return await http.get(`/api/v1/management/operation/teacher/${mem_idx}`)
}
// 선생님 정보 수정
async function updateTeacherInfo(payload) {
  return await http.put(
    `/api/v1/management/operation/teacher/${payload.mem_idx}`,
    payload
  )
}
// 아이디 중복체크
async function getIdCheck(id) {
  return await http.get(`/api/v1/account/sign-up/id-check?id=${id}`)
}
// 이메일 중복체크
async function getEmailCheck(email) {
  return await http.get(`/api/v1/account/sign-up/email-check?email=${email}`)
}
// 선생님 등록
async function registerTeacher(payload) {
  return await http.post('/api/v1/management/operation/init-password', payload)
}

// 선생님 삭제

// 비밀번호 초기화
async function initPassword(mem_id) {
  return await http.put(`/api/v1/management/operation/init-password`, mem_id)
}

const apiOperation = {
  getTeacherList,
  getTeacherInfo,
  getIdCheck,
  getEmailCheck,
  registerTeacher,
  updateTeacherInfo,
  initPassword,
}

export default apiOperation
