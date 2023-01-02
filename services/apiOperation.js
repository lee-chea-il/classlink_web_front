import http from './http'

// 선생님 관리
// 선생님 목록
async function getTeacherList(payload) {
  return await http.get(
    `/api/v1/management/operation/teachers?current_page=${payload.current_page}&ins_code=${payload.ins_code}&latest=${payload.latest}&per_page_num=${payload.per_page_num}&search=${payload.search}&status=${payload.status}`
  )
}
// 선생님 상세
async function getTeacherInfo(mem_idx) {
  return await http.get(
    `/api/v1/management/operation/teacher?mem_idx=${mem_idx}`
  )
}
// 선생님 정보 수정
async function updateTeacherInfo(payload) {
  return await http.put(
    `/api/v1/management/operation/teacher?tch_dix=${payload.tch_idx}`,
    payload
  )
}
// 아이디 중복체크
async function getIdCheck(id) {
  return await http.get(`/api/v1/account/check-id?id=${id}`)
}
// 이메일 중복체크
async function getEmailCheck(email) {
  return await http.get(`/api/v1/account/check-email?email=${email}`)
}
// 선생님 등록
async function registerTeacher(payload) {
  return await http.post('/api/v1/management/operation/teacher', payload)
}
// 선생님 삭제
async function deleteTeacher(payload) {
  return await http.delete('/api/v1/management/operation/teacher', payload)
}
// 비밀번호 초기화
async function initPassword(mem_id) {
  return await http.put(`/api/v1/management/operation/init-pw?mem_id=${mem_id}`)
}
// 교육기관 과목 목록
async function getSubjectList(ins_code) {
  return await http.get(
    `/api/v1/management/operation/teacher/institution-subjects?ins_code=${ins_code}`
  )
}
// 선생님 과목 수정
async function updateSubject(payload) {
  return await http.put(
    `/api/v1/management/operation/teacher/institution-subject?ins_code=${payload.ins_code}&is_idx=${payload.is_idx}&is_title=${payload.is_title}`
  )
}
// 선생님 과목 생성
async function addSubject(payload) {
  return await http.post(
    `/api/v1/management/operation/teacher/institution-subject`,
    payload
  )
}
// 과목 삭제
async function deleteSubject(payload) {
  return await http.delete(
    `/api/v1/management/operation/teacher/institution-subject?ins_code=${payload.ins_code}&is_idx=${payload.is_idx}&is_title=${payload.is_title}`
  )
}

// 학생 관리
// 학생 목록
async function getStudentList(payload) {
  return await http.get(
    `/api/v1/management/operation/students?attend=${payload.attend}&cond=${payload.cond}&current_page=${payload.current_page}&ins_code=${payload.ins_code}&latest=${payload.latest}&per_page_num=${payload.per_page_num}&search=${payload.search}&status=${payload.status}`
  )
}
// 학생 등록
async function registerStudent(payload) {
  return await http.post('/api/v1/management/operation/student', payload)
}
// 학생 상세
async function getStudentInfo(std_idx) {
  return await http.get(
    `/api/v1/management/operation/student?std_idx=${std_idx}`
  )
}

// 반관리
// 반 목록 및 검색
async function getClassList(ins_code, payload) {
  return await http.get(
    `/api/v1/management/operation/classrooms?ins_code=${ins_code}&current_page=${payload.current_page}${payload.show_count}${payload.cond}${payload.search}${payload.tch_idx}`
  )
}
// 반 상세
async function getClassDetail(payload) {
  return await http.get(
    `/api/v1/management/operation/classroom?ins_code=${payload.ins_code}${payload.csm_idx}${payload.current_page}${payload.search}${payload.filter}${payload.status}${payload.check_std}`
  )
}
// 반 등록/수정 반 선생님 검색
async function getSearchTeacher(payload) {
  return await http.get(
    `/api/v1/management/operation/classroom/teachers?ins_code=${payload.ins_code}${payload.search}`
  )
}
// 반 등록/수정 반 학생 검색
async function getSearchStudent(payload) {
  return await http.get(
    `/api/v1/management/operation/classroom/students?ins_code=${payload.ins_code}${payload.search}`
  )
}
// 반 등록
async function postRegistClass(payload) {
  return await http.post(`/api/v1/management/operation/classroom`, payload)
}
// 반관리 수정 상세
async function getUpdClassList(csm_idx, ins_code) {
  return await http.get(
    `/api/v1/management/operation/classroom/choice-teachers-students?ins_code=${ins_code}&csm_idx=${csm_idx}`
  )
}
// 반 수정
async function putUpdClass(payload) {
  return await http.put(`/api/v1/management/operation/classroom`, payload)
}
// 반 삭제
async function deleteClassList(payload) {
  return await http.delete(`/api/v1/management/operation/classrooom`, payload)
}
// 반 복사
async function postClassCopy(payload) {
  return await http.post(`/api/v1/management/operation/copy-classroom`, payload)
}
// 반 이동 학생이름 검색
async function getMoveClass(payload) {
  return await http.get(
    `/api/v1/management/operation/class/move-classroom/students?ins_code=${payload.ins_code}${payload.name_orderby}${payload.search}`
  )
}
// 반 이동
async function putMoveClass(payload) {
  return await http.put(`/api/v1/management/operation/move-classroom`, payload)
}
// 반 역이동(배정X로 이동)
async function putMoveReverseClass(payload) {
  return await http.put(
    `/api/v1/management/operation/move-reverse-classroom`,
    payload
  )
}
// 배정X 학생 검색
async function getNoAssignStudent(payload) {
  return await http.get(
    `/api/v1/management/operation/classroom/no-assign-students?ins_code=${payload.ins_code}${payload.search}${payload.sort_check}`
  )
}
// 목록 이동
async function putChangeOrder(payload) {
  return await http.put(
    `/api/v1/management/operation/change-classroom-order`,
    payload
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
  registerStudent,
  getStudentInfo,

  getClassList,
  getClassDetail,
  getSearchTeacher,
  getSearchStudent,
  postRegistClass,
  getUpdClassList,
  putUpdClass,
  deleteClassList,
  postClassCopy,
  getMoveClass,
  putMoveClass,
  putMoveReverseClass,
  getNoAssignStudent,
  putChangeOrder,
}

export default apiOperation
