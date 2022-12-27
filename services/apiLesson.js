import http from './http'

const getLesson = async (pl) => {
  return await http.get(
    `/api/v1/prepare-class/lesson/?lesson_idx=${pl.lesson_idx}&datatable_type=${pl.datatable_type}`
  )
}

const updateLesson = async (data) => {
  return await http.put(`/api/v1/prepare-class/lesson`, data)
}

const postLesson = async (data) => {
  return await http.post('/api/v1/prepare-class/lesson', data)
}

const deleteLesson = async (id) => {
  return await http.delete(`/api/v1/prepare-class/lesson/${id}`)
}

const apiLesson = {
  getLesson,
  postLesson,
  updateLesson,
  deleteLesson,
}

export default apiLesson
