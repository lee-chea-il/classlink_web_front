import http from './http'

// 강의코스 메인
async function getLectureCourse(payload) {
  return await http.get(
    `/api/v1/class/courses?end_course_check=${payload.end_course_check}&ins_code=${payload.ins_code}&keyword=${payload.keyword}&mem_idx=${payload.mem_idx}`
  )
}

// 강의계획서
// 강의계획서 목록
async function getSyllabusList(payload) {
  return await http.get(
    `/api/v1/class/course/syllabuses?current_page=${payload.current_page}&keyword=${payload.keyword}&lec_idx=${payload.lec_idx}&ins_code=${payload.ins_code}&per_page_num=${payload.per_page_num}`
  )
}

// 강의계획서 상세
async function getSyllabus(payload) {
  return await http.get(
    `/api/v1/class/course/syllabus?lec_idx=${payload.lec_idx}&lep_idx=${payload.lep_idx}`
  )
}
// 강의계획서 등록
async function postRegisterSyllabus(payload) {
  return await http.post('/api/v1/class/course/syllabus', payload)
}
// 강의계획서 수정
async function updateSyllabus(payload) {
  return await http.put('/api/v1/class/course/syllabus', payload)
}
// 강의계획서 삭제
async function deleteSyllabus(payload) {
  return await http.delete('/api/v1/class/course/syllabus', payload)
}

// 교육기관 정보 수정
async function putUpdateInstitution(payload) {
  return await http.put('/api/v1/account/mypage/update-institution', payload)
}

// 과제함
// 과제함 목록
async function getTaskList(payload) {
  return await http.get(
    `/api/v1/class/course/tasks?current_page=${payload.current_page}&ins_code=${payload.ins_code}&keyword=${payload.keyword}&lec_idx=${payload.lec_idx}&per_page_num=${payload.per_page_num}`
  )
}
// 과제함 상세
async function getTask(payload) {
  return await http.get(
    `/api/v1/class/course/task?hwb_idx=${payload.hwb_idx}&lec_idx=${payload.lec_idx}`
  )
}
// 과제함 등록
async function postRegisterTask(payload) {
  return await http.post('/api/v1/class/course/task', payload)
}
// 과제함 수정
async function updateTask(payload) {
  return await http.put('/api/v1/class/course/task', payload)
}
// 과제함 삭제
async function deleteTask(payload) {
  return await http.delete('/api/v1/class/course/task', payload)
}

const apiLectureCourse = {
  getLectureCourse,
  getSyllabusList,
  getSyllabus,
  updateSyllabus,
  deleteSyllabus,
  postRegisterSyllabus,
  putUpdateInstitution,
  getTaskList,
  getTask,
  postRegisterTask,
  updateTask,
  deleteTask,
}

export default apiLectureCourse
