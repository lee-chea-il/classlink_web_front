import http from './http'

// 파일 업로드
const postFile = async (file) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
  return await http.post('/fileupload', file, config)
}

const api = {
  postFile,
}

export default api
