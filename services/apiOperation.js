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
    `/api/v1/management/operation/teacher/${payload.tch_idx}`,
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
  return await http.post(
    '/api/v1/management/operation/teacher/teacher',
    payload
  )
}
// 선생님 삭제
async function deleteTeacher(payload) {
  return await http.delete('/api/v1/management/operation/teacher', payload)
}
// 비밀번호 초기화
async function initPassword(mem_id) {
  return await http.put(
    `/api/v1/management/operation/init-password?mem_id=${mem_id}`
  )
}
// 교육기관 과목 목록
async function getSubjectList(ins_code) {
  return await http.get(
    `/api/v1/management/operation/teacher/${ins_code}/subject`
  )
}
// 선생님 과목 수정
async function updateSubject(ins_code, is_idx, is_title) {
  return await http.put(
    `/api/v1/management/operation/teacher/subject?ins_code=${ins_code}&is_idx=${is_idx}&is_title=${is_title}`
  )
}
// 선생님 과목 생성
async function addSubject(payload) {
  return await http.post(
    `/api/v1/management/operation/teacher/subject`,
    payload
  )
}
// 과목 삭제
async function deleteSubject(payload) {
  return await http.delete(
    `/api/v1/management/operation/teacher/subject?ins_code=${payload.ins_code}&is_idx=${payload.is_idx}&is_title=${payload.is_title}`
  )
}

// 학생 관리
// 학생 목록
async function getStudentList(payload) {
  return await http.get(
    `/api/v1/management/operation/teacher?current_page=${payload.current_page}&ins_code=${payload.ins_code}&latest=${payload.latest}&per_page_num=${payload.per_page_num}&search=${payload.search}&status=${payload.status}`
  )
}

const apiOperation = {
  getTeacherList,
  getTeacherInfo,
  getIdCheck,
  getEmailCheck,
  registerTeacher,
  updateTeacherInfo,
  initPassword,
  deleteTeacher,
  getSubjectList,
  updateSubject,
  addSubject,
  deleteSubject,
  getStudentList,
}

export default apiOperation
