import axios from 'axios'
import http from './http'

// 유튜브 api호출
const getYoutubeData = async (youtubeUrl) => {
  return await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?id=${youtubeUrl}&key=AIzaSyB5-JcQb2Ltp3ENM5U2AYE80m_LLK9KjAY&part=snippet,contentDetails`
  )
}

// 업로드 서버 주소 가져오기
const getServerUrl = async () => {
  return await http.get('/api/v1/prepare-class/dataroom/server')
}

// 자료 등록
// 동영상, PDF, 유튜브, URL 등록
const postDataroomFile = async (data) => {
  return await http.post('/api/v1/prepare-class/dataroom/file', data)
}

// 퀴즈 등록
const postDataroomQuiz = async (data) => {
  return await http.post('/api/v1/prepare-class/dataroom/quiz', data)
}

// 쪽지시험 등록
const postDataroomNoteExam = async (data) => {
  return await http.post('/api/v1/prepare-class/dataroom/note-exam', data)
}

// 자료 조회
// 동영상, PDF, 유튜브,URL 조회
const getDataroomFile = async (payload) => {
  return await http.get(
    `/api/v1/prepare-class/dataroom/file/${payload.id}?datatable_type=${payload.datatable_type}`
  )
}

// 퀴즈 조회
const getDataroomQuiz = async (payload) => {
  return await http.get(
    `/api/v1/prepare-class/dataroom/quiz/${payload.id}?datatable_type=${payload.datatable_type}`
  )
}

// 쪽지시험 조회
const getDataroomNoteExam = async (payload) => {
  return await http.get(
    `/api/v1/prepare-class/dataroom/note-exam/${payload.id}?datatable_type=${payload.datatable_type}`
  )
}

// 자료 수정
// 동영상, PDF, 유튜브,URL 수정
const updateDataroomFile = async (payload, data) => {
  return await http.patch(
    `/api/v1/prepare-class/dataroom/file/${payload.id}?datatable_type=${payload.datatable_type}`,
    data
  )
}

// 퀴즈 수정
const updateDataroomQuiz = async (payload, data) => {
  return await http.patch(
    `/api/v1/prepare-class/dataroom/quiz/${payload.id}?datatable_type=${payload.datatable_type}`,
    data
  )
}

// 쪽지시험 수정
const updateDataroomNoteExam = async (payload, data) => {
  return await http.patch(
    `/api/v1/prepare-class/dataroom/note-exam/${payload.id}?datatable_type=${payload.datatable_type}`,
    data
  )
}

// 자료 삭제
// 동영상, PDF, 유튜브,URL 삭제
const deleteDataroomFile = async (payload) => {
  return await http.delete(
    `/api/v1/prepare-class/dataroom/file/${payload.id}?datatable_type=${payload.datatable_type}`
  )
}

// 퀴즈 삭제
const deleteDataroomQuiz = async (payload) => {
  return await http.delete(
    `/api/v1/prepare-class/dataroom/quiz/${payload.id}?datatable_type=${payload.datatable_type}`
  )
}

// 쪽지시험 삭제
const deleteDataroomNoteExam = async (payload) => {
  return await http.delete(
    `/api/v1/prepare-class/dataroom/note-exam/${payload.id}?datatable_type=${payload.datatable_type}`
  )
}

const apiData = {
  getYoutubeData,
  getServerUrl,
  getDataroomFile,
  getDataroomQuiz,
  getDataroomNoteExam,

  postDataroomFile,
  postDataroomQuiz,
  postDataroomNoteExam,

  updateDataroomFile,
  updateDataroomQuiz,
  updateDataroomNoteExam,

  deleteDataroomFile,
  deleteDataroomQuiz,
  deleteDataroomNoteExam,
}

export default apiData
