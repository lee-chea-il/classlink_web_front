import http from './http'

const getLesson = async (pl) => {
  return await http.get(
    `/api/v1/prepare-class/lesson/?treeinfo_idx=${pl.treeinfo_idx}&datatable_type=${pl.datatable_type}`
  )
}

const updateLesson = async (data) => {
  return await http.put(`/api/v1/prepare-class/lesson`, data)
}

const postLesson = async (data) => {
  return await http.post('/api/v1/prepare-class/lesson', data)
}

const deleteLesson = async (pl) => {
  return await http.delete('/api/v1/prepare-class/lesson', pl)
}

const getLessonTreeViewList = async ({ type }) => {
  return await http.get(
    `/api/v1/prepare-class/lesson/tree-view-list?type=${type}`
  )
}

const apiLesson = {
  getLesson,
  getLessonTreeViewList,
  postLesson,
  updateLesson,
  deleteLesson,
}

export default apiLesson
