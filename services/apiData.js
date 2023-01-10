import axios from 'axios'
import http from './http'

// 유튜브 api호출
const getYoutubeData = async (youtubeUrl) => {
  return await axios.get(
    `${process.env.VUE_APP_YOUTUBE_URL}?id=${youtubeUrl}&key=AIzaSyB5-JcQb2Ltp3ENM5U2AYE80m_LLK9KjAY&part=snippet,contentDetails`
  )
}

// 업로드 서버 주소 가져오기
const getServerUrl = async () => {
  return await http.get('/api/v1/prepare-class/dataroom/server')
}

// 자료 등록
// 동영상, PDF, 유튜브, URL 등록
const postDataroomFile = async (data) => {
  return await http.post('/api/v1/prepare-class/dataroom/data', data)
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
    `/api/v1/prepare-class/dataroom/data?treeinfo_idx=${payload.treeinfo_idx}&datatable_type=${payload.datatable_type}`
  )
}

// 퀴즈 조회
const getDataroomQuiz = async (payload) => {
  return await http.get(
    `/api/v1/prepare-class/dataroom/quiz?treeinfo_idx=${payload.treeinfo_idx}&datatable_type=${payload.datatable_type}`
  )
}

// 쪽지시험 조회
const getDataroomNoteExam = async (payload) => {
  return await http.get(
    `/api/v1/prepare-class/dataroom/note-exam?treeinfo_idx=${payload.treeinfo_idx}&datatable_type=${payload.datatable_type}`
  )
}

// 자료 수정
// 동영상, PDF, 유튜브,URL 수정
const updateDataroomFile = async (data) => {
  return await http.put(`/api/v1/prepare-class/dataroom/data`, data)
}

// 퀴즈 수정
const updateDataroomQuiz = async (data) => {
  return await http.put(`/api/v1/prepare-class/dataroom/quiz`, data)
}

// 쪽지시험 수정
const updateDataroomNoteExam = async (data) => {
  return await http.put(`/api/v1/prepare-class/dataroom/note-exam`, data)
}

// 자료 삭제
// 자료 수정 All
const deleteData = async (data) => {
  return await http.delete('/api/v1/prepare-class/dataroom/data', { data })
}

// 자료 복사 (바로 아래에 같은이름으로 복사)
const poatCopyData = async (data) => {
  return await http.post('/api/v1/prepare-class/dataroom/copy-data', data)
}

// 열람 페이지 자료 이동
const postMoveData = async (data) => {
  return await http.post('/api/v1/prepare-class/dataroom/move-data', data)
}

// 트리뷰 리스트 가져오기
const getTreeViewList = async ({ type }) => {
  return await http.get(
    `/api/v1/prepare-class/dataroom/tree-view-list?type=${type}`
  )
}

// 트리뷰에 폴더 생성
const addFolderTreeViewList = async (payload) => {
  return await http.post(
    '/api/v1/prepare-class/dataroom/tree-view-list/folder',
    payload
  )
}

// 트리뷰에 폴더 수정
const updateFolderTreeViewList = async (data) => {
  return await http.put(
    '/api/v1/prepare-class/dataroom/tree-view-list/folder',
    data
  )
}

// 트리뷰에 폴더 삭제
const deleteFolderTreeViewList = async (payload) => {
  // console.log('-------- MD/1-2-3 ',payload)
  return await http.delete(
    `/api/v1/prepare-class/dataroom/tree-view-list/folder/${payload}`
  )
}

// 트리뷰에 파일 복사
const copyTreeViewList = async (payload) => {
  console.log('-----copyTreeViewList ', payload)
  return await http.post(
    '/api/v1/prepare-class/dataroom/tree-view-list/copy-folder',
    payload
  )
}

// 트리뷰 검색 목록 조회
const getSearchTreeList = async ({ word, dataroom, subject, type }) => {
  return await http.get(
    `/api/v1/prepare-class/dataroom/search${word}${dataroom}${subject}${type}`
  )
}

const apiData = {
  getYoutubeData,
  getServerUrl,
  getDataroomFile,
  getDataroomQuiz,
  getDataroomNoteExam,
  getTreeViewList,
  getSearchTreeList,

  postDataroomFile,
  postDataroomQuiz,
  postDataroomNoteExam,
  postMoveData,
  poatCopyData,
  copyTreeViewList,

  addFolderTreeViewList,

  updateDataroomFile,
  updateDataroomQuiz,
  updateDataroomNoteExam,
  updateFolderTreeViewList,

  deleteData,
  deleteFolderTreeViewList,
}

export default apiData
