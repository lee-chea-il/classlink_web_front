import http from './http'

// 강의코스 메인
async function getLectureCourse(ins_code, mem_idx) {
  return await http.get(
    `/api/v1/menuclass/lecture-course?ins_code=${ins_code}&mem_idx=${mem_idx}`
  )
}

// 강의계획서
// 강의계획서 목록
async function getSyllabusList(
  mem_idx,
  lec_idx,
  current_page,
  per_page_num,
  keyword
) {
  return await http.get(
    `/api/v1/menuclass/lecture-course/syllabus/syllabus-list?current_page=${current_page}&keyword=${keyword}&lec_idx=${lec_idx}&mem_idx=${mem_idx}&per_page_num=${per_page_num}`
  )
}

// 강의계획서 상세
async function getSyllabus(csm_idx, lec_idx, lep_idx, mem_idx) {
  return await http.get(
    `/api/v1/menuclass/lecture-course/syllabus?csm_idx=${csm_idx}&lec_idx=${lec_idx}&lep_idx=${lep_idx}&mem_idx=${mem_idx}`
  )
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

const apiLectureCourse = {
  getLectureCourse,
  getSyllabusList,
  getSyllabus,
  postRegisterSyllabus,
  putUpdateInstitution,
}

export default apiLectureCourse
