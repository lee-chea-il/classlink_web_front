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

// 강의계획서 등록
async function postRegisterSyllabus(payload) {
  return await http.post(
    '/api/v1/menuclass/lecture-course/syllabus/syllabus',
    payload
  )
}

// 교육기관 정보 수정
async function putUpdateInstitution(payload) {
  return await http.put('/api/v1/account/mypage/update-institution', payload)
}

const apiOperation = {
  getTeacherList,
  getTeacherInfo,
  postRegisterSyllabus,
  putUpdateInstitution,
}

export default apiOperation
