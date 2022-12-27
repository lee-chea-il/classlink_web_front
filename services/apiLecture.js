import http from './http'

// 강좌 리스트 가져오기
const getLectureList = async () => {
  return await http.get('/api/v1/prepare-class/lectures')
}

// 강좌 상세 가져오기
const getLecture = async (id) => {
  return await http.get(`/api/v1/prepare-class/lectures?parameters=${id}}`)
}

// 강좌 등록
const postLectrue = async (data) => {
  return await http.post('/api/v1/prepare-class/lecture', data)
}

// 강좌 수정
// const updateLecture = async ()=>{
//   return await http.put('/api/v1/prepare-class/lecture')
// }

// 반 조회
const getClassroomList = async () => {
  return await http.get(`/api/v1/prepare-class/classrooms`)
}

// 선생님 조회
const getTeacherList = async () => {
  return await http.get(`/api/v1/prepare-class/teachers`)
}

const apiLecture = {
  getLectureList,
  getLecture,
  getClassroomList,
  getTeacherList,

  postLectrue,
}

export default apiLecture
