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
  return await http.get('/api/v1/management/dataroom/server')
}

// 동영상, PDF, 유튜브, URL 업로드
const postDataroomFile = async (data) => {
  return await http.post('/api/v1/management/dataroom/file', data)
}

const apiData = {
  getYoutubeData,
  getServerUrl,

  postDataroomFile,
}

export default apiData
